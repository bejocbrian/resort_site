'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Rooms & Suites', href: '/rooms' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Dining', href: '/dining' },
    { label: 'Events', href: '/events' },
    { label: 'Location', href: '/location' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-[var(--color-warm-beige)]">
      {/* Top Bar */}
      <div className="bg-[var(--color-forest-green)] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@solglowresort.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-[var(--color-warm-beige)]">
              Mountain Serenity Meets Modern Comfort
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[var(--color-golden-amber)]">
              <span className="font-playfair">Sol Glow</span>
              <span className="block text-sm font-inter font-normal text-[var(--color-forest-green)]">
                Resort
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--color-slate-grey)] hover:text-[var(--color-golden-amber)] transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
              <Link href="/booking">
                Book Now
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--color-slate-grey)]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-[var(--color-warm-beige)]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-[var(--color-slate-grey)] hover:text-[var(--color-golden-amber)] hover:bg-[var(--color-warm-beige)]/20 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button asChild className="w-full bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
                  <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}