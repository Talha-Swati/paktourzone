import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { getToursByCategory } from '../../data/toursData';
import PageLayout from '../../components/layout/PageLayout';
import { 
  Users, Calendar, MapPin, Star, Clock, 
  TrendingUp, Award, Shield, Heart, Baby,
  Check, ArrowRight, Image as ImageIcon
} from 'lucide-react';

const FamilyTours = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const tourData = getToursByCategory('family');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showItinerary, setShowItinerary] = useState(false);

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
    <PageLayout
      seo={{
        title: 'Family Tours in Northern Pakistan | PakTourZone',
        description: 'Family friendly tours in Pakistan with safe transport, comfortable stays, and flexible itineraries for every age group.',
        keywords: 'family tours Pakistan, Northern Pakistan family trips, Hunza family tour, safe travel Pakistan, family holiday Pakistan',
        url: '/trip/family'
      }}
      className={isDarkMode ? 'bg-[#0B0C0E] text-[#E0E7EE]' : 'bg-[#F8FAFC] text-[#0F172A]'}
    >

      {/* Hero Section */}
      <div 
        className="relative h-125 bg-cover bg-center"
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
                <span>Family Friendly Travel</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5" />
                <span>Safe and Secure Travel</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-5 h-5" />
                <span>Expert Local Guides</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className={`py-12 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'}`}>
            Why Families Choose PakTourZone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourData.features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl border-2 ${
                  isDarkMode 
                    ? 'bg-[#141A1F] border-[#1E242B] hover:border-[#22D3EE]' 
                    : 'bg-white border-[#E2E8F0] hover:border-[#2563EB]'
                } transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center gap-3">
                  <Check className={`w-6 h-6 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'}`} />
                  <span className="font-semibold">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tour Packages */}
      <div className={`py-16 ${isDarkMode ? 'bg-[#0B0C0E]' : 'bg-[#F8FAFC]'} `}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Family Tour Packages in Northern Pakistan
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tourData.packages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className={`rounded-2xl overflow-hidden shadow-xl ${
                  isDarkMode ? 'bg-[#141A1F]' : 'bg-white border border-[#E2E8F0]'
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
                      <span className="font-bold text-[#0F172A]">{pkg.rating}</span>
                      <span className="text-xs text-[#64748B]">({pkg.reviews})</span>
                    </div>
                  )}
                </div>

                {/* Package Content */}
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-[#64748B]'}`}>
                    {pkg.shortDescription}
                  </p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className={`w-5 h-5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'}`} />
                      <div>
                        <p className="text-xs text-[#94A3B8]">Duration</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                          {pkg.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-5 h-5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'}`} />
                      <div>
                        <p className="text-xs text-[#94A3B8]">Destination</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                          {pkg.destination}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Baby className={`w-5 h-5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'}`} />
                      <div>
                        <p className="text-xs text-[#94A3B8]">Age Group</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                          {pkg.minAge}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className={`w-5 h-5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'}`} />
                      <div>
                        <p className="text-xs text-[#94A3B8]">Group Size</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                          {pkg.groupSize}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'}`}>
                      Tour Highlights
                    </h4>
                    <ul className="space-y-2">
                      {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                          <span className={isDarkMode ? 'text-gray-300' : 'text-[#475569]'}>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className={`border-t pt-4 mb-4 ${isDarkMode ? 'border-gray-700' : 'border-[#E2E8F0]'}`}>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm text-[#94A3B8]">Starting from</span>
                      <span className={`text-3xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'} `}>
                        ${Object.values(pkg.pricing)[0]}
                      </span>
                      <span className="text-sm text-[#94A3B8]">per family</span>
                    </div>
                    <p className="text-xs text-[#94A3B8]">Best Time: {pkg.bestTime}</p>
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
                          : 'border-[#2563EB] text-[#1D4ED8] hover:bg-[#2563EB] hover:text-white'
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
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Why Families Trust PakTourZone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-[#22D3EE]/20' : 'bg-blue-50'
              }`}>
                <Shield className={`w-8 h-8 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'} `} />
              </div>
              <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>Safe & Secure</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#64748B]'}`}>
                All tours follow strict safety protocols
              </p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-[#22D3EE]/20' : 'bg-blue-50'
              }`}>
                <Award className={`w-8 h-8 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'} `} />
              </div>
              <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>Experienced Guides</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#64748B]'}`}>
                Family-friendly professional guides
              </p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-[#22D3EE]/20' : 'bg-blue-50'
              }`}>
                <Heart className={`w-8 h-8 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'} `} />
              </div>
              <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>Kid-Friendly</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#64748B]'}`}>
                Activities suitable for all ages
              </p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-[#22D3EE]/20' : 'bg-blue-50'
              }`}>
                <TrendingUp className={`w-8 h-8 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'} `} />
              </div>
              <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>Best Value</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#64748B]'}`}>
                Competitive pricing with quality
              </p>
            </div>
          </div>
        </div>
      </div>

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
                <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                  {selectedPackage.name}
                </h2>
                <button 
                  onClick={() => setShowItinerary(false)}
                  className={`text-2xl ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#64748B] hover:text-[#0F172A]'}`}
                >
                  ×
                </button>
              </div>

              {selectedPackage.itinerary && (
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'} `}>
                    Day-by-Day Itinerary
                  </h3>
                  <div className="space-y-4">
                    {selectedPackage.itinerary.map((day, idx) => (
                      <div key={idx} className={`p-4 rounded-lg ${isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F8FAFC]'} `}>
                        <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                          Day {day.day}: {day.title}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#64748B]'}`}>
                          {day.activities}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedPackage.inclusions && (
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'} `}>
                    What's Included
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedPackage.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-5 h-5 mt-0.5 shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-[#475569]'}`}>{item}</span>
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

      {/* Footer */}
    </PageLayout>
  );
};
export default FamilyTours;
