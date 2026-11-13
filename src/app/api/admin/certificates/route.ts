import { NextRequest } from 'next/server';
import { getAllCertificates, createCertificate, updateCertificate } from '@/lib/certificates';
import { isAuthorizedAdminSession, jsonAdminResponse } from '@/lib/adminSession';

export async function GET(req: NextRequest) {
  const auth = await isAuthorizedAdminSession(req);
  if (!auth.authorized) {
    return jsonAdminResponse(
      { success: false, error: auth.error || 'Unauthorized access. Valid administrator session required.' },
      { status: 401 }
    );
  }

  const query = req.nextUrl.searchParams.get('q') || '';
  const certificates = await getAllCertificates(query);
  return jsonAdminResponse({
    success: true,
    count: certificates.length,
    storageMode: process.env.DATABASE_URL ? 'mysql' : 'json_fallback',
    certificates,
  });
}

export async function POST(req: NextRequest) {
  const auth = await isAuthorizedAdminSession(req);
  if (!auth.authorized) {
    return jsonAdminResponse(
      { success: false, error: auth.error || 'Unauthorized access. Valid administrator session required.' },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const result = await createCertificate(body);
    if (!result.success) {
      return jsonAdminResponse({ success: false, error: result.error }, { status: 400 });
    }
    return jsonAdminResponse({ success: true, certificate: result.certificate });
  } catch (err) {
    console.error('API /api/admin/certificates POST error:', err);
    return jsonAdminResponse({ success: false, error: 'Server error creating certificate.' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const auth = await isAuthorizedAdminSession(req);
  if (!auth.authorized) {
    return jsonAdminResponse(
      { success: false, error: auth.error || 'Unauthorized access. Valid administrator session required.' },
      { status: 401 }
    );
  }

  try {
    const { id, status, studentName, courseName, issueDate, notes } = await req.json();
    if (!id) {
      return jsonAdminResponse({ success: false, error: 'Certificate ID is required.' }, { status: 400 });
    }

    const updated = await updateCertificate(id, { status, studentName, courseName, issueDate, notes });
    if (!updated) {
      return jsonAdminResponse({ success: false, error: 'Certificate not found or update failed.' }, { status: 404 });
    }
    return jsonAdminResponse({ success: true, message: 'Certificate updated successfully.' });
  } catch (err) {
    console.error('API /api/admin/certificates PATCH error:', err);
    return jsonAdminResponse({ success: false, error: 'Server error updating certificate.' }, { status: 500 });
  }
}
