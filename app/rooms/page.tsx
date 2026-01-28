import Link from 'next/link';
import { ArrowRight, Users, MapPin, Wifi, Car, UtensilsCrossed, Coffee, Tv, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function RoomsPage() {
  const rooms = [
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      priceRange: '₹3,500 - ₹4,500',
      priceLow: 3500,
      priceHigh: 4500,
      size: '172 sq ft',
      capacity: '2 guests',
      bedType: 'King/Queen bed',
      description: 'Our Deluxe Rooms offer a perfect blend of comfort and elegance, featuring stunning forest and valley views. Each room is thoughtfully designed with modern amenities and rustic charm.',
      features: [
        'King/Queen bed with premium linens',
        'Panoramic forest and valley views',
        'Private balcony with seating area',
        '42-inch Smart TV with premium channels',
        'High-speed Wi-Fi (100+ Mbps)',
        'Private bathroom with premium toiletries',
        'Electric kettle with tea/coffee kit',
        'Free bottled water',
        'Geyser for hot water',
        'Room heating available'
      ],
      amenities: [
        { icon: <Tv className="w-5 h-5" />, name: 'Smart TV' },
        { icon: <Wifi className="w-5 h-5" />, name: 'Free Wi-Fi' },
        { icon: <Coffee className="w-5 h-5" />, name: 'Tea/Coffee' },
        { icon: <Mountain className="w-5 h-5" />, name: 'Valley Views' }
      ]
    },
    {
      id: 'premium-mountain',
      name: 'Premium Mountain View',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      priceRange: '₹5,500 - ₹7,500',
      priceLow: 5500,
      priceHigh: 7500,
      size: '172 sq ft',
      capacity: '2 guests',
      bedType: 'King bed with premium linens',
      description: 'Experience the ultimate mountain retreat with our Premium Mountain View rooms. These spacious accommodations offer private balconies and breathtaking Himalayan peak views.',
      features: [
        'King bed with Egyptian cotton sheets',
        'Private balcony with Himalayan views',
        'Dedicated sitting area',
        '42-inch Smart TV with premium channels',
        'High-speed Wi-Fi (100+ Mbps)',
        'Premium bathroom with shower',
        'Mini refrigerator',
        'Electric kettle with premium tea/coffee',
        'Free bottled water',
        'In-room heating included'
      ],
      amenities: [
        { icon: <Tv className="w-5 h-5" />, name: 'Smart TV' },
        { icon: <Wifi className="w-5 h-5" />, name: 'Free Wi-Fi' },
        { icon: <Coffee className="w-5 h-5" />, name: 'Mini Fridge' },
        { icon: <Mountain className="w-5 h-5" />, name: 'Mountain Views' }
      ]
    },
    {
      id: 'executive-cottage',
      name: 'Executive Cottage',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      priceRange: '₹5,500 - ₹7,500',
      priceLow: 5500,
      priceHigh: 7500,
      size: '172 sq ft',
      capacity: '2 guests',
      bedType: 'King bed with rustic wood furnishing',
      description: 'Immerse yourself in nature with our Executive Cottages, featuring traditional mountain cottage design with modern comforts and complete privacy.',
      features: [
        'Authentic cottage-style architecture',
        'King bed with rustic wood headboard',
        'Private outdoor seating area',
        '42-inch Smart TV with premium channels',
        'High-speed Wi-Fi (100+ Mbps)',
        'Spacious bathroom with premium toiletries',
        'Kitchenette with basic amenities',
        'Electric kettle with premium tea/coffee',
        'Free bottled water',
        'Fireplace (seasonal)'
      ],
      amenities: [
        { icon: <Tv className="w-5 h-5" />, name: 'Smart TV' },
        { icon: <Wifi className="w-5 h-5" />, name: 'Free Wi-Fi' },
        { icon: <Coffee className="w-5 h-5" />, name: 'Kitchenette' },
        { icon: <Mountain className="w-5 h-5" />, name: 'Cottage Style' }
      ]
    },
    {
      id: 'family-suite',
      name: 'Family Room/Suite',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      priceRange: '₹8,500 - ₹12,000+',
      priceLow: 8500,
      priceHigh: 12000,
      size: '300 sq ft',
      capacity: '4-6 guests',
      bedType: '2 double beds or combination',
      description: 'Perfect for families, our spacious Family Suites offer comfortable accommodations with separate sleeping areas and plenty of space for everyone.',
      features: [
        'Two double beds or combination setup',
        'Separate living area',
        'Two 42-inch Smart TVs',
        'High-speed Wi-Fi (100+ Mbps)',
        'Two private bathrooms',
        'Dining area for 6',
        'Mini refrigerator',
        'Electric kettle with premium tea/coffee',
        'Free bottled water',
        'Complimentary extra beds for children'
      ],
      amenities: [
        { icon: <Tv className="w-5 h-5" />, name: '2 Smart TVs' },
        { icon: <Wifi className="w-5 h-5" />, name: 'Free Wi-Fi' },
        { icon: <Coffee className="w-5 h-5" />, name: 'Mini Fridge' },
        { icon: <Users className="w-5 h-5" />, name: 'Family Suite' }
      ]
    },
    {
      id: 'luxury-family-cottage',
      name: 'Luxury Family Cottage',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      priceRange: '₹8,500 - ₹12,000+',
      priceLow: 8500,
      priceHigh: 12000,
      size: '300+ sq ft',
      capacity: 'Up to 7 guests',
      bedType: 'Multiple bed configurations',
      description: 'Our most spacious accommodation, the Luxury Family Cottage combines premium amenities with garden views and high-end decor for the ultimate family getaway.',
      features: [
        'Multiple bed configurations available',
        'Luxury garden views',
        'Premium high-end decor',
        'Two 42-inch Smart TVs with premium channels',
        'High-speed Wi-Fi (100+ Mbps)',
        'Two premium bathrooms',
        'Full kitchen with dining area',
        'Private garden terrace',
        'Electric kettle with premium tea/coffee',
        'Complimentary room service for first night'
      ],
      amenities: [
        { icon: <Tv className="w-5 h-5" />, name: '2 Smart TVs' },
        { icon: <Wifi className="w-5 h-5" />, name: 'Free Wi-Fi' },
        { icon: <Coffee className="w-5 h-5" />, name: 'Full Kitchen' },
        { icon: <Mountain className="w-5 h-5" />, name: 'Garden Views' }
      ]
    }
  ];

  const allAmenities = [
    { icon: <Tv className="w-6 h-6" />, name: '42-inch Smart TV', description: 'Premium channels and streaming' },
    { icon: <Wifi className="w-6 h-6" />, name: 'High-Speed Wi-Fi', description: '100+ Mbps connectivity' },
    { icon: <Coffee className="w-6 h-6" />, name: 'Premium Tea/Coffee', description: 'Complimentary refreshments' },
    { icon: <Users className="w-6 h-6" />, name: 'Family Friendly', description: 'Spacious accommodations' },
    { icon: <Car className="w-6 h-6" />, name: 'Free Parking', description: 'Secure parking available' },
    { icon: <UtensilsCrossed className="w-6 h-6" />, name: 'Dining Options', description: 'Restaurant and room service' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
            Rooms & Suites
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-warm-beige)]">
            Comfortable accommodations with mountain views
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <div key={room.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Room Images */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <img 
                      src={room.image} 
                      alt={room.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {room.images.slice(1, 4).map((image, imgIndex) => (
                      <div key={imgIndex} className="h-24 rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${room.name} view ${imgIndex + 2}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Room Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-bold text-[var(--color-forest-green)] mb-2 font-playfair">
                      {room.name}
                    </h2>
                    <div className="flex items-center space-x-4 text-[var(--color-slate-grey)] mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{room.capacity}</span>
                      </div>
                    </div>
                    <p className="text-[var(--color-golden-amber)] text-2xl font-bold mb-4">
                      {room.priceRange}/night
                    </p>
                    <p className="text-[var(--color-slate-grey)] leading-relaxed mb-6">
                      {room.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-forest-green)] mb-3">Key Features</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.slice(0, 6).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-[var(--color-golden-amber)] rounded-full"></span>
                          <span className="text-sm text-[var(--color-slate-grey)]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-forest-green)] mb-3">Amenities</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {room.amenities.map((amenity, amenityIndex) => (
                        <div key={amenityIndex} className="flex items-center space-x-2">
                          <div className="text-[var(--color-golden-amber)]">
                            {amenity.icon}
                          </div>
                          <span className="text-sm text-[var(--color-slate-grey)]">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-4">
                    <Button className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
                      <Link href={`/booking?room=${room.id}`}>
                        Book Now
                      </Link>
                    </Button>
                    <Button variant="outline">
                      <Link href={`/rooms/${room.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Amenities Section */}
      <section className="py-20 bg-[var(--color-warm-beige)]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              All Room Amenities
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Every room includes these premium amenities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allAmenities.map((amenity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-[var(--color-golden-amber)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[var(--color-golden-amber)]">
                    {amenity.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-forest-green)] mb-2">
                  {amenity.name}
                </h3>
                <p className="text-[var(--color-slate-grey)] text-sm">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Person Policy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[var(--color-off-white)] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Additional Guest Policy
            </h2>
            <p className="text-[var(--color-slate-grey)] mb-4">
              Extra person charges apply for guests exceeding the standard room capacity.
            </p>
            <div className="bg-[var(--color-golden-amber)]/10 p-4 rounded-lg inline-block">
              <p className="text-[var(--color-golden-amber)] font-semibold">
                Extra Person: ₹1,000/night
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-forest-green)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 font-playfair">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 text-[var(--color-warm-beige)]">
            Choose your perfect room and create unforgettable memories at Sol Glow Resort
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