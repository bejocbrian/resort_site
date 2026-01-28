import Link from 'next/link';
import { ArrowRight, MapPin, Mountain, TreePine, Users, Sparkles, Camera, Car, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ExperiencesPage() {
  const experiences = [
    {
      id: 'kainchi-dham',
      title: 'Kainchi Dham Pilgrimage',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Visit the famous Neem Karoli Baba Ashram, a spiritual sanctuary just 9-10 km from our resort. Experience peace and tranquility in this sacred pilgrimage site.',
      duration: 'Half Day',
      distance: '9-10 km',
      highlights: ['Neem Karoli Baba Ashram', 'Meditation sessions', 'Spiritual ambiance', 'Mountain views'],
      icon: <Sparkles className="w-8 h-8" />,
      category: 'Spiritual'
    },
    {
      id: 'nature-trails',
      title: 'Guided Nature Trails & Trekking',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Explore the pristine pine forests of Bhowali with our expert guides. Discover local flora and fauna while enjoying breathtaking mountain vistas.',
      duration: '2-6 hours',
      difficulty: 'Easy to Moderate',
      highlights: ['Bhowali pine forests', 'Mountain vistas', 'Wildlife spotting', 'Photography opportunities'],
      icon: <TreePine className="w-8 h-8" />,
      category: 'Adventure'
    },
    {
      id: 'bonfire',
      title: 'Evening Bonfire Experience',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Gather around our traditional bonfire setup. Enjoy storytelling, guitar sessions, and roasted marshmallows under the starlit mountain sky.',
      duration: '2-3 hours',
      timing: 'Evening (6 PM - 9 PM)',
      highlights: ['Traditional bonfire', 'Music & storytelling', 'Mountain views', 'Memorable evenings'],
      icon: <Sparkles className="w-8 h-8" />,
      category: 'Relaxation'
    },
    {
      id: 'family-activities',
      title: 'Family Fun & Kids Activities',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Keep the whole family entertained with our range of activities designed for all ages, from playground fun to educational nature walks.',
      duration: 'Flexible',
      ageGroup: 'All ages',
      highlights: ['Kids play area', 'Outdoor games', 'Nature education', 'Family bonding activities'],
      icon: <Users className="w-8 h-8" />,
      category: 'Family'
    },
    {
      id: 'yoga-wellness',
      title: 'Yoga & Wellness Sessions',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Start your day with rejuvenating yoga sessions in the serene mountain environment. Perfect for relaxation and mental wellness.',
      duration: '1-2 hours',
      timing: 'Sunrise & Sunset',
      highlights: ['Mountain yoga sessions', 'Meditation', 'Breathing exercises', 'Wellness guidance'],
      icon: <Sparkles className="w-8 h-8" />,
      category: 'Wellness'
    },
    {
      id: 'sightseeing',
      title: 'Local Sightseeing Tours',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d1dbe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Explore the beautiful nearby attractions including Bhimtal and Nainital. Enjoy special discounts on our organized tours.',
      duration: 'Half to Full Day',
      discount: '5% discount for guests',
      highlights: ['Bhimtal Lake (6 km)', 'Nainital Mall Road (11 km)', 'Local markets', 'Boat rides'],
      icon: <MapPin className="w-8 h-8" />,
      category: 'Sightseeing'
    }
  ];

  const outdoorActivities = [
    {
      name: 'Tennis',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Enjoy a game of tennis on our outdoor court'
    },
    {
      name: 'Badminton',
      image: 'https://images.unsplash.com/photo-1544551763-7ef4200b8849?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Family-friendly badminton games available'
    },
    {
      name: 'Photography',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Capture stunning mountain landscapes and nature'
    },
    {
      name: 'Garden Walks',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Peaceful walks through our beautiful gardens'
    }
  ];

  const seasonalActivities = [
    {
      season: 'Spring (March-May)',
      activities: ['Nature walks', 'Bird watching', 'Garden tours', 'Photography']
    },
    {
      season: 'Summer (June-August)',
      activities: ['Trekking', 'Bonfire evenings', 'Early morning yoga', 'Mountain biking']
    },
    {
      season: 'Monsoon (July-September)',
      activities: ['Indoor games', 'Spa sessions', 'Cooking classes', 'Movie nights']
    },
    {
      season: 'Winter (October-February)',
      activities: ['Bonfire setups', 'Winter treks', 'Hot beverage sessions', 'Cozy indoor activities']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
            Experiences & Activities
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-warm-beige)]">
            Create unforgettable memories in the heart of nature
          </p>
        </div>
      </section>

      {/* Main Experiences */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Signature Experiences
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)] max-w-3xl mx-auto">
              Discover the perfect blend of adventure, relaxation, and spiritual rejuvenation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <Card key={experience.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--color-golden-amber)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {experience.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                    <div className="text-[var(--color-golden-amber)]">
                      {experience.icon}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--color-forest-green)] mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-[var(--color-slate-grey)] mb-4 text-sm leading-relaxed">
                    {experience.description}
                  </p>
                  
                  {/* Activity Details */}
                  <div className="space-y-2 mb-4">
                    {experience.duration && (
                      <div className="flex items-center space-x-2">
                        <Coffee className="w-4 h-4 text-[var(--color-golden-amber)]" />
                        <span className="text-sm text-[var(--color-slate-grey)]">{experience.duration}</span>
                      </div>
                    )}
                    {experience.distance && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-[var(--color-golden-amber)]" />
                        <span className="text-sm text-[var(--color-slate-grey)]">{experience.distance}</span>
                      </div>
                    )}
                    {experience.timing && (
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-[var(--color-golden-amber)]" />
                        <span className="text-sm text-[var(--color-slate-grey)]">{experience.timing}</span>
                      </div>
                    )}
                    {experience.discount && (
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-[var(--color-golden-amber)]" />
                        <span className="text-sm text-[var(--color-golden-amber)] font-semibold">{experience.discount}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[var(--color-forest-green)] mb-2">Highlights</h4>
                    <div className="space-y-1">
                      {experience.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[var(--color-golden-amber)] rounded-full"></span>
                          <span className="text-xs text-[var(--color-slate-grey)]">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor Activities */}
      <section className="py-20 bg-[var(--color-warm-beige)]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Outdoor Recreation
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Stay active and energized with our outdoor facilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outdoorActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48">
                  <img 
                    src={activity.image} 
                    alt={activity.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-[var(--color-forest-green)] mb-2">
                    {activity.name}
                  </h3>
                  <p className="text-sm text-[var(--color-slate-grey)]">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Activities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Seasonal Activities
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Experience something special throughout the year
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasonalActivities.map((season, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[var(--color-golden-amber)]">
                <h3 className="text-lg font-semibold text-[var(--color-forest-green)] mb-4">
                  {season.season}
                </h3>
                <div className="space-y-2">
                  {season.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-[var(--color-golden-amber)] rounded-full"></span>
                      <span className="text-sm text-[var(--color-slate-grey)]">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kainchi Dham Special Section */}
      <section className="py-20 bg-[var(--color-forest-green)] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-playfair">
                Special: Kainchi Dham Experience
              </h2>
              <p className="text-lg text-[var(--color-warm-beige)] mb-6">
                Just 9-10 km from our resort, Kainchi Dham is one of the most visited pilgrimage sites in Uttarakhand. 
                Experience spiritual peace at Neem Karoli Baba's ashram with our guided visits.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-[var(--color-golden-amber)]" />
                  <span>Daily spiritual sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mountain className="w-5 h-5 text-[var(--color-golden-amber)]" />
                  <span>Scenic mountain route</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Camera className="w-5 h-5 text-[var(--color-golden-amber)]" />
                  <span>Photography opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="w-5 h-5 text-[var(--color-golden-amber)]" />
                  <span>Transportation arranged</span>
                </div>
              </div>
              <Button size="lg" className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
                Book Kainchi Dham Tour
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Kainchi Dham"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activity Booking Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[var(--color-off-white)] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Activity Booking Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-[var(--color-forest-green)] mb-2">Advance Booking</h3>
                <p className="text-sm text-[var(--color-slate-grey)]">
                  Most activities require advance booking. Contact our front desk for reservations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-forest-green)] mb-2">Group Discounts</h3>
                <p className="text-sm text-[var(--color-slate-grey)]">
                  Special rates available for groups of 5 or more. Inquire at the time of booking.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-forest-green)] mb-2">Weather Dependent</h3>
                <p className="text-sm text-[var(--color-slate-grey)]">
                  Some outdoor activities may be affected by weather conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-forest-green)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 font-playfair">
            Ready for Your Adventure?
          </h2>
          <p className="text-xl mb-8 text-[var(--color-warm-beige)]">
            Book your stay and choose from our exciting range of experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
              <Link href="/booking">
                Book Your Stay
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[var(--color-golden-amber)] text-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)] hover:text-white">
              <Link href="/contact">
                Customize Your Experience
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}