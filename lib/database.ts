import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Database helper functions
export async function getRooms() {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .order('name');
  
  if (error) throw error;
  return data;
}

export async function getRoomById(id: string) {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
}

export async function checkAvailability(roomType: string, checkIn: string, checkOut: string) {
  const { data, error } = await supabase
    .from('room_availability')
    .select('*')
    .eq('room_type', roomType)
    .gte('date', checkIn)
    .lte('date', checkOut)
    .gt('available_count', 0);
  
  if (error) throw error;
  return data;
}

export async function createBooking(booking: any) {
  const { data, error } = await supabase
    .from('bookings')
    .insert(booking)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function getBookingById(id: string) {
  const { data, error } = await supabase
    .from('bookings')
    .select(`
      *,
      rooms (*)
    `)
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
}

export async function createContactInquiry(inquiry: any) {
  const { data, error } = await supabase
    .from('contact_inquiries')
    .insert(inquiry)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function createEventInquiry(inquiry: any) {
  const { data, error } = await supabase
    .from('event_inquiries')
    .insert(inquiry)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}