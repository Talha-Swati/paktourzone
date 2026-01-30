import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAllDestinations } from '../data/destinationsData';
import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import PageHero from '../components/common/PageHero';
import { MapPin, Clock, TrendingUp, Star, Users, Search, Filter } from 'lucide-react';

const Destinations = () => {
  const { isDarkMode } = useTheme();
  const allDestinations = getAllDestinations();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  // Filter and sort destinations
  const filteredDestinations = useMemo(() => {
    let filtered = allDestinations;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(dest =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(dest => dest.category === selectedCategory);
    }

    // Difficulty filter
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(dest => dest.difficulty === selectedDifficulty);
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.pricing.basic.price - b.pricing.basic.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [allDestinations, searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500';
      case 'moderate':
        return 'bg-yellow-500';
      case 'challenging':
        return 'bg-orange-500';
      case 'extreme':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case 'adventure':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'cultural':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'trekking':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  return (
    <PageLayout
      seo={{
        title: 'Northern Pakistan Destinations | Hunza, Skardu, Fairy Meadows',
        description: 'Compare destinations by difficulty, season, and ratings. Find the right place for your Pakistan tour with clear, traveler-friendly details.',
        keywords: 'Northern Pakistan destinations, Hunza Valley, Skardu, Fairy Meadows, Naran Kaghan, Pakistan travel',
        url: '/destinations'
      }}
      className="bg-gray-50 dark:bg-gray-900"
    >
      {/* Hero Section */}
      <PageHero
        title="Explore All Destinations"
        subtitle="Compare highlights, travel seasons, and difficulty to choose the perfect destination"
        isDarkMode={isDarkMode}
      >
        <div className="mt-8 text-sm text-blue-100">
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {allDestinations.length} Amazing Destinations
          </span>
        </div>
      </PageHero>

      {/* Filters Section */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="adventure">Adventure</option>
              <option value="cultural">Cultural</option>
              <option value="trekking">Trekking</option>
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Difficulty Levels</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="challenging">Challenging</option>
              <option value="extreme">Extreme</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600 dark:text-gray-400">Active filters:</span>
              {searchQuery && (
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  Search: {searchQuery}
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                  {selectedCategory}
                </span>
              )}
              {selectedDifficulty !== 'all' && (
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full">
                  {selectedDifficulty}
                </span>
              )}
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                }}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 py-6">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {filteredDestinations.length} of {allDestinations.length} destinations
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="container mx-auto px-4 pb-16">
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20">
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No destinations found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your filters or search query
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destination/${destination.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.heroImage}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80`;
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBadgeColor(destination.category)}`}>
                      {destination.category}
                    </span>
                  </div>

                  {/* Difficulty Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 ${getDifficultyColor(destination.difficulty)} text-white rounded-full text-xs font-semibold capitalize`}>
                      {destination.difficulty}
                    </span>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {destination.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 italic">
                    {destination.tagline}
                  </p>

                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{destination.location}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {destination.description}
                  </p>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {destination.rating}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        ({destination.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Starting from</p>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        ${destination.pricing.basic.price}
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-blue-600 text-white rounded-lg group-hover:bg-blue-700 transition-colors">
                      View Details
                    </div>
                  </div>

                  {/* Highlights Preview */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Top Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                        >
                          {highlight.split(' - ')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

    </PageLayout>
  );
};

export default Destinations;
