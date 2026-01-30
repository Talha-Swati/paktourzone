// Services Data - Complete service offerings

export const servicesData = {
  hotels: {
    id: 'hotels',
    name: 'Hotel Booking',
    slug: 'hotels',
    icon: '🏨',
    tagline: 'Comfortable Stays, Trusted Quality',
    description: 'Handpicked hotels and resorts across Northern Pakistan with reliable standards, great locations, and honest pricing for international travelers.',
    heroImage: 'https://images.unsplash.com/photo-1566073171259-6a40f3e9e391?w=1920&q=80',
    
    categories: [
      {
        id: 'budget',
        name: 'Budget Hotels',
        priceRange: '$20-40/night',
        description: 'Clean, comfortable, and affordable stays',
        features: ['Free WiFi', 'Breakfast included', 'Hot water', 'Central location', 'Clean rooms', 'Friendly staff']
      },
      {
        id: 'comfort',
        name: 'Comfort Hotels',
        priceRange: '$40-80/night',
        description: 'Enhanced amenities and better locations',
        features: ['AC rooms', 'Room service', 'Restaurant', 'Mountain views', 'Parking', 'Travel desk']
      },
      {
        id: 'luxury',
        name: 'Luxury Resorts',
        priceRange: '$80-200/night',
        description: 'Premium experiences with world-class facilities',
        features: ['Spa services', 'Fine dining', 'Concierge', 'Premium views', 'Suites available', 'Pool/Gym']
      }
    ],

    featuredProperties: [
      {
        id: 'shangrila-skardu',
        name: 'Shangrila Resort Skardu',
        location: 'Lower Kachura Lake, Skardu',
        category: 'luxury',
        rating: 4.8,
        reviews: 543,
        price: 150,
        image: 'https://images.unsplash.com/photo-1566073171259-6a40f3e9e391?w=800&q=80',
        amenities: ['Lake view', 'Restaurant', 'Boat rides', 'Free WiFi', 'Parking', 'Garden'],
        description: 'Iconic resort on Lower Kachura Lake with stunning views and exceptional service.'
      },
      {
        id: 'hunza-serena',
        name: 'Hunza Serena Inn',
        location: 'Karimabad, Hunza',
        category: 'luxury',
        rating: 4.9,
        reviews: 678,
        price: 180,
        image: 'https://images.unsplash.com/photo-1566073171259-6a40f3e9e391?w=800&q=80',
        amenities: ['Mountain view', 'Fine dining', 'Spa', 'Heritage decor', 'Garden', 'Tour desk'],
        description: 'Luxury hotel with traditional architecture and modern amenities in the heart of Hunza.'
      },
      {
        id: 'naran-inn',
        name: 'Pine Park Hotel Naran',
        location: 'Naran Bazaar, Naran',
        category: 'comfort',
        rating: 4.5,
        reviews: 234,
        price: 60,
        image: 'https://images.unsplash.com/photo-1566073171259-6a40f3e9e391?w=800&q=80',
        amenities: ['Valley view', 'Restaurant', 'Heater', 'Room service', 'WiFi', 'Parking'],
        description: 'Comfortable mid-range hotel with excellent location and warm hospitality.'
      },
      {
        id: 'swat-budget',
        name: 'Valley View Guest House',
        location: 'Kalam, Swat',
        category: 'budget',
        rating: 4.3,
        reviews: 156,
        price: 35,
        image: 'https://images.unsplash.com/photo-1566073171259-6a40f3e9e391?w=800&q=80',
        amenities: ['River view', 'Breakfast', 'Hot water', 'Clean rooms', 'Friendly staff', 'Local food'],
        description: 'Budget-friendly guest house with authentic local experience and beautiful views.'
      }
    ],

    bookingProcess: [
      { step: 1, title: 'Select Destination', desc: 'Choose your travel location' },
      { step: 2, title: 'Pick Dates', desc: 'Select check-in and check-out' },
      { step: 3, title: 'Choose Hotel', desc: 'Browse and select accommodation' },
      { step: 4, title: 'Confirm Booking', desc: 'Complete your reservation' }
    ]
  },

  transport: {
    id: 'transport',
    name: 'Transport Services',
    slug: 'transport',
    icon: '🚐',
    tagline: 'Safe, Scenic, and On‑Time',
    description: 'Experienced local drivers, well‑maintained vehicles, and route planning built for mountain travel and international guests.',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80',

    vehicleTypes: [
      {
        id: 'sedan',
        name: 'Sedan Car',
        capacity: '4 passengers',
        luggage: '3 bags',
        price: '$50/day',
        features: ['AC', 'Comfortable seats', 'City travel', 'Experienced driver', 'Fuel included'],
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80',
        bestFor: 'City tours, short trips, couples'
      },
      {
        id: 'suv',
        name: '4x4 SUV',
        capacity: '6 passengers',
        luggage: '5 bags',
        price: '$80/day',
        features: ['4WD', 'Mountain capable', 'Spacious', 'AC', 'Professional driver'],
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80',
        bestFor: 'Mountain travel, rough roads, small groups'
      },
      {
        id: 'landcruiser',
        name: 'Toyota Land Cruiser',
        capacity: '7 passengers',
        luggage: '6 bags',
        price: '$120/day',
        features: ['Premium 4WD', 'Luxury interior', 'High ground clearance', 'Expert driver', 'All terrain'],
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80',
        bestFor: 'Premium tours, extreme terrain, VIP travel'
      },
      {
        id: 'hiace',
        name: 'Toyota Hiace',
        capacity: '12 passengers',
        luggage: '10 bags',
        price: '$100/day',
        features: ['AC', 'Reclining seats', 'Large luggage space', 'Entertainment system', 'Professional driver'],
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80',
        bestFor: 'Family groups, team tours, budget travel'
      },
      {
        id: 'coaster',
        name: 'Toyota Coaster',
        capacity: '25 passengers',
        luggage: '20 bags',
        price: '$150/day',
        features: ['AC', 'Comfortable seating', 'PA system', 'Large windows', 'Experienced driver'],
        image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&q=80',
        bestFor: 'Large groups, corporate tours, events'
      }
    ],

    services: [
      {
        name: 'Airport Transfers',
        description: 'Pickup/drop-off from all major airports',
        price: 'From $30',
        features: ['Flight tracking', '24/7 service', 'Meet & greet', 'Luggage assistance']
      },
      {
        name: 'City Tours',
        description: 'Comfortable transport for city exploration',
        price: 'From $40/day',
        features: ['Flexible itinerary', 'Driver as guide', 'Multiple stops', 'AC vehicles']
      },
      {
        name: 'Long Distance Travel',
        description: 'Inter-city and mountain travel services',
        price: 'From $60/day',
        features: ['Experienced drivers', 'Rest stops', 'Scenic routes', 'Safety first']
      },
      {
        name: 'Wedding/Events',
        description: 'Luxury transport for special occasions',
        price: 'Custom pricing',
        features: ['Decorated vehicles', 'Professional chauffeurs', 'Multiple vehicles', 'Coordinated service']
      }
    ],

    whyChooseUs: [
      { title: 'Licensed Drivers', desc: 'All drivers are professionally trained and licensed' },
      { title: 'Insured Vehicles', desc: 'Full insurance coverage for peace of mind' },
      { title: 'Well Maintained', desc: 'Regular servicing and safety checks' },
      { title: '24/7 Support', desc: 'Round-the-clock assistance and support' }
    ]
  },

  guides: {
    id: 'guides',
    name: 'Tour Guides',
    slug: 'guides',
    icon: '👨‍🏫',
    tagline: 'Expert Guides, Real Local Insight',
    description: 'Licensed guides with strong English skills and deep regional knowledge—perfect for cultural tours and mountain adventures.',
    heroImage: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1920&q=80',

    guides: [
      {
        id: 'guide-1',
        name: 'Ahmed Khan',
        specialization: 'Mountain Trekking',
        experience: '12 years',
        languages: ['English', 'Urdu', 'German'],
        rating: 4.9,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        certifications: ['Mountain Guide License', 'First Aid', 'Wilderness Training'],
        expertise: ['K2 Base Camp', 'Hunza Valley', 'High Altitude Trekking'],
        price: '$80/day',
        bio: 'Experienced mountaineer with passion for sharing the beauty of Northern Pakistan.'
      },
      {
        id: 'guide-2',
        name: 'Sara Malik',
        specialization: 'Cultural & Heritage',
        experience: '8 years',
        languages: ['English', 'Urdu', 'French', 'Burushaski'],
        rating: 4.8,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
        certifications: ['Licensed Guide', 'Cultural Heritage Expert', 'Tourism Board Certified'],
        expertise: ['Hunza Culture', 'Historical Sites', 'Local Traditions'],
        price: '$60/day',
        bio: 'Passionate about preserving and sharing local culture and traditions with visitors.'
      },
      {
        id: 'guide-3',
        name: 'Hassan Ali',
        specialization: 'Photography Tours',
        experience: '10 years',
        languages: ['English', 'Urdu', 'Japanese'],
        rating: 4.9,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
        certifications: ['Professional Photographer', 'Licensed Guide', 'Drone Pilot'],
        expertise: ['Landscape Photography', 'Best Viewpoints', 'Golden Hour Spots'],
        price: '$100/day',
        bio: 'Professional photographer and guide specializing in capturing Pakistan\'s stunning landscapes.'
      },
      {
        id: 'guide-4',
        name: 'Fatima Noor',
        specialization: 'Family & Adventure',
        experience: '6 years',
        languages: ['English', 'Urdu', 'Spanish'],
        rating: 4.7,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
        certifications: ['Family Tour Specialist', 'Child Safety', 'First Aid'],
        expertise: ['Family Adventures', 'Child-Friendly Tours', 'Educational Tours'],
        price: '$70/day',
        bio: 'Specializes in creating memorable and safe experiences for families with children.'
      }
    ],

    services: [
      {
        name: 'Single Day Guiding',
        price: '$60-100',
        features: ['8-10 hours', 'Local expertise', 'Flexible itinerary', 'Language support']
      },
      {
        name: 'Multi-Day Tours',
        price: '$50-80/day',
        features: ['Extended tours', 'Discounted rates', 'Full support', 'Itinerary planning']
      },
      {
        name: 'Specialized Tours',
        price: '$80-150/day',
        features: ['Photography', 'Trekking', 'Cultural immersion', 'Expert knowledge']
      },
      {
        name: 'Group Guiding',
        price: '$40-60/day pp',
        features: ['Large groups', 'Team coordination', 'Group activities', 'Cost effective']
      }
    ],

    qualifications: [
      'Tourism Board Certified',
      'First Aid Trained',
      'Local Area Experts',
      'Multi-lingual',
      'Safety Certified',
      'Background Verified'
    ]
  },

  visa: {
    id: 'visa',
    name: 'Visa Assistance',
    slug: 'visa',
    icon: '📋',
    tagline: 'Clear, Guided Visa Support',
    description: 'Step‑by‑step visa assistance for international travelers, with document checks, timelines, and practical guidance.',
    heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80',

    visaTypes: [
      {
        id: 'tourist',
        name: 'Tourist Visa',
        duration: '30-90 days',
        processing: '7-15 working days',
        price: '$100 (service fee)',
        eligibility: 'All foreign nationals',
        description: 'Standard tourist visa for leisure travel and sightseeing',
        requirements: [
          'Valid passport (6 months validity)',
          'Passport-size photographs',
          'Travel itinerary',
          'Hotel bookings',
          'Return flight tickets',
          'Bank statements',
          'Visa application form'
        ]
      },
      {
        id: 'business',
        name: 'Business Visa',
        duration: '30-90 days',
        processing: '10-20 working days',
        price: '$150 (service fee)',
        eligibility: 'Business travelers',
        description: 'For business meetings, conferences, and trade purposes',
        requirements: [
          'Valid passport',
          'Invitation letter from Pakistani company',
          'Business documents',
          'Company registration',
          'Travel itinerary',
          'Bank statements',
          'Photographs'
        ]
      },
      {
        id: 'group',
        name: 'Group Tourist Visa',
        duration: '30 days',
        processing: '10-15 working days',
        price: '$80 pp (service fee)',
        eligibility: 'Groups of 5+ people',
        description: 'Discounted visa processing for tour groups',
        requirements: [
          'Valid passports for all',
          'Group itinerary',
          'Tour operator details',
          'Hotel bookings',
          'Photographs',
          'Group leader information'
        ]
      }
    ],

    countries: [
      { name: 'USA', processing: '15-20 days', notes: 'Additional security clearance may be required' },
      { name: 'UK', processing: '10-15 days', notes: 'Standard processing' },
      { name: 'Europe (Schengen)', processing: '10-15 days', notes: 'Most EU nationals eligible' },
      { name: 'China', processing: '7-10 days', notes: 'Streamlined process' },
      { name: 'Middle East', processing: '7-10 days', notes: 'Quick processing' },
      { name: 'Others', processing: '10-20 days', notes: 'Country-specific requirements' }
    ],

    process: [
      { step: 1, title: 'Consultation', desc: 'Free consultation to determine visa type and requirements' },
      { step: 2, title: 'Documentation', desc: 'Gather and prepare all required documents' },
      { step: 3, title: 'Application', desc: 'Submit application to relevant authorities' },
      { step: 4, title: 'Processing', desc: 'Track application and handle queries' },
      { step: 5, title: 'Collection', desc: 'Collect and deliver visa to client' }
    ],

    ourServices: [
      'Document verification and preparation',
      'Application form assistance',
      'Embassy appointment booking',
      'Application submission',
      'Status tracking',
      'Visa collection',
      'Express processing (if available)',
      'Consultation and support'
    ]
  },

  insurance: {
    id: 'insurance',
    name: 'Travel Insurance',
    slug: 'insurance',
    icon: '🛡️',
    tagline: 'Peace of Mind on the Road',
    description: 'Clear insurance options covering medical care, delays, and cancellations—ideal for international travelers in mountain regions.',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',

    plans: [
      {
        id: 'basic',
        name: 'Basic Coverage',
        price: '$25',
        duration: 'Up to 7 days',
        recommended: false,
        coverage: {
          medical: '$10,000',
          evacuation: '$5,000',
          baggage: '$500',
          cancellation: '$1,000',
          delay: '$200'
        },
        features: [
          'Emergency medical coverage',
          'Hospitalization',
          'Lost baggage protection',
          'Trip delay coverage',
          '24/7 helpline',
          'Basic emergency evacuation'
        ]
      },
      {
        id: 'comprehensive',
        name: 'Comprehensive Plan',
        price: '$50',
        duration: 'Up to 14 days',
        recommended: true,
        coverage: {
          medical: '$50,000',
          evacuation: '$25,000',
          baggage: '$2,000',
          cancellation: '$5,000',
          delay: '$500'
        },
        features: [
          'Extended medical coverage',
          'Adventure sports coverage',
          'Trip cancellation protection',
          'Lost baggage & documents',
          'Flight delay compensation',
          'Emergency evacuation',
          'Personal liability',
          '24/7 multilingual support'
        ]
      },
      {
        id: 'premium',
        name: 'Premium Protection',
        price: '$100',
        duration: 'Up to 30 days',
        recommended: false,
        coverage: {
          medical: '$100,000',
          evacuation: '$50,000',
          baggage: '$5,000',
          cancellation: '$10,000',
          delay: '$1,000'
        },
        features: [
          'Maximum medical coverage',
          'All adventure activities covered',
          'Pre-existing conditions (limited)',
          'Trip interruption',
          'Rental car coverage',
          'COVID-19 coverage',
          'Emergency evacuation (air ambulance)',
          'VIP assistance services',
          'Concierge services',
          'Legal assistance'
        ]
      }
    ],

    covered: [
      'Medical emergencies and hospitalization',
      'Emergency evacuation and repatriation',
      'Trip cancellation or interruption',
      'Lost, stolen, or damaged baggage',
      'Flight delays and missed connections',
      'Personal accident coverage',
      'Personal liability',
      '24/7 emergency assistance'
    ],

    notCovered: [
      'Pre-existing medical conditions (unless declared)',
      'Intentional self-injury',
      'Illegal activities',
      'War or terrorism (standard plans)',
      'Extreme sports (basic plans)',
      'Travel to restricted areas',
      'Pregnancy-related issues (after 24 weeks)',
      'Mental health issues (unless specified)'
    ],

    claimProcess: [
      { step: 1, title: 'Report Incident', desc: 'Contact our 24/7 helpline immediately' },
      { step: 2, title: 'Documentation', desc: 'Gather required documents and receipts' },
      { step: 3, title: 'Submit Claim', desc: 'Fill and submit claim form online' },
      { step: 4, title: 'Review', desc: 'Our team reviews within 48 hours' },
      { step: 5, title: 'Settlement', desc: 'Claim settled within 7-10 working days' }
    ],

    emergencyContacts: {
      hotline: '+92-300-1234567',
      email: 'emergency@paktourzone.com',
      whatsapp: '+92-300-1234567',
      available: '24/7'
    }
  },

  photography: {
    id: 'photography',
    name: 'Photography Services',
    slug: 'photography',
    icon: '📸',
    tagline: 'Capture Every Moment',
    description: 'Professional travel photography for landscapes, portraits, and adventures—perfect for international travelers and special trips.',
    heroImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80',

    photographers: [
      {
        id: 'photo-1',
        name: 'Bilal Ahmed',
        specialization: 'Landscape & Travel',
        experience: '10 years',
        rating: 4.9,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        portfolio: '500+ tours documented',
        equipment: ['Canon 5D Mark IV', 'DJI Mavic 3 Pro', 'Professional lenses'],
        price: '$200/day'
      },
      {
        id: 'photo-2',
        name: 'Ayesha Malik',
        specialization: 'Portrait & Lifestyle',
        experience: '7 years',
        rating: 4.8,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
        portfolio: 'Honeymoon & family specialist',
        equipment: ['Sony A7R IV', 'Prime lenses', 'Studio lighting'],
        price: '$180/day'
      }
    ],

    packages: [
      {
        id: 'hourly',
        name: 'Hourly Coverage',
        price: '$50/hour',
        duration: 'Minimum 2 hours',
        features: [
          'Professional photographer',
          'High-resolution photos',
          '30-50 edited photos',
          'Online gallery',
          'Basic retouching',
          'Same-day highlights (5 photos)'
        ],
        bestFor: 'City tours, short sessions'
      },
      {
        id: 'daily',
        name: 'Full Day Coverage',
        price: '$200/day',
        duration: '8-10 hours',
        recommended: true,
        features: [
          'Professional photographer',
          'All day coverage',
          '200-300 edited photos',
          'Online gallery',
          'Professional editing',
          'Drone shots (if weather permits)',
          'Next-day preview (20 photos)',
          'USB drive with all photos'
        ],
        bestFor: 'Full day tours, events'
      },
      {
        id: 'tour',
        name: 'Complete Tour Package',
        price: '$150/day',
        duration: 'Multi-day tours',
        features: [
          'Dedicated photographer',
          'All days coverage',
          '500+ edited photos',
          'Video highlights',
          'Drone footage',
          'Professional editing',
          'Photo book (50 pages)',
          'USB & cloud storage',
          'Daily photo sharing'
        ],
        bestFor: 'Extended tours, expeditions'
      },
      {
        id: 'video',
        name: 'Video Documentation',
        price: '$300/day',
        duration: 'Custom',
        features: [
          'Professional videographer',
          '4K video recording',
          'Drone videography',
          'Professional editing',
          '5-10 min highlight reel',
          'Full footage provided',
          'Music and effects',
          'Multiple revisions'
        ],
        bestFor: 'Documentaries, special events'
      }
    ],

    services: [
      {
        name: 'Drone Photography',
        description: 'Aerial shots and videos with professional drones',
        price: '+$50/session',
        features: ['4K video', 'RAW photos', 'Experienced pilot', 'Weather dependent']
      },
      {
        name: 'Photo Editing',
        description: 'Professional post-processing and retouching',
        price: '$2/photo',
        features: ['Color correction', 'Retouching', 'Sky replacement', 'HDR processing']
      },
      {
        name: 'Photo Book',
        description: 'Premium quality printed photo books',
        price: '$80 (50 pages)',
        features: ['Professional design', 'Premium paper', 'Custom layout', 'Hardcover binding']
      },
      {
        name: 'Rush Delivery',
        description: 'Express editing and delivery',
        price: '+50% of package',
        features: ['24-48 hour delivery', 'Priority editing', 'Fast upload', 'Quick preview']
      }
    ],

    equipment: [
      'Professional DSLR/Mirrorless cameras',
      'Wide-angle to telephoto lenses',
      'DJI Mavic 3 Pro drones',
      '4K video cameras',
      'Gimbals and stabilizers',
      'Professional lighting',
      'Backup equipment'
    ],

    deliveryTimeline: {
      preview: '1-2 days (20-30 photos)',
      fullDelivery: '7-14 days',
      video: '14-21 days',
      photoBook: '21-30 days'
    }
  }
};

// Helper functions
export const getServiceBySlug = (slug) => {
  return servicesData[slug] || null;
};

export const getAllServices = () => {
  return Object.values(servicesData);
};

export const getServicesByCategory = (category) => {
  // Can be extended to filter services by category if needed
  return getAllServices();
};
