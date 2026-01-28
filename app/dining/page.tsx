import Link from 'next/link';
import { ArrowRight, UtensilsCrossed, Coffee, Clock, Star, Leaf, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function DiningPage() {
  const diningOptions = [
    {
      name: 'Sol Glow Restaurant',
      type: 'Multi-cuisine Restaurant',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Our signature restaurant offering a diverse menu of Indian, Continental, and local Kumaoni cuisine. Enjoy your meals in a cozy indoor setting with beautiful mountain views.',
      capacity: '60 guests',
      timings: '7:00 AM - 10:00 PM',
      specialties: ['Kumaoni cuisine', 'Indian curries', 'Continental dishes', 'Halal options']
    },
    {
      name: 'Al Fresco Dining',
      type: 'Outdoor Dining Experience',
      image: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Dine under the open sky with panoramic mountain views. Perfect for romantic dinners and family gatherings in the fresh mountain air.',
      capacity: '40 guests',
      timings: '6:00 PM - 9:00 PM',
      specialties: ['Mountain views', 'Romantic setting', 'Fresh air dining', 'Sunset meals']
    },
    {
      name: 'Breakfast Buffet',
      type: 'Morning Buffet Service',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Start your day with our extensive breakfast buffet featuring fresh fruits, cereals, Indian breakfast items, and continental options.',
      capacity: '80 guests',
      timings: '9:00 AM - 11:00 AM',
      specialties: ['Fresh fruits', 'Indian breakfast', 'Continental options', 'Fresh juices']
    }
  ];

  const menuHighlights = [
    {
      category: 'Kumaoni Specialties',
      icon: <Leaf className="w-6 h-6" />,
      items: [
        { name: 'Bhaang Ki Chudkani', description: 'Traditional Kumaoni green vegetable curry' },
        { name: 'Chainsoo', description: 'Black gram curry, a regional specialty' },
        { name: 'Aloo Ke Gutke', description: 'Spicy mashed potatoes with local spices' },
        { name: 'Madua Roti', description: 'Traditional millet bread' }
      ]
    },
    {
      category: 'North Indian Delights',
      icon: <Sparkles className="w-6 h-6" />,
      items: [
        { name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry' },
        { name: 'Paneer Makhani', description: 'Cottage cheese in rich tomato gravy' },
        { name: 'Dal Makhani', description: 'Slow-cooked black lentils in butter' },
        { name: 'Biryani Varieties', description: 'Fragrant rice dishes with various fillings' }
      ]
    },
    {
      category: 'Continental Favorites',
      icon: <Users className="w-6 h-6" />,
      items: [
        { name: 'Grilled Fish', description: 'Fresh mountain fish with herbs' },
        { name: 'Pasta Selection', description: 'Italian pasta with various sauces' },
        { name: 'Sandwiches & Burgers', description: 'Quick bites and comfort food' },
        { name: 'Continental Breakfast', description: 'Cereals, fruits, and pastries' }
      ]
    },
    {
      category: 'Beverages & Desserts',
      icon: <Coffee className="w-6 h-6" />,
      items: [
        { name: 'Kashmiri Kahwa', description: 'Traditional saffron tea' },
        { name: 'Fresh Fruit Juices', description: 'Seasonal fruit smoothies' },
        { name: 'Gulab Jamun', description: 'Sweet milk dumplings in syrup' },
        { name: 'Mountain Honey Desserts', description: 'Local honey-based sweet treats' }
      ]
    }
  ];

  const diningFeatures = [
    {
      icon: <Leaf className="w-8 h-8 text-[var(--color-golden-amber)]" />,
      title: 'Fresh & Local',
      description: 'We source fresh ingredients from local farms and gardens'
    },
    {
      icon: <Users className="w-8 h-8 text-[var(--color-golden-amber)]" />,
      title: 'Family Friendly',
      description: 'Special kids menu and high chairs available'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[var(--color-golden-amber)]" />,
      title: 'Special Diets',
      description: 'Vegetarian, vegan, and Jain options available'
    },
    {
      icon: <Clock className="w-8 h-8 text-[var(--color-golden-amber)]" />,
      title: 'Flexible Timing',
      description: 'Room service available 24/7 for in-room dining'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      comment: 'The Kumaoni cuisine here is absolutely authentic and delicious. The Chainsoo was just like my grandmother makes!',
      dish: 'Chainsoo (Black Gram Curry)'
    },
    {
      name: 'Michael Chen',
      location: 'Bangalore',
      rating: 5,
      comment: 'Amazing dining experience with mountain views. The al fresco dining setup is perfect for romantic dinners.',
      dish: 'Al Fresco Dinner'
    },
    {
      name: 'Anita Gupta',
      location: 'Mumbai',
      rating: 5,
      comment: 'Best breakfast buffet in Nainital! Fresh ingredients and such variety. The kids loved the pancakes.',
      dish: 'Breakfast Buffet'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
            Dining Experiences
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-warm-beige)]">
            Savor the flavors of the mountains
          </p>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Our Dining Venues
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)] max-w-3xl mx-auto">
              From traditional Kumaoni cuisine to international favorites, discover dining experiences that delight your palate
            </p>
          </div>
          
          <div className="space-y-16">
            {diningOptions.map((venue, index) => (
              <div key={venue.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Venue Images */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <img 
                      src={venue.image} 
                      alt={venue.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-[var(--color-golden-amber)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {venue.type}
                    </div>
                  </div>
                </div>

                {/* Venue Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--color-forest-green)] mb-2 font-playfair">
                      {venue.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-[var(--color-slate-grey)] mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{venue.timings}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{venue.capacity}</span>
                      </div>
                    </div>
                    <p className="text-[var(--color-slate-grey)] leading-relaxed mb-6">
                      {venue.description}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--color-forest-green)] mb-3">Specialties</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {venue.specialties.map((specialty, specialtyIndex) => (
                        <div key={specialtyIndex} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-[var(--color-golden-amber)] rounded-full"></span>
                          <span className="text-sm text-[var(--color-slate-grey)]">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
                    Make a Reservation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-[var(--color-warm-beige)]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Menu Highlights
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Discover the flavors that make our dining experience special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuHighlights.map((category, index) => (
              <Card key={category.category} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-[var(--color-golden-amber)]/10 p-3 rounded-full">
                      <div className="text-[var(--color-golden-amber)]">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--color-forest-green)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-[var(--color-warm-beige)] pb-3 last:border-b-0">
                        <h4 className="font-semibold text-[var(--color-forest-green)] mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-[var(--color-slate-grey)]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Why Our Dining is Special
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Every meal is prepared with care and served with mountain hospitality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diningFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-forest-green)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-slate-grey)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              What Our Guests Say
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Read reviews of our dining experiences
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
                  <div className="border-t border-[var(--color-warm-beige)] pt-4">
                    <p className="font-semibold text-[var(--color-forest-green)]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[var(--color-slate-grey)] mb-1">
                      {testimonial.location}
                    </p>
                    <p className="text-xs text-[var(--color-golden-amber)]">
                      {testimonial.dish}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Information */}
      <section className="py-20 bg-[var(--color-forest-green)] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-playfair">
                Dining Hours & Information
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-golden-amber)] mb-2">Restaurant Hours</h3>
                  <p className="text-[var(--color-warm-beige)]">Daily: 7:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-golden-amber)] mb-2">Breakfast Buffet</h3>
                  <p className="text-[var(--color-warm-beige)]">Daily: 9:00 AM - 11:00 AM</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-golden-amber)] mb-2">Al Fresco Dining</h3>
                  <p className="text-[var(--color-warm-beige)]">Daily: 6:00 PM - 9:00 PM</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-golden-amber)] mb-2">Room Service</h3>
                  <p className="text-[var(--color-warm-beige)]">24/7 Available</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-golden-amber)] mb-4">Special Dietary Requirements</h3>
              <div className="space-y-3 text-[var(--color-warm-beige)]">
                <p>• Vegetarian and vegan options available</p>
                <p>• Jain food preparation on request</p>
                <p>• Gluten-free alternatives</p>
                <p>• Halal certification for non-vegetarian dishes</p>
                <p>• Kids menu with popular favorites</p>
                <p>• Custom dietary requirements accommodated</p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
                  Make a Reservation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 text-[var(--color-forest-green)] font-playfair">
            Ready to Dine With Us?
          </h2>
          <p className="text-xl mb-8 text-[var(--color-slate-grey)]">
            Experience the finest flavors of the mountains at Sol Glow Resort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
              <Link href="/booking">
                Book Your Stay
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/contact">
                Make a Reservation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}