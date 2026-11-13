import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from './prisma';

export const ADMIN_COOKIE_NAME = 'cae_admin_session';
export const SESSION_DURATION_SECONDS = 8 * 60 * 60; // 8 hours

export interface SessionPayload {
  sub: 'admin';
  iat: number;
  exp: number;
  jti: string;
}

/**
 * Standard security response headers for all admin API endpoints.
 * Completely disables intermediate and browser caching for authenticated data.
 */
export const ADMIN_SECURITY_HEADERS: Record<string, string> = {
  'Cache-Control': 'private, no-store, no-cache, must-revalidate',
  'Pragma': 'no-cache',
  'Expires': '0',
};

/**
 * Helper to generate JSON responses for admin endpoints with strict no-store headers.
 */
export function jsonAdminResponse(data: unknown, init?: ResponseInit): NextResponse {
  const headers = new Headers(init?.headers);
  for (const [key, val] of Object.entries(ADMIN_SECURITY_HEADERS)) {
    headers.set(key, val);
  }
  return NextResponse.json(data, { ...init, headers });
}

/**
 * Derives a dedicated 256-bit HMAC signing key from ADMIN_SECRET_KEY.
 * Returns null if ADMIN_SECRET_KEY is not configured or is too short.
 */
function getDerivedSigningKey(): Buffer | null {
  const secret = process.env.ADMIN_SECRET_KEY;
  if (!secret || secret.trim().length < 8) {
    return null;
  }
  return crypto.createHmac('sha256', secret.trim()).update('cae-session-signing-v1').digest();
}

/**
 * Extracts trusted client IP without trusting client-spoofed forwarding headers.
 * 1. Checks trusted hosting platform headers (Vercel, Cloudflare, standard x-real-ip)
 * 2. If parsing x-forwarded-for, selects the rightmost proxy hop rather than client-controlled leftmost
 */
export function getTrustedClientIp(req: NextRequest): string {
  // 1. Vercel edge IP header (set by Vercel edge infrastructure, immune to incoming client spoofing)
  const vercelIp = req.headers.get('x-vercel-ip');
  if (vercelIp && vercelIp.trim()) return vercelIp.trim();

  // 2. Cloudflare connecting IP
  const cfIp = req.headers.get('cf-connecting-ip');
  if (cfIp && cfIp.trim()) return cfIp.trim();

  // 3. Direct hosting proxy real IP
  const realIp = req.headers.get('x-real-ip');
  if (realIp && realIp.trim()) return realIp.trim();

  // 4. Fallback to rightmost proxy hop in X-Forwarded-For
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    const hops = forwarded.split(',').map((h) => h.trim()).filter(Boolean);
    if (hops.length > 0) {
      return hops[hops.length - 1]; // Rightmost proxy hop
    }
  }

  return '127.0.0.1';
}

/**
 * Timing-safe comparison of provided password against ADMIN_SECRET_KEY.
 * Hashes both with SHA-256 first so both buffers are strictly 32 bytes,
 * preventing any timing or length leakage side-channel attacks.
 */
export function verifyAdminPassword(providedPassword: string): boolean {
  const secret = process.env.ADMIN_SECRET_KEY;
  if (!secret || secret.trim().length < 8 || !providedPassword) {
    return false;
  }

  const hProvided = crypto.createHash('sha256').update(providedPassword.trim()).digest();
  const hSecret = crypto.createHash('sha256').update(secret.trim()).digest();

  return crypto.timingSafeEqual(hProvided, hSecret);
}

/**
 * Creates a cryptographically signed session token.
 * Token structure: <base64url(payload)>.<base64url(hmacSignature)>
 * If MySQL database is available, persists the session record with its unique jti.
 */
export async function createSessionToken(): Promise<string | null> {
  const signingKey = getDerivedSigningKey();
  if (!signingKey) {
    console.error('[Session] Cannot create session: ADMIN_SECRET_KEY is not configured.');
    return null;
  }

  const now = Math.floor(Date.now() / 1000);
  const jti = crypto.randomBytes(16).toString('hex');
  const exp = now + SESSION_DURATION_SECONDS;

  const payload: SessionPayload = {
    sub: 'admin',
    iat: now,
    exp,
    jti,
  };

  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto.createHmac('sha256', signingKey).update(encodedPayload).digest();
  const encodedSignature = signature.toString('base64url');
  const token = `${encodedPayload}.${encodedSignature}`;

  // If MySQL is configured, persist the active session record for server-side revocation tracking
  if (process.env.DATABASE_URL) {
    try {
      await prisma.adminSession.create({
        data: {
          jti,
          expiresAt: new Date(exp * 1000),
        },
      });
    } catch (err) {
      console.error('[Session] Failed to persist session to MySQL database:', err);
    }
  }

  return token;
}

/**
 * Revokes a session server-side in MySQL by marking revokedAt timestamp.
 */
export async function revokeAdminSession(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;

  try {
    const jsonStr = Buffer.from(parts[0], 'base64url').toString('utf8');
    const payload: SessionPayload = JSON.parse(jsonStr);
    const jti = payload.jti;

    if (process.env.DATABASE_URL && jti) {
      await prisma.adminSession.updateMany({
        where: { jti },
        data: { revokedAt: new Date() },
      });
      return true;
    }
  } catch (err) {
    console.error('[Session] Failed to revoke session in MySQL database:', err);
  }

  return false;
}

/**
 * Validates a session token:
 * 1. Checks structure (payload.signature)
 * 2. Verifies HMAC-SHA256 signature using timing-safe comparison
 * 3. Verifies payload claims (sub === 'admin')
 * 4. Verifies expiration (exp > current time)
 */
export function verifySessionToken(token: string | undefined | null): {
  valid: boolean;
  payload?: SessionPayload;
  error?: string;
} {
  if (!token || typeof token !== 'string') {
    return { valid: false, error: 'No session token provided.' };
  }

  const signingKey = getDerivedSigningKey();
  if (!signingKey) {
    return { valid: false, error: 'Server authentication unconfigured.' };
  }

  const parts = token.split('.');
  if (parts.length !== 2) {
    return { valid: false, error: 'Malformed session token.' };
  }

  const [encodedPayload, encodedSignature] = parts;

  // 1. Verify Signature
  let receivedSigBuffer: Buffer;
  try {
    receivedSigBuffer = Buffer.from(encodedSignature, 'base64url');
  } catch {
    return { valid: false, error: 'Invalid signature encoding.' };
  }

  const expectedSigBuffer = crypto.createHmac('sha256', signingKey).update(encodedPayload).digest();

  if (
    receivedSigBuffer.length !== expectedSigBuffer.length ||
    !crypto.timingSafeEqual(receivedSigBuffer, expectedSigBuffer)
  ) {
    return { valid: false, error: 'Session token signature verification failed (tampered or invalid).' };
  }

  // 2. Parse & Verify Payload
  let payload: SessionPayload;
  try {
    const jsonStr = Buffer.from(encodedPayload, 'base64url').toString('utf8');
    payload = JSON.parse(jsonStr);
  } catch {
    return { valid: false, error: 'Invalid payload encoding.' };
  }

  if (payload.sub !== 'admin') {
    return { valid: false, error: 'Invalid token subject.' };
  }

  const now = Math.floor(Date.now() / 1000);

  // Clock skew tolerance: allow 30 seconds into the future for iat
  if (payload.iat > now + 30) {
    return { valid: false, error: 'Token issued in the future.' };
  }

  if (typeof payload.exp !== 'number' || now >= payload.exp) {
    return { valid: false, error: 'Session expired. Please log in again.' };
  }

  return { valid: true, payload };
}

/**
 * Validates Origin/Referer header for state-changing HTTP methods (CSRF defense).
 * Strictly requires either Origin or Referer to be present on POST, PUT, PATCH, DELETE.
 */
export function verifyCsrfOrigin(req: NextRequest): boolean {
  const method = req.method.toUpperCase();
  // Safe read methods do not change state
  if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
    return true;
  }

  const origin = req.headers.get('origin');
  const referer = req.headers.get('referer');
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host');

  // Strict enforcement: For mutations, reject if BOTH Origin and Referer are missing
  if (!origin && !referer) {
    console.warn(`[Security] CSRF rejected: Missing Origin and Referer headers on ${method} request.`);
    return false;
  }

  if (!host) {
    console.warn(`[Security] CSRF rejected: Missing Host header on ${method} request.`);
    return false;
  }

  if (origin) {
    try {
      const originUrl = new URL(origin);
      if (originUrl.host !== host) {
        console.warn(`[Security] CSRF origin mismatch: Origin ${originUrl.host} vs Host ${host}`);
        return false;
      }
    } catch {
      return false;
    }
  } else if (referer) {
    try {
      const refererUrl = new URL(referer);
      if (refererUrl.host !== host) {
        console.warn(`[Security] CSRF referer mismatch: Referer ${refererUrl.host} vs Host ${host}`);
        return false;
      }
    } catch {
      return false;
    }
  }

  return true;
}

/**
 * Full request authorization check:
 * 1. Rejects query string authentication attempts
 * 2. Verifies CSRF on mutation methods (POST, PUT, PATCH, DELETE)
 * 3. Reads HttpOnly session cookie
 * 4. Cryptographically verifies session token
 * 5. If MySQL is configured, checks whether session is active or revoked in database
 */
export async function isAuthorizedAdminSession(
  req: NextRequest
): Promise<{ authorized: boolean; error?: string; jti?: string }> {
  // 1. Reject query string attempts
  if (
    req.nextUrl.searchParams.has('key') ||
    req.nextUrl.searchParams.has('token') ||
    req.nextUrl.searchParams.has('password')
  ) {
    return { authorized: false, error: 'Query-string authentication is permanently disabled.' };
  }

  // 2. CSRF verification for mutation methods
  if (!verifyCsrfOrigin(req)) {
    return { authorized: false, error: 'Cross-origin request rejected (CSRF protection).' };
  }

  // 3. Read HttpOnly Cookie
  const sessionCookie = req.cookies.get(ADMIN_COOKIE_NAME);
  if (!sessionCookie || !sessionCookie.value) {
    return { authorized: false, error: 'Authentication required. No active session cookie found.' };
  }

  // 4. Verify cryptographic signature & expiration
  const verification = verifySessionToken(sessionCookie.value);
  if (!verification.valid || !verification.payload) {
    return { authorized: false, error: verification.error || 'Invalid session.' };
  }

  const jti = verification.payload.jti;

  // 5. If MySQL is connected, verify session is active in database and not revoked
  if (process.env.DATABASE_URL) {
    try {
      const record = await prisma.adminSession.findUnique({
        where: { jti },
      });
      if (!record) {
        return { authorized: false, error: 'Session record not found in database. Please log in again.' };
      }
      if (record.revokedAt !== null) {
        return { authorized: false, error: 'Session has been revoked. Please log in again.' };
      }
      if (new Date() >= record.expiresAt) {
        return { authorized: false, error: 'Session has expired.' };
      }
    } catch (dbErr) {
      console.warn('[Session] MySQL session check failed:', dbErr);
    }
  }

  return { authorized: true, jti };
}
