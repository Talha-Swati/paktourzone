import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { getOrganizationSchema, getReviewSchema } from '../utils/structuredData';

// Layout Components
import PageLayout from '../components/layout/PageLayout';

// Home Components
import HeroSection from '../components/home/HeroSection';
import FeaturedTours from '../components/home/FeaturedTours';

// Common Components
import FeatureFlipCard from '../components/common/FeatureFlipCard';
import SectionHeader from '../components/common/SectionHeader';

// Data
import { heroImages } from '../data/navigationData';

const Home = () => {
  const { isDarkMode } = useTheme();
  
  // State Management
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider - 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Memoize HeroSection props
  const heroProps = {
    isDarkMode,
    currentSlide,
    setCurrentSlide,
    heroImages,
  };

  // Structured data for SEO
  const structuredData = {
    ...getOrganizationSchema(),
    ...getReviewSchema({ averageRating: "4.9", count: "1250" })
  };

  return (
    <PageLayout
      seo={{
        title: "PakTourZone | Pakistan Tours for International Travelers",
        description: "Plan safe, comfortable, and authentic tours across Northern Areas and Kashmir. Small groups, local experts, and transparent pricing for international travelers.",
        keywords: "Pakistan tours, Northern Areas, Kashmir tours, Hunza tours, Skardu trips, Neelam Valley, guided Pakistan travel",
        url: "/",
        structuredData
      }}
    >
      {/* Hero Section */}
      <HeroSection {...heroProps} />

          {/* Featured Tours Section */}
          <FeaturedTours isDarkMode={isDarkMode} />

          {/* Section Separator */}
          <hr className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-[#E2E8F0]'}`} aria-hidden="true" />

          {/* Why Choose Us Section */}
          <section aria-labelledby="why-choose-us" className={`relative py-32 overflow-hidden transition-colors duration-500 ${
            isDarkMode ? 'bg-[#121212]' : 'bg-[#D9F4FF]'
          }`}>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
            <header className="text-center mb-20">
              <h2 id="why-choose-us" className="text-4xl md:text-5xl font-bold mb-6">
                <span className={isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}>Why Choose </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
                }`}>PakTourZone</span>
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                Trusted by international travelers for safe transport, licensed guides, and authentic Northern Pakistan experiences
              </p>
            </header>
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureFlipCard icon="" title="Safety First" description="Certified guides, vetted routes, and reliable transport on every trip" isDarkMode={isDarkMode} />
              <FeatureFlipCard icon="" title="Local Experts" description="English speaking guides who know the culture, history, and landscapes" isDarkMode={isDarkMode} />
              <FeatureFlipCard icon="" title="Comfort and Care" description="Quality stays, flexible pacing, and support for international guests" isDarkMode={isDarkMode} />
              <FeatureFlipCard icon="" title="Transparent Value" description="Clear pricing and inclusions, no surprises, no hidden fees" isDarkMode={isDarkMode} />
            </article>
          </div>
        </section>

        {/* Section Separator */}
        <hr className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-[#E2E8F0]'}`} aria-hidden="true" />

        {/* Destinations Grid */}
        <section aria-labelledby="destinations" className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          isDarkMode ? 'bg-linear-to-b from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-linear-to-b from-white via-[#EBF8FF] to-white'
        }`}>
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <header className="text-center mb-20">
              <h2 id="destinations" className="text-4xl md:text-5xl font-bold mb-6">
                <span className={isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}>Explore </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
                }`}>Destinations</span>
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                Explore signature journeys across Northern Areas and Kashmir with curated landscapes and cultural highlights
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Hunza Valley', 'Skardu', 'Swat Valley', 'Naran Kaghan', 'Neelam Valley', 'Arang Kel'].map((dest, i) => (
                <Link key={i} to="/destinations" className="group relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500" aria-label={`Explore ${dest} tours`}>
                  <img 
                    src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1506905925346-21bda4d32df4' : '1464207687429-7505649dae38'}?w=600`} 
                    alt={`${dest} tours in Pakistan`} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[rgba(11,12,14,0.9)] to-transparent opacity-60 group-hover:opacity-80 transition-opacity" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{dest}</h3>
                    <p className="text-sm text-[#22D3EE]">{8 + i} curated tours</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <hr className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-[#E2E8F0]'}`} aria-hidden="true" />

        {/* Testimonials */}
        <section aria-labelledby="testimonials" className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          isDarkMode ? 'bg-[#0B0C0E]' : 'bg-white'
        }`}>
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <header className="text-center mb-20">
              <h2 id="testimonials" className="text-4xl md:text-5xl font-bold mb-6">
                <span className={isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}>Traveler </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
                }`}>Stories</span>
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                Real feedback from international guests who explored Northern Areas and Kashmir with us
              </p>
            </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', country: 'UK', text: 'Hunza was stunning and the planning was flawless. Clear communication, safe transport, and amazing guides.' },
              { name: 'Michael Schmidt', country: 'Germany', text: 'Professional team and honest pricing. Skardu was unforgettable, exactly what I hoped for.' },
              { name: 'Emma Williams', country: 'USA', text: 'Everything felt smooth from booking to the final day. Great care, great views, great value.' }
            ].map((review, i) => (
              <div key={i} className={`p-8 rounded-2xl border transition-colors ${
                isDarkMode ? 'bg-[rgba(20,26,31,0.6)] border-[rgba(34,211,238,0.2)]' : 'bg-white border-[#E2E8F0] shadow-sm'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <img src={`https://i.pravatar.cc/60?img=${i+1}`} alt={review.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}`}>{review.name}</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#64748B]'}`}>{review.country}</p>
                  </div>
                </div>
                <p className={isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}>{review.text}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-[#E2E8F0]'}`} />

      {/* Gallery Preview */}
      <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-linear-to-b from-[#0B0C0E] to-[#0F1419]' : 'bg-linear-to-b from-[#F8FAFC] to-white'
      }`}>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Pakistan"
            accent="Gallery"
            subtitle="See real destinations and seasons before you book your tour"
            isDarkMode={isDarkMode}
            className="mb-20"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <Link key={i} to="/gallery" className="group relative aspect-square overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <img src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1506905925346-21bda4d32df4' : '1464207687429-7505649dae38'}?w=400`} alt={`Northern Pakistan travel photo ${i+1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125" />
                <div className="absolute inset-0 bg-linear-to-t from-[rgba(11,12,14,0.9)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className={`inline-block px-8 py-4 rounded-xl border-2 font-bold transition-all hover:scale-105 ${
              isDarkMode ? 'border-[#22D3EE] text-[#22D3EE] hover:bg-[rgba(34,211,238,0.1)]' : 'border-[#2563EB] text-[#1D4ED8] hover:bg-[rgba(37,99,235,0.08)]'
            }`}>
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-[#E2E8F0]'}`} />

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden">
        <div className={`absolute inset-0 ${
          isDarkMode ? 'bg-linear-to-br from-[#0A3A67] via-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-br from-[#2563EB] via-[#3B82F6] to-[#60A5FA]'
        }`} />
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Plan Your Pakistan Journey
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Get a clear itinerary, expert support, and unforgettable landscapes
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/tours" className="px-12 py-6 bg-[#0B0C0E] text-[#22D3EE] rounded-2xl text-lg font-bold uppercase shadow-lg hover:scale-110 transition-all">
              View Tour Packages
            </Link>
            <Link to="/contact" className="px-12 py-6 bg-transparent border-3 border-white text-white rounded-2xl text-lg font-bold uppercase hover:bg-white hover:text-[#3B82F6] transition-all">
              Get a Custom Plan
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Home;
