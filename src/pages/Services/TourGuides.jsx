import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import TopBar from '../../components/layout/TopBar';
import Navbar from '../../components/layout/Navbar';
import { servicesData } from '../../data/servicesData';

const TourGuides = () => {
  const { isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen } = useTheme();
  const guidesData = servicesData.guides;
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
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

  const topBarProps = useMemo(() => ({
    isDarkMode,
    themeMode,
    setThemeMode,
    themeDropdownOpen,
    setThemeDropdownOpen,
    themeDropdownRef,
    languageDropdownOpen,
    setLanguageDropdownOpen,
    languageDropdownRef,
  }), [isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen, languageDropdownOpen]);

  const navbarProps = useMemo(() => ({
    isDarkMode,
    mobileMenuOpen,
    setMobileMenuOpen,
  }), [isDarkMode, mobileMenuOpen]);

  const specializations = ['all', 'Mountain Trekking', 'Cultural & Heritage', 'Photography Tours', 'Family & Adventure'];

  const filteredGuides = guidesData.guides.filter(guide =>
    selectedSpecialization === 'all' || guide.specialization === selectedSpecialization
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode
        ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]'
        : 'bg-gradient-to-b from-white to-[#F8FAFB] text-[#1F2937]'
    }`}>
      <TopBar {...topBarProps} />
      <Navbar {...navbarProps} />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${guidesData.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-4">{guidesData.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {guidesData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              {guidesData.tagline}
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {guidesData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Specialization Filter */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <label className={`block mb-3 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Filter by Specialization
            </label>
            <select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className={`w-full md:w-auto px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
              }`}
            >
              {specializations.map(spec => (
                <option key={spec} value={spec}>
                  {spec === 'all' ? 'All Specializations' : spec}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Tour Guides */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Expert Guides
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredGuides.map((guide) => (
              <div
                key={guide.id}
                className={`rounded-xl overflow-hidden ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="md:flex">
                  <div 
                    className="md:w-1/3 h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url('${guide.image}')` }}
                  ></div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {guide.name}
                        </h3>
                        <p className="text-purple-600 font-semibold mb-2">
                          {guide.specialization}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">⭐</span>
                          <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {guide.rating}
                          </span>
                        </div>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          ({guide.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {guide.bio}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Experience
                        </span>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {guide.experience}
                        </p>
                      </div>
                      <div>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Languages
                        </span>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {guide.languages.length}+ languages
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className={`text-sm block mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Languages
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {guide.languages.map((lang, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs ${
                              isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-purple-100 text-purple-800'
                            }`}
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className={`text-sm block mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Certifications
                      </span>
                      <ul className="space-y-1">
                        {guide.certifications.map((cert, idx) => (
                          <li key={idx} className={`text-sm flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <span className="text-purple-600">✓</span>
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">
                          {guide.price}
                        </div>
                        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          per day
                        </div>
                      </div>
                      <Link
                        to="/custom-tour"
                        className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                      >
                        Book Guide
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guide Services */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Guide Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guidesData.services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                } hover:shadow-lg transition-shadow`}
              >
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.name}
                </h3>
                <div className="text-xl font-bold text-purple-600 mb-3">
                  {service.price}
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`text-sm flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="text-purple-600">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Qualifications */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            All Our Guides Are
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {guidesData.qualifications.map((qual, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-md text-center`}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {qual}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-purple-50 to-pink-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Find Your Perfect Guide
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Expert local guides to enhance your Pakistan experience
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/custom-tour"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Book a Guide
            </Link>
            <Link
              to="/services"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              View All Services
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

export default TourGuides;
