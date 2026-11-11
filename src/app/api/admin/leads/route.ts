import { NextRequest, NextResponse } from 'next/server';
import { getAllLeads, updateLead } from '@/lib/leads';

function isAuthorized(req: NextRequest): boolean {
  const adminKey = process.env.ADMIN_SECRET_KEY || 'CambridgeAdmin2026';
  const provided = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key');
  return provided === adminKey;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized access. Provide valid admin key.' }, { status: 401 });
  }

  const leads = await getAllLeads();
  return NextResponse.json({ success: true, count: leads.length, leads });
}

export async function PATCH(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized access.' }, { status: 401 });
  }

  try {
    const { id, status, notes } = await req.json();
    if (!id) {
      return NextResponse.json({ success: false, error: 'Lead ID required.' }, { status: 400 });
    }

    const updated = await updateLead(id, { status, notes });
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Lead not found or update failed.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Lead updated successfully.' });
  } catch (err: unknown) {
    console.error('API /api/admin/leads error:', err);
    return NextResponse.json({ success: false, error: 'Failed to update lead.' }, { status: 500 });
  }
}

