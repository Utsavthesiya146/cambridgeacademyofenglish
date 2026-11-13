import { NextRequest } from 'next/server';
import { isAuthorizedAdminSession, jsonAdminResponse } from '@/lib/adminSession';

export async function GET(req: NextRequest) {
  const auth = await isAuthorizedAdminSession(req);
  if (!auth.authorized) {
    return jsonAdminResponse({ authenticated: false });
  }

  return jsonAdminResponse({
    authenticated: true,
    storageMode: process.env.DATABASE_URL ? 'mysql' : 'json_fallback',
  });
}
