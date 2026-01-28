import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { booking_id, amount } = body;

    if (!booking_id || !amount) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For development/testing, return mock payment response
    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_SECRET_KEY) {
      const mockOrderId = `order_mock_${Date.now()}`;
      const paymentUrl = `https://checkout.razorpay.com/v1/checkout?order_id=${mockOrderId}`;
      
      return NextResponse.json({
        success: true,
        order_id: mockOrderId,
        amount: Math.round(amount * 100),
        currency: 'INR',
        payment_url: paymentUrl,
        message: 'Payment order created successfully (mock data)',
        mock_data: true
      });
    }

    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_SECRET_KEY!,
    });

    // Convert amount to paise (Razorpay expects amount in paise)
    const amountInPaise = Math.round(amount * 100);

    const options = {
      amount: amountInPaise,
      currency: 'INR',
      receipt: `booking_${booking_id}`,
      notes: {
        booking_id,
        type: 'resort_booking'
      }
    };

    const order = await razorpay.orders.create(options);

    // For test mode, we'll simulate a payment URL
    const paymentUrl = `https://checkout.razorpay.com/v1/checkout?order_id=${order.id}`;

    return NextResponse.json({
      success: true,
      order_id: order.id,
      amount: amountInPaise,
      currency: 'INR',
      payment_url: paymentUrl,
      message: 'Payment order created successfully'
    });

  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create payment order' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('order_id');

    if (!orderId) {
      return NextResponse.json(
        { success: false, error: 'Order ID required' },
        { status: 400 }
      );
    }

    // For development/testing, return mock order data
    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_SECRET_KEY) {
      return NextResponse.json({
        success: true,
        order: {
          id: orderId,
          amount: 500000,
          currency: 'INR',
          status: 'created',
          mock_data: true
        }
      });
    }

    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_SECRET_KEY!,
    });

    const order = await razorpay.orders.fetch(orderId);

    return NextResponse.json({
      success: true,
      order
    });

  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to verify payment' },
      { status: 500 }
    );
  }
}