import { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { getToursByCategory } from '../../data/toursData';
import TopBar from '../../components/layout/TopBar';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { 
  Heart, Calendar, MapPin, Star, Sparkles,
  Camera, Wine, Award, Shield, Check, ArrowRight, Gift
} from 'lucide-react';

const HoneymoonTours = () => {
  const { isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen } = useTheme();
  const navigate = useNavigate();
  const tourData = getToursByCategory('honeymoon');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  
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

  const handleBookNow = (pkg) => {
    navigate('/custom-tour', {
      state: {
        preselectedTour: pkg.name,
        destination: pkg.destination,
        duration: pkg.duration,
        groupSize: pkg.groupSize,
        tourType: 'Honeymoon Special'
      }
    });
  };

  const pricingTiers = ['couple', 'deluxe', 'premium'];
  const tierNames = {
    couple: 'Romantic Package',
    deluxe: 'Deluxe Romance',
    premium: 'Ultimate Luxury'
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0B0C0E] text-[#E0E7EE]' : 'bg-gray-50 text-gray-900'}`}>
      <TopBar {...topBarProps} />
      <Navbar {...navbarProps} />

      {/* Hero Section with Romantic Gradient */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${tourData.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-purple-900/70 to-blue-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-40" />
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-12 h-12 text-pink-300 fill-pink-300 animate-pulse" />
              <span className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-semibold shadow-lg">
                {tourData.category}
              </span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent">
              {tourData.title}
            </h1>
            <p className="text-2xl text-gray-100 mb-8 leading-relaxed">{tourData.description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20">
                <Sparkles className="w-6 h-6 text-yellow-300" />
                <span className="font-semibold">Luxury Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20">
                <Camera className="w-6 h-6 text-blue-300" />
                <span className="font-semibold">Pro Photography</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20">
                <Gift className="w-6 h-6 text-pink-300" />
                <span className="font-semibold">Special Surprises</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Romantic Features */}
      <div className={`py-16 ${isDarkMode ? 'bg-gradient-to-b from-[#0F1419] to-[#0B0C0E]' : 'bg-gradient-to-b from-white to-pink-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-12 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent' 
              : 'text-pink-600'
          }`}>
            What Makes Our Honeymoon Packages Special?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourData.features.map((feature, index) => (
              <div 
                key={index}
                className={`group p-8 rounded-2xl border-2 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-[#141A1F] to-[#0F1419] border-pink-900/30 hover:border-pink-500/50' 
                    : 'bg-white border-pink-200 hover:border-pink-400'
                } transition-all duration-500 hover:shadow-2xl hover:scale-105`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <Heart className={`w-8 h-8 ${
                    isDarkMode ? 'text-pink-400' : 'text-pink-600'
                  } group-hover:scale-110 transition-transform`} />
                  <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Honeymoon Packages */}
      <div className={`py-20 ${isDarkMode ? 'bg-[#0B0C0E]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-5xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Exclusive Honeymoon Packages
          </h2>
          <p className={`text-center text-lg mb-16 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Create unforgettable memories with our specially designed romantic getaways
          </p>
          
          <div className="space-y-12">
            {tourData.packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`rounded-3xl overflow-hidden shadow-2xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-[#141A1F] via-[#1A1F2E] to-[#141A1F]' 
                    : 'bg-white'
                } border-2 ${
                  isDarkMode ? 'border-pink-900/30' : 'border-pink-100'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative h-96 lg:h-auto overflow-hidden group">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      {pkg.rating && (
                        <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl inline-flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                          <span className="font-bold text-gray-900 text-lg">{pkg.rating}</span>
                          <span className="text-sm text-gray-600">({pkg.reviews} couples loved it)</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                      <span className={`text-sm font-semibold ${
                        isDarkMode ? 'text-pink-400' : 'text-pink-600'
                      }`}>
                        {pkg.destination}
                      </span>
                    </div>
                    
                    <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {pkg.name}
                    </h3>
                    
                    <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {pkg.shortDescription}
                    </p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#0F1419]' : 'bg-pink-50'}`}>
                        <Calendar className={`w-6 h-6 mb-2 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`} />
                        <p className="text-xs text-gray-500 mb-1">Duration</p>
                        <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {pkg.duration}
                        </p>
                      </div>
                      <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#0F1419]' : 'bg-pink-50'}`}>
                        <Shield className={`w-6 h-6 mb-2 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`} />
                        <p className="text-xs text-gray-500 mb-1">Type</p>
                        <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Private Tour
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-8">
                      <h4 className={`font-bold mb-4 text-lg ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                        Romantic Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {pkg.highlights.slice(0, 6).map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Sparkles className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                              isDarkMode ? 'text-yellow-400' : 'text-yellow-500'
                            }`} />
                            <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing Tiers */}
                    <div className={`border-t pt-6 mb-6 ${isDarkMode ? 'border-gray-700' : 'border-pink-200'}`}>
                      <h4 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Choose Your Package
                      </h4>
                      <div className="space-y-3">
                        {pricingTiers.map((tier) => (
                          <div key={tier} className={`flex justify-between items-center p-4 rounded-xl ${
                            isDarkMode ? 'bg-[#0F1419]' : 'bg-gray-50'
                          } ${tier === 'deluxe' ? 'ring-2 ring-pink-500' : ''}`}>
                            <div>
                              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {tierNames[tier]}
                              </span>
                              {tier === 'deluxe' && (
                                <span className="ml-2 text-xs bg-pink-500 text-white px-2 py-1 rounded-full">
                                  Most Popular
                                </span>
                              )}
                            </div>
                            <div className={`text-2xl font-bold ${
                              isDarkMode ? 'text-pink-400' : 'text-pink-600'
                            }`}>
                              ${pkg.pricing[tier]}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-3">Best Time: {pkg.bestTime}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          setSelectedPackage(pkg);
                          setShowDetails(true);
                        }}
                        className={`flex-1 py-4 px-6 rounded-xl border-2 font-semibold transition-all ${
                          isDarkMode
                            ? 'border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white'
                            : 'border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white'
                        }`}
                      >
                        View Full Details
                      </button>
                      <button
                        onClick={() => handleBookNow(pkg)}
                        className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        Book Now
                        <Heart className="w-5 h-5 fill-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className={`py-20 ${isDarkMode ? 'bg-gradient-to-b from-[#0F1419] to-[#0B0C0E]' : 'bg-gradient-to-b from-pink-50 to-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Creating Unforgettable Memories Since Day One
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Camera, title: 'Pro Photography', desc: 'Capture every romantic moment' },
              { icon: Wine, title: 'Luxury Dining', desc: 'Candlelight dinners under stars' },
              { icon: Award, title: '5-Star Service', desc: 'Personalized attention always' },
              { icon: Gift, title: 'Special Surprises', desc: 'Thoughtful romantic touches' }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-gradient-to-br from-pink-900/40 to-purple-900/40' : 'bg-gradient-to-br from-pink-100 to-purple-100'
                } group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-10 h-10 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`} />
                </div>
                <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-12 ${isDarkMode ? 'bg-[#0B0C0E]' : 'bg-[#1F2937]'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">PakTourZone</h3>
              <p className="text-gray-400 text-sm">
                Creating perfect honeymoon memories in Pakistan's most romantic destinations.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/" className="hover:text-pink-400">Home</Link></li>
                <li><Link to="/destinations" className="hover:text-pink-400">Destinations</Link></li>
                <li><Link to="/trip/adventure" className="hover:text-pink-400">Adventure Tours</Link></li>
                <li><Link to="/contact" className="hover:text-pink-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Tour Types</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/trip/family" className="hover:text-pink-400">Family Packages</Link></li>
                <li><Link to="/trip/honeymoon" className="hover:text-pink-400">Honeymoon Tours</Link></li>
                <li><Link to="/trip/corporate" className="hover:text-pink-400">Corporate Tours</Link></li>
                <li><Link to="/trip/budget" className="hover:text-pink-400">Budget Tours</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Email: honeymoon@paktourzone.com</li>
                <li>Phone: +92 300 1234567</li>
                <li>Islamabad, Pakistan</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PakTourZone. Making love stories unforgettable.</p>
          </div>
        </div>
      </footer>

      {/* Details Modal */}
      {showDetails && selectedPackage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowDetails(false)}>
          <div 
            className={`max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl ${
              isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
            } shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedPackage.name}
                  </h2>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedPackage.shortDescription}
                  </p>
                </div>
                <button 
                  onClick={() => setShowDetails(false)}
                  className={`text-3xl ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  ×
                </button>
              </div>

              {selectedPackage.inclusions && (
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                    Luxury Inclusions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedPackage.inclusions.map((item, idx) => (
                      <div key={idx} className={`p-4 rounded-xl flex items-start gap-3 ${
                        isDarkMode ? 'bg-[#0F1419]' : 'bg-pink-50'
                      }`}>
                        <Sparkles className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          isDarkMode ? 'text-pink-400' : 'text-pink-600'
                        }`} />
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  setShowDetails(false);
                  handleBookNow(selectedPackage);
                }}
                className="w-full py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg"
              >
                Book This Honeymoon Package
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default HoneymoonTours;
