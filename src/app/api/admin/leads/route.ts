import { NextRequest } from 'next/server';
import { getAllLeads, updateLead } from '@/lib/leads';
import { isAuthorizedAdminSession, jsonAdminResponse } from '@/lib/adminSession';

export async function GET(req: NextRequest) {
  const auth = await isAuthorizedAdminSession(req);
  if (!auth.authorized) {
    return jsonAdminResponse(
      { success: false, error: auth.error || 'Unauthorized access. Valid administrator session required.' },
      { status: 401 }
    );
  }

  const leads = await getAllLeads();
  return jsonAdminResponse({
    success: true,
    count: leads.length,
    storageMode: process.env.DATABASE_URL ? 'mysql' : 'unconfigured',
    leads,
  });
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
    const { id, status, notes } = await req.json();
    if (!id) {
      return jsonAdminResponse({ success: false, error: 'Lead ID required.' }, { status: 400 });
    }

    const updated = await updateLead(id, { status, notes });
    if (!updated) {
      return jsonAdminResponse({ success: false, error: 'Lead not found or update failed.' }, { status: 404 });
    }

    return jsonAdminResponse({ success: true, message: 'Lead updated successfully.' });
  } catch (err: unknown) {
    console.error('API /api/admin/leads error:', err);
    return jsonAdminResponse({ success: false, error: 'Failed to update lead.' }, { status: 500 });
  }
}
