'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Car, Plane, Train, Bus, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function LocationPage() {
  const handleCopyAddress = () => {
    const address = "Nantin Maharaj Ashram Road, Near Pine Oak Paradise, Bhowali, Nainital - 263132, Uttarakhand, India";
    navigator.clipboard.writeText(address);
    alert('Address copied to clipboard!');
  };

  const handleOpenMaps = () => {
    const coordinates = {
      latitude: 29.3846,
      longitude: 79.5207
    };
    window.open(`https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`, '_blank');
  };

  const handleGetDirections = () => {
    const coordinates = {
      latitude: 29.3846,
      longitude: 79.5207
    };
    window.open(`https://www.google.com/maps/search/?api=1&query=${coordinates.latitude},${coordinates.longitude}`, '_blank');
  };

  const handleViewSatellite = () => {
    const coordinates = {
      latitude: 29.3846,
      longitude: 79.5207
    };
    window.open(`https://www.google.com/maps/@${coordinates.latitude},${coordinates.longitude},15z`, '_blank');
  };

  const nearbyAttractions = [
    {
      name: 'Kainchi Dham',
      distance: '9-10 km',
      driveTime: '20 minutes',
      description: 'Famous Neem Karoli Baba Ashram, a major pilgrimage site',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Bhimtal Lake',
      distance: '6 km',
      driveTime: '15 minutes',
      description: 'Beautiful lake perfect for boating and nature walks',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Nainital Mall Road',
      distance: '11 km',
      driveTime: '25 minutes',
      description: 'Famous shopping street with colonial architecture',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d1dbe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Golu Devta Temple',
      distance: '8 km',
      driveTime: '18 minutes',
      description: 'Sacred temple dedicated to local deity Golu Devta',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const transportOptions = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'By Air',
      description: 'Pantnagar Airport (PGH) is the nearest airport, located 75 km from the resort.',
      details: [
        'Distance: 75 km (2 hours drive)',
        'Major airlines operate from Delhi, Mumbai, and Bangalore',
        'Pre-paid taxi services available at airport',
        'Resort pickup can be arranged on request'
      ],
      route: 'Pantnagar Airport → Haldwani → Bhowali → Resort'
    },
    {
      icon: <Train className="w-8 h-8" />,
      title: 'By Train',
      description: 'The nearest railway station is Kathgodam, well-connected to major cities.',
      details: [
        'Distance: 35 km from resort',
        'Connected to Delhi, Lucknow, and Kolkata',
        'Regular trains from New Delhi (5-6 hours)',
        'Taxi and bus services available from station'
      ],
      route: 'Kathgodam Station → Haldwani → Bhowali → Resort'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'By Road',
      description: 'Drive through scenic mountain routes with beautiful landscapes.',
      details: [
        'From Delhi: 320 km (7-8 hours)',
        'From Dehradun: 180 km (4-5 hours)',
        'From Haridwar: 150 km (3-4 hours)',
        'Well-maintained mountain roads throughout'
      ],
      route: 'Via Delhi-Dehradun-Kashipur route or Haridwar-Ranikhet route'
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: 'By Bus',
      description: 'Regular bus services from major cities to Haldwani and Kathgodam.',
      details: [
        'Delhi to Haldwani: 6-7 hours',
        'From Haldwani: 30 km to resort',
        'Volvo and sleeper buses available',
        'Private and state transport buses'
      ],
      route: 'Major cities → Haldwani/Kathgodam → Local transport to resort'
    }
  ];

  const coordinates = {
    latitude: 29.3846,
    longitude: 79.5207
  };

  const address = "Nantin Maharaj Ashram Road, Near Pine Oak Paradise, Bhowali, Nainital - 263132, Uttarakhand, India";

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
            Our Location
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-warm-beige)]">
            Perfectly positioned in the heart of the mountains
          </p>
        </div>
      </section>

      {/* Resort Address */}
      <section className="py-16 bg-[var(--color-forest-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-playfair">
            Sol Glow Resort
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-golden-amber)]" />
              <span className="text-lg font-semibold">Our Address</span>
            </div>
            <p className="text-[var(--color-warm-beige)] text-lg leading-relaxed mb-6">
              {address}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white"
                onClick={handleCopyAddress}
              >
                Copy Address
              </Button>
              <Button 
                variant="outline" 
                className="border-[var(--color-golden-amber)] text-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)] hover:text-white"
                onClick={handleOpenMaps}
              >
                Open in Google Maps
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-[var(--color-golden-amber)] font-semibold mb-1">Coordinates</div>
              <div className="text-[var(--color-warm-beige)] text-sm">
                {coordinates.latitude}°N, {coordinates.longitude}°E
              </div>
            </div>
            <div>
              <div className="text-[var(--color-golden-amber)] font-semibold mb-1">Altitude</div>
              <div className="text-[var(--color-warm-beige)] text-sm">1,500 meters above sea level</div>
            </div>
            <div>
              <div className="text-[var(--color-golden-amber)] font-semibold mb-1">Best Season</div>
              <div className="text-[var(--color-warm-beige)] text-sm">March - June, September - December</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Find Us on the Map
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Located in the beautiful hill station of Bhowali, Nainital
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-8">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg font-semibold">Interactive Map</p>
              <p className="text-sm">Google Maps will be integrated here</p>
              <p className="text-xs mt-2">
                Lat: {coordinates.latitude}, Lng: {coordinates.longitude}
              </p>
            </div>
          </div>
          
          {/* Map Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white"
              onClick={handleGetDirections}
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
            <Button 
              variant="outline"
              onClick={handleViewSatellite}
            >
              View Satellite View
            </Button>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 bg-[var(--color-warm-beige)]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Nearby Attractions
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Explore the beautiful destinations around our resort
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nearbyAttractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[var(--color-golden-amber)] text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {attraction.distance}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-forest-green)] mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-[var(--color-slate-grey)] text-sm mb-3">
                    {attraction.description}
                  </p>
                  <div className="flex items-center space-x-2 text-[var(--color-golden-amber)] text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{attraction.driveTime} drive</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              How to Reach Us
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Choose the best route for your journey to Sol Glow Resort
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transportOptions.map((option, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-[var(--color-golden-amber)]/10 p-3 rounded-full">
                      <div className="text-[var(--color-golden-amber)]">
                        {option.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-[var(--color-forest-green)]">
                      {option.title}
                    </h3>
                  </div>
                  
                  <p className="text-[var(--color-slate-grey)] mb-6">
                    {option.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-[var(--color-forest-green)] mb-3">Route Details</h4>
                    <div className="space-y-2">
                      {option.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-[var(--color-golden-amber)] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-[var(--color-slate-grey)]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-[var(--color-warm-beige)]/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-[var(--color-forest-green)] mb-2">Recommended Route</h4>
                    <p className="text-sm text-[var(--color-slate-grey)]">{option.route}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20 bg-[var(--color-forest-green)] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-playfair">
              Travel Tips
            </h2>
            <p className="text-xl text-[var(--color-warm-beige)]">
              Important information for your journey to us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[var(--color-golden-amber)] mb-4">Best Time to Visit</h3>
              <ul className="space-y-2 text-[var(--color-warm-beige)] text-sm">
                <li>• March to June: Pleasant weather</li>
                <li>• September to December: Post-monsoon</li>
                <li>• Avoid heavy monsoon (July-August)</li>
                <li>• Winter (Dec-Feb): Cold but beautiful</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[var(--color-golden-amber)] mb-4">What to Pack</h3>
              <ul className="space-y-2 text-[var(--color-warm-beige)] text-sm">
                <li>• Warm clothes (even in summer)</li>
                <li>• Comfortable walking shoes</li>
                <li>• Rain gear (monsoon season)</li>
                <li>• Camera for beautiful views</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[var(--color-golden-amber)] mb-4">Local Services</h3>
              <ul className="space-y-2 text-[var(--color-warm-beige)] text-sm">
                <li>• Free parking available</li>
                <li>• 24/7 front desk assistance</li>
                <li>• Local tour arrangements</li>
                <li>• Airport/railway pickup service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Directions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[var(--color-forest-green)] font-playfair">
            Need Help with Directions?
          </h2>
          <p className="text-xl text-[var(--color-slate-grey)] mb-8">
            Our team is here to help you plan your journey and provide detailed directions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Call for Directions
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}