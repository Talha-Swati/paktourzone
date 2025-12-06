import { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { getToursByCategory } from '../../data/toursData';
import TopBar from '../../components/layout/TopBar';
import Navbar from '../../components/layout/Navbar';
import { 
  Users, Calendar, MapPin, Star, Clock, 
  TrendingUp, Award, Shield, Heart, Baby,
  Check, ArrowRight, Image as ImageIcon
} from 'lucide-react';

const FamilyTours = () => {
  const { isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen } = useTheme();
  const navigate = useNavigate();
  const tourData = getToursByCategory('family');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showItinerary, setShowItinerary] = useState(false);
  
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
        groupSize: pkg.groupSize
      }
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0B0C0E] text-[#E0E7EE]' : 'bg-gray-50 text-gray-900'}`}>
      <TopBar {...topBarProps} />
      <Navbar {...navbarProps} />

      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${tourData.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-6xl">{tourData.icon}</span>
              <span className="px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold">
                {tourData.category}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">{tourData.title}</h1>
            <p className="text-xl text-gray-200 mb-6">{tourData.description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-5 h-5" />
                <span>Family Friendly</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5" />
                <span>Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-5 h-5" />
                <span>Expert Guides</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className={`py-12 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`}>
            Why Choose Our Family Packages?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourData.features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl border-2 ${
                  isDarkMode 
                    ? 'bg-[#141A1F] border-[#1E242B] hover:border-[#22D3EE]' 
                    : 'bg-white border-gray-200 hover:border-blue-400'
                } transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center gap-3">
                  <Check className={`w-6 h-6 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`} />
                  <span className="font-semibold">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tour Packages */}
      <div className={`py-16 ${isDarkMode ? 'bg-[#0B0C0E]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Family Tour Packages
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tourData.packages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className={`rounded-2xl overflow-hidden shadow-xl ${
                  isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                } hover:shadow-2xl transition-all duration-300`}
              >
                {/* Package Image */}
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold">
                    {pkg.difficulty}
                  </div>
                  {pkg.rating && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-gray-900">{pkg.rating}</span>
                      <span className="text-xs text-gray-600">({pkg.reviews})</span>
                    </div>
                  )}
                </div>

                {/* Package Content */}
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {pkg.shortDescription}
                  </p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className={`w-5 h-5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`} />
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {pkg.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-5 h-5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`} />
                      <div>
                        <p className="text-xs text-gray-500">Destination</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {pkg.destination}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Baby className={`w-5 h-5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`} />
                      <div>
                        <p className="text-xs text-gray-500">Age Group</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {pkg.minAge}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className={`w-5 h-5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`} />
                      <div>
                        <p className="text-xs text-gray-500">Group Size</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {pkg.groupSize}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`}>
                      Tour Highlights
                    </h4>
                    <ul className="space-y-2">
                      {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className={`border-t pt-4 mb-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm text-gray-500">Starting from</span>
                      <span className={`text-3xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`}>
                        ${Object.values(pkg.pricing)[0]}
                      </span>
                      <span className="text-sm text-gray-500">per family</span>
                    </div>
                    <p className="text-xs text-gray-500">Best Time: {pkg.bestTime}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedPackage(pkg);
                        setShowItinerary(true);
                      }}
                      className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                        isDarkMode
                          ? 'border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#0B0C0E]'
                          : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                      }`}
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleBookNow(pkg)}
                      className="flex-1 py-3 px-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Book With Us */}
      <div className={`py-16 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Why Families Trust PakTourZone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-[#22D3EE]/20' : 'bg-blue-100'
              }`}>
                <Shield className={`w-8 h-8 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`} />
              </div>
              <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Safe & Secure</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                All tours follow strict safety protocols
              </p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-[#22D3EE]/20' : 'bg-blue-100'
              }`}>
                <Award className={`w-8 h-8 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`} />
              </div>
              <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Experienced Guides</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Family-friendly professional guides
              </p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-[#22D3EE]/20' : 'bg-blue-100'
              }`}>
                <Heart className={`w-8 h-8 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`} />
              </div>
              <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Kid-Friendly</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Activities suitable for all ages
              </p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-[#22D3EE]/20' : 'bg-blue-100'
              }`}>
                <TrendingUp className={`w-8 h-8 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`} />
              </div>
              <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Best Value</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Competitive pricing with quality
              </p>
            </div>
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
                Your trusted partner for unforgettable family adventures across Pakistan.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/" className="hover:text-[#22D3EE]">Home</Link></li>
                <li><Link to="/destinations" className="hover:text-[#22D3EE]">Destinations</Link></li>
                <li><Link to="/trip/adventure" className="hover:text-[#22D3EE]">Adventure Tours</Link></li>
                <li><Link to="/contact" className="hover:text-[#22D3EE]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Tour Types</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/trip/family" className="hover:text-[#22D3EE]">Family Packages</Link></li>
                <li><Link to="/trip/honeymoon" className="hover:text-[#22D3EE]">Honeymoon Tours</Link></li>
                <li><Link to="/trip/corporate" className="hover:text-[#22D3EE]">Corporate Tours</Link></li>
                <li><Link to="/trip/budget" className="hover:text-[#22D3EE]">Budget Tours</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Email: info@paktourzone.com</li>
                <li>Phone: +92 300 1234567</li>
                <li>Islamabad, Pakistan</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PakTourZone. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Package Details Modal */}
      {showItinerary && selectedPackage && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setShowItinerary(false)}>
          <div 
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
              isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedPackage.name}
                </h2>
                <button 
                  onClick={() => setShowItinerary(false)}
                  className={`text-2xl ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  ×
                </button>
              </div>

              {selectedPackage.itinerary && (
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`}>
                    Day-by-Day Itinerary
                  </h3>
                  <div className="space-y-4">
                    {selectedPackage.itinerary.map((day, idx) => (
                      <div key={idx} className={`p-4 rounded-lg ${isDarkMode ? 'bg-[#0F1419]' : 'bg-gray-50'}`}>
                        <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Day {day.day}: {day.title}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {day.activities}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedPackage.inclusions && (
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`}>
                    What's Included
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedPackage.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={() => {
                  setShowItinerary(false);
                  handleBookNow(selectedPackage);
                }}
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
              >
                Book This Package Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyTours;
