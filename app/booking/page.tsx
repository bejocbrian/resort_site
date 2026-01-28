'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Users, ArrowRight, ArrowLeft, Check, CreditCard, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RoomType {
  id: string;
  name: string;
  price_low: number;
  price_high: number;
  capacity: number;
  description: string;
}

interface BookingData {
  check_in: string;
  check_out: string;
  room_type: string;
  guests_count: number;
  extra_persons: number;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  special_requests?: string;
}

const ROOM_TYPES: Record<string, RoomType> = {
  deluxe: {
    id: 'deluxe',
    name: 'Deluxe Room',
    price_low: 3500,
    price_high: 4500,
    capacity: 2,
    description: 'Perfect blend of comfort and elegance with forest and valley views'
  },
  premium_mountain: {
    id: 'premium_mountain',
    name: 'Premium Mountain View',
    price_low: 5500,
    price_high: 7500,
    capacity: 2,
    description: 'Spacious accommodations with private balconies and Himalayan views'
  },
  executive_cottage: {
    id: 'executive_cottage',
    name: 'Executive Cottage',
    price_low: 5500,
    price_high: 7500,
    capacity: 2,
    description: 'Traditional mountain cottage design with modern comforts'
  },
  family_suite: {
    id: 'family_suite',
    name: 'Family Room/Suite',
    price_low: 8500,
    price_high: 12000,
    capacity: 6,
    description: 'Spacious family accommodation with separate living area'
  },
  luxury_family_cottage: {
    id: 'luxury_family_cottage',
    name: 'Luxury Family Cottage',
    price_low: 8500,
    price_high: 12000,
    capacity: 7,
    description: 'Most spacious accommodation with premium amenities'
  }
};

const EXTRA_PERSON_FEE = 1000;
const TAX_RATE = 0.18;

export default function BookingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    check_in: '',
    check_out: '',
    room_type: '',
    guests_count: 1,
    extra_persons: 0,
    guest_name: '',
    guest_email: '',
    guest_phone: '',
    special_requests: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [availability, setAvailability] = useState<any>(null);
  const [priceBreakdown, setPriceBreakdown] = useState<any>(null);

  const totalSteps = 5;

  const handleInputChange = (field: keyof BookingData, value: any) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculatePrice = () => {
    if (!bookingData.check_in || !bookingData.check_out || !bookingData.room_type) {
      return null;
    }

    const checkInDate = new Date(bookingData.check_in);
    const checkOutDate = new Date(bookingData.check_out);
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));

    if (nights <= 0) return null;

    const room = ROOM_TYPES[bookingData.room_type];
    const basePrice = room.price_low; // Using low price for calculation
    const roomTotal = basePrice * nights;
    const extraGuests = Math.max(0, bookingData.guests_count - room.capacity + bookingData.extra_persons);
    const extraPersonTotal = extraGuests * EXTRA_PERSON_FEE * nights;
    const subtotal = roomTotal + extraPersonTotal;
    const taxAmount = subtotal * TAX_RATE;
    const total = subtotal + taxAmount;

    return {
      nights,
      basePrice,
      roomTotal,
      extraGuests,
      extraPersonTotal,
      subtotal,
      taxAmount,
      total
    };
  };

  const checkAvailability = async () => {
    if (!bookingData.check_in || !bookingData.check_out || !bookingData.room_type) {
      alert('Please select dates and room type');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/availability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          room_type: bookingData.room_type,
          check_in: bookingData.check_in,
          check_out: bookingData.check_out
        })
      });

      const data = await response.json();
      setAvailability(data);

      if (data.available) {
        setCurrentStep(2);
      } else {
        alert('Sorry, the selected room type is not available for the chosen dates.');
      }
    } catch (error) {
      console.error('Availability check failed:', error);
      alert('Unable to check availability. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const createBooking = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...bookingData,
          total_price: priceBreakdown?.total || 0
        })
      });

      const data = await response.json();
      
      if (data.success) {
        // Create Razorpay order
        const paymentResponse = await fetch('/api/payment/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            booking_id: data.booking_id,
            amount: priceBreakdown?.total || 0
          })
        });

        const paymentData = await paymentResponse.json();
        
        if (paymentData.success) {
          // Redirect to payment
          window.location.href = paymentData.payment_url;
        }
      } else {
        alert('Booking creation failed. Please try again.');
      }
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Unable to create booking. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[var(--color-forest-green)] mb-2 font-playfair">
                Select Your Stay
              </h2>
              <p className="text-[var(--color-slate-grey)]">Choose your dates, room type, and guest count</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                  Check-in Date *
                </label>
                <input
                  type="date"
                  value={bookingData.check_in}
                  onChange={(e) => handleInputChange('check_in', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                  Check-out Date *
                </label>
                <input
                  type="date"
                  value={bookingData.check_out}
                  onChange={(e) => handleInputChange('check_out', e.target.value)}
                  min={bookingData.check_in || new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                Room Type *
              </label>
              <select
                value={bookingData.room_type}
                onChange={(e) => handleInputChange('room_type', e.target.value)}
                className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
              >
                <option value="">Select Room Type</option>
                {Object.values(ROOM_TYPES).map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} (₹{room.price_low.toLocaleString()} - ₹{room.price_high.toLocaleString()}/night)
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                  Number of Guests *
                </label>
                <select
                  value={bookingData.guests_count}
                  onChange={(e) => handleInputChange('guests_count', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <option key={num} value={num}>
                      {num} Guest{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                  Extra Persons
                </label>
                <select
                  value={bookingData.extra_persons}
                  onChange={(e) => handleInputChange('extra_persons', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                >
                  {[0, 1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} Extra Person{num !== 1 ? 's' : ''} (+₹{EXTRA_PERSON_FEE}/night each)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {bookingData.room_type && (
              <div className="bg-[var(--color-warm-beige)]/20 p-4 rounded-lg">
                <h3 className="font-semibold text-[var(--color-forest-green)] mb-2">
                  {ROOM_TYPES[bookingData.room_type].name}
                </h3>
                <p className="text-sm text-[var(--color-slate-grey)] mb-2">
                  {ROOM_TYPES[bookingData.room_type].description}
                </p>
                <p className="text-sm text-[var(--color-golden-amber)] font-semibold">
                  Capacity: {ROOM_TYPES[bookingData.room_type].capacity} guests
                </p>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[var(--color-forest-green)] mb-2 font-playfair">
                Price Breakdown
              </h2>
              <p className="text-[var(--color-slate-grey)]">Review your booking details and total cost</p>
            </div>

            {priceBreakdown && (
              <div className="bg-white border border-[var(--color-warm-beige)] rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Room ({ROOM_TYPES[bookingData.room_type].name})</span>
                    <span>₹{priceBreakdown.basePrice.toLocaleString()} x {priceBreakdown.nights} night{priceBreakdown.nights > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Room Total</span>
                    <span>₹{priceBreakdown.roomTotal.toLocaleString()}</span>
                  </div>
                  {priceBreakdown.extraGuests > 0 && (
                    <div className="flex justify-between">
                      <span>Extra Person{priceBreakdown.extraGuests > 1 ? 's' : ''} (₹{EXTRA_PERSON_FEE} x {priceBreakdown.extraGuests} x {priceBreakdown.nights})</span>
                      <span>₹{priceBreakdown.extraPersonTotal.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="border-t border-[var(--color-warm-beige)] pt-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{priceBreakdown.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (GST 18%)</span>
                      <span>₹{priceBreakdown.taxAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-[var(--color-golden-amber)]">
                      <span>Total</span>
                      <span>₹{priceBreakdown.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-[var(--color-warm-beige)]/20 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="w-4 h-4 text-[var(--color-golden-amber)]" />
                <span className="font-semibold text-[var(--color-forest-green)]">Check-in: 2:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[var(--color-golden-amber)]" />
                <span className="font-semibold text-[var(--color-forest-green)]">Check-out: 11:00 AM</span>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[var(--color-forest-green)] mb-2 font-playfair">
                Guest Information
              </h2>
              <p className="text-[var(--color-slate-grey)]">Please provide your contact details</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={bookingData.guest_name}
                  onChange={(e) => handleInputChange('guest_name', e.target.value)}
                  className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={bookingData.guest_email}
                  onChange={(e) => handleInputChange('guest_email', e.target.value)}
                  className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={bookingData.guest_phone}
                onChange={(e) => handleInputChange('guest_phone', e.target.value)}
                className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                value={bookingData.special_requests}
                onChange={(e) => handleInputChange('special_requests', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                placeholder="Any special requests or requirements..."
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[var(--color-forest-green)] mb-2 font-playfair">
                Payment
              </h2>
              <p className="text-[var(--color-slate-grey)]">Complete your booking with secure payment</p>
            </div>

            <div className="bg-white border border-[var(--color-warm-beige)] rounded-lg p-6">
              <div className="text-center mb-6">
                <CreditCard className="w-12 h-12 text-[var(--color-golden-amber)] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[var(--color-forest-green)] mb-2">
                  Secure Payment with Razorpay
                </h3>
                <p className="text-[var(--color-slate-grey)] text-sm">
                  Your payment information is secure and encrypted
                </p>
              </div>

              {priceBreakdown && (
                <div className="border-t border-[var(--color-warm-beige)] pt-6">
                  <div className="text-center">
                    <p className="text-sm text-[var(--color-slate-grey)] mb-2">Total Amount to Pay</p>
                    <p className="text-3xl font-bold text-[var(--color-golden-amber)]">
                      ₹{priceBreakdown.total.toLocaleString()}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 text-center">
                <p className="text-xs text-[var(--color-slate-grey)]">
                  By proceeding, you agree to our terms and conditions and privacy policy.
                </p>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 text-center">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-forest-green)] mb-2 font-playfair">
                Booking Confirmed!
              </h2>
              <p className="text-[var(--color-slate-grey)]">
                Thank you for choosing Sol Glow Resort. Your booking has been confirmed.
              </p>
            </div>

            <div className="bg-white border border-[var(--color-warm-beige)] rounded-lg p-6">
              <h3 className="font-semibold text-[var(--color-forest-green)] mb-4">Booking Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Booking ID:</span>
                  <span className="font-mono">SG{Date.now().toString().slice(-8)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guest Name:</span>
                  <span>{bookingData.guest_name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Room Type:</span>
                  <span>{ROOM_TYPES[bookingData.room_type]?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span>{new Date(bookingData.check_in).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-out:</span>
                  <span>{new Date(bookingData.check_out).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="font-semibold">₹{priceBreakdown?.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-warm-beige)]/20 p-4 rounded-lg">
              <p className="text-sm text-[var(--color-slate-grey)] mb-2">
                A confirmation email has been sent to {bookingData.guest_email}
              </p>
              <p className="text-xs text-[var(--color-slate-grey)]">
                Please bring a valid ID during check-in.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const nextStep = () => {
    if (currentStep === 1) {
      checkAvailability();
    } else if (currentStep === 3) {
      setCurrentStep(4);
    } else if (currentStep === 4) {
      createBooking();
    } else {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bookingData.check_in && bookingData.check_out && bookingData.room_type;
      case 2:
        return true;
      case 3:
        return bookingData.guest_name && bookingData.guest_email && bookingData.guest_phone;
      case 4:
        return true;
      default:
        return false;
    }
  };

  useEffect(() => {
    const price = calculatePrice();
    setPriceBreakdown(price);
  }, [bookingData]);

  return (
    <div className="min-h-screen pt-16 bg-[var(--color-off-white)]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-[var(--color-warm-beige)]">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-[var(--color-forest-green)] font-playfair text-center">
            Book Your Stay
          </h1>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                    step <= currentStep
                      ? 'bg-[var(--color-golden-amber)] text-white'
                      : 'bg-[var(--color-warm-beige)] text-[var(--color-slate-grey)]'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-[var(--color-warm-beige)] rounded-full h-2">
              <div
                className="bg-[var(--color-golden-amber)] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="mb-8">
          <CardContent className="p-8">
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        {currentStep < 5 && (
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>
            
            <Button
              onClick={nextStep}
              disabled={!canProceed() || isLoading}
              className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white flex items-center space-x-2"
            >
              <span>
                {currentStep === 1 ? 'Check Availability' :
                 currentStep === 2 ? 'Continue' :
                 currentStep === 3 ? 'Continue' :
                 currentStep === 4 ? 'Pay Now' : 'Continue'}
              </span>
              {currentStep < 4 && <ArrowRight className="w-4 h-4" />}
            </Button>
          </div>
        )}

        {currentStep === 5 && (
          <div className="text-center">
            <Button
              onClick={() => router.push('/')}
              className="bg-[var(--color-forest-green)] hover:bg-[var(--color-forest-green)]/90 text-white"
            >
              Return to Homepage
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}