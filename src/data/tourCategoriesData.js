import {
  FaUsers,
  FaHeart,
  FaMountain,
  FaBriefcase,
  FaDollarSign
} from 'react-icons/fa';

export const baseTourCategories = [
  {
    id: 'all',
    name: 'All Tours',
    icon: FaMountain,
    count: 5,
    colorDark: 'from-[#22D3EE] to-[#4DBBFF]',
    colorLight: 'from-[#3B82F6] to-[#60A5FA]'
  },
  {
    id: 'family',
    name: 'Family Packages',
    icon: FaUsers,
    count: 12,
    path: '/trip/family',
    color: 'from-green-400 to-green-600',
    description: 'Perfect adventures for families with children',
    features: ['Child friendly', 'Safe & Comfortable', 'Educational'],
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80'
  },
  {
    id: 'honeymoon',
    name: 'Honeymoon Tours',
    icon: FaHeart,
    count: 8,
    path: '/trip/honeymoon',
    color: 'from-pink-400 to-red-500',
    description: 'Romantic escapes for newlyweds',
    features: ['Luxury Stays', 'Private Experiences', 'Scenic Views'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
  },
  {
    id: 'adventure',
    name: 'Adventure Tours',
    icon: FaMountain,
    count: 15,
    path: '/trip/adventure',
    color: 'from-orange-400 to-red-600',
    description: 'Thrilling experiences for adrenaline seekers',
    features: ['Trekking', 'Camping', 'Mountain Climbing'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
  },
  {
    id: 'corporate',
    name: 'Corporate Tours',
    icon: FaBriefcase,
    count: 6,
    path: '/trip/corporate',
    color: 'from-blue-400 to-indigo-600',
    description: 'Team building and corporate retreats',
    features: ['Team Building', 'Conference Facilities', 'Custom Planning'],
    image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&q=80'
  },
  {
    id: 'budget',
    name: 'Budget Tours',
    icon: FaDollarSign,
    count: 10,
    path: '/trip/budget',
    color: 'from-yellow-400 to-orange-500',
    description: 'Affordable adventures without compromising quality',
    features: ['Budget Friendly', 'Shared Transport', 'Value for Money'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80'
  }
];
