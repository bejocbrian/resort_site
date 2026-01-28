// Database types for Sol Glow Resort

export interface Room {
  id: string;
  name: string;
  type: string;
  price_low: number;
  price_high: number;
  capacity: number;
  size: number;
  amenities: string[];
  images: string[];
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  room_id: string;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  check_in: string;
  check_out: string;
  guests_count: number;
  extra_persons: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  payment_id?: string;
  special_requests?: string;
  created_at: string;
  updated_at: string;
}

export interface RoomAvailability {
  room_id: string;
  date: string;
  available_count: number;
  booked_count: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  password_hash: string;
  created_at: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  inquiry_type: string;
  created_at: string;
}

export interface EventInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string;
  guests: number;
  message: string;
  created_at: string;
}

// Frontend form types
export interface BookingFormData {
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

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  inquiry_type: string;
}

export interface EventFormData {
  name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string;
  guests: number;
  message: string;
}

// Room categories
export const ROOM_TYPES = {
  DELUXE: 'deluxe',
  PREMIUM_MOUNTAIN: 'premium_mountain',
  EXECUTIVE_COTTAGE: 'executive_cottage',
  FAMILY_SUITE: 'family_suite',
  LUXURY_FAMILY_COTTAGE: 'luxury_family_cottage'
} as const;

export type RoomType = typeof ROOM_TYPES[keyof typeof ROOM_TYPES];

// Pricing configuration
export interface PricingConfig {
  base_price: number;
  peak_multiplier: number;
  extra_person_fee: number;
  tax_rate: number;
}

export const ROOM_PRICING: Record<RoomType, PricingConfig> = {
  [ROOM_TYPES.DELUXE]: {
    base_price: 4000,
    peak_multiplier: 1.25,
    extra_person_fee: 1000,
    tax_rate: 0.18
  },
  [ROOM_TYPES.PREMIUM_MOUNTAIN]: {
    base_price: 6500,
    peak_multiplier: 1.25,
    extra_person_fee: 1000,
    tax_rate: 0.18
  },
  [ROOM_TYPES.EXECUTIVE_COTTAGE]: {
    base_price: 6500,
    peak_multiplier: 1.25,
    extra_person_fee: 1000,
    tax_rate: 0.18
  },
  [ROOM_TYPES.FAMILY_SUITE]: {
    base_price: 10000,
    peak_multiplier: 1.25,
    extra_person_fee: 1000,
    tax_rate: 0.18
  },
  [ROOM_TYPES.LUXURY_FAMILY_COTTAGE]: {
    base_price: 10000,
    peak_multiplier: 1.25,
    extra_person_fee: 1000,
    tax_rate: 0.18
  }
};