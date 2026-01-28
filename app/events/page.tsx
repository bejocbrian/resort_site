import Link from 'next/link';
import { ArrowRight, Users, MapPin, Camera, Star, Sparkles, Heart, Briefcase, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function EventsPage() {
  const eventSpaces = [
    {
      name: 'Open Air Banquet Lawn',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      capacity: '350+ guests',
      description: 'Our stunning open-air banquet lawn offers panoramic mountain views, perfect for grand celebrations under the stars. Features a dedicated stage area and can be customized to your needs.',
      features: [
        'Panoramic mountain backdrop',
        'Dedicated stage area',
        'Sound system setup',
        'LED lighting arrangements',
        'Dance floor space',
        'Separate dining setup',
        'Natural air conditioning',
        'Photography-friendly lighting'
      ],
      idealFor: ['Weddings', 'Corporate Events', 'Family Celebrations', 'Cultural Programs']
    },
    {
      name: 'Indoor Event Hall',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      capacity: '150 guests',
      description: 'A fully equipped indoor venue with modern amenities, perfect for intimate gatherings, business conferences, and smaller celebrations.',
      features: [
        'Air conditioned hall',
        'Projector and screen',
        'Sound system',
        'Stage with backdrop',
        'Flexible seating arrangement',
        'Climate controlled',
        'Parking facility',
        'Green room for preparations'
      ],
      idealFor: ['Corporate Meetings', 'Birthday Parties', 'Small Weddings', 'Training Sessions']
    }
  ];

  const eventTypes = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Weddings & Engagement',
      description: 'Make your special day unforgettable with our beautiful mountain venue',
      packages: [
        'Wedding ceremony setup',
        'Reception arrangements',
        'Engagement parties',
        'Mehendi/Sangeet functions',
        'Bridal and groom preparation rooms',
        'Flower decorations',
        'Traditional music setup',
        'Wedding photography coordination'
      ],
      capacity: '350+ guests',
      price: 'Starting from ₹50,000'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Corporate Events',
      description: 'Professional settings for business gatherings and corporate celebrations',
      packages: [
        'Conference facilities',
        'Team building activities',
        'Product launches',
        'Annual functions',
        'Training workshops',
        'Business meetings',
        'Award ceremonies',
        'Executive retreats'
      ],
      capacity: '350+ guests',
      price: 'Starting from ₹25,000'
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: 'Family Celebrations',
      description: 'Perfect venue for family milestones and special occasions',
      packages: [
        'Birthday parties',
        'Anniversary celebrations',
        'Family reunions',
        'Baby showers',
        'Graduation parties',
        'Family get-togethers',
        'Holiday celebrations',
        'Memorial services'
      ],
      capacity: '350+ guests',
      price: 'Starting from ₹15,000'
    }
  ];

  const eventServices = [
    {
      icon: <Camera className="w-6 h-6" />,
      name: 'Photography & Videography',
      description: 'Professional event documentation with scenic mountain backgrounds'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      name: 'Decoration Services',
      description: 'Custom decoration packages to match your theme and preferences'
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: 'Catering Services',
      description: 'Multi-cuisine catering with special dietary options available'
    },
    {
      icon: <Star className="w-6 h-6" />,
      name: 'Entertainment',
      description: 'Music bands, DJ services, and traditional folk performances'
    }
  ];

  const pastEvents = [
    {
      type: 'Wedding',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Mountain View Wedding',
      guests: '280 guests',
      date: 'March 2024'
    },
    {
      type: 'Corporate',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Annual Company Retreat',
      guests: '120 guests',
      date: 'February 2024'
    },
    {
      type: 'Celebration',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      title: 'Family Reunion',
      guests: '95 guests',
      date: 'January 2024'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
            Events & Weddings
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-warm-beige)]">
            Create unforgettable moments in the heart of the mountains
          </p>
        </div>
      </section>

      {/* Event Spaces */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Our Event Venues
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)] max-w-3xl mx-auto">
              Choose from our beautiful indoor and outdoor venues, each offering unique advantages for your special event
            </p>
          </div>
          
          <div className="space-y-16">
            {eventSpaces.map((space, index) => (
              <div key={space.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Space Images */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <img 
                      src={space.image} 
                      alt={space.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-[var(--color-golden-amber)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {space.capacity}
                    </div>
                  </div>
                </div>

                {/* Space Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--color-forest-green)] mb-2 font-playfair">
                      {space.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-[var(--color-slate-grey)] mb-4">
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{space.capacity}</span>
                      </div>
                    </div>
                    <p className="text-[var(--color-slate-grey)] leading-relaxed mb-6">
                      {space.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--color-forest-green)] mb-3">Venue Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {space.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-[var(--color-golden-amber)] rounded-full"></span>
                          <span className="text-sm text-[var(--color-slate-grey)]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--color-forest-green)] mb-3">Ideal For</h4>
                    <div className="flex flex-wrap gap-2">
                      {space.idealFor.map((eventType, eventIndex) => (
                        <span key={eventIndex} className="bg-[var(--color-golden-amber)]/10 text-[var(--color-golden-amber)] px-3 py-1 rounded-full text-sm">
                          {eventType}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
                    Check Availability
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-[var(--color-warm-beige)]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Event Packages
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Comprehensive packages tailored to your specific event needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((eventType, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-[var(--color-golden-amber)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-[var(--color-golden-amber)]">
                        {eventType.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--color-forest-green)] mb-2">
                      {eventType.title}
                    </h3>
                    <p className="text-[var(--color-slate-grey)] text-sm">
                      {eventType.description}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-[var(--color-forest-green)]">Capacity</span>
                      <span className="text-sm text-[var(--color-slate-grey)]">{eventType.capacity}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-[var(--color-forest-green)]">Starting Price</span>
                      <span className="text-sm font-semibold text-[var(--color-golden-amber)]">{eventType.price}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[var(--color-forest-green)] mb-3">Package Includes</h4>
                    <div className="space-y-2">
                      {eventType.packages.slice(0, 6).map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[var(--color-golden-amber)] rounded-full"></span>
                          <span className="text-xs text-[var(--color-slate-grey)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Additional Services
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              We provide comprehensive event services to make your celebration perfect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg border border-[var(--color-warm-beige)]">
                  <div className="text-[var(--color-golden-amber)]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-forest-green)] mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-[var(--color-slate-grey)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Recent Events
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              See how we've made other celebrations memorable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--color-golden-amber)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-forest-green)] mb-2">
                    {event.title}
                  </h3>
                  <div className="flex justify-between text-sm text-[var(--color-slate-grey)]">
                    <span>{event.guests}</span>
                    <span>{event.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Inquiry Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Plan Your Event
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Let us help you create the perfect event in our beautiful mountain setting
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
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
                      className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                      Event Type *
                    </label>
                    <select className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]">
                      <option>Select event type</option>
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Birthday Party</option>
                      <option>Family Celebration</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                      Event Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                      Expected Guests
                    </label>
                    <select className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]">
                      <option>Select guest count</option>
                      <option>50-100 guests</option>
                      <option>100-200 guests</option>
                      <option>200-350 guests</option>
                      <option>350+ guests</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                    Additional Requirements
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                    placeholder="Tell us about your specific requirements, themes, or special arrangements needed..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
                    Submit Event Inquiry
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-forest-green)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 font-playfair">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl mb-8 text-[var(--color-warm-beige)]">
            Contact our events team to discuss your requirements and get a customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
              <Link href="/contact">
                Contact Events Team
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[var(--color-golden-amber)] text-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)] hover:text-white">
              <Link href="/location">
                Visit Our Venue
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}