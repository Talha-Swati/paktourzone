import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Navbar from '../../components/layout/Navbar';
import { servicesData } from '../../data/servicesData';

const HotelBooking = () => {
  const { isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen } = useTheme();
  const hotelData = servicesData.hotels;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  
  const languageDropdownRef = useRef(null);
  const themeDropdownRef = useRef(null);

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
  }, [languageDropdownOpen, themeDropdownOpen, setThemeDropdownOpen]);

  const navbarProps = useMemo(() => ({
    isDarkMode,
    themeMode,
    setThemeMode,
    themeDropdownOpen,
    setThemeDropdownOpen,
    themeDropdownRef,
    mobileMenuOpen,
    setMobileMenuOpen
  }), [isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen, mobileMenuOpen, setMobileMenuOpen]);

  const locations = ['all', 'Skardu', 'Hunza', 'Naran', 'Swat'];

  const filteredProperties = hotelData.featuredProperties.filter(property => {
    const categoryMatch = selectedCategory === 'all' || property.category === selectedCategory;
    const locationMatch = selectedLocation === 'all' || property.location.includes(selectedLocation);
    return categoryMatch && locationMatch;
  });

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode
        ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]'
        : 'bg-gradient-to-b from-white to-[#F8FAFB] text-[#1F2937]'
    }`}>
      <Navbar {...navbarProps} />

      {/* Hero */
      <div className="relative h-[50vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${hotelData.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-4">{hotelData.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {hotelData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              {hotelData.tagline}
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {hotelData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Hotel Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {hotelData.categories.map((category) => (
              <div
                key={category.id}
                className={`p-8 rounded-xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.name}
                </h3>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {category.priceRange}
                </div>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className={`p-6 rounded-xl mb-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <div className="flex flex-wrap gap-4 items-center">
              <div>
                <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <option value="all">All Categories</option>
                  <option value="budget">Budget</option>
                  <option value="comfort">Comfort</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
              <div>
                <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className={`px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>
                      {loc === 'all' ? 'All Locations' : loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Properties */}
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Properties
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className={`rounded-xl overflow-hidden ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${property.image}')` }}></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {property.name}
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        📍 {property.location}
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      property.category === 'luxury' ? 'bg-purple-100 text-purple-800' :
                      property.category === 'comfort' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {property.category}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {property.rating}
                      </span>
                    </div>
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      ({property.reviews} reviews)
                    </span>
                  </div>

                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {property.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {property.amenities.slice(0, 4).map((amenity, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs ${
                          isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">
                        ${property.price}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        per night
                      </div>
                    </div>
                    <Link
                      to="/custom-tour"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Process */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Easy Booking Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {hotelData.bookingProcess.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Need Help Choosing?
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Our team can help you find the perfect accommodation for your journey
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/custom-tour"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Build Custom Tour
            </Link>
            <Link
              to="/contact"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 PakTourZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HotelBooking;
