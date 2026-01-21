import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Navbar from '../../components/layout/Navbar';
import { servicesData } from '../../data/servicesData';

const TravelInsurance = () => {
  const { isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen } = useTheme();
  const insuranceData = servicesData.insurance;
  const [selectedPlan, setSelectedPlan] = useState(insuranceData.plans[1]); // Default to comprehensive
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
          style={{ backgroundImage: `url('${insuranceData.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-cyan-900/90"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-4">{insuranceData.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {insuranceData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              {insuranceData.tagline}
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {insuranceData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Insurance Plans */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Coverage
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {insuranceData.plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl overflow-hidden transition-all ${
                  plan.recommended
                    ? 'ring-2 ring-teal-600 shadow-2xl transform scale-105'
                    : 'shadow-lg'
                } ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl`}
              >
                {plan.recommended && (
                  <div className="bg-teal-600 text-white text-center py-2 font-semibold">
                    ⭐ Recommended
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-teal-600 mb-1">
                      {plan.price}
                    </div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {plan.duration}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Coverage Limits:
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Medical:</span>
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {plan.coverage.medical}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Evacuation:</span>
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {plan.coverage.evacuation}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Baggage:</span>
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {plan.coverage.baggage}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Cancellation:</span>
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {plan.coverage.cancellation}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-teal-600 mt-1">✓</span>
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      selectedPlan.id === plan.id
                        ? 'bg-teal-600 text-white'
                        : isDarkMode
                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    }`}
                  >
                    {selectedPlan.id === plan.id ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's Covered */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                What's Covered
              </h2>
              <ul className="space-y-3">
                {insuranceData.covered.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-teal-600 text-xl mt-1">✓</span>
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                What's Not Covered
              </h2>
              <ul className="space-y-3">
                {insuranceData.notCovered.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✗</span>
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Claim Process */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Easy Claim Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {insuranceData.claimProcess.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-600 flex items-center justify-center text-white text-xl font-bold">
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

      {/* Emergency Contacts */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-teal-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            24/7 Emergency Assistance
          </h2>
          <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">📞</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Hotline
                </div>
                <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {insuranceData.emergencyContacts.hotline}
                </div>
              </div>
              <div>
                <div className="text-3xl mb-2">📧</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  Email
                </div>
                <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {insuranceData.emergencyContacts.email}
                </div>
              </div>
              <div>
                <div className="text-3xl mb-2">💬</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  WhatsApp
                </div>
                <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {insuranceData.emergencyContacts.whatsapp}
                </div>
              </div>
            </div>
            <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-teal-100'}`}>
              <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Available: {insuranceData.emergencyContacts.available}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Get Covered Today
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Don't take risks - secure comprehensive coverage for your journey
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/custom-tour"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Get Insurance Quote
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

export default TravelInsurance;
