import { NextRequest, NextResponse } from 'next/server';
import { saveLead } from '@/lib/leads';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, course, learningMode, preferredTime, message, type, pageUrl, leadSource, honeypot } = body;

    const result = await saveLead({
      name,
      phone,
      email,
      course,
      learningMode,
      preferredTime,
      message,
      type: type || 'enquiry',
      pageUrl,
      leadSource,
      honeypot,
    });

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      leadId: result.leadId,
      message: 'Thank you! Your enquiry has been received. Our senior academic counselor will contact you shortly.',
    });
  } catch (err: unknown) {
    console.error('API /api/enquiry error:', err);
    return NextResponse.json(
      { success: false, error: 'Server error processing enquiry. Please contact us on WhatsApp directly.' },
      { status: 500 }
    );
  }
}

