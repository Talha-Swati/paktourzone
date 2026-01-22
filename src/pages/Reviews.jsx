import { useState, useMemo } from 'react';
import { useNavbarSetup } from '../hooks';
import SEO from '../components/common/SEO';

// Layout Components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Icons
import { FaStar, FaQuoteLeft, FaUser, FaCalendarAlt, FaMapMarkerAlt, FaThumbsUp, FaFilter } from 'react-icons/fa';

// Customer Reviews Data
const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    date: '2026-01-15',
    tour: 'Hunza Valley Winter Special',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=22D3EE&color=fff',
    review: 'Absolutely breathtaking experience! The tour was perfectly organized, and our guide was incredibly knowledgeable about the local culture and history. Hunza in winter is magical!',
    likes: 24,
    verified: true
  },
  {
    id: 2,
    name: 'Ahmed Khan',
    location: 'London, UK',
    rating: 5,
    date: '2026-01-10',
    tour: 'Skardu Adventure Deal',
    avatar: 'https://ui-avatars.com/api/?name=Ahmed+Khan&background=4DBBFF&color=fff',
    review: 'Best tour company I\'ve ever worked with! Every detail was handled professionally, from pickup to drop-off. The accommodations were excellent, and the views were stunning.',
    likes: 31,
    verified: true
  },
  {
    id: 3,
    name: 'Emma Wilson',
    location: 'Sydney, Australia',
    rating: 5,
    date: '2026-01-05',
    tour: 'Fairy Meadows Trek Special',
    avatar: 'https://ui-avatars.com/api/?name=Emma+Wilson&background=60A5FA&color=fff',
    review: 'The trek to Fairy Meadows was challenging but incredibly rewarding. PakTourZone provided excellent support throughout. The sunrise view of Nanga Parbat is something I\'ll never forget!',
    likes: 45,
    verified: true
  },
  {
    id: 4,
    name: 'Muhammad Ali',
    location: 'Dubai, UAE',
    rating: 4,
    date: '2025-12-28',
    tour: 'Naran Kaghan Family Package',
    avatar: 'https://ui-avatars.com/api/?name=Muhammad+Ali&background=22D3EE&color=fff',
    review: 'Great family-friendly tour! My kids loved every moment. The only minor issue was the hotel breakfast variety, but everything else was perfect. Highly recommended for families.',
    likes: 18,
    verified: true
  },
  {
    id: 5,
    name: 'Lisa Chen',
    location: 'Singapore',
    rating: 5,
    date: '2025-12-20',
    tour: 'Hunza Cultural Experience',
    avatar: 'https://ui-avatars.com/api/?name=Lisa+Chen&background=4DBBFF&color=fff',
    review: 'Immersing myself in Hunza\'s culture was an unforgettable experience. The local hospitality was warm, and the cultural activities were authentic. Worth every penny!',
    likes: 27,
    verified: true
  },
  {
    id: 6,
    name: 'David Martinez',
    location: 'Toronto, Canada',
    rating: 5,
    date: '2025-12-15',
    tour: 'K2 Base Camp Expedition',
    avatar: 'https://ui-avatars.com/api/?name=David+Martinez&background=60A5FA&color=fff',
    review: 'Epic adventure! The expedition was well-planned with experienced guides. Safety was the top priority, and the scenery was beyond spectacular. A bucket list must!',
    likes: 52,
    verified: true
  },
  {
    id: 7,
    name: 'Fatima Abbas',
    location: 'Karachi, Pakistan',
    rating: 5,
    date: '2025-12-10',
    tour: 'Skardu & Deosai Safari',
    avatar: 'https://ui-avatars.com/api/?name=Fatima+Abbas&background=22D3EE&color=fff',
    review: 'As a Pakistani, I\'m proud to say PakTourZone showcases our northern beauty perfectly. The Deosai plains are breathtaking, and the service was top-notch.',
    likes: 33,
    verified: true
  },
  {
    id: 8,
    name: 'James Anderson',
    location: 'Manchester, UK',
    rating: 4,
    date: '2025-12-05',
    tour: 'Swat Valley Heritage Tour',
    avatar: 'https://ui-avatars.com/api/?name=James+Anderson&background=4DBBFF&color=fff',
    review: 'Swat Valley is incredibly beautiful with rich history. The tour was informative and well-paced. Minor delays due to weather, but the team handled it professionally.',
    likes: 21,
    verified: true
  },
  {
    id: 9,
    name: 'Aisha Rahman',
    location: 'Dhaka, Bangladesh',
    rating: 5,
    date: '2025-11-30',
    tour: 'Hunza Cherry Blossom Tour',
    avatar: 'https://ui-avatars.com/api/?name=Aisha+Rahman&background=60A5FA&color=fff',
    review: 'The cherry blossoms in Hunza are a sight to behold! Perfect timing, great photography opportunities, and wonderful hospitality. I\'ll definitely be back!',
    likes: 39,
    verified: true
  },
  {
    id: 10,
    name: 'Robert Smith',
    location: 'Los Angeles, USA',
    rating: 5,
    date: '2025-11-25',
    tour: 'Karakoram Highway Adventure',
    avatar: 'https://ui-avatars.com/api/?name=Robert+Smith&background=22D3EE&color=fff',
    review: 'Driving the KKH was a dream come true! The landscapes are mind-blowing, and the journey was smooth thanks to excellent planning. An adventure of a lifetime!',
    likes: 41,
    verified: true
  },
  {
    id: 11,
    name: 'Zara Khan',
    location: 'Lahore, Pakistan',
    rating: 5,
    date: '2025-11-20',
    tour: 'Northern Pakistan Complete Tour',
    avatar: 'https://ui-avatars.com/api/?name=Zara+Khan&background=4DBBFF&color=fff',
    review: 'Comprehensive tour covering all major destinations. Great value for money. The team was professional, friendly, and always available to help. Highly recommend!',
    likes: 29,
    verified: true
  },
  {
    id: 12,
    name: 'Michael Brown',
    location: 'Melbourne, Australia',
    rating: 4,
    date: '2025-11-15',
    tour: 'Baltistan Explorer',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Brown&background=60A5FA&color=fff',
    review: 'Baltistan is a hidden gem! The forts, lakes, and mountains are stunning. The tour could benefit from more free time for photography, but overall excellent.',
    likes: 22,
    verified: true
  }
];

const ratings = [
  { stars: 5, count: 10, percentage: 83 },
  { stars: 4, count: 2, percentage: 17 },
  { stars: 3, count: 0, percentage: 0 },
  { stars: 2, count: 0, percentage: 0 },
  { stars: 1, count: 0, percentage: 0 }
];

const Reviews = () => {
  const { navbarProps, isDarkMode } = useNavbarSetup();
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
    <>
      <SEO
        title="Customer Reviews & Testimonials - PakTourZone"
        description={`Read ${reviews.length} verified customer reviews. ${averageRating}/5 stars rating. Discover what travelers say about our Northern Pakistan tours and experiences.`}
        keywords="PakTourZone reviews, customer testimonials, tour reviews, Pakistan travel reviews, tourist feedback"
        url="/reviews"
        structuredData={structuredData}
      />

      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDarkMode ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]' : 'bg-gradient-to-b from-white to-[#F8FAFB] text-[#1F2937]'
        }`}
      >
        <Navbar {...navbarProps} />

        {/* Hero Section */}
        <section
          className={`relative py-20 overflow-hidden ${
            isDarkMode ? 'bg-gradient-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-gradient-to-br from-white via-[#EBF8FF] to-white'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
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
                            className="h-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"
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
                          ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E]'
                          : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white'
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
            isDarkMode ? 'bg-gradient-to-r from-[#0F1419] to-[#141A1F]' : 'bg-gradient-to-r from-gray-50 to-blue-50'
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
                  ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                  : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
              } transform hover:scale-105`}
            >
              Explore Our Tours
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default Reviews;
