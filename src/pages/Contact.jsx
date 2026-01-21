import { useState, useMemo, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/common/SEO';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaWhatsapp, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter,
  FaGlobe,
  FaUsers,
  FaCalendarAlt,
  FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
  const { isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const themeDropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    phone: '',
    countryCode: '+1',
    numberOfTravelers: '1',
    travelType: '',
    tourInterest: '',
    preferredMonth: '',
    budgetRange: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({ submitted: false, error: false });

  const navbarProps = useMemo(() => ({
    isDarkMode,
    mobileMenuOpen,
    setMobileMenuOpen,
    themeMode,
    setThemeMode,
    themeDropdownOpen,
    setThemeDropdownOpen,
    themeDropdownRef
  }), [isDarkMode, mobileMenuOpen, themeMode, themeDropdownOpen, setThemeDropdownOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your backend
    console.log('Form submitted:', formData);
    setFormStatus({ submitted: true, error: false });
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        country: '',
        phone: '',
        countryCode: '+1',
        numberOfTravelers: '1',
        travelType: '',
        tourInterest: '',
        preferredMonth: '',
        budgetRange: '',
        message: ''
      });
      setFormStatus({ submitted: false, error: false });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+92 300 1234567',
      subtext: 'WhatsApp Available',
      link: 'tel:+923001234567'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'info@paktourzone.com',
      subtext: 'Response within 24 hours',
      link: 'mailto:info@paktourzone.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Office Location',
      details: 'Islamabad, Pakistan',
      subtext: 'Serving Northern Pakistan',
      link: null
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: 'Mon - Sat: 9AM - 8PM PKT',
      subtext: 'Sunday: By Appointment',
      link: null
    }
  ];

  const countryCodes = [
    { code: '+1', country: 'USA/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'Australia' },
    { code: '+971', country: 'UAE' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' },
    { code: '+82', country: 'South Korea' },
    { code: '+65', country: 'Singapore' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+39', country: 'Italy' },
    { code: '+34', country: 'Spain' },
    { code: '+92', country: 'Pakistan' },
    { code: '+91', country: 'India' },
    { code: '+880', country: 'Bangladesh' }
  ];

  const tourInterests = [
    'Hunza Valley Tours',
    'Skardu & K2 Base Camp',
    'Fairy Meadows Trek',
    'Naran Kaghan Package',
    'Swat Valley Heritage',
    'Complete Northern Pakistan Tour',
    'Customized Itinerary',
    'Adventure & Trekking',
    'Photography Tours',
    'Honeymoon Package',
    'Family Vacation',
    'Corporate Team Building'
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // SEO structured data
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "PakTourZone",
    "telephone": "+92-300-1234567",
    "email": "info@paktourzone.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressCountry": "Pakistan"
    },
    "openingHours": "Mo-Sa 09:00-20:00"
  }), []);

  return (
    <>
      <SEO
        title="Contact Us - Plan Your Pakistan Adventure | PakTourZone"
        description="Get in touch with PakTourZone for customized tour packages. We specialize in serving international travelers with professional tour planning services across Northern Pakistan."
        keywords="contact PakTourZone, Pakistan tour inquiry, international tour booking, travel consultation Pakistan"
        url="/contact"
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
              <div className={`inline-block p-4 rounded-full mb-6 ${isDarkMode ? 'bg-[#22D3EE]/10' : 'bg-blue-50'}`}>
                <FaPaperPlane className={`text-5xl ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} />
              </div>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
                } bg-clip-text text-transparent`}
              >
                Let's Plan Your Adventure
              </h1>
              <p className={`text-lg md:text-xl mb-4 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                Ready to explore Northern Pakistan? We're here to help create your perfect journey
              </p>
              <p className={`text-base ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                Serving international travelers worldwide • Available 24/7 via WhatsApp
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className={`py-12 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl text-center transition-all duration-300 hover:shadow-xl ${
                    isDarkMode ? 'bg-[#141A1F] hover:bg-[#1A2129]' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    isDarkMode ? 'bg-[#22D3EE]/10' : 'bg-blue-50'
                  }`}>
                    <div className={`text-3xl ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                      {info.icon}
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className={`block text-base font-semibold mb-1 transition-colors ${
                        isDarkMode ? 'text-[#22D3EE] hover:text-[#4DBBFF]' : 'text-[#3B82F6] hover:text-[#60A5FA]'
                      }`}
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className={`text-base font-semibold mb-1 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                      {info.details}
                    </p>
                  )}
                  <p className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                    {info.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Social Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div
                  className={`p-8 rounded-2xl ${
                    isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                  } shadow-xl`}
                >
                  <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                    Send Us Your Travel Inquiry
                  </h2>
                  <p className={`mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                    Fill out the form below and our travel experts will get back to you within 24 hours
                  </p>

                  {formStatus.submitted && (
                    <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <p className="text-green-500 font-semibold">
                        ✓ Thank you! Your inquiry has been received. We'll contact you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          placeholder="John Smith"
                          className={`w-full px-4 py-3 rounded-lg border transition-all ${
                            isDarkMode
                              ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E] focus:border-[#22D3EE]'
                              : 'bg-white border-gray-300 text-[#1F2937] placeholder-gray-400 focus:border-[#3B82F6]'
                          } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                        />
                      </div>

                      <div>
                        <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 rounded-lg border transition-all ${
                            isDarkMode
                              ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E] focus:border-[#22D3EE]'
                              : 'bg-white border-gray-300 text-[#1F2937] placeholder-gray-400 focus:border-[#3B82F6]'
                          } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                          Country *
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          placeholder="United States"
                          className={`w-full px-4 py-3 rounded-lg border transition-all ${
                            isDarkMode
                              ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E] focus:border-[#22D3EE]'
                              : 'bg-white border-gray-300 text-[#1F2937] placeholder-gray-400 focus:border-[#3B82F6]'
                          } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                        />
                      </div>

                      <div>
                        <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                          Phone Number (with WhatsApp)
                        </label>
                        <div className="flex gap-2">
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleInputChange}
                            className={`px-3 py-3 rounded-lg border transition-all ${
                              isDarkMode
                                ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                                : 'bg-white border-gray-300 text-[#1F2937]'
                            } focus:outline-none`}
                          >
                            {countryCodes.map((item) => (
                              <option key={item.code} value={item.code}>
                                {item.code}
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="1234567890"
                            className={`flex-1 px-4 py-3 rounded-lg border transition-all ${
                              isDarkMode
                                ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E] focus:border-[#22D3EE]'
                                : 'bg-white border-gray-300 text-[#1F2937] placeholder-gray-400 focus:border-[#3B82F6]'
                            } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Travel Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                          Number of Travelers *
                        </label>
                        <select
                          name="numberOfTravelers"
                          value={formData.numberOfTravelers}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg border transition-all ${
                            isDarkMode
                              ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                              : 'bg-white border-gray-300 text-[#1F2937]'
                          } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3-5">3-5 People</option>
                          <option value="6-10">6-10 People</option>
                          <option value="10+">More than 10</option>
                        </select>
                      </div>

                      <div>
                        <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                          Travel Type *
                        </label>
                        <select
                          name="travelType"
                          value={formData.travelType}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg border transition-all ${
                            isDarkMode
                              ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                              : 'bg-white border-gray-300 text-[#1F2937]'
                          } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                        >
                          <option value="">Select Travel Type</option>
                          <option value="solo">Solo Traveler</option>
                          <option value="couple">Couple/Honeymoon</option>
                          <option value="family">Family Vacation</option>
                          <option value="friends">Friends Group</option>
                          <option value="corporate">Corporate/Team Building</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                          Tour Interest *
                        </label>
                        <select
                          name="tourInterest"
                          value={formData.tourInterest}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg border transition-all ${
                            isDarkMode
                              ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                              : 'bg-white border-gray-300 text-[#1F2937]'
                          } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                        >
                          <option value="">Select Your Interest</option>
                          {tourInterests.map((interest) => (
                            <option key={interest} value={interest}>
                              {interest}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                          Preferred Travel Month
                        </label>
                        <select
                          name="preferredMonth"
                          value={formData.preferredMonth}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border transition-all ${
                            isDarkMode
                              ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                              : 'bg-white border-gray-300 text-[#1F2937]'
                          } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                        >
                          <option value="">Select Month</option>
                          {months.map((month) => (
                            <option key={month} value={month}>
                              {month} 2026
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                        Budget Range (USD per person)
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-all ${
                          isDarkMode
                            ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                            : 'bg-white border-gray-300 text-[#1F2937]'
                        } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                      >
                        <option value="">Select Budget Range</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2000">$1,000 - $2,000</option>
                        <option value="2000-3000">$2,000 - $3,000</option>
                        <option value="3000-5000">$3,000 - $5,000</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                        Additional Details / Special Requests
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        placeholder="Tell us about your travel preferences, any specific requirements, dietary restrictions, accessibility needs, or special occasions..."
                        className={`w-full px-4 py-3 rounded-lg border transition-all ${
                          isDarkMode
                            ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E] focus:border-[#22D3EE]'
                            : 'bg-white border-gray-300 text-[#1F2937] placeholder-gray-400 focus:border-[#3B82F6]'
                        } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className={`w-full px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 ${
                        isDarkMode
                          ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                          : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
                      } transform hover:scale-105`}
                    >
                      <FaPaperPlane />
                      <span>Send Inquiry</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar - Quick Info & Social */}
              <div className="space-y-6">
                {/* Why Choose Us */}
                <div
                  className={`p-6 rounded-xl ${
                    isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                  } shadow-xl`}
                >
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                    Why Contact Us?
                  </h3>
                  <ul className={`space-y-3 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                    <li className="flex items-start gap-2">
                      <span className={`mt-1 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>✓</span>
                      <span>24-hour response guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`mt-1 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>✓</span>
                      <span>Free customized itinerary planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`mt-1 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>✓</span>
                      <span>Expert advice from local specialists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`mt-1 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>✓</span>
                      <span>Transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`mt-1 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>✓</span>
                      <span>Multilingual support available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`mt-1 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>✓</span>
                      <span>Secure booking & payment options</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Contact via WhatsApp */}
                <div
                  className={`p-6 rounded-xl text-center ${
                    isDarkMode ? 'bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/20' : 'bg-gradient-to-br from-green-50 to-green-100'
                  }`}
                >
                  <FaWhatsapp className="text-5xl text-green-500 mx-auto mb-4" />
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                    Need Instant Response?
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                    Chat with us directly on WhatsApp
                  </p>
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Social Media */}
                <div
                  className={`p-6 rounded-xl ${
                    isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                  } shadow-xl`}
                >
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                    Follow Us
                  </h3>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="#"
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isDarkMode
                          ? 'bg-[#0F1419] hover:bg-blue-600 text-[#22D3EE]'
                          : 'bg-gray-100 hover:bg-blue-600 text-[#3B82F6]'
                      } hover:text-white`}
                    >
                      <FaFacebook className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isDarkMode
                          ? 'bg-[#0F1419] hover:bg-pink-600 text-[#22D3EE]'
                          : 'bg-gray-100 hover:bg-pink-600 text-[#3B82F6]'
                      } hover:text-white`}
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isDarkMode
                          ? 'bg-[#0F1419] hover:bg-blue-400 text-[#22D3EE]'
                          : 'bg-gray-100 hover:bg-blue-400 text-[#3B82F6]'
                      } hover:text-white`}
                    >
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
                </div>
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

export default Contact;
