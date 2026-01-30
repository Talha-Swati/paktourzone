import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import FlipCard from '../common/FlipCard';

const FeaturedTours = ({ isDarkMode }) => {
  // Memoize tours data to prevent recreation on every render
  const tours = useMemo(() => [
    {
      frontImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      title: "Hunza Valley Highlights",
      subtitle: "7 Days • Guided Cultural Tour",
      price: "$1,299",
      description: "Discover Hunza Valley on a guided Pakistan tour with heritage forts, Attabad Lake, and panoramic viewpoints. Perfect for first time international travelers.",
      highlights: [
        "Baltit & Altit Forts",
        "Attabad Lake boat cruise",
        "Local culture & cuisine",
        "Eagles Nest viewpoint",
        "Safe transport and guide"
      ],
      link: "/tours?destination=hunza"
    },
    {
      frontImage: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800",
      title: "Skardu & Baltistan",
      subtitle: "10 Days • Mountain Adventure",
      price: "$2,499",
      description: "Explore Skardu and Baltistan with expert local guides, alpine lakes, and dramatic Karakoram scenery, ideal for adventure and landscape lovers.",
      highlights: [
        "Shangrila Resort",
        "Shigar Valley",
        "Deosai National Park",
        "High altitude landscapes",
        "Comfortable stays"
      ],
      link: "/tours?destination=skardu"
    },
    {
      frontImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      title: "Fairy Meadows Escape",
      subtitle: "5 Days • Scenic Trek",
      price: "$899",
      description: "Trek to Fairy Meadows for unbeatable views of Nanga Parbat. A short Pakistan trekking tour with safe support and starry nights.",
      highlights: [
        "Nanga Parbat views",
        "Alpine meadow camp",
        "Jeep access",
        "Stargazing nights",
        "Local guide support"
      ],
      link: "/tours?destination=fairy-meadows"
    }
  ], []); // No dependencies needed now

  return (
    <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
      isDarkMode
        ? 'bg-linear-to-b from-[#0B0C0E] via-[#0F1419] to-[#0B0C0E]'
        : 'bg-linear-to-b from-white via-[#F8FAFB] to-white'
    }`}>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 mb-6 rounded-full border backdrop-blur-sm px-6 py-3 transition-colors duration-500 ${
            isDarkMode
              ? 'border-[rgba(34,211,238,0.3)] bg-[rgba(20,26,31,0.6)] shadow-[0_0_30px_rgba(34,211,238,0.2)]'
              : 'border-[rgba(59,130,246,0.3)] bg-[rgba(255,255,255,0.6)] shadow-[0_0_30px_rgba(59,130,246,0.15)]'
          }`}>
            <div className={`h-2 w-2 rounded-full animate-pulse ${
              isDarkMode ? 'bg-[#22D3EE]' : 'bg-[#3B82F6]'
            }`} />
            <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${
              isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
            }`}>Signature Experiences</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <Link to="/tours" className={`group inline-block transition-colors ${
              isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
            }`}>
              <span className={`transition-colors duration-500 ${
                isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
              }`}>Featured </span>
              <span className={`bg-clip-text text-transparent transition-colors duration-500 ${
                isDarkMode
                  ? 'bg-linear-to-r from-[#22D3EE] via-[#4DBBFF] to-[#22D3EE]'
                  : 'bg-linear-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6]'
              }`}>
                Adventures
              </span>
              <div className={`h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full mt-2 ${
                isDarkMode
                  ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]'
                  : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
              }`} />
            </Link>
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
            isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'
          }`}>
            Handpicked journeys curated for international travelers seeking authentic Pakistani experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <FlipCard
              key={index}
              isDarkMode={isDarkMode}
              {...tour}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/tours">
            <button className={`group rounded-xl border-2 backdrop-blur-sm px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? 'border-[rgba(77,187,255,0.5)] bg-[rgba(20,26,31,0.6)] text-[#F2F6F9] hover:border-[#22D3EE] hover:bg-[rgba(34,211,238,0.1)]'
                : 'border-[rgba(59,130,246,0.5)] bg-[rgba(255,255,255,0.6)] text-[#1A202C] hover:border-[#3B82F6] hover:bg-[rgba(59,130,246,0.1)]'
            }`}>
              <span className="flex items-center gap-2">
                View All Tours
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturedTours);
