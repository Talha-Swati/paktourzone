import { useState, useMemo, memo } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import PageLayout from '../../components/layout/PageLayout';
import { adventureTours } from '../../data/adventureToursData';

// Common Components
import FlipCard from '../../components/common/FlipCard';

const AdventureTours = () => {
  const { isDarkMode } = useTheme();
  
  // State Management
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Filter tours based on selections
  const filteredTours = useMemo(() => {
    return adventureTours.filter(tour => {
      const difficultyMatch = selectedDifficulty === 'all' || tour.difficulty === selectedDifficulty;
      const durationMatch = selectedDuration === 'all' || 
        (selectedDuration === 'short' && parseInt(tour.duration) <= 7) ||
        (selectedDuration === 'medium' && parseInt(tour.duration) > 7 && parseInt(tour.duration) <= 10) ||
        (selectedDuration === 'long' && parseInt(tour.duration) > 10);
      const regionMatch = selectedRegion === 'all' || tour.region === selectedRegion;
      
      return difficultyMatch && durationMatch && regionMatch;
    });
  }, [adventureTours, selectedDifficulty, selectedDuration, selectedRegion]);

  return (
    <PageLayout
      seo={{
        title: 'Adventure Tours in Northern Pakistan | PakTourZone',
        description: 'High‑energy treks, base‑camp routes, and mountain adventures designed for international travelers. Expert guides and safe logistics included.',
        keywords: 'Pakistan adventure tours, trekking Pakistan, K2 base camp, Northern Pakistan hikes, mountain tours',
        url: '/trip/adventure'
      }}
      className={`transition-colors duration-500 ${
      isDarkMode
        ? 'bg-linear-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]'
        : 'bg-linear-to-b from-white to-[#F8FAFB] text-[#1F2937]'
    }`}
    >

      {/* Hero Section */}
      <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-[#0B0C0E]' : 'bg-white'
      }`}>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920" 
            alt="Adventure Tours" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className={`absolute inset-0 ${
            isDarkMode ? 'bg-linear-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-linear-to-br from-white via-[#EBF8FF] to-white'
          } opacity-90`} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className={`inline-flex items-center gap-2 mb-6 rounded-full border backdrop-blur-sm px-6 py-3 ${
            isDarkMode
              ? 'border-[rgba(34,211,238,0.3)] bg-[rgba(20,26,31,0.6)]'
              : 'border-[rgba(59,130,246,0.3)] bg-[rgba(255,255,255,0.6)]'
          }`}>
            <span className="text-2xl">🏔️</span>
            <span className={`text-sm font-bold uppercase tracking-wider ${
              isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
            }`}>Adventure Awaits</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className={isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}>Adventure </span>
            <span className={`bg-clip-text text-transparent ${
              isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
            }`}>Tours</span>
          </h1>

          <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 ${
            isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'
          }`}>
            Push your limits with safe, guided treks through Pakistan’s most spectacular mountain ranges—built for international travelers.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className={`flex items-center gap-2 px-6 py-3 rounded-xl ${
              isDarkMode ? 'bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.3)]' : 'bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.3)]'
            }`}>
              <svg className={`w-6 h-6 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Expert Guides</span>
            </div>
            <div className={`flex items-center gap-2 px-6 py-3 rounded-xl ${
              isDarkMode ? 'bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.3)]' : 'bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.3)]'
            }`}>
              <svg className={`w-6 h-6 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Safety First</span>
            </div>
            <div className={`flex items-center gap-2 px-6 py-3 rounded-xl ${
              isDarkMode ? 'bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.3)]' : 'bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.3)]'
            }`}>
              <svg className={`w-6 h-6 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">All Equipment Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`} />

      {/* Filters Section */}
      <section className={`py-12 backdrop-blur-xl transition-colors ${
        isDarkMode ? 'bg-[rgba(11,12,14,0.9)] border-b border-gray-800' : 'bg-[rgba(255,255,255,0.9)] border-b border-gray-200'
      }`}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-4 justify-between">
            <div className="flex items-center gap-2">
              <svg className={`w-5 h-5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="font-bold">Filter Tours:</span>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Difficulty Filter */}
              <select 
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                  isDarkMode 
                    ? 'bg-[#141A1F] border border-[rgba(34,211,238,0.3)] text-[#E0E7EE] hover:border-[#22D3EE]' 
                    : 'bg-white border border-[rgba(59,130,246,0.3)] text-[#1F2937] hover:border-[#3B82F6]'
                }`}
              >
                <option value="all">All Levels</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="hard">Hard</option>
                <option value="extreme">Extreme</option>
              </select>

              {/* Duration Filter */}
              <select 
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                  isDarkMode 
                    ? 'bg-[#141A1F] border border-[rgba(34,211,238,0.3)] text-[#E0E7EE] hover:border-[#22D3EE]' 
                    : 'bg-white border border-[rgba(59,130,246,0.3)] text-[#1F2937] hover:border-[#3B82F6]'
                }`}
              >
                <option value="all">All Durations</option>
                <option value="short">1-7 Days</option>
                <option value="medium">8-10 Days</option>
                <option value="long">10+ Days</option>
              </select>

              {/* Region Filter */}
              <select 
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                  isDarkMode 
                    ? 'bg-[#141A1F] border border-[rgba(34,211,238,0.3)] text-[#E0E7EE] hover:border-[#22D3EE]' 
                    : 'bg-white border border-[rgba(59,130,246,0.3)] text-[#1F2937] hover:border-[#3B82F6]'
                }`}
              >
                <option value="all">All Regions</option>
                <option value="hunza">Hunza Valley</option>
                <option value="baltistan">Baltistan</option>
                <option value="gilgit">Gilgit</option>
                <option value="swat">Swat Valley</option>
                <option value="chitral">Chitral</option>
              </select>
            </div>

            <div className={`font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
              {filteredTours.length} Tours Available
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className={`py-20 transition-colors ${
        isDarkMode ? 'bg-[#0B0C0E]' : 'bg-[#F8FAFB]'
      }`}>
        <div className="mx-auto max-w-7xl px-6">
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <div key={tour.id} className="relative">
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      tour.difficulty === 'easy' ? 'bg-green-500 text-white' :
                      tour.difficulty === 'moderate' ? 'bg-yellow-500 text-white' :
                      tour.difficulty === 'hard' ? 'bg-orange-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {tour.difficulty}
                    </span>
                  </div>
                  
                  <FlipCard
                    frontImage={tour.frontImage}
                    title={tour.title}
                    subtitle={tour.subtitle}
                    price={tour.price}
                    description={tour.description}
                    highlights={tour.highlights}
                    link={tour.link}
                    isDarkMode={isDarkMode}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🏔️</div>
              <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}`}>
                No tours match your filters
              </h3>
              <p className={isDarkMode ? 'text-[#C4CCD4]' : 'text-[#6B7280]'}>
                Try adjusting your filter criteria to see more options
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section Separator */}
      <div className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`} />

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className={`absolute inset-0 ${
          isDarkMode ? 'bg-linear-to-br from-[#0A3A67] via-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-br from-[#2563EB] via-[#3B82F6] to-[#60A5FA]'
        }`} />
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready for the Adventure of a Lifetime?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Our expert guides are ready to help you plan your perfect mountain adventure
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/contact" className="px-12 py-6 bg-[#0B0C0E] text-[#22D3EE] rounded-2xl text-lg font-bold uppercase shadow-lg hover:scale-110 transition-all">
              Book Your Adventure
            </Link>
            <Link to="/tours" className="px-12 py-6 bg-transparent border-3 border-white text-white rounded-2xl text-lg font-bold uppercase hover:bg-white hover:text-[#3B82F6] transition-all">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default memo(AdventureTours);
