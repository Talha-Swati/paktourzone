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
        <div className={`absolute inset-0 backface-hidden rounded-2xl overflow-hidden border backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center shadow-xl transition-colors ${
          isDarkMode
            ? 'border-[rgba(30,36,43,0.5)] bg-gradient-to-br from-[rgba(20,26,31,0.8)] to-[rgba(11,12,14,0.6)] hover:border-[rgba(34,211,238,0.5)]'
            : 'border-[rgba(226,232,240,0.5)] bg-gradient-to-br from-[rgba(255,255,255,0.8)] to-[rgba(248,250,251,0.6)] hover:border-[rgba(59,130,246,0.5)]'
        }`}>
          <div className="text-6xl mb-4">{icon}</div>
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
            ? 'border-[rgba(34,211,238,0.5)] bg-gradient-to-br from-[#0A3A67] to-[#0B0C0E]'
            : 'border-[rgba(59,130,246,0.5)] bg-gradient-to-br from-[#3B82F6] to-[#2563EB]'
        }`}>
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-lg font-black text-white mb-3">{title}</h3>
          <p className="text-sm text-white/90 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureFlipCard;
