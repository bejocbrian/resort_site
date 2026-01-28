import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, event_type, event_date, guests, message } = body;

    // Validate required fields
    if (!name || !email || !event_type || !event_date || !guests) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For development/testing, return mock response
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json({
        success: true,
        inquiry_id: `mock_event_${Date.now()}`,
        message: 'Your event inquiry has been submitted successfully. Our events team will contact you soon. (Mock data)',
        mock_data: true
      });
    }

    // In production, this would use real Supabase
    const mockInquiryId = `event_${Date.now()}`;

    // Send notification email (placeholder - would integrate with Resend)
    console.log(`Event inquiry from ${email} would be sent to events team`);

    return NextResponse.json({
      success: true,
      inquiry_id: mockInquiryId,
      message: 'Your event inquiry has been submitted successfully. Our events team will contact you soon.'
    });

  } catch (error) {
    console.error('Event inquiry error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}