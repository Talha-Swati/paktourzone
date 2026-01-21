import { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { getToursByCategory } from '../../data/toursData';
import TopBar from '../../components/layout/TopBar';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { 
  DollarSign, Calendar, MapPin, Star, Users,
  ThumbsUp, TrendingUp, Check, ArrowRight, Zap
} from 'lucide-react';

const BudgetTours = () => {
  const { isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen } = useTheme();
  const navigate = useNavigate();
  const tourData = getToursByCategory('budget');

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
    isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen,
    themeDropdownRef, languageDropdownOpen, setLanguageDropdownOpen, languageDropdownRef,
  }), [isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen, languageDropdownOpen]);

  const navbarProps = useMemo(() => ({
    isDarkMode, mobileMenuOpen, setMobileMenuOpen,
  }), [isDarkMode, mobileMenuOpen]);

  const handleBookNow = (pkg) => {
    navigate('/custom-tour', {
      state: {
        preselectedTour: pkg.name,
        destination: pkg.destination,
        duration: pkg.duration,
        groupSize: pkg.groupSize,
        tourType: 'Budget Tour'
      }
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0B0C0E] text-[#E0E7EE]' : 'bg-gray-50 text-gray-900'}`}>
      <TopBar {...topBarProps} />
      <Navbar {...navbarProps} />

      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${tourData.heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-900/80" />
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-12 h-12 text-green-300" />
              <span className="px-4 py-2 bg-green-500 rounded-full text-sm font-semibold">{tourData.category}</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">{tourData.title}</h1>
            <p className="text-xl text-gray-200 mb-6">{tourData.description}</p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: ThumbsUp, text: 'Best Value' },
                { icon: TrendingUp, text: 'Great Quality' },
                { icon: Zap, text: 'Quick Booking' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className={`py-12 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-[#22D3EE]' : 'text-green-600'}`}>
            Why Choose Our Budget Packages?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourData.features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${isDarkMode ? 'bg-[#141A1F] border-[#1E242B] hover:border-green-500' : 'bg-white border-gray-200 hover:border-green-400'} transition-all`}>
                <Check className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'} mb-2`} />
                <span className="font-semibold">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className={`py-16 ${isDarkMode ? 'bg-[#0B0C0E]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Affordable Adventure Packages
          </h2>
          <p className={`text-center text-lg mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Experience Pakistan's beauty without breaking the bank
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourData.packages.map((pkg) => (
              <div key={pkg.id} className={`rounded-2xl overflow-hidden shadow-xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white'} hover:shadow-2xl transition-all`}>
                <div className="relative h-56 overflow-hidden group">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'; }}
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-semibold text-sm">
                    Best Value
                  </div>
                  {pkg.rating && (
                    <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-gray-900 text-sm">{pkg.rating}</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{pkg.shortDescription}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                      <div><p className="text-xs text-gray-500">Duration</p><p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.duration}</p></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className={`w-4 h-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                      <div><p className="text-xs text-gray-500">Group</p><p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.groupSize}</p></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>Highlights</h4>
                    <ul className="space-y-1">
                      {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <Check className={`w-3 h-3 mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`border-t pt-4 mb-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-gray-500">Only</span>
                      <span className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                        ${Object.values(pkg.pricing)[0]}
                      </span>
                      <span className="text-xs text-gray-500">pp</span>
                    </div>
                  </div>

                  <button onClick={() => handleBookNow(pkg)}
                    className="w-full py-2.5 px-4 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className={`py-16 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Maximum Adventure, Minimum Cost
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: 'Best Prices', desc: 'Unbeatable value for money' },
              { icon: ThumbsUp, title: 'Quality Service', desc: 'No compromise on experience' },
              { icon: Users, title: 'Group Savings', desc: 'Shared costs, shared fun' },
              { icon: Zap, title: 'Quick Booking', desc: 'Easy and fast process' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-green-900/30' : 'bg-green-100'
                }`}>
                  <item.icon className={`w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                </div>
                <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
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
              <p className="text-gray-400 text-sm">Affordable adventures for budget-conscious travelers.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/" className="hover:text-green-400">Home</Link></li>
                <li><Link to="/destinations" className="hover:text-green-400">Destinations</Link></li>
                <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Tour Types</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/trip/family" className="hover:text-green-400">Family Packages</Link></li>
                <li><Link to="/trip/honeymoon" className="hover:text-green-400">Honeymoon Tours</Link></li>
                <li><Link to="/trip/corporate" className="hover:text-green-400">Corporate Tours</Link></li>
                <li><Link to="/trip/budget" className="hover:text-green-400">Budget Tours</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Email: budget@paktourzone.com</li>
                <li>Phone: +92 300 1234567</li>
                <li>Islamabad, Pakistan</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PakTourZone. Adventure for everyone, everywhere.</p>
          </div>
        </div>
      </footer>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default BudgetTours;
