import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { getToursByCategory } from '../../data/toursData';
import PageLayout from '../../components/layout/PageLayout';
import { 
  Briefcase, Calendar, MapPin, Star, Users,
  Award, Target, TrendingUp, Shield, Check, ArrowRight, Lightbulb
} from 'lucide-react';

const CorporateTours = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const tourData = getToursByCategory('corporate');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNow = (pkg) => {
    navigate('/custom-tour', {
      state: {
        preselectedTour: pkg.name,
        destination: pkg.destination,
        duration: pkg.duration,
        groupSize: pkg.groupSize,
        tourType: 'Corporate Retreat'
      }
    });
  };

  return (
    <PageLayout
      seo={{
        title: 'Corporate Retreats in Northern Pakistan | PakTourZone',
        description: 'Corporate retreat packages with expert planning, safe logistics, and inspiring mountain settings for teams and leaders.',
        keywords: 'corporate tours Pakistan, team building retreat, Northern Pakistan corporate trips, company travel, executive retreat Pakistan',
        url: '/trip/corporate'
      }}
      className={isDarkMode ? 'bg-[#0B0C0E] text-[#E0E7EE]' : 'bg-gray-50 text-gray-900'}
    >
      {/* Hero Section */}
      <div className="relative h-125 bg-cover bg-center" style={{ backgroundImage: `url(${tourData.heroImage})` }}>
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-indigo-900/80" />
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-12 h-12 text-blue-300" />
              <span className="px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold">{tourData.category}</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">{tourData.title}</h1>
            <p className="text-xl text-gray-200 mb-6">{tourData.description}</p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Target, text: 'Strategic Team Building' },
                { icon: Award, text: 'Leadership Growth' },
                { icon: TrendingUp, text: 'Productivity Gains' }
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
          <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`}>
            Why Companies Choose PakTourZone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourData.features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${isDarkMode ? 'bg-[#141A1F] border-[#1E242B] hover:border-[#22D3EE]' : 'bg-white border-gray-200 hover:border-blue-400'} transition-all`}>
                <Check className={`w-6 h-6 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'} mb-2`} />
                <span className="font-semibold">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className={`py-16 ${isDarkMode ? 'bg-[#0B0C0E]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Corporate Retreat Packages in Northern Pakistan
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tourData.packages.map((pkg) => (
              <div key={pkg.id} className={`rounded-2xl overflow-hidden shadow-xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white'}`}>
                <div className="relative h-64 overflow-hidden">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=800&q=80'; }}
                  />
                  {pkg.rating && (
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-2 rounded-lg flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-gray-900">{pkg.rating}</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{pkg.shortDescription}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className={`w-5 h-5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`} />
                      <div><p className="text-xs text-gray-500">Duration</p><p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.duration}</p></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className={`w-5 h-5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`} />
                      <div><p className="text-xs text-gray-500">Group Size</p><p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.groupSize}</p></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`}>Key Activities</h4>
                    <ul className="space-y-2">
                      {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`border-t pt-4 mb-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm text-gray-500">From</span>
                      <span className={`text-3xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-blue-600'}`}>
                        ${Object.values(pkg.pricing)[0]}
                      </span>
                      <span className="text-sm text-gray-500">per person</span>
                    </div>
                  </div>

                  <button onClick={() => handleBookNow(pkg)}
                    className="w-full py-3 px-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </PageLayout>
  );
};

export default CorporateTours;
