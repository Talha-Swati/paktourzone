import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import TopBar from '../../components/layout/TopBar';
import Navbar from '../../components/layout/Navbar';
import { servicesData } from '../../data/servicesData';

const Services = () => {
  const { isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen } = useTheme();
  const [hoveredService, setHoveredService] = useState(null);
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

  const services = [
    {
      ...servicesData.hotels,
      path: '/services/hotels',
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      ...servicesData.transport,
      path: '/services/transport',
      color: 'green',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      ...servicesData.guides,
      path: '/services/guides',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      ...servicesData.visa,
      path: '/services/visa',
      color: 'orange',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      ...servicesData.insurance,
      path: '/services/insurance',
      color: 'teal',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      ...servicesData.photography,
      path: '/services/photography',
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  const features = [
    {
      icon: '✓',
      title: 'Verified Partners',
      description: 'All service providers are thoroughly vetted and certified'
    },
    {
      icon: '24/7',
      title: 'Round-the-Clock Support',
      description: 'Our team is available anytime you need assistance'
    },
    {
      icon: '💰',
      title: 'Best Price Guarantee',
      description: 'Competitive pricing with no hidden charges'
    },
    {
      icon: '🛡️',
      title: 'Secure Booking',
      description: 'Your data and payments are completely secure'
    }
  ];

  const process = [
    { step: 1, title: 'Choose Service', desc: 'Select the service you need' },
    { step: 2, title: 'Review Options', desc: 'Browse our verified providers' },
    { step: 3, title: 'Book & Confirm', desc: 'Complete your booking easily' },
    { step: 4, title: 'Enjoy Service', desc: 'Experience quality service' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode
        ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]'
        : 'bg-gradient-to-b from-white to-[#F8FAFB] text-[#1F2937]'
    }`}>
      <TopBar {...topBarProps} />
      <Navbar {...navbarProps} />

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Travel Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Everything you need for an unforgettable journey through Pakistan
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/custom-tour"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Build Custom Tour
              </Link>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Services
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Professional services to make your travel seamless and memorable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={service.path}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-[#141A1F] to-[#0B0C0E] border border-[rgba(34,211,238,0.1)] hover:border-[rgba(34,211,238,0.3)]' 
                    : 'bg-white border border-gray-100 hover:border-blue-200'
                }`}
              >
                {/* Service Card Header */}
                <div className={`h-48 bg-gradient-to-br ${service.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                    <p className="text-sm opacity-90">{service.tagline}</p>
                  </div>
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16"></div>
                  </div>
                </div>

                {/* Service Card Body */}
                <div className="p-6">
                  <p className={`mb-6 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}`}>
                    {service.description}
                  </p>

                  {/* Quick Stats/Features */}
                  <div className="space-y-2 mb-6">
                    {service.id === 'hotels' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-blue-500'}>✓</span>
                          <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                            {service.featuredProperties.length}+ Partner Hotels
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-blue-500'}>✓</span>
                          <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                            Budget to Luxury Options
                          </span>
                        </div>
                      </>
                    )}
                    {service.id === 'transport' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-green-500'}>✓</span>
                          <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                            {service.vehicleTypes.length} Vehicle Types
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-green-500'}>✓</span>
                          <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                            Licensed & Insured
                          </span>
                        </div>
                      </>
                    )}
                    {service.id === 'guides' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-purple-500'}>✓</span>
                          <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                            {service.guides.length}+ Expert Guides
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-purple-500'}>✓</span>
                          <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                            Multi-lingual Support
                          </span>
                        </div>
                      </>
                    )}
                    {service.id === 'visa' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-orange-500'}>✓</span>
                          <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                            {service.visaTypes.length} Visa Types
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-orange-500'}>✓</span>
                          <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                            Complete Documentation
                          </span>
                        </div>
                      </>
                    )}
                    {service.id === 'insurance' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-teal-500'}>✓</span>
                          <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                            {service.plans.length} Coverage Plans
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-teal-500'}>✓</span>
                          <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                            24/7 Emergency Support
                          </span>
                        </div>
                      </>
                    )}
                    {service.id === 'photography' && (
                      <>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-indigo-500'}>✓</span>
                          <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                            {service.packages.length} Package Options
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-indigo-500'}>✓</span>
                          <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                            Professional Equipment
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className={`flex items-center gap-2 font-semibold group-hover:gap-4 transition-all ${
                    isDarkMode ? 'text-[#22D3EE]' : `text-${service.color}-600`
                  }`}>
                    Explore Service
                    <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform origin-left transition-transform ${
                  hoveredService === index ? 'scale-x-100' : 'scale-x-0'
                }`}></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className={`py-20 px-4 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              How It Works
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}`}>
              Simple steps to get the services you need
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                  {item.step}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                  {item.desc}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Why Choose Our Services
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}`}>
              Trusted by thousands of travelers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-[#141A1F] to-[#0B0C0E] border border-[rgba(34,211,238,0.1)] hover:border-[rgba(34,211,238,0.3)]' 
                    : 'bg-white border border-gray-100 hover:border-blue-200'
                } shadow-lg hover:shadow-xl`}
              >
                <div className={`text-4xl mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`}>{feature.icon}</div>
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`py-20 px-4 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to Plan Your Journey?
          </h2>
          <p className={`text-xl mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}`}>
            Let us take care of everything while you focus on creating memories
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/custom-tour"
              className={`px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:from-[#4DBBFF] hover:to-[#22D3EE]'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              Build Your Custom Tour
            </Link>
            <Link
              to="/contact"
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                isDarkMode
                  ? 'bg-[#141A1F] text-white hover:bg-[#1A2229] border border-[rgba(34,211,238,0.2)]'
                  : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200'
              } shadow-lg`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-12 px-4 border-t ${isDarkMode ? 'bg-[#0B0C0E] border-[#1A2229]' : 'bg-gray-900 text-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PakTourZone</h3>
              <p className={isDarkMode ? 'text-[#8B949E]' : 'text-gray-400'}>
                Your trusted partner for unforgettable Pakistan adventures.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className={`space-y-2 ${isDarkMode ? 'text-[#8B949E]' : 'text-gray-400'}`}>
                <li><Link to="/services/hotels" className="hover:text-[#22D3EE] transition-colors">Hotels</Link></li>
                <li><Link to="/services/transport" className="hover:text-[#22D3EE] transition-colors">Transport</Link></li>
                <li><Link to="/services/guides" className="hover:text-[#22D3EE] transition-colors">Tour Guides</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className={`space-y-2 ${isDarkMode ? 'text-[#8B949E]' : 'text-gray-400'}`}>
                <li><Link to="/services/visa" className="hover:text-[#22D3EE] transition-colors">Visa Assistance</Link></li>
                <li><Link to="/services/insurance" className="hover:text-[#22D3EE] transition-colors">Insurance</Link></li>
                <li><Link to="/services/photography" className="hover:text-[#22D3EE] transition-colors">Photography</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className={`space-y-2 ${isDarkMode ? 'text-[#8B949E]' : 'text-gray-400'}`}>
                <li>📧 info@paktourzone.com</li>
                <li>📱 +92-300-1234567</li>
                <li>📍 Islamabad, Pakistan</li>
              </ul>
            </div>
          </div>
          <div className={`border-t pt-8 text-center ${isDarkMode ? 'border-[#1A2229] text-[#8B949E]' : 'border-gray-800 text-gray-400'}`}>
            <p>&copy; 2024 PakTourZone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
