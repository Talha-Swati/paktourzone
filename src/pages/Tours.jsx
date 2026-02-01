import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import { baseTourCategories } from '../data/tourCategoriesData';
import { 
  FaUsers, 
  FaMountain, 
  FaClock,
  FaStar,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

const Tours = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const tourCategories = baseTourCategories.map((category) =>
    category.id === 'all'
      ? {
          ...category,
          color: isDarkMode ? category.colorDark : category.colorLight
        }
      : category
  );

  const filteredTours = selectedCategory === 'all' 
    ? tourCategories.filter(cat => cat.id !== 'all')
    : tourCategories.filter(cat => cat.id === selectedCategory);

  return (
    <PageLayout
      seo={{
        title: 'Pakistan Tour Packages | Adventure, Family, Honeymoon & More',
        description: 'Browse curated Northern Pakistan tours designed for international travelers. Adventure treks, family holidays, honeymoons, corporate retreats, and value tours with clear inclusions.',
        keywords: 'Pakistan tour packages, Northern Pakistan tours, adventure treks, family holidays, honeymoon tours, corporate retreats, value tours',
        url: '/tours'
      }}
    >
      {/* Hero Section */}
      <section className={`relative py-20 overflow-hidden ${
        isDarkMode ? 'bg-linear-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-linear-to-br from-white via-[#EBF8FF] to-white'
      }`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#22D3EE] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4DBBFF] rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
                isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
              } bg-clip-text text-transparent`}>
                Choose Your Pakistan Tour Package
              </h1>
              <p className={`text-xl mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
                Handpicked itineraries with expert guides, comfortable transport, and clear pricing, built for international travelers
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                } shadow-lg`}>
                  <FaMountain className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                  <span className="font-semibold">50+ Destinations</span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                } shadow-lg`}>
                  <FaUsers className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                  <span className="font-semibold">5000+ Happy Travelers</span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                } shadow-lg`}>
                  <FaStar className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className={`py-6 backdrop-blur-lg border-b ${
          isDarkMode ? 'bg-[#0B0C0E]/95 border-[#1E242B]' : 'bg-white/95 border-[#E2E8F0]'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
              {tourCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? isDarkMode
                        ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] shadow-lg shadow-[#22D3EE]/50'
                        : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-lg shadow-blue-500/50'
                      : isDarkMode
                      ? 'bg-[#141A1F] text-[#C4CCD4] hover:bg-[#1E242B]'
                      : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0]'
                  } transform hover:scale-105`}
                >
                  <span className="text-lg">
                    {category.icon && <category.icon />}
                  </span>
                  <span>{category.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? 'bg-white/20'
                      : isDarkMode ? 'bg-[#0F1419]' : 'bg-white'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour, index) => (
                <Link
                  key={tour.id}
                  to={tour.path}
                  className={`group relative rounded-2xl overflow-hidden ${
                    isDarkMode ? 'bg-[#141A1F]' : 'bg-white border border-[#E2E8F0]'
                  } shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-linear-to-r ${tour.color} text-white font-bold text-sm shadow-lg flex items-center gap-2`}>
                      {tour.icon && <tour.icon />}
                      <span>{tour.count}+ Tours</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-3 transition-all ${
                      isDarkMode ? 'text-[#E0E7EE] group-hover:text-[#22D3EE]' : 'text-[#0F172A] group-hover:text-[#3B82F6]'
                    }`}>
                      {tour.name}
                    </h3>
                    
                    <p className={`mb-4 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
                      {tour.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {tour.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FaCheckCircle className="text-green-500 shrink-0" />
                          <span className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className={`flex items-center justify-between pt-4 border-t ${
                      isDarkMode ? 'border-[#1E242B]' : 'border-[#E2E8F0]'
                    }`}>
                      <span className={`font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#1D4ED8]'}`}>
                        View All Packages
                      </span>
                      <FaArrowRight className={`transform group-hover:translate-x-2 transition-transform ${
                        isDarkMode ? 'text-[#22D3EE]' : 'text-[#1D4ED8]'
                      }`} />
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 pointer-events-none ${
                    isDarkMode 
                      ? 'border-transparent group-hover:border-[#22D3EE]'
                        : 'border-transparent group-hover:border-[#2563EB]'
                  }`}></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`py-16 ${isDarkMode ? 'bg-[#141A1F]' : 'bg-[#F8FAFC]'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${
                isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
              } bg-clip-text text-transparent`}>
                Why Choose PakTourZone?
              </h2>
              <p className={isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}>
                We make your journey unforgettable
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <FaStar />, title: 'Expert Guides', desc: '10+ years experience' },
                { icon: <FaCheckCircle />, title: 'Best Prices', desc: 'Competitive rates guaranteed' },
                { icon: <FaUsers />, title: 'Small Groups', desc: 'Personal attention' },
                { icon: <FaClock />, title: '24/7 Support', desc: 'Always here to help' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl text-center ${
                    isDarkMode ? 'bg-[#0F1419]' : 'bg-white border border-[#E2E8F0]'
                  } shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1`}
                >
                  <div className={`text-4xl mb-4 ${
                    isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
                  }`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-20 ${
          isDarkMode ? 'bg-linear-to-br from-[#0A3A67] to-[#0B0C0E]' : 'bg-linear-to-br from-[#EBF8FF] to-white'
        }`}>
          <div className="container mx-auto px-4 text-center">
              <h2 className={`text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Can't Find What You're Looking For?
            </h2>
            <p className={`text-xl mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
              Let us create a custom tour package tailored to your preferences
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/custom-tour"
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                    : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
                } transform hover:scale-105`}
              >
                Build Custom Tour
              </Link>
              <Link
                to="/contact"
                className={`px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 ${
                  isDarkMode
                    ? 'border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#0B0C0E]'
                    : 'border-[#2563EB] text-[#1D4ED8] hover:bg-[#2563EB] hover:text-white'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

    </PageLayout>
  );
};

export default Tours;
