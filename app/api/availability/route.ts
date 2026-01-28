import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { room_type, check_in, check_out } = body;

    // Validate required fields
    if (!room_type || !check_in || !check_out) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For development/testing, return mock availability data
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json({
        success: true,
        available: true,
        room_type,
        check_in,
        check_out,
        nights: 2,
        details: [
          { date: check_in, available: true, available_count: 5 },
          { date: check_out, available: true, available_count: 5 }
        ],
        total_available_nights: 2,
        mock_data: true
      });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Find room by type
    const { data: room, error: roomError } = await supabase
      .from('rooms')
      .select('*')
      .eq('type', room_type)
      .single();

    if (roomError || !room) {
      return NextResponse.json(
        { success: false, error: 'Room type not found' },
        { status: 404 }
      );
    }

    // Check availability for each date in the range
    const checkInDate = new Date(check_in);
    const checkOutDate = new Date(check_out);
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));

    if (nights <= 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid date range' },
        { status: 400 }
      );
    }

    const availabilityResults = [];
    let totalAvailable = true;

    for (let i = 0; i < nights; i++) {
      const date = new Date(checkInDate);
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];

      const { data: availability, error: availabilityError } = await supabase
        .from('room_availability')
        .select('*')
        .eq('room_id', room.id)
        .eq('date', dateStr)
        .single();

      if (availabilityError || !availability) {
        // No availability record means room is not available or doesn't exist
        availabilityResults.push({
          date: dateStr,
          available: false,
          available_count: 0
        });
        totalAvailable = false;
      } else {
        availabilityResults.push({
          date: dateStr,
          available: availability.available_count > 0,
          available_count: availability.available_count,
          booked_count: availability.booked_count
        });
        
        if (availability.available_count <= 0) {
          totalAvailable = false;
        }
      }
    }

    return NextResponse.json({
      success: true,
      available: totalAvailable,
      room_type,
      check_in,
      check_out,
      nights,
      details: availabilityResults,
      total_available_nights: availabilityResults.filter(day => day.available).length
    });

  } catch (error) {
    console.error('Availability check error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}