/**
 * Centralized Constants for PakTourZone
 * Single source of truth for shared data across the application
 */

// Navigation Links
export const QUICK_LINKS = [
  { name: 'Tours', path: '/tours' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

// Popular Destinations
export const POPULAR_DESTINATIONS = [
  { name: 'Hunza Valley', slug: 'hunza-valley' },
  { name: 'Skardu', slug: 'skardu' },
  { name: 'Swat Valley', slug: 'swat-valley' },
  { name: 'Fairy Meadows', slug: 'fairy-meadows' }
];

// Contact Information
export const CONTACT_INFO = {
  email: 'info@paktourzone.com',
  phone: '+92 300 1234567',
  location: 'Islamabad, Pakistan'
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/paktourzone',
  instagram: 'https://instagram.com/paktourzone',
  twitter: 'https://twitter.com/paktourzone',
  whatsapp: '+923001234567'
};

// Company Information
export const COMPANY_INFO = {
  name: 'PakTourZone',
  tagline: 'Explore Pakistan\'s breathtaking beauty with expert guides',
  description: 'Your trusted partner for unforgettable adventures across Pakistan\'s most stunning destinations',
  website: 'https://paktourzone.com',
  copyright: '© 2026 PakTourZone. All rights reserved.',
  poweredBy: {
    name: 'Zentredge',
    url: 'https://zentredge.com'
  }
};

// Legal Links
export const LEGAL_LINKS = [
  { name: 'Terms & Conditions', path: '/terms-conditions' },
  { name: 'Privacy Policy', path: '/privacy-policy' }
];

// Tour Categories
export const TOUR_CATEGORIES = [
  {
    id: 'family',
    name: 'Family Packages',
    path: '/trip/family',
    description: 'Perfect adventures for families with children'
  },
  {
    id: 'honeymoon',
    name: 'Honeymoon Tours',
    path: '/trip/honeymoon',
    description: 'Romantic escapes for newlyweds'
  },
  {
    id: 'adventure',
    name: 'Adventure Tours',
    path: '/trip/adventure',
    description: 'Thrilling experiences for adrenaline seekers'
  },
  {
    id: 'corporate',
    name: 'Corporate Tours',
    path: '/trip/corporate',
    description: 'Team building and corporate retreats'
  },
  {
    id: 'budget',
    name: 'Budget Tours',
    path: '/trip/budget',
    description: 'Affordable adventures without compromising quality'
  }
];

// Service Categories
export const SERVICE_CATEGORIES = [
  { id: 'hotels', name: 'Hotel Booking', path: '/services/hotels' },
  { id: 'transport', name: 'Transport Services', path: '/services/transport' },
  { id: 'guides', name: 'Tour Guides', path: '/services/guides' },
  { id: 'visa', name: 'Visa Assistance', path: '/services/visa' },
  { id: 'insurance', name: 'Travel Insurance', path: '/services/insurance' },
  { id: 'photography', name: 'Photography Services', path: '/services/photography' }
];

// Theme Configuration
export const THEME_CONFIG = {
  dark: {
    bg: 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419]',
    text: 'text-[#E0E7EE]',
    primary: 'text-[#22D3EE]',
    secondary: 'text-[#C4CCD4]',
    border: 'border-[rgba(30,36,43,0.5)]'
  },
  light: {
    bg: 'bg-gradient-to-b from-white to-[#F8FAFB]',
    text: 'text-[#1F2937]',
    primary: 'text-[#3B82F6]',
    secondary: 'text-[#6B7280]',
    border: 'border-[rgba(59,130,246,0.2)]'
  }
};

// API Endpoints (if needed in future)
export const API_ENDPOINTS = {
  tours: '/api/tours',
  destinations: '/api/destinations',
  bookings: '/api/bookings',
  contact: '/api/contact'
};

// Default export for convenience
export default {
  QUICK_LINKS,
  POPULAR_DESTINATIONS,
  CONTACT_INFO,
  SOCIAL_LINKS,
  COMPANY_INFO,
  LEGAL_LINKS,
  TOUR_CATEGORIES,
  SERVICE_CATEGORIES,
  THEME_CONFIG,
  API_ENDPOINTS
};
