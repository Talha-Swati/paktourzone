import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';

const FlipCard = ({ frontImage, title, subtitle, price, description, highlights, link, isDarkMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 h-[500px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl">
          <img src={frontImage} alt={title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${
            isDarkMode
              ? 'bg-gradient-to-t from-[rgba(11,12,14,0.95)] via-[rgba(11,12,14,0.4)] to-transparent'
              : 'bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.3)] to-transparent'
          }`} />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className={`inline-block mb-2 rounded-full border backdrop-blur-sm px-4 py-1 ${
              isDarkMode
                ? 'border-[rgba(34,211,238,0.5)] bg-[rgba(20,26,31,0.8)]'
                : 'border-[rgba(59,130,246,0.5)] bg-[rgba(255,255,255,0.8)]'
            }`}>
              <span className={`text-xs font-semibold ${
                isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
              }`}>{subtitle}</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-2">{title}</h3>
            <div className="flex items-center justify-between">
              <span className={`text-2xl font-black ${
                isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
              }`}>{price}</span>
              <span className="text-sm text-white/80">per person</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl border ${
          isDarkMode
            ? 'bg-gradient-to-br from-[#0A3A67] via-[#141A1F] to-[#0B0C0E] border-[rgba(34,211,238,0.3)]'
            : 'bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1E40AF] border-[rgba(255,255,255,0.3)]'
        }`}>
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-white mb-4">{title}</h3>
              <p className="text-sm text-white/80 mb-6 leading-relaxed">{description}</p>
              <div className="space-y-2 mb-6">
                <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  isDarkMode ? 'text-[#22D3EE]' : 'text-white'
                }`}>Highlights:</p>
                {highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-white/90">
                    <span className={`mt-0.5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-white'}`}>✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link to={link}>
              <button className={`w-full rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]'
                  : 'bg-white text-[#3B82F6] shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]'
              }`}>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FlipCard);
