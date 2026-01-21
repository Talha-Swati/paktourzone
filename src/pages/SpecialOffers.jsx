import { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/common/SEO';

// Layout Components
import TopBar from '../components/layout/TopBar';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Icons
import { FaClock, FaUsers, FaMapMarkerAlt, FaStar, FaTag, FaCalendarAlt, FaCheckCircle, FaArrowRight, FaFire } from 'react-icons/fa';

// Special Offer Packages with Discounts
const specialOfferPackages = [
  {
    id: 'hunza-winter-special',
    name: 'Hunza Valley Winter Special',
    originalPrice: 1200,
    offerPrice: 899,
    discount: 25,
    duration: '7 Days / 6 Nights',
    difficulty: 'Easy',
    groupSize: '4-12 people',
    destination: 'Hunza Valley',
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    validUntil: '2026-02-28',
    badge: 'Limited Time',
    description: 'Experience the magical winter beauty of Hunza Valley at an unbeatable price!',
    link: '/destinations/hunza'
  },
  {
    id: 'skardu-adventure-deal',
    name: 'Skardu Adventure Deal',
    originalPrice: 1500,
    offerPrice: 1125,
    discount: 25,
    duration: '8 Days / 7 Nights',
    difficulty: 'Moderate',
    groupSize: '6-15 people',
    destination: 'Skardu & Baltistan',
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    validUntil: '2026-03-15',
    badge: 'Hot Deal',
    description: 'Explore Skardu\'s breathtaking landscapes with this exclusive adventure package!',
    link: '/destinations/skardu'
  },
  {
    id: 'fairy-meadows-trek',
    name: 'Fairy Meadows Trek Special',
    originalPrice: 1800,
    offerPrice: 1260,
    discount: 30,
    duration: '10 Days / 9 Nights',
    difficulty: 'Challenging',
    groupSize: '4-10 people',
    destination: 'Fairy Meadows',
    rating: 5.0,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    validUntil: '2026-04-30',
    badge: 'Best Value',
    description: 'Trek to the base of Nanga Parbat with our most popular discounted package!',
    link: '/trips/adventure'
  },
  {
    id: 'naran-kaghan-family',
    name: 'Naran Kaghan Family Package',
    originalPrice: 950,
    offerPrice: 713,
    discount: 25,
    duration: '5 Days / 4 Nights',
    difficulty: 'Easy',
    groupSize: '4-20 people',
    destination: 'Naran Kaghan',
    rating: 4.7,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    validUntil: '2026-05-31',
    badge: 'Family Special',
    description: 'Perfect family getaway to Naran Kaghan valley with amazing discounts!',
    link: '/destinations/naran-kaghan'
  }
];

const SpecialOffers = () => {
  const { isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const themeDropdownRef = useRef(null);

  // SEO structured data
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "PakTourZone Special Offers",
    "description": "Exclusive tour package deals and discounts for Northern Pakistan",
    "itemListElement": specialOfferPackages.map((pkg, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "itemOffered": {
        "@type": "TouristTrip",
        "name": pkg.name,
        "description": pkg.description
      },
      "price": pkg.offerPrice,
      "priceCurrency": "USD",
      "priceValidUntil": pkg.validUntil,
      "availability": "https://schema.org/InStock"
    }))
  }), []);

  const topBarProps = useMemo(() => ({
    isDarkMode,
    themeMode,
    setThemeMode,
    themeDropdownOpen,
    setThemeDropdownOpen,
    themeDropdownRef
  }), [isDarkMode, themeMode, themeDropdownOpen, setThemeDropdownOpen]);

  const navbarProps = useMemo(() => ({
    isDarkMode,
    mobileMenuOpen,
    setMobileMenuOpen
  }), [isDarkMode, mobileMenuOpen]);

  // Filter packages
  const filteredPackages = useMemo(() => {
    if (selectedFilter === 'all') return specialOfferPackages;
    if (selectedFilter === 'high-discount') return specialOfferPackages.filter(pkg => pkg.discount >= 30);
    if (selectedFilter === 'family') return specialOfferPackages.filter(pkg => pkg.difficulty === 'Easy');
    if (selectedFilter === 'adventure') return specialOfferPackages.filter(pkg => pkg.difficulty === 'Challenging');
    return specialOfferPackages;
  }, [selectedFilter]);

  // Calculate days remaining
  const getDaysRemaining = (validUntil) => {
    const today = new Date();
    const endDate = new Date(validUntil);
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <>
      <SEO 
        title="Special Offers & Deals - PakTourZone"
        description="Exclusive tour package deals and discounts for Northern Pakistan. Save up to 30% on Hunza, Skardu, Fairy Meadows, and Naran Kaghan tours. Limited time offers!"
        keywords="Pakistan tour deals, Hunza discount, Skardu offer, tour package deals, Northern Pakistan discount"
        url="/special-offers"
        structuredData={structuredData}
      />

      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDarkMode ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]' : 'bg-gradient-to-b from-white to-[#F8FAFB] text-[#1F2937]'
        }`}
      >
        <TopBar {...topBarProps} />
        <Navbar {...navbarProps} />

        {/* Hero Section */}
        <section
          className={`relative py-20 overflow-hidden ${
            isDarkMode ? 'bg-gradient-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-gradient-to-br from-white via-[#EBF8FF] to-white'
          }`}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500 mb-6">
                <FaFire className="text-red-500" />
                <span className={`text-sm font-semibold ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
                  Limited Time Offers
                </span>
              </div>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
                } bg-clip-text text-transparent`}
              >
                Exclusive Tour Deals
              </h1>
              <p className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                Save up to 30% on our most popular Northern Pakistan tour packages. Limited slots available!
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div
                  className={`p-4 rounded-xl border ${
                    isDarkMode ? 'bg-[#141A1F] border-[rgba(34,211,238,0.2)]' : 'bg-white border-blue-200'
                  }`}
                >
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                    {specialOfferPackages.length}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>Active Deals</div>
                </div>
                <div
                  className={`p-4 rounded-xl border ${
                    isDarkMode ? 'bg-[#141A1F] border-[rgba(34,211,238,0.2)]' : 'bg-white border-blue-200'
                  }`}
                >
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>30%</div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>Max Discount</div>
                </div>
                <div
                  className={`p-4 rounded-xl border ${
                    isDarkMode ? 'bg-[#141A1F] border-[rgba(34,211,238,0.2)]' : 'bg-white border-blue-200'
                  }`}
                >
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>$540</div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>Max Savings</div>
                </div>
                <div
                  className={`p-4 rounded-xl border ${
                    isDarkMode ? 'bg-[#141A1F] border-[rgba(34,211,238,0.2)]' : 'bg-white border-blue-200'
                  }`}
                >
                  <div className={`text-2xl font-bold text-red-500`}>
                    {Math.min(...specialOfferPackages.map(p => getDaysRemaining(p.validUntil)))}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>Days Left</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className={`py-6 border-b ${isDarkMode ? 'border-[#1E242B]' : 'border-gray-200'}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { id: 'all', label: 'All Offers', icon: <FaTag /> },
                { id: 'high-discount', label: 'High Discount (30%+)', icon: <FaFire /> },
                { id: 'family', label: 'Family Friendly', icon: <FaUsers /> },
                { id: 'adventure', label: 'Adventure', icon: <FaMapMarkerAlt /> }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedFilter === filter.id
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] shadow-lg'
                        : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-lg'
                      : isDarkMode
                      ? 'bg-[#141A1F] text-[#C4CCD4] border border-[rgba(34,211,238,0.2)] hover:border-[#22D3EE]'
                      : 'bg-white text-[#4A5568] border border-gray-200 hover:border-blue-400'
                  }`}
                >
                  {filter.icon}
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {filteredPackages.map((pkg) => {
                const daysLeft = getDaysRemaining(pkg.validUntil);
                const savings = pkg.originalPrice - pkg.offerPrice;

                return (
                  <div
                    key={pkg.id}
                    className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
                      isDarkMode
                        ? 'bg-[#141A1F] border border-[rgba(34,211,238,0.1)] hover:border-[rgba(34,211,238,0.3)]'
                        : 'bg-white border border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-[#0B0C0E]' : 'from-gray-900'} to-transparent z-10`}></div>
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />

                      {/* Discount Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-red-500 rounded-lg px-3 py-2">
                          <div className="text-2xl font-bold text-white">{pkg.discount}%</div>
                          <div className="text-xs text-white">OFF</div>
                        </div>
                      </div>

                      {/* Badge */}
                      {pkg.badge && (
                        <div className="absolute top-4 left-4 z-20">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            isDarkMode
                              ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E]'
                              : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white'
                          }`}>
                            {pkg.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3
                        className={`text-xl font-bold mb-3 group-hover:text-[#22D3EE] transition-colors ${
                          isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'
                        }`}
                      >
                        {pkg.name}
                      </h3>

                      {/* Description */}
                      <p className={`text-sm mb-4 ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                        {pkg.description}
                      </p>

                      {/* Details */}
                      <div className={`space-y-2 mb-4 text-sm ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                        <div className="flex items-center gap-2">
                          <FaClock className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                          <span>{pkg.destination}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaUsers className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                          <span>{pkg.groupSize}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaStar className="text-yellow-500" />
                          <span>{pkg.rating} ({pkg.reviews} reviews)</span>
                        </div>
                      </div>

                      {/* Countdown */}
                      <div className={`p-3 rounded-lg mb-4 ${isDarkMode ? 'bg-red-500/10 border border-red-500/30' : 'bg-red-50 border border-red-200'}`}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-red-500 font-semibold flex items-center gap-2">
                            <FaCalendarAlt />
                            Expires in {daysLeft} days
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <span className={`text-2xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                            ${pkg.offerPrice}
                          </span>
                          <span className={`text-sm line-through ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                            ${pkg.originalPrice}
                          </span>
                        </div>
                        <div className={`text-sm mt-1 ${isDarkMode ? 'text-[#4DBBFF]' : 'text-green-600'}`}>
                          💰 Save ${savings}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        to={pkg.link}
                        className={`block w-full py-3 rounded-lg font-bold text-center transition-all duration-300 ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                            : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
                        } transform hover:scale-105`}
                      >
                        View Details <FaArrowRight className="inline ml-2" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Book Now Section */}
        <section
          className={`py-16 ${
            isDarkMode ? 'bg-gradient-to-r from-[#0F1419] to-[#141A1F]' : 'bg-gradient-to-r from-gray-50 to-blue-50'
          }`}
        >
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
              Why Book Now?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className={`text-4xl mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                  <FaTag className="mx-auto" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                  Best Price Guarantee
                </h3>
                <p className={isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}>
                  Lowest prices guaranteed or we'll match it
                </p>
              </div>
              <div className="text-center">
                <div className={`text-4xl mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                  <FaCheckCircle className="mx-auto" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                  Instant Confirmation
                </h3>
                <p className={isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}>
                  Book now and receive instant confirmation
                </p>
              </div>
              <div className="text-center">
                <div className={`text-4xl mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                  <FaCalendarAlt className="mx-auto" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                  Flexible Booking
                </h3>
                <p className={isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}>
                  Free cancellation up to 7 days before departure
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default SpecialOffers;
