// Navigation items configuration
export const getNavItems = () => [
  { name: "Home", path: "/" },
  { 
    name: "Tours", 
    path: "/tours", 
    hasDropdown: true,
    dropdownItems: [
      { name: "Adventure Tours", path: "/trip/adventure", icon: "🏔️" },
      { name: "Family Packages", path: "/trip/family", icon: "👨‍👩‍👧‍👦" },
      { name: "Honeymoon Specials", path: "/trip/honeymoon", icon: "💑" },
      { name: "Corporate Tours", path: "/trip/corporate", icon: "💼" },
      { name: "Customized Tours", path: "/custom-tour", icon: "⚙️" },
      { name: "Budget Tours", path: "/trip/budget", icon: "💰" },
    ]
  },
  { 
    name: "Destinations", 
    path: "/destinations",
    hasDropdown: true,
    dropdownItems: [
      { name: "Hunza Valley", path: "/destination/hunza-valley", icon: "🏔️" },
      { name: "Skardu & Baltistan", path: "/destination/skardu", icon: "⛰️" },
      { name: "Swat Valley", path: "/destination/swat-valley", icon: "🌲" },
      { name: "Naran Kaghan", path: "/destination/naran-kaghan", icon: "🏞️" },
      { name: "Fairy Meadows", path: "/destination/fairy-meadows", icon: "🌸" },
      { name: "Siran Valley", path: "/destination/siran-valley", icon: "🌿" },
      { name: "K2 Base Camp", path: "/destination/k2-base-camp", icon: "🗻" },
      { name: "View All Destinations", path: "/destinations", icon: "🗺️" },
    ]
  },
  { 
    name: "Services", 
    path: "/services",
    hasDropdown: true,
    dropdownItems: [
      { name: "Hotel Booking", path: "/services/hotels", icon: "🏨" },
      { name: "Transport Services", path: "/services/transport", icon: "🚐" },
      { name: "Tour Guides", path: "/services/guides", icon: "👨‍🏫" },
      { name: "Visa Assistance", path: "/services/visa", icon: "📋" },
      { name: "Travel Insurance", path: "/services/insurance", icon: "🛡️" },
      { name: "Photography Services", path: "/services/photography", icon: "📸" },
    ]
  },
  { name: "Special Offers", path: "/offers", badge: "HOT" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reviews", path: "/reviews" },
  { name: "Travel Guide", path: "/services/guides" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// Hero slider images
export const heroImages = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', // Mountain landscape
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80', // Mountain peak
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', // Valley
  'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=1920&q=80', // Snow mountains
];
