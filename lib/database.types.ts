export interface Database {
  public: {
    Tables: {
      rooms: {
        Row: {
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
        };
        Insert: {
          id?: string;
          name: string;
          type: string;
          price_low: number;
          price_high: number;
          capacity: number;
          size: number;
          amenities: string[];
          images: string[];
          description: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          type?: string;
          price_low?: number;
          price_high?: number;
          capacity?: number;
          size?: number;
          amenities?: string[];
          images?: string[];
          description?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      bookings: {
        Row: {
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
        };
        Insert: {
          id?: string;
          room_id: string;
          guest_name: string;
          guest_email: string;
          guest_phone: string;
          check_in: string;
          check_out: string;
          guests_count: number;
          extra_persons: number;
          total_price: number;
          status?: 'pending' | 'confirmed' | 'cancelled';
          payment_id?: string;
          special_requests?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          room_id?: string;
          guest_name?: string;
          guest_email?: string;
          guest_phone?: string;
          check_in?: string;
          check_out?: string;
          guests_count?: number;
          extra_persons?: number;
          total_price?: number;
          status?: 'pending' | 'confirmed' | 'cancelled';
          payment_id?: string;
          special_requests?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      room_availability: {
        Row: {
          room_id: string;
          date: string;
          available_count: number;
          booked_count: number;
        };
        Insert: {
          room_id: string;
          date: string;
          available_count: number;
          booked_count?: number;
        };
        Update: {
          room_id?: string;
          date?: string;
          available_count?: number;
          booked_count?: number;
        };
      };
      contact_inquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string;
          message: string;
          inquiry_type: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone: string;
          message: string;
          inquiry_type: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string;
          message?: string;
          inquiry_type?: string;
          created_at?: string;
        };
      };
      event_inquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string;
          event_type: string;
          event_date: string;
          guests: number;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone: string;
          event_type: string;
          event_date: string;
          guests: number;
          message: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string;
          event_type?: string;
          event_date?: string;
          guests?: number;
          message?: string;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}