import { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import { reviews, ratings } from '../data/reviewsData';

// Icons
import { FaStar, FaQuoteLeft, FaUser, FaCalendarAlt, FaMapMarkerAlt, FaThumbsUp, FaFilter } from 'react-icons/fa';


const Reviews = () => {
  const { isDarkMode } = useTheme();
  const [selectedRating, setSelectedRating] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  // Calculate average rating
  const averageRating = useMemo(() => {
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  }, []);

  // SEO structured data
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PakTourZone",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "datePublished": review.date,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.review
    }))
  }), [averageRating]);

  // Filter and sort reviews
  const filteredReviews = useMemo(() => {
    let filtered = reviews;

    // Filter by rating
    if (selectedRating !== 'all') {
      filtered = filtered.filter(review => review.rating === parseInt(selectedRating));
    }

    // Sort reviews
    if (sortBy === 'recent') {
      filtered = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'highest') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'popular') {
      filtered = [...filtered].sort((a, b) => b.likes - a.likes);
    }

    return filtered;
  }, [selectedRating, sortBy]);

  // Render star rating
  const StarRating = ({ rating, size = 'text-base' }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`${size} ${index < rating ? 'text-yellow-500' : isDarkMode ? 'text-gray-600' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  return (
    <PageLayout
      seo={{
        title: "Customer Reviews & Testimonials - PakTourZone",
        description: `Read ${reviews.length} verified customer reviews. ${averageRating}/5 stars rating. Discover what travelers say about our Northern Pakistan tours and experiences.`,
        keywords: "PakTourZone reviews, customer testimonials, tour reviews, Pakistan travel reviews, tourist feedback",
        url: "/reviews",
        structuredData
      }}
    >
      {/* Hero Section */}
        <section
          className={`relative py-20 overflow-hidden ${
            isDarkMode ? 'bg-linear-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-linear-to-br from-white via-[#EBF8FF] to-white'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
                } bg-clip-text text-transparent`}
              >
                Customer Reviews
              </h1>
              <p className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                Real experiences from travelers who explored Northern Pakistan with us
              </p>

              {/* Overall Rating Card */}
              <div
                className={`max-w-2xl mx-auto p-8 rounded-2xl border ${
                  isDarkMode ? 'bg-[#141A1F] border-[rgba(34,211,238,0.2)]' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="text-center">
                    <div className={`text-6xl font-bold mb-2 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                      {averageRating}
                    </div>
                    <StarRating rating={Math.round(parseFloat(averageRating))} size="text-xl" />
                    <p className={`mt-2 ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                      Based on {reviews.length} reviews
                    </p>
                  </div>

                  <div className="flex-1 w-full max-w-md">
                    {ratings.map((rating) => (
                      <div key={rating.stars} className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-1 w-16">
                          <span className={`text-sm ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                            {rating.stars}
                          </span>
                          <FaStar className="text-yellow-500 text-sm" />
                        </div>
                        <div className={`flex-1 h-2 rounded-full ${isDarkMode ? 'bg-[#1E242B]' : 'bg-gray-200'}`}>
                          <div
                            className="h-2 rounded-full bg-linear-to-r from-yellow-500 to-yellow-400"
                            style={{ width: `${rating.percentage}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm w-12 text-right ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                          {rating.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className={`py-4 backdrop-blur-lg border-b ${isDarkMode ? 'bg-[#0B0C0E]/95 border-[#1E242B]' : 'bg-white/95 border-gray-200'}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Rating Filter */}
              <div className="flex flex-wrap gap-2 items-center">
                <FaFilter className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                {['all', '5', '4', '3', '2', '1'].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                      selectedRating === rating
                        ? isDarkMode
                          ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E]'
                          : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white'
                        : isDarkMode
                        ? 'bg-[#141A1F] text-[#C4CCD4] border border-[rgba(34,211,238,0.2)] hover:border-[#22D3EE]'
                        : 'bg-white text-[#4A5568] border border-gray-200 hover:border-blue-400'
                    }`}
                  >
                    {rating === 'all' ? 'All' : `${rating} ⭐`}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all border ${
                  isDarkMode
                    ? 'bg-[#141A1F] text-[#C4CCD4] border-[rgba(34,211,238,0.2)]'
                    : 'bg-white text-[#4A5568] border-gray-200'
                } focus:outline-none`}
              >
                <option value="recent">Most Recent</option>
                <option value="highest">Highest Rating</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            <div className={`mt-4 text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
              Showing {filteredReviews.length} {filteredReviews.length === 1 ? 'review' : 'reviews'}
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-xl ${
                    isDarkMode
                      ? 'bg-[#141A1F] border-[rgba(34,211,238,0.1)] hover:border-[rgba(34,211,238,0.3)]'
                      : 'bg-white border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className={`font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                            {review.name}
                          </h3>
                          {review.verified && (
                            <span className="px-2 py-0.5 bg-green-500/20 text-green-500 text-xs rounded-full">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <FaMapMarkerAlt className={`text-xs ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} />
                          <span className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                            {review.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>

                  {/* Tour Info */}
                  <div className={`mb-4 p-3 rounded-lg ${isDarkMode ? 'bg-[#0F1419]' : 'bg-gray-50'}`}>
                    <span className={`text-sm ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                      Tour: <span className="font-semibold">{review.tour}</span>
                    </span>
                  </div>

                  {/* Review Text */}
                  <div className="relative mb-4">
                    <FaQuoteLeft className={`absolute -top-2 -left-2 text-2xl ${isDarkMode ? 'text-[#22D3EE]/20' : 'text-[#3B82F6]/20'}`} />
                    <p className={`pl-6 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                      {review.review}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t ${isDarkMode ? 'border-[#1E242B]' : 'border-gray-200'}">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`} />
                      <span className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                        {new Date(review.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-colors ${
                          isDarkMode
                            ? 'hover:bg-[#1E242B] text-[#8B949E]'
                            : 'hover:bg-gray-100 text-[#6B7280]'
                        }`}
                      >
                        <FaThumbsUp className="text-sm" />
                        <span className="text-sm">{review.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          className={`py-16 ${
            isDarkMode ? 'bg-linear-to-r from-[#0F1419] to-[#141A1F]' : 'bg-linear-to-r from-gray-50 to-blue-50'
          }`}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
              Ready to Create Your Own Story?
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
              Join thousands of satisfied travelers who have explored Northern Pakistan with us
            </p>
            <a
              href="/destinations"
              className={`inline-block px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
                isDarkMode
                  ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                  : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
              } transform hover:scale-105`}
            >
              Explore Our Tours
            </a>
          </div>
        </section>

        {/* Footer */}
    </PageLayout>
  );
};

export default Reviews;
