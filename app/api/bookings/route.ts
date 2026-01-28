import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      check_in,
      check_out,
      room_type,
      guests_count,
      extra_persons,
      guest_name,
      guest_email,
      guest_phone,
      special_requests,
      total_price
    } = body;

    // Validate required fields
    if (!check_in || !check_out || !room_type || !guest_name || !guest_email || !guest_phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For development/testing, return mock booking response
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json({
        success: true,
        booking_id: `mock_booking_${Date.now()}`,
        message: 'Booking created successfully (mock data)',
        mock_data: true
      });
    }

    // In production, this would use real Supabase
    // For now, we'll simulate a successful booking creation
    const mockBookingId = `booking_${Date.now()}`;

    // Send confirmation email (placeholder - would integrate with Resend)
    console.log(`Booking confirmation email would be sent to ${guest_email}`);

    return NextResponse.json({
      success: true,
      booking_id: mockBookingId,
      message: 'Booking created successfully'
    });

  } catch (error) {
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const bookingId = searchParams.get('id');

    if (!bookingId) {
      return NextResponse.json(
        { success: false, error: 'Booking ID required' },
        { status: 400 }
      );
    }

    // For development/testing, return mock booking data
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json({
        success: true,
        booking: {
          id: bookingId,
          guest_name: 'Mock Guest',
          guest_email: 'mock@example.com',
          room_type: 'deluxe',
          check_in: '2024-12-01',
          check_out: '2024-12-03',
          total_price: 8000,
          status: 'confirmed',
          mock_data: true
        }
      });
    }

    // In production, this would query real Supabase
    return NextResponse.json({
      success: true,
      booking: null // Would return actual booking data
    });

  } catch (error) {
    console.error('Get booking error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}