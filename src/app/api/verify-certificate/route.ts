import { NextRequest, NextResponse } from 'next/server';
import { verifyCertificate } from '@/lib/certificates';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const certNumber = body.certificateNumber || body.number || '';
    
    if (!certNumber || typeof certNumber !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Certificate number is required.' },
        { status: 400 }
      );
    }

    const result = await verifyCertificate(certNumber);
    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error('API /api/verify-certificate error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to verify certificate. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const number = req.nextUrl.searchParams.get('number') || '';
  if (!number) {
    return NextResponse.json(
      { success: false, error: 'Certificate number is required.' },
      { status: 400 }
    );
  }

  const result = await verifyCertificate(number);
  return NextResponse.json({ success: true, result });
}

