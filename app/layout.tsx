import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Sol Glow Resort - Mountain Serenity Meets Modern Comfort',
  description: 'Experience luxury at Sol Glow Resort in Nainital. Premium mountain views, Kainchi Dham proximity, family-friendly amenities. Book your perfect getaway today.',
  keywords: 'resort in Nainital, Kainchi Dham stay, mountain resort Bhowali, Nainital wedding venue',
  openGraph: {
    title: 'Sol Glow Resort - Mountain Serenity Meets Modern Comfort',
    description: 'Experience luxury at Sol Glow Resort in Nainital. Premium mountain views, Kainchi Dham proximity, family-friendly amenities.',
    url: 'https://solglowresort.com',
    siteName: 'Sol Glow Resort',
    images: [
      {
        url: '/images/hero-mountain-view.jpg',
        width: 1200,
        height: 630,
        alt: 'Sol Glow Resort Mountain View',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sol Glow Resort - Mountain Serenity Meets Modern Comfort',
    description: 'Experience luxury at Sol Glow Resort in Nainital.',
    images: ['/images/hero-mountain-view.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)]`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}