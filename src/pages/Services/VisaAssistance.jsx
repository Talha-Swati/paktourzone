import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Navbar from '../../components/layout/Navbar';
import { servicesData } from '../../data/servicesData';

const VisaAssistance = () => {
  const { isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen } = useTheme();
  const visaData = servicesData.visa;
  const [selectedVisaType, setSelectedVisaType] = useState(visaData.visaTypes[0]);
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
    mobileMenuOpen,
    setMobileMenuOpen,
  }), [isDarkMode, mobileMenuOpen]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode
        ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]'
        : 'bg-gradient-to-b from-white to-[#F8FAFB] text-[#1F2937]'
    }`}>
      <Navbar {...navbarProps} />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${visaData.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-red-900/90"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-4">{visaData.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {visaData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              {visaData.tagline}
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {visaData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Visa Types */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Visa Types
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {visaData.visaTypes.map((visa) => (
              <div
                key={visa.id}
                onClick={() => setSelectedVisaType(visa)}
                className={`p-6 rounded-xl cursor-pointer transition-all ${
                  selectedVisaType.id === visa.id
                    ? 'ring-2 ring-orange-600 shadow-xl'
                    : ''
                } ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl`}
              >
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {visa.name}
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {visa.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Duration:</span>
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {visa.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Processing:</span>
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {visa.processing}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Service Fee:</span>
                    <span className="font-semibold text-orange-600">
                      {visa.price}
                    </span>
                  </div>
                </div>

                <button
                  className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                    selectedVisaType.id === visa.id
                      ? 'bg-orange-600 text-white'
                      : isDarkMode
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  {selectedVisaType.id === visa.id ? 'Selected' : 'Select'}
                </button>
              </div>
            ))}
          </div>

          {/* Selected Visa Requirements */}
          {selectedVisaType && (
            <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Requirements for {selectedVisaType.name}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Required Documents:
                  </h4>
                  <ul className="space-y-2">
                    {selectedVisaType.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">✓</span>
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Details:
                  </h4>
                  <div className="space-y-3">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <span className={`block text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Eligibility
                      </span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedVisaType.eligibility}
                      </span>
                    </div>
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <span className={`block text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Processing Time
                      </span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedVisaType.processing}
                      </span>
                    </div>
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <span className={`block text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Validity
                      </span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedVisaType.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Country Information */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Processing Time by Country
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaData.countries.map((country, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                } hover:shadow-lg transition-shadow`}
              >
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {country.name}
                </h3>
                <div className="text-orange-600 font-semibold mb-2">
                  {country.processing}
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {country.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {visaData.process.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-600 flex items-center justify-center text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            What We Handle
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {visaData.ourServices.map((service, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                } flex items-center gap-3`}
              >
                <span className="text-orange-600 text-xl">✓</span>
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to Apply?
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let us handle your visa application while you plan your adventure
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/custom-tour"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Start Application
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

export default VisaAssistance;
