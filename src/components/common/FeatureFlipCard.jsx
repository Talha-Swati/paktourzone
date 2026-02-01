import React, { useState } from 'react';

const FeatureFlipCard = ({ icon, title, description, isDarkMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 h-[280px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div
          style={!isDarkMode ? { backgroundColor: 'transparent' } : undefined}
          className={`absolute inset-0 backface-hidden rounded-2xl overflow-hidden border backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center shadow-xl transition-colors transition-shadow ${
            isDarkMode
              ? 'border-[rgba(18,18,18,0.7)] bg-linear-to-b from-[#0A0A0A] via-[#080808] to-[#000000] shadow-[0_12px_28px_-18px_rgba(0,0,0,0.95)] group-hover:shadow-[0_28px_55px_-28px_rgba(0,0,0,0.98)]'
              : 'border-[rgba(15,23,42,0.2)] bg-transparent hover:border-[rgba(37,99,235,0.6)]'
          }`}
        >
          {icon && <div className="text-6xl mb-4">{icon}</div>}
          <h3 className={`text-xl font-black ${
            isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
          }`}>{title}</h3>
          <p className={`text-xs mt-2 uppercase tracking-wider ${
            isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
          }`}>Click to learn more</p>
        </div>

        {/* Back */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border p-8 flex flex-col items-center justify-center text-center shadow-xl ${
          isDarkMode
            ? 'border-[rgba(34,211,238,0.4)] bg-linear-to-b from-[#0C1420] via-[#07090C] to-[#000000]'
            : 'border-[rgba(59,130,246,0.5)] bg-linear-to-br from-[#2563EB] to-[#1D4ED8]'
        }`}>
          {icon && <div className="text-4xl mb-4">{icon}</div>}
          <h3 className="text-lg font-black text-white mb-3">{title}</h3>
          <p className="text-sm text-white/90 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureFlipCard;
