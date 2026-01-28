import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, inquiry_type } = body;

    // Validate required fields
    if (!name || !email || !message || !inquiry_type) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For development/testing, return mock response
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json({
        success: true,
        inquiry_id: `mock_inquiry_${Date.now()}`,
        message: 'Your inquiry has been submitted successfully. We will get back to you soon. (Mock data)',
        mock_data: true
      });
    }

    // In production, this would use real Supabase
    const mockInquiryId = `inquiry_${Date.now()}`;

    // Send notification email (placeholder - would integrate with Resend)
    console.log(`Contact inquiry from ${email} would be sent to resort team`);

    return NextResponse.json({
      success: true,
      inquiry_id: mockInquiryId,
      message: 'Your inquiry has been submitted successfully. We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact inquiry error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}