import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-forest-green)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Resort Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-[var(--color-golden-amber)] font-playfair">
              Sol Glow Resort
            </div>
            <p className="text-[var(--color-warm-beige)] leading-relaxed">
              Mountain serenity meets modern comfort. Experience luxury in the heart of Nainital's natural beauty.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[var(--color-warm-beige)] hover:text-[var(--color-golden-amber)] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-[var(--color-warm-beige)] hover:text-[var(--color-golden-amber)] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-[var(--color-warm-beige)] hover:text-[var(--color-golden-amber)] transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-golden-amber)]">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/rooms" className="block text-[var(--color-warm-beige)] hover:text-[var(--color-golden-amber)] transition-colors">
                Rooms & Suites
              </Link>
              <Link href="/experiences" className="block text-[var(--color-warm-beige)] hover:text-[var(--color-golden-amber)] transition-colors">
                Experiences
              </Link>
              <Link href="/dining" className="block text-[var(--color-warm-beige)] hover:text-[var(--color-golden-amber)] transition-colors">
                Dining
              </Link>
              <Link href="/events" className="block text-[var(--color-warm-beige)] hover:text-[var(--color-golden-amber)] transition-colors">
                Events & Weddings
              </Link>
              <Link href="/location" className="block text-[var(--color-warm-beige)] hover:text-[var(--color-golden-amber)] transition-colors">
                Location
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-golden-amber)]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-[var(--color-golden-amber)] mt-1 flex-shrink-0" />
                <p className="text-[var(--color-warm-beige)] text-sm">
                  Nantin Maharaj Ashram Road,<br />
                  Near Pine Oak Paradise,<br />
                  Bhowali, Nainital - 263132
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-[var(--color-golden-amber)] flex-shrink-0" />
                <a href="tel:+91-XXXXXXXXXX" className="text-[var(--color-warm-beige)] hover:text-[var(--color-golden-amber)] transition-colors">
                  +91-XXXXXXXXXX
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-[var(--color-golden-amber)] flex-shrink-0" />
                <a href="mailto:info@solglowresort.com" className="text-[var(--color-warm-beige)] hover:text-[var(--color-golden-amber)] transition-colors">
                  info@solglowresort.com
                </a>
              </div>
            </div>
          </div>

          {/* Booking Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--color-golden-amber)]">Book Your Stay</h3>
            <div className="space-y-3">
              <p className="text-[var(--color-warm-beige)] text-sm">
                Check-in: 2:00 PM<br />
                Check-out: 11:00 AM
              </p>
              <p className="text-[var(--color-warm-beige)] text-sm">
                24/7 Front Desk<br />
                Free Secured Parking
              </p>
              <Link 
                href="/booking" 
                className="inline-block bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white px-4 py-2 rounded-md transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-golden-amber)]/20 mt-8 pt-8 text-center">
          <p className="text-[var(--color-warm-beige)] text-sm">
            © {new Date().getFullYear()} Sol Glow Resort. All rights reserved. | 
            <Link href="/privacy" className="hover:text-[var(--color-golden-amber)] ml-1">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-[var(--color-golden-amber)] ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}