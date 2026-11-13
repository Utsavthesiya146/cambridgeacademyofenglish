import { NextRequest } from 'next/server';
import {
  ADMIN_COOKIE_NAME,
  verifyCsrfOrigin,
  revokeAdminSession,
  jsonAdminResponse,
} from '@/lib/adminSession';

export async function POST(req: NextRequest) {
  // Strict CSRF validation
  if (!verifyCsrfOrigin(req)) {
    return jsonAdminResponse(
      { success: false, error: 'Cross-origin logout request rejected.' },
      { status: 403 }
    );
  }

  // Revoke session server-side in MySQL if database connection exists
  const sessionCookie = req.cookies.get(ADMIN_COOKIE_NAME);
  if (sessionCookie && sessionCookie.value) {
    await revokeAdminSession(sessionCookie.value);
  }

  const response = jsonAdminResponse({
    success: true,
    message: 'Logged out successfully.',
  });

  // Clear the HttpOnly session cookie
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0,
    expires: new Date(0),
  });

  return response;
}
