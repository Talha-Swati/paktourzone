import { useState, useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/common/SEO';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  FaCalendarAlt,
  FaUsers, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaCreditCard,
  FaLock,
  FaInfoCircle,
  FaWhatsapp
} from 'react-icons/fa';

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const themeDropdownRef = useRef(null);

  // Get tour/package data from navigation state or default
  const packageData = location.state?.packageData || {
    title: 'Custom Tour Package',
    price: 0,
    duration: 'Flexible',
    currency: 'USD'
  };

  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+1',
    country: '',
    nationality: '',
    
    // Travel Details
    numberOfTravelers: '1',
    adults: '1',
    children: '0',
    travelDate: '',
    specialRequests: '',
    
    // Package Customization
    accommodation: 'standard',
    transport: 'shared',
    meals: 'breakfast',
    guide: 'yes',
    
    // Payment
    paymentMethod: '',
    agreeToTerms: false
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const navbarProps = useMemo(() => ({
    isDarkMode,
    themeMode,
    setThemeMode,
    themeDropdownOpen,
    setThemeDropdownOpen,
    themeDropdownRef,
    mobileMenuOpen,
    setMobileMenuOpen
  }), [isDarkMode, themeMode, themeDropdownOpen, mobileMenuOpen]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const calculateTotalPrice = () => {
    let basePrice = packageData.price || 0;
    const travelers = parseInt(bookingData.adults) + parseInt(bookingData.children);
    
    let total = basePrice * travelers;
    
    // Add-ons
    if (bookingData.accommodation === 'deluxe') total += 50 * travelers;
    if (bookingData.accommodation === 'luxury') total += 100 * travelers;
    if (bookingData.transport === 'private') total += 80;
    if (bookingData.meals === 'half-board') total += 30 * travelers;
    if (bookingData.meals === 'full-board') total += 50 * travelers;
    
    return total;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would process the booking
    console.log('Booking submitted:', bookingData);
    setBookingConfirmed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    { code: '+92', country: 'Pakistan' }
  ];

  const progressSteps = [
    { number: 1, title: 'Personal Info', icon: <FaUsers /> },
    { number: 2, title: 'Travel Details', icon: <FaCalendarAlt /> },
    { number: 3, title: 'Customization', icon: <FaCheckCircle /> },
    { number: 4, title: 'Payment', icon: <FaCreditCard /> }
  ];

  if (bookingConfirmed) {
    return (
      <>
        <SEO
          title="Booking Confirmed - PakTourZone"
          description="Your tour booking has been confirmed"
          url="/book-now"
        />
        <div className={`min-h-screen transition-colors duration-500 ${
          isDarkMode ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]' : 'bg-gradient-to-b from-white to-[#F8FAFB] text-[#1F2937]'
        }`}>
          <Navbar {...navbarProps} />
          
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <FaCheckCircle className="text-8xl text-green-500 mx-auto mb-6" />
                <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                  Booking Confirmed!
                </h1>
                <p className={`text-xl mb-6 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                  Thank you for choosing PakTourZone
                </p>
              </div>

              <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white'} shadow-xl mb-8`}>
                <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                  What's Next?
                </h2>
                <div className={`text-left space-y-4 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <p>Check your email for booking confirmation and detailed itinerary</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <p>Our team will contact you within 24 hours to finalize details</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <p>You'll receive payment instructions and booking reference number</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <p>Pre-departure information will be sent 2 weeks before your trip</p>
                  </div>
                </div>

                <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-[#0F1419]' : 'bg-gray-50'}`}>
                  <p className={`font-semibold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                    Need immediate assistance?
                  </p>
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => navigate('/')}
                  className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                      : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
                  } transform hover:scale-105`}
                >
                  Back to Home
                </button>
                <button
                  onClick={() => navigate('/destinations')}
                  className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 border-2 ${
                    isDarkMode
                      ? 'border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#0B0C0E]'
                      : 'border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white'
                  }`}
                >
                  Explore More Tours
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Book Your Tour - Secure Booking | PakTourZone"
        description="Book your Northern Pakistan adventure securely online. Flexible payment options and instant confirmation."
        keywords="book Pakistan tour, online booking, secure payment, tour reservation"
        url="/book-now"
      />

      <div className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]' : 'bg-gradient-to-b from-white to-[#F8FAFB] text-[#1F2937]'
      }`}>
        <Navbar {...navbarProps} />

        {/* Hero */}
        <section className={`relative py-12 ${isDarkMode ? 'bg-gradient-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-gradient-to-br from-white via-[#EBF8FF] to-white'}`}>
          <div className="container mx-auto px-4">
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 text-center ${
              isDarkMode ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
            } bg-clip-text text-transparent`}>
              Complete Your Booking
            </h1>
            <p className={`text-center ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
              {packageData.title}
            </p>
          </div>
        </section>

        {/* Progress Bar */}
        <div className={`py-4 backdrop-blur-lg border-b ${isDarkMode ? 'bg-[#0B0C0E]/95 border-[#1E242B]' : 'bg-white/95 border-gray-200'}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              {progressSteps.map((item, idx) => (
                <div key={item.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= item.number
                        ? isDarkMode
                          ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E]'
                          : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white'
                        : isDarkMode
                        ? 'bg-[#1E242B] text-[#8B949E]'
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      {item.icon}
                    </div>
                    <span className={`mt-2 text-xs hidden md:block ${
                      step >= item.number
                        ? isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
                        : isDarkMode ? 'text-[#8B949E]' : 'text-gray-400'
                    }`}>
                      {item.title}
                    </span>
                  </div>
                  {idx < progressSteps.length - 1 && (
                    <div className={`h-1 flex-1 mx-2 ${
                      step > item.number
                        ? isDarkMode ? 'bg-[#22D3EE]' : 'bg-[#3B82F6]'
                        : isDarkMode ? 'bg-[#1E242B]' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form Column */}
              <div className="lg:col-span-2">
                <form onSubmit={step === 4 ? handleSubmit : handleNextStep}>
                  <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white'} shadow-xl`}>
                    
                    {/* Step 1: Personal Information */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                          Personal Information
                        </h2>

                        <div>
                          <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={bookingData.fullName}
                            onChange={handleInputChange}
                            required
                            placeholder="John Smith"
                            className={`w-full px-4 py-3 rounded-lg border transition-all ${
                              isDarkMode
                                ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E]'
                                : 'bg-white border-gray-300 text-[#1F2937] placeholder-gray-400'
                            } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={bookingData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="john@example.com"
                              className={`w-full px-4 py-3 rounded-lg border transition-all ${
                                isDarkMode
                                  ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E]'
                                  : 'bg-white border-gray-300 text-[#1F2937] placeholder-gray-400'
                              } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                            />
                          </div>

                          <div>
                            <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                              Phone (WhatsApp) *
                            </label>
                            <div className="flex gap-2">
                              <select
                                name="countryCode"
                                value={bookingData.countryCode}
                                onChange={handleInputChange}
                                className={`px-3 py-3 rounded-lg border ${
                                  isDarkMode
                                    ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                                    : 'bg-white border-gray-300'
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
                                value={bookingData.phone}
                                onChange={handleInputChange}
                                required
                                placeholder="1234567890"
                                className={`flex-1 px-4 py-3 rounded-lg border ${
                                  isDarkMode
                                    ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E]'
                                    : 'bg-white border-gray-300 placeholder-gray-400'
                                } focus:outline-none focus:ring-2`}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                              Country of Residence *
                            </label>
                            <input
                              type="text"
                              name="country"
                              value={bookingData.country}
                              onChange={handleInputChange}
                              required
                              placeholder="United States"
                              className={`w-full px-4 py-3 rounded-lg border ${
                                isDarkMode
                                  ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E]'
                                  : 'bg-white border-gray-300 placeholder-gray-400'
                              } focus:outline-none focus:ring-2`}
                            />
                          </div>

                          <div>
                            <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                              Nationality *
                            </label>
                            <input
                              type="text"
                              name="nationality"
                              value={bookingData.nationality}
                              onChange={handleInputChange}
                              required
                              placeholder="American"
                              className={`w-full px-4 py-3 rounded-lg border ${
                                isDarkMode
                                  ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E]'
                                  : 'bg-white border-gray-300 placeholder-gray-400'
                              } focus:outline-none focus:ring-2`}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Travel Details */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                          Travel Details
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                              Number of Adults *
                            </label>
                            <select
                              name="adults"
                              value={bookingData.adults}
                              onChange={handleInputChange}
                              required
                              className={`w-full px-4 py-3 rounded-lg border ${
                                isDarkMode
                                  ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                                  : 'bg-white border-gray-300'
                              } focus:outline-none focus:ring-2`}
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                              Number of Children (Under 12)
                            </label>
                            <select
                              name="children"
                              value={bookingData.children}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-3 rounded-lg border ${
                                isDarkMode
                                  ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                                  : 'bg-white border-gray-300'
                              } focus:outline-none focus:ring-2`}
                            >
                              {[0, 1, 2, 3, 4, 5].map(num => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                            Preferred Travel Date *
                          </label>
                          <input
                            type="date"
                            name="travelDate"
                            value={bookingData.travelDate}
                            onChange={handleInputChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              isDarkMode
                                ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                                : 'bg-white border-gray-300'
                            } focus:outline-none focus:ring-2`}
                          />
                        </div>

                        <div>
                          <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                            Special Requests / Dietary Requirements
                          </label>
                          <textarea
                            name="specialRequests"
                            value={bookingData.specialRequests}
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="Any special requirements, dietary restrictions, medical conditions, or preferences..."
                            className={`w-full px-4 py-3 rounded-lg border ${
                              isDarkMode
                                ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E]'
                                : 'bg-white border-gray-300 placeholder-gray-400'
                            } focus:outline-none focus:ring-2`}
                          ></textarea>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Customization */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                          Customize Your Package
                        </h2>

                        <div>
                          <label className={`block mb-3 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                            Accommodation Type
                          </label>
                          <div className="grid md:grid-cols-3 gap-4">
                            {[
                              { value: 'standard', label: 'Standard', price: 'Included' },
                              { value: 'deluxe', label: 'Deluxe', price: '+$50/person' },
                              { value: 'luxury', label: 'Luxury', price: '+$100/person' }
                            ].map((option) => (
                              <label
                                key={option.value}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                  bookingData.accommodation === option.value
                                    ? isDarkMode
                                      ? 'border-[#22D3EE] bg-[#22D3EE]/10'
                                      : 'border-[#3B82F6] bg-blue-50'
                                    : isDarkMode
                                    ? 'border-[#1E242B] hover:border-[#22D3EE]/50'
                                    : 'border-gray-200 hover:border-blue-200'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="accommodation"
                                  value={option.value}
                                  checked={bookingData.accommodation === option.value}
                                  onChange={handleInputChange}
                                  className="sr-only"
                                />
                                <div className="text-center">
                                  <div className={`font-bold mb-1 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                                    {option.label}
                                  </div>
                                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-gray-600'}`}>
                                    {option.price}
                                  </div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className={`block mb-3 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                            Transport Preference
                          </label>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              { value: 'shared', label: 'Shared Transport', price: 'Included' },
                              { value: 'private', label: 'Private Vehicle', price: '+$80 total' }
                            ].map((option) => (
                              <label
                                key={option.value}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                  bookingData.transport === option.value
                                    ? isDarkMode
                                      ? 'border-[#22D3EE] bg-[#22D3EE]/10'
                                      : 'border-[#3B82F6] bg-blue-50'
                                    : isDarkMode
                                    ? 'border-[#1E242B] hover:border-[#22D3EE]/50'
                                    : 'border-gray-200 hover:border-blue-200'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="transport"
                                  value={option.value}
                                  checked={bookingData.transport === option.value}
                                  onChange={handleInputChange}
                                  className="sr-only"
                                />
                                <div className="text-center">
                                  <div className={`font-bold mb-1 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                                    {option.label}
                                  </div>
                                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-gray-600'}`}>
                                    {option.price}
                                  </div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className={`block mb-3 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                            Meal Plan
                          </label>
                          <div className="grid md:grid-cols-3 gap-4">
                            {[
                              { value: 'breakfast', label: 'Breakfast Only', price: 'Included' },
                              { value: 'half-board', label: 'Half Board', price: '+$30/person' },
                              { value: 'full-board', label: 'Full Board', price: '+$50/person' }
                            ].map((option) => (
                              <label
                                key={option.value}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                  bookingData.meals === option.value
                                    ? isDarkMode
                                      ? 'border-[#22D3EE] bg-[#22D3EE]/10'
                                      : 'border-[#3B82F6] bg-blue-50'
                                    : isDarkMode
                                    ? 'border-[#1E242B] hover:border-[#22D3EE]/50'
                                    : 'border-gray-200 hover:border-blue-200'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="meals"
                                  value={option.value}
                                  checked={bookingData.meals === option.value}
                                  onChange={handleInputChange}
                                  className="sr-only"
                                />
                                <div className="text-center">
                                  <div className={`font-bold mb-1 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                                    {option.label}
                                  </div>
                                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-gray-600'}`}>
                                    {option.price}
                                  </div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Payment */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                          Payment Method
                        </h2>

                        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-200'}`}>
                          <div className="flex items-start gap-3">
                            <FaInfoCircle className="text-blue-500 mt-1" />
                            <div className={`text-sm ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                              <p className="font-semibold mb-1">Payment Terms:</p>
                              <p>30% advance payment required to confirm booking. Balance due 15 days before departure.</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {[
                            { value: 'bank', label: 'Bank Transfer', desc: 'Direct wire transfer to our bank account' },
                            { value: 'paypal', label: 'PayPal', desc: 'Pay securely with PayPal' },
                            { value: 'stripe', label: 'Credit/Debit Card', desc: 'Visa, Mastercard, Amex accepted' },
                            { value: 'wise', label: 'Wise (TransferWise)', desc: 'International transfer with low fees' }
                          ].map((method) => (
                            <label
                              key={method.value}
                              className={`p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center gap-4 ${
                                bookingData.paymentMethod === method.value
                                  ? isDarkMode
                                    ? 'border-[#22D3EE] bg-[#22D3EE]/10'
                                    : 'border-[#3B82F6] bg-blue-50'
                                  : isDarkMode
                                  ? 'border-[#1E242B] hover:border-[#22D3EE]/50'
                                  : 'border-gray-200 hover:border-blue-200'
                              }`}
                            >
                              <input
                                type="radio"
                                name="paymentMethod"
                                value={method.value}
                                checked={bookingData.paymentMethod === method.value}
                                onChange={handleInputChange}
                                required
                                className="w-5 h-5"
                              />
                              <div className="flex-1">
                                <div className={`font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                                  {method.label}
                                </div>
                                <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-gray-600'}`}>
                                  {method.desc}
                                </div>
                              </div>
                              <FaLock className={isDarkMode ? 'text-[#8B949E]' : 'text-gray-400'} />
                            </label>
                          ))}
                        </div>

                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={bookingData.agreeToTerms}
                            onChange={handleInputChange}
                            required
                            className="mt-1 w-5 h-5"
                          />
                          <label className={`text-sm ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                            I agree to the <a href="/terms" className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}>Terms & Conditions</a> and <a href="/privacy" className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}>Privacy Policy</a>
                          </label>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-8 pt-6 border-t ${isDarkMode ? 'border-[#1E242B]' : 'border-gray-200'}">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={handlePreviousStep}
                          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                            isDarkMode
                              ? 'bg-[#1E242B] text-[#C4CCD4] hover:bg-[#2A3038]'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          Previous
                        </button>
                      )}
                      <button
                        type="submit"
                        className={`flex-1 px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                            : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
                        } transform hover:scale-105`}
                      >
                        {step === 4 ? 'Confirm Booking' : 'Continue'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Summary Sidebar */}
              <div>
                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white'} shadow-xl`}>
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                    Booking Summary
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-gray-600'}`}>
                      Package
                    </div>
                    <div className={`font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                      {packageData.title}
                    </div>
                    <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-gray-600'}`}>
                      Duration: {packageData.duration}
                    </div>
                  </div>

                  <div className={`border-t pt-4 space-y-2 ${isDarkMode ? 'border-[#1E242B]' : 'border-gray-200'}`}>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>Travelers:</span>
                      <span className={isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}>
                        {parseInt(bookingData.adults) + parseInt(bookingData.children)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}>Base Price:</span>
                      <span className={isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}>
                        ${packageData.price}
                      </span>
                    </div>
                  </div>

                  <div className={`border-t mt-4 pt-4 ${isDarkMode ? 'border-[#1E242B]' : 'border-gray-200'}`}>
                    <div className="flex justify-between text-xl font-bold">
                      <span className={isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}>Total:</span>
                      <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}>
                        ${calculateTotalPrice()}
                      </span>
                    </div>
                    <div className={`text-xs mt-2 ${isDarkMode ? 'text-[#8B949E]' : 'text-gray-500'}`}>
                      * 30% deposit required: ${(calculateTotalPrice() * 0.3).toFixed(2)}
                    </div>
                  </div>

                  <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-green-500/10' : 'bg-green-50'}`}>
                    <div className="flex items-center gap-2 text-green-500 font-semibold mb-2">
                      <FaLock />
                      <span>Secure Booking</span>
                    </div>
                    <p className={`text-xs ${isDarkMode ? 'text-[#C4CCD4]' : 'text-gray-600'}`}>
                      Your information is protected with 256-bit SSL encryption
                    </p>
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

export default BookNow;
