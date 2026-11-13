export const dynamic = 'force-dynamic';

import { NextRequest } from 'next/server';
import {
  verifyAdminPassword,
  createSessionToken,
  ADMIN_COOKIE_NAME,
  SESSION_DURATION_SECONDS,
  verifyCsrfOrigin,
  getTrustedClientIp,
  jsonAdminResponse,
} from '@/lib/adminSession';

// In-memory sliding window rate limiter for brute-force protection
const failedAttempts = new Map<string, { count: number; lockedUntil: number }>();

function isIpThrottled(ip: string): boolean {
  const record = failedAttempts.get(ip);
  if (!record) return false;
  if (Date.now() < record.lockedUntil) return true;
  if (Date.now() > record.lockedUntil) {
    failedAttempts.delete(ip);
  }
  return false;
}

function registerFailedAttempt(ip: string) {
  const record = failedAttempts.get(ip) || { count: 0, lockedUntil: 0 };
  record.count += 1;
  if (record.count >= 5) {
    // Lock for 15 minutes after 5 consecutive failed attempts
    record.lockedUntil = Date.now() + 15 * 60 * 1000;
  }
  failedAttempts.set(ip, record);
}

function clearFailedAttempts(ip: string) {
  failedAttempts.delete(ip);
}

export async function POST(req: NextRequest) {
  // Reject query-string parameters
  if (req.nextUrl.searchParams.has('key') || req.nextUrl.searchParams.has('password')) {
    return jsonAdminResponse(
      { success: false, error: 'Query-string authentication is disabled.' },
      { status: 400 }
    );
  }

  // Strict CSRF validation (rejects if Origin and Referer are both missing, or if host mismatches)
  if (!verifyCsrfOrigin(req)) {
    return jsonAdminResponse(
      { success: false, error: 'Cross-origin login request rejected.' },
      { status: 403 }
    );
  }

  // Get trusted edge client IP (resistant to client-spoofed X-Forwarded-For headers)
  const clientIp = getTrustedClientIp(req);

  if (isIpThrottled(clientIp)) {
    return jsonAdminResponse(
      {
        success: false,
        error: 'Too many failed login attempts. Please wait 15 minutes before trying again.',
      },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { password } = body;

    if (!password || typeof password !== 'string') {
      return jsonAdminResponse(
        { success: false, error: 'Administrator password is required.' },
        { status: 400 }
      );
    }

    const isValid = verifyAdminPassword(password);
    if (!isValid) {
      registerFailedAttempt(clientIp);
      return jsonAdminResponse(
        { success: false, error: 'Invalid administrator password.' },
        { status: 401 }
      );
    }

    // Password valid -> clear throttle
    clearFailedAttempts(clientIp);

    const token = await createSessionToken();
    if (!token) {
      return jsonAdminResponse(
        { success: false, error: 'Server authentication configuration error.' },
        { status: 500 }
      );
    }

    const response = jsonAdminResponse({
      success: true,
      message: 'Authenticated successfully.',
      storageMode: process.env.DATABASE_URL ? 'mysql' : 'json_fallback',
    });

    // Set HttpOnly, Secure, SameSite=Strict cookie
    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: SESSION_DURATION_SECONDS,
    });

    return response;
  } catch (err) {
    console.error('[Admin Login] Unexpected error:', err);
    return jsonAdminResponse(
      { success: false, error: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}
