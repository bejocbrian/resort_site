# Sol Glow Resort Booking Website - Phase 1 MVP

A modern, responsive booking website for Sol Glow Resort, a premium mountain resort in Nainital, Uttarakhand. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏔️ About Sol Glow Resort

Sol Glow Resort is a premium 3-4 star family-oriented mountain resort located in Bhowali, Nainital, India. The resort offers:

- **Location**: Nantin Maharaj Ashram Road, Near Pine Oak Paradise, Bhowali, Nainital - 263132
- **Unique Features**: Panoramic mountain views, proximity to Kainchi Dham, 350+ capacity banquet lawn
- **Rooms**: ~20-25 well-appointed rooms across 5 categories
- **Target**: Family-oriented, nature-focused travelers and event organizers

## 🚀 Features

### Core Functionality
- ✅ **Responsive Design**: Mobile-first approach with beautiful layouts
- ✅ **Multi-step Booking Engine**: Complete booking flow with availability check
- ✅ **Room Management**: 5 room categories with detailed specifications
- ✅ **Event Booking**: Dedicated event inquiry and management system
- ✅ **Contact Forms**: Integrated contact and inquiry forms
- ✅ **Payment Integration**: Razorpay payment gateway ready
- ✅ **Email Notifications**: Resend integration for confirmations

### Pages & Sections
1. **Homepage (/)**: Hero section, quick booking widget, featured rooms, testimonials
2. **Rooms & Suites (/rooms)**: All room types with galleries and pricing
3. **Experiences (/experiences)**: Activities, nature trails, Kainchi Dham guide
4. **Dining (/dining)**: Restaurant info, menu highlights, dining experiences
5. **Events & Weddings (/events)**: Banquet lawn showcase, event packages
6. **Location (/location)**: Interactive map, nearby attractions, directions
7. **Contact (/contact)**: Contact forms, resort information, FAQ
8. **Booking (/booking)**: Multi-step booking engine with payment integration

### Design System
- **Primary Colors**: Golden Amber (#D4A574), Forest Green (#2D5016)
- **Typography**: Playfair Display (headings), Inter (body)
- **Aesthetic**: Rustic-Modern, Nature-inspired, Premium feel

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router) + React + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL) - Ready for integration
- **Payments**: Razorpay integration
- **Email**: Resend for confirmations
- **Icons**: Lucide React
- **Hosting**: Vercel ready

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd sol-glow-resort
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   - Copy `.env.example` to `.env.local`
   - Fill in the required environment variables:
   ```bash
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Razorpay Configuration
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_SECRET_KEY=your_razorpay_secret_key
   
   # Email Configuration
   RESEND_API_KEY=your_resend_api_key
   
   # Resort Information
   RESORT_NAME=Sol Glow Resort
   RESORT_PHONE=+91-XXXXXXXXXX
   RESORT_EMAIL=info@solglowresort.com
   RESORT_ADDRESS="Nantin Maharaj Ashram Road, Near Pine Oak Paradise, Bhowali, Nainital - 263132"
   
   # Google Maps API
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css              # Global styles with custom design system
│   ├── layout.tsx               # Root layout with navigation
│   ├── page.tsx                 # Homepage
│   ├── booking/
│   │   └── page.tsx            # Multi-step booking engine
│   ├── rooms/
│   │   └── page.tsx            # Rooms & suites listing
│   ├── experiences/
│   │   └── page.tsx            # Activities & experiences
│   ├── dining/
│   │   └── page.tsx            # Restaurant & dining info
│   ├── events/
│   │   └── page.tsx            # Events & weddings
│   ├── location/
│   │   └── page.tsx            # Location & directions
│   ├── contact/
│   │   └── page.tsx            # Contact & inquiry forms
│   └── api/                    # API routes
│       ├── bookings/
│       ├── availability/
│       ├── contact/
│       ├── event-inquiry/
│       └── payment/
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── Navigation.tsx           # Main navigation component
│   └── Footer.tsx              # Footer component
├── lib/
│   ├── types.ts                # TypeScript type definitions
│   ├── database.ts             # Database utilities
│   └── database.types.ts       # Supabase type definitions
└── public/
    └── robots.txt              # SEO configuration
```

## 🏨 Room Inventory

### 1. Deluxe Room (~172 sq ft)
- **Price**: ₹3,500 - ₹4,500/night
- **Capacity**: 2 guests
- **Features**: King/Queen bed, forest/valley views, private balcony

### 2. Premium Mountain View
- **Price**: ₹5,500 - ₹7,500/night
- **Capacity**: 2 guests
- **Features**: Private balcony, Himalayan peak views, sitting area

### 3. Executive Cottage
- **Price**: ₹5,500 - ₹7,500/night
- **Capacity**: 2 guests
- **Features**: Cottage-style, rustic wood, privacy

### 4. Family Room/Suite (~300 sq ft)
- **Price**: ₹8,500 - ₹12,000+/night
- **Capacity**: 4-6 guests
- **Features**: 2 double beds, spacious, family-friendly

### 5. Luxury Family Cottage
- **Price**: ₹8,500 - ₹12,000+/night
- **Capacity**: Up to 7 guests
- **Features**: Garden views, high-end decor, extra space

**Extra Person Charge**: ₹1,000/night

## 🎯 Key Features Implementation

### Booking Engine
- **Step 1**: Date selection with availability check
- **Step 2**: Room selection with real-time pricing
- **Step 3**: Guest details and special requests
- **Step 4**: Payment processing with Razorpay
- **Step 5**: Confirmation and email notification

### SEO Optimization
- Custom meta tags for each page
- Open Graph tags for social sharing
- Structured data for LocalBusiness
- Optimized images and lazy loading
- Mobile-friendly responsive design

### API Endpoints
- `POST /api/bookings` - Create new bookings
- `GET /api/bookings/[id]` - Get booking details
- `POST /api/availability` - Check room availability
- `POST /api/payment/create` - Create Razorpay order
- `POST /api/contact` - Handle contact form submissions
- `POST /api/event-inquiry` - Handle event inquiries

## 🔧 Development Guidelines

### Code Style
- Follow Next.js best practices
- Use TypeScript for type safety
- Implement responsive design with Tailwind CSS
- Use shadcn/ui components for consistency

### Form Handling
- All forms include validation
- Loading states and error handling
- Success feedback for users
- Accessibility compliance (WCAG 2.1 AA)

### Performance
- Image optimization with Next.js
- Code splitting for faster loading
- Lazy loading for non-critical components
- Optimized bundle size

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
- Update all placeholder URLs and keys
- Configure Razorpay for live mode
- Set up Supabase production database
- Configure Resend for production emails

## 📝 Next Steps for Production

1. **Database Setup**:
   - Create Supabase project
   - Run database migrations
   - Set up Row Level Security (RLS)
   - Configure backup and monitoring

2. **Payment Integration**:
   - Set up Razorpay live account
   - Configure webhook endpoints
   - Test payment flows thoroughly

3. **Email Service**:
   - Configure Resend for production
   - Set up email templates
   - Test email delivery

4. **Content Management**:
   - Replace placeholder images with actual photos
   - Update contact information
   - Configure Google Maps integration

5. **Testing**:
   - End-to-end booking flow testing
   - Mobile responsiveness testing
   - Cross-browser compatibility
   - Performance optimization

## 🤝 Contributing

This is a commercial project. For modifications or contributions, please contact the development team.

## 📄 License

Proprietary - All rights reserved to Sol Glow Resort

## 📞 Support

For technical support or questions about the implementation, please contact the development team.

---

**Built with ❤️ for Sol Glow Resort - Where Mountain Serenity Meets Modern Comfort**