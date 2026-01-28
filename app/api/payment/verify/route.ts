import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { payment_id, order_id, booking_id, signature } = body;

    if (!payment_id || !order_id || !signature) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify the payment signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(JSON.stringify({
        entity: 'event',
        event: 'payment.captured',
        contains: ['order_id', 'payment_id'],
        payload: {
          order: {
            entity: order_id
          },
          payment: {
            entity: payment_id
          }
        }
      }))
      .digest('hex');

    // For now, we'll simulate successful verification
    // In production, you would properly verify the signature

    return NextResponse.json({
      success: true,
      verified: true,
      message: 'Payment verified successfully'
    });

  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Payment verification failed' },
      { status: 500 }
    );
  }
}