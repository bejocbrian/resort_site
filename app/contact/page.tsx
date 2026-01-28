'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      inquiry_type: formData.get('inquiry_type') as string,
      message: formData.get('message') as string
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Call Us',
      primary: '+91-XXXXXXXXXX',
      secondary: '+91-XXXXXXXXXX',
      description: 'Speak directly with our reservation team',
      action: 'tel:+91-XXXXXXXXXX',
      available: '24/7 Available'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Us',
      primary: 'info@solglowresort.com',
      secondary: 'reservations@solglowresort.com',
      description: 'Send us your inquiries and we\'ll respond promptly',
      action: 'mailto:info@solglowresort.com',
      available: 'Response within 2 hours'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      primary: '+91-XXXXXXXXXX',
      secondary: 'Quick chat available',
      description: 'Message us on WhatsApp for instant assistance',
      action: 'https://wa.me/91XXXXXXXXXX?text=Hello! I would like to know more about your resort.',
      available: '9 AM - 9 PM Daily'
    }
  ];

  const resortInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Address',
      value: 'Nantin Maharaj Ashram Road, Near Pine Oak Paradise, Bhowali, Nainital - 263132, Uttarakhand, India'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Front Desk Hours',
      value: '24/7 Available'
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: 'Best Time to Call',
      value: '9:00 AM - 9:00 PM for immediate assistance'
    }
  ];

  const faqs = [
    {
      question: 'What is the check-in and check-out time?',
      answer: 'Check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in and late check-out can be arranged based on availability.'
    },
    {
      question: 'Do you provide airport/railway station pickup?',
      answer: 'Yes, we provide pickup and drop services from Pantnagar Airport, Kathgodam Railway Station, and Haldwani Bus Stand. Charges apply based on distance.'
    },
    {
      question: 'Is parking available at the resort?',
      answer: 'Yes, we offer free and secure parking for all our guests. Our parking area is well-lit and monitored for safety.'
    },
    {
      question: 'What activities are available at the resort?',
      answer: 'We offer bonfire arrangements, nature trails, kids play area, outdoor games (tennis, badminton), yoga sessions, and local sightseeing tours.'
    },
    {
      question: 'Do you have vegetarian and Jain food options?',
      answer: 'Absolutely! We have extensive vegetarian options and can prepare Jain food on request. We also offer halal-certified non-vegetarian dishes.'
    },
    {
      question: 'Is Wi-Fi available throughout the resort?',
      answer: 'Yes, we provide high-speed Wi-Fi (100+ Mbps) in all rooms and common areas free of charge for our guests.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-warm-beige)]">
            We're here to help make your stay perfect
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Get in Touch
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)] max-w-3xl mx-auto">
              Reach out to us through any of these convenient methods. Our team is ready to assist you 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="bg-[var(--color-golden-amber)]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-[var(--color-golden-amber)]">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-forest-green)] mb-4">
                    {method.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="font-semibold text-[var(--color-forest-green)]">
                      {method.primary}
                    </p>
                    {method.secondary && (
                      <p className="text-sm text-[var(--color-slate-grey)]">
                        {method.secondary}
                      </p>
                    )}
                  </div>
                  <p className="text-[var(--color-slate-grey)] text-sm mb-4">
                    {method.description}
                  </p>
                  <div className="text-xs text-[var(--color-golden-amber)] font-semibold mb-6">
                    {method.available}
                  </div>
                  <Button 
                    className="w-full bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white"
                    onClick={() => {
                      if (method.action.startsWith('tel:')) {
                        window.location.href = method.action;
                      } else if (method.action.startsWith('mailto:')) {
                        window.location.href = method.action;
                      } else if (method.action.startsWith('https://wa.me')) {
                        window.open(method.action, '_blank');
                      }
                    }}
                  >
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resort Information */}
      <section className="py-16 bg-[var(--color-warm-beige)]/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Resort Information
            </h2>
          </div>
          
          <div className="space-y-6">
            {resortInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                <div className="bg-[var(--color-golden-amber)]/10 p-3 rounded-full flex-shrink-0">
                  <div className="text-[var(--color-golden-amber)]">
                    {info.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-forest-green)] mb-1">
                    {info.label}
                  </h3>
                  <p className="text-[var(--color-slate-grey)]">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Send Us a Message
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Have a question? Fill out the form below and we'll get back to you promptly.
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                      Full Name *
                    </label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                      Email Address *
                    </label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                      Phone Number
                    </label>
                    <input 
                      name="phone"
                      type="tel" 
                      className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                      Inquiry Type *
                    </label>
                    <select 
                      name="inquiry_type"
                      required
                      className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="Room Reservation">Room Reservation</option>
                      <option value="Event Booking">Event Booking</option>
                      <option value="General Information">General Information</option>
                      <option value="Special Requests">Special Requests</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--color-forest-green)] mb-2">
                    Message *
                  </label>
                  <textarea 
                    name="message"
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-[var(--color-warm-beige)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-amber)]"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
                
                <div className="text-center">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    size="lg" 
                    className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--color-off-white)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[var(--color-slate-grey)]">
              Quick answers to common questions about your stay
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-forest-green)] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[var(--color-slate-grey)] leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-forest-green)] mb-4 font-playfair">
              Find Us Here
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
                29.3846°N, 79.5207°E
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white"
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=29.3846,79.5207', '_blank')}
            >
              Open in Google Maps
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-[var(--color-forest-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-playfair">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 text-[var(--color-warm-beige)]">
            Our 24/7 front desk is always available to help you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)]/90 text-white">
              <Link href="tel:+91-XXXXXXXXXX">
                <Phone className="w-4 h-4 mr-2" />
                Call Front Desk
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[var(--color-golden-amber)] text-[var(--color-golden-amber)] hover:bg-[var(--color-golden-amber)] hover:text-white">
              <Link href="/location">
                Get Directions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}