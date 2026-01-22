import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { getDestinationBySlug } from '../data/destinationsData';
import { 
  FaMapMarkerAlt, FaClock, FaUsers, FaStar, FaCheck, FaTimes, 
  FaChevronLeft, FaChevronRight, FaCalendar, FaShieldAlt,
  FaMountain, FaHiking, FaCamera, FaUtensils, FaBed, FaCar
} from 'react-icons/fa';

const DestinationDetail = React.memo(() => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isDarkMode, themeMode, setThemeMode } = useTheme();
  
  const [destination, setDestination] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('premium');
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedItineraryDuration, setSelectedItineraryDuration] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullItinerary, setShowFullItinerary] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  
  const languageDropdownRef = useRef(null);
  const themeDropdownRef = useRef(null);

  // Load destination data
  useEffect(() => {
    const data = getDestinationBySlug(slug);
    if (data) {
      setDestination(data);
      
      // Set default duration based on available durations
      if (data.pricingByDuration) {
        const durations = Object.keys(data.pricingByDuration);
        const defaultDuration = durations.find(d => d.includes('7')) || durations[Math.floor(durations.length / 2)] || durations[0];
        setSelectedDuration(defaultDuration.replace('days', ''));
      }
      
      if (data.itineraryByDuration) {
        const durations = Object.keys(data.itineraryByDuration);
        const defaultDuration = durations.find(d => d.includes('7')) || durations[Math.floor(durations.length / 2)] || durations[0];
        setSelectedItineraryDuration(defaultDuration.replace('days', ''));
      }
    } else {
      // Redirect to home if destination not found
      navigate('/');
    }
  }, [slug, navigate]);

  // Get available durations for pricing
  const getAvailablePricingDurations = () => {
    if (!destination?.pricingByDuration) return [];
    return Object.keys(destination.pricingByDuration).map(key => key.replace('days', ''));
  };

  // Get available durations for itinerary
  const getAvailableItineraryDurations = () => {
    if (!destination?.itineraryByDuration) return [];
    return Object.keys(destination.itineraryByDuration).map(key => key.replace('days', ''));
  };

  // Auto-rotate gallery images
  useEffect(() => {
    if (!destination?.gallery) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === destination.gallery.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [destination]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setLanguageDropdownOpen(false);
      }
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!destination) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-[#0B0C0E] text-[#E0E7EE]' : 'bg-white text-[#1F2937]'
      }`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#22D3EE] mx-auto mb-4"></div>
          <p className="text-lg">Loading destination details...</p>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return 'bg-green-500';
      case 'moderate': return 'bg-yellow-500';
      case 'hard': return 'bg-orange-500';
      case 'extreme': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === destination.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? destination.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className={`min-h-screen ${
      isDarkMode ? 'bg-[#0B0C0E] text-[#E0E7EE]' : 'bg-white text-[#1F2937]'
    }`}>
      {/* Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        themeDropdownOpen={themeDropdownOpen}
        setThemeDropdownOpen={setThemeDropdownOpen}
        themeDropdownRef={themeDropdownRef}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero Section with Image Gallery */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {destination.gallery.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)`,
                  filter: 'brightness(0.7)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Gallery Navigation */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {destination.gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-block mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${getDifficultyColor(destination.difficulty)}`}>
                  {destination.tagline}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {destination.name}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-white/90 mb-6">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#22D3EE]" />
                  <span>{destination.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-[#22D3EE]" />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span>{destination.rating} ({destination.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-[#22D3EE]" />
                  <span className="capitalize">{destination.difficulty} Level</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#pricing"
                  className="px-6 py-3 bg-[#22D3EE] hover:bg-[#4DBBFF] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  View Packages
                </a>
                <a
                  href="#itinerary"
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg transition-all"
                >
                  See Itinerary
                </a>
                <button
                  onClick={() => navigate('/custom-tour', { state: { preFilledData: { destination: slug, duration: '7' } } })}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all border border-white/30"
                >
                  Custom Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <section>
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                Overview
              </h2>
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#4B5563]'}`}>
                {destination.description}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                Tour Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-4 rounded-lg ${
                      isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F9FAFB]'
                    }`}
                  >
                    <FaCheck className="text-[#22D3EE] mt-1 flex-shrink-0" />
                    <span className={isDarkMode ? 'text-[#C9D6DF]' : 'text-[#4B5563]'}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary with Duration Selector */}
            <section id="itinerary">
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                Detailed Itinerary
              </h2>

              {/* Check if duration-based itineraries exist */}
              {destination.itineraryByDuration ? (
                <>
                  {/* Duration Tabs - Dynamic */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {getAvailableItineraryDurations().map((duration) => (
                      <button
                        key={duration}
                        onClick={() => setSelectedItineraryDuration(duration)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                          selectedItineraryDuration === duration
                            ? 'bg-[#22D3EE] text-white shadow-lg shadow-[#22D3EE]/30'
                            : isDarkMode
                              ? 'bg-[#0F1419] text-[#C9D6DF] hover:bg-[#1a1f26]'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {duration} Days Trip
                      </button>
                    ))}
                  </div>

                  {/* Itinerary Content */}
                  <div className="space-y-4">
                    {destination.itineraryByDuration[`${selectedItineraryDuration}days`]?.map((day, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-lg border-l-4 border-[#22D3EE] ${
                          isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F9FAFB]'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-[#22D3EE]/20 text-[#22D3EE] rounded-full text-sm font-semibold">
                            Day {day.day}
                          </span>
                          <h3 className={`font-bold text-lg ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                            {day.title}
                          </h3>
                        </div>
                        <p className={`mb-3 ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#6B7280]'}`}>
                          {day.description}
                        </p>
                        {day.activities && day.activities.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {day.activities.map((activity, actIndex) => (
                              <span
                                key={actIndex}
                                className={`px-3 py-1 rounded-full text-xs ${
                                  isDarkMode ? 'bg-[#22D3EE]/10 text-[#22D3EE]' : 'bg-cyan-100 text-cyan-700'
                                }`}
                              >
                                {activity}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                /* Fallback to old itinerary if no duration-based data */
                <div className="space-y-4">
                  {(showFullItinerary ? destination.itinerary : destination.itinerary.slice(0, 5)).map((day, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-lg border-l-4 border-[#22D3EE] ${
                        isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F9FAFB]'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-[#22D3EE]/20 text-[#22D3EE] rounded-full text-sm font-semibold">
                          Day {day.day}
                        </span>
                        <h3 className={`font-bold text-lg ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                          {day.title}
                        </h3>
                      </div>
                      <p className={isDarkMode ? 'text-[#C9D6DF]' : 'text-[#6B7280]'}>
                        {day.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Pricing with Duration Selector */}
            <section id="pricing">
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                Package Pricing
              </h2>

              {/* Check if duration-based pricing exists */}
              {destination.pricingByDuration ? (
                <>
                  {/* Duration Tabs - Dynamic */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {getAvailablePricingDurations().map((duration) => (
                      <button
                        key={duration}
                        onClick={() => setSelectedDuration(duration)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                          selectedDuration === duration
                            ? 'bg-[#22D3EE] text-white shadow-lg shadow-[#22D3EE]/30'
                            : isDarkMode
                              ? 'bg-[#0F1419] text-[#C9D6DF] hover:bg-[#1a1f26]'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {duration} Days Trip
                      </button>
                    ))}
                  </div>

                  {/* Pricing Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(destination.pricingByDuration[`${selectedDuration}days`] || {}).map(([key, pkg]) => (
                      <div
                        key={key}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all transform hover:scale-105 ${
                          pkg.popular
                            ? 'border-[#22D3EE] shadow-lg shadow-[#22D3EE]/20'
                            : isDarkMode 
                              ? 'border-gray-700' 
                              : 'border-gray-200'
                        } ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'}`}
                      >
                        {pkg.popular && (
                          <div className="absolute top-0 right-0 bg-[#22D3EE] text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                            ⭐ MOST POPULAR
                          </div>
                        )}
                        
                        <div className="p-6 pt-8">
                          <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                            {pkg.title}
                          </h3>
                          <div className="mb-6">
                            <span className="text-4xl font-bold text-[#22D3EE]">
                              ${pkg.price}
                            </span>
                            <span className={`text-sm ml-2 ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#6B7280]'}`}>
                              per person
                            </span>
                          </div>
                          
                          <ul className="space-y-3 mb-6">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <FaCheck className="text-[#22D3EE] mt-1 flex-shrink-0" size={14} />
                                <span className={`text-sm ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#4B5563]'}`}>
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                          
                          <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                            pkg.popular
                              ? 'bg-[#22D3EE] hover:bg-[#4DBBFF] text-white'
                              : isDarkMode
                                ? 'bg-[#0B0C0E] hover:bg-gray-800 text-[#E0E7EE] border border-gray-700'
                                : 'bg-gray-100 hover:bg-gray-200 text-[#1F2937]'
                          }`}>
                            Book Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Custom Tour CTA */}
                  <div className={`mt-8 p-6 rounded-xl border-2 border-dashed ${
                    isDarkMode ? 'border-gray-700 bg-[#0F1419]/50' : 'border-gray-300 bg-gray-50'
                  }`}>
                    <div className="text-center">
                      <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                        Need a Custom Itinerary?
                      </h3>
                      <p className={`mb-4 ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#6B7280]'}`}>
                        Build your perfect trip with our custom tour builder and get a personalized quote
                      </p>
                      <button
                        onClick={() => navigate('/custom-tour', { state: { preFilledData: { destination: slug, duration: selectedDuration } } })}
                        className="px-8 py-3 bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
                      >
                        Create Custom Tour →
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                /* Fallback to old static pricing if no duration-based data */
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(destination.pricing).map(([key, pkg]) => (
                      <div
                        key={key}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all transform hover:scale-105 ${
                          pkg.popular
                            ? 'border-[#22D3EE] shadow-lg shadow-[#22D3EE]/20'
                            : isDarkMode 
                              ? 'border-gray-700' 
                              : 'border-gray-200'
                        } ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'}`}
                      >
                        {pkg.popular && (
                          <div className="absolute top-0 right-0 bg-[#22D3EE] text-white px-4 py-1 text-sm font-semibold">
                            Most Popular
                          </div>
                        )}
                        
                        <div className="p-6">
                          <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                            {pkg.title}
                          </h3>
                          <div className="mb-6">
                            <span className="text-4xl font-bold text-[#22D3EE]">
                              ${pkg.price}
                            </span>
                            <span className={`text-sm ml-2 ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#6B7280]'}`}>
                              per person
                            </span>
                          </div>
                          
                          <ul className="space-y-3 mb-6">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <FaCheck className="text-[#22D3EE] mt-1 flex-shrink-0" size={14} />
                                <span className={`text-sm ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#4B5563]'}`}>
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                          
                          <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                            pkg.popular
                              ? 'bg-[#22D3EE] hover:bg-[#4DBBFF] text-white'
                              : isDarkMode
                                ? 'bg-[#0B0C0E] hover:bg-gray-800 text-[#E0E7EE] border border-gray-700'
                                : 'bg-gray-100 hover:bg-gray-200 text-[#1F2937]'
                          }`}>
                            Book Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>

            {/* What's Included/Excluded */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Included */}
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#0F1419]' : 'bg-green-50'}`}>
                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  isDarkMode ? 'text-[#E0E7EE]' : 'text-green-900'
                }`}>
                  <FaCheck className="text-green-500" />
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {destination.inclusions.map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 text-sm ${
                      isDarkMode ? 'text-[#C9D6DF]' : 'text-green-800'
                    }`}>
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" size={12} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#0F1419]' : 'bg-red-50'}`}>
                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                  isDarkMode ? 'text-[#E0E7EE]' : 'text-red-900'
                }`}>
                  <FaTimes className="text-red-500" />
                  What's Not Included
                </h3>
                <ul className="space-y-2">
                  {destination.exclusions.map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 text-sm ${
                      isDarkMode ? 'text-[#C9D6DF]' : 'text-red-800'
                    }`}>
                      <FaTimes className="text-red-500 mt-1 flex-shrink-0" size={12} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* What to Bring */}
            <section>
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                What to Bring
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {destination.whatToBring.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-sm text-center ${
                      isDarkMode ? 'bg-[#0F1419] text-[#C9D6DF]' : 'bg-[#F9FAFB] text-[#4B5563]'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Quick Info Card */}
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F9FAFB]'}`}>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                  Quick Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaCalendar className="text-[#22D3EE] mt-1" />
                    <div>
                      <p className={`text-sm font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                        Best Time to Visit
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#6B7280]'}`}>
                        {destination.bestTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaShieldAlt className="text-[#22D3EE] mt-1" />
                    <div>
                      <p className={`text-sm font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                        Fitness Level Required
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#6B7280]'}`}>
                        {destination.fitnessLevel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className={`p-6 rounded-xl bg-gradient-to-br from-[#22D3EE] to-[#4DBBFF] text-white`}>
                <h3 className="text-xl font-bold mb-4">Need Help Planning?</h3>
                <p className="text-sm mb-4 text-white/90">
                  Our travel experts are here to help you customize your perfect adventure.
                </p>
                <button className="w-full py-3 bg-white text-[#22D3EE] rounded-lg font-semibold hover:bg-gray-100 transition-all">
                  Contact Us
                </button>
              </div>

              {/* Share Card */}
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F9FAFB]'}`}>
                <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                  Share This Tour
                </h3>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-all">
                    Facebook
                  </button>
                  <button className="flex-1 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#0C85D0] transition-all">
                    Twitter
                  </button>
                  <button className="flex-1 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#1EBE57] transition-all">
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F9FAFB]'}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
            Ready for Your Adventure?
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#6B7280]'}`}>
            Book now and embark on the journey of a lifetime. Our team will handle all the details so you can focus on creating memories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#pricing"
              className="px-8 py-4 bg-[#22D3EE] hover:bg-[#4DBBFF] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Book This Tour
            </a>
            <Link
              to="/trip/adventure"
              className={`px-8 py-4 border-2 border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-white font-semibold rounded-lg transition-all ${
                isDarkMode ? 'hover:bg-[#22D3EE]' : ''
              }`}
            >
              View More Tours
            </Link>
          </div>
        </div>
      </section>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
});

DestinationDetail.displayName = 'DestinationDetail';

export default DestinationDetail;
