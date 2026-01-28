import Link from 'next/link';
import { ArrowRight, MapPin, Users, Calendar, Star, Wifi, Car, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  const featuredRooms = [
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      priceRange: '₹3,500 - ₹4,500',
      capacity: '2 guests',
      features: ['King/Queen bed', 'Forest/valley views', 'Private balcony']
    },
    {
      id: 'premium-mountain',
      name: 'Premium Mountain View',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      priceRange: '₹5,500 - ₹7,500',
      capacity: '2 guests',
      features: ['Private balcony', 'Himalayan peak views', 'Sitting area']
    },
    {
      id: 'family-suite',
      name: 'Family Suite',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      priceRange: '₹8,500 - ₹12,000+',
      capacity: '4-6 guests',
      features: ['2 double beds', 'Spacious layout', 'Garden views']
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      comment: 'Absolutely stunning resort with breathtaking mountain views. The staff was incredibly helpful and the amenities were top-notch. Perfect for our family vacation!'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      comment: 'Amazing experience at Sol Glow Resort. The proximity to Kainchi Dham made our pilgrimage special. The bonfire arrangement was magical!'
    },
    {
      name: 'Anita Gupta',
      location: 'Bangalore',
      rating: 5,
      comment: 'Luxury meets nature here. Beautiful rooms, excellent dining, and the most hospitable staff. Highly recommend for anyone visiting Nainital!'
    }
  ];

  const usps = [
    {
      icon: <MapPin className="w-8 h-8 text-[var(--color-golden-amber)]" />,
      title: 'Prime Location',
      description: 'Nestled in Bhowali with panoramic mountain views and close to Kainchi Dham'
    },
    {
      icon: <Users className="w-8 h-8 text-[var(--color-golden-amber)]" />,
      title: 'Family Friendly',
      description: 'Spacious family rooms, kids play area, and activities for all ages'
    },
    {
      icon: <Calendar className="w-8 h-8 text-[var(--color-golden-amber)]" />,
      title: 'Event Excellence',
      description: '350+ capacity banquet lawn for weddings and corporate events'
    },
    {
      icon: <Star className="w-8 h-8 text-[var(--color-golden-amber)]" />,
      title: 'Premium Amenities',
      description: 'Smart TVs, high-speed Wi-Fi, premium linens, and modern facilities'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Sol Glow Resort
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[var(--color-warm-beige)]">
            Mountain Serenity Meets Modern Comfort
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Experience luxury in the heart of Nainital's natural beauty. Premium mountain views, 
            family-friendly amenities, and unforgettable experiences await you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
              <Link href="/booking" className="flex items-center gap-2">
                Book Your Stay
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--color-forest-green)]">
              <Link href="/rooms">
                Explore Rooms
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Booking Widget */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[var(--color-forest-green)] mb-6 text-center font-playfair">
                Quick Booking
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-slate-grey)] mb-2">Check-in</label>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-slate-grey)] mb-2">Check-out</label>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-slate-grey)] mb-2">Room Type</label>
                  <select className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]">
                    <option>Select Room</option>
                    <option>Deluxe Room</option>
                    <option>Premium Mountain View</option>
                    <option>Executive Cottage</option>
                    <option>Family Suite</option>
                    <option>Luxury Family Cottage</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-slate-grey)] mb-2">Guests</label>
                  <select className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-[var(--color-forest-green)] hover:bg-[var(--color-forest-green)]/90 text-white">
                  <Link href="/booking">
                    Check Availability
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Sol Glow Section */}
      <section className="py-20 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Why Choose Sol Glow Resort?
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)] max-w-3xl mx-auto">
              Discover what makes us the perfect destination for your mountain getaway
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-forest-green)] mb-2">
                  {usp.title}
                </h3>
                <p className="text-[var(--color-slate-grey)]">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Featured Accommodations
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)] max-w-3xl mx-auto">
              Choose from our carefully designed rooms and suites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[var(--color-golden-amber)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {room.capacity}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--color-forest-green)] mb-2">
                    {room.name}
                  </h3>
                  <p className="text-[var(--color-golden-amber)] font-semibold mb-4">
                    {room.priceRange}/night
                  </p>
                  <ul className="space-y-1 mb-6">
                    {room.features.map((feature, index) => (
                      <li key={index} className="text-sm text-[var(--color-slate-grey)] flex items-center">
                        <span className="w-2 h-2 bg-[var(--color-golden-amber)] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
                    <Link href={`/rooms/${room.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Link href="/rooms">
                View All Rooms & Suites
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-[var(--color-warm-beige)]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Resort Amenities
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Everything you need for a comfortable and memorable stay
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Wifi className="w-8 h-8" />, name: 'High-Speed Wi-Fi' },
              { icon: <Car className="w-8 h-8" />, name: 'Free Parking' },
              { icon: <UtensilsCrossed className="w-8 h-8" />, name: 'Restaurant' },
              { icon: <Users className="w-8 h-8" />, name: 'Family Friendly' }
            ].map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg text-[var(--color-golden-amber)]">
                  {amenity.icon}
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-forest-green)]">
                  {amenity.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              What Our Guests Say
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Read testimonials from our satisfied guests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[var(--color-golden-amber)] fill-current" />
                    ))}
                  </div>
                  <p className="text-[var(--color-slate-grey)] mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <p className="font-semibold text-[var(--color-forest-green)]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[var(--color-slate-grey)]">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-forest-green)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 font-playfair">
            Ready for Your Mountain Getaway?
          </h2>
          <p className="text-xl mb-8 text-[var(--color-warm-beige)]">
            Book your stay at Sol Glow Resort and experience the perfect blend of luxury and nature
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
              <Link href="/booking">
                Book Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[var(--color-golden-amber)] text-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)] hover:text-white">
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