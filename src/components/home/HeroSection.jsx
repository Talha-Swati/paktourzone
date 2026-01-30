import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ isDarkMode, currentSlide, setCurrentSlide, heroImages }) => {
  const [typedIndex, setTypedIndex] = useState(0);
  const fullText = 'Discover Northern Pakistan';
  const words = fullText.split(' ');

  useEffect(() => {
    if (typedIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [typedIndex]);

  const renderText = () => {
    let charCount = 0;
    return words.map((word, wordIndex) => {
      const wordChars = word.split('').map((char, charIndex) => {
        const currentIndex = charCount;
        charCount++;
        const isTyped = currentIndex < typedIndex;
        const isCurrentlyTyping = currentIndex === typedIndex;
        
        return (
          <span
            key={`${wordIndex}-${charIndex}`}
            className={`inline-block transition-all duration-300 ${
              isTyped 
                ? 'opacity-100 blur-0' 
                : 'opacity-70 blur-[1px] sm:opacity-30 sm:blur-[2px]'
            }`}
          >
            {char}
            {isCurrentlyTyping && <span className="animate-pulse">|</span>}
          </span>
        );
      });
      
      charCount++; // for space
      
      if (wordIndex === 1) {
        return (
          <React.Fragment key={wordIndex}>
            <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}>
              {wordChars}
            </span>
            <br />
          </React.Fragment>
        );
      }
      
      return (
        <React.Fragment key={wordIndex}>
          {wordChars}
          {wordIndex < words.length - 1 && <span className={typedIndex > charCount - 1 ? 'opacity-100' : 'opacity-30'}> </span>}
        </React.Fragment>
      );
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          />
        ))}
      </div>
      
      {/* Multi-layer Gradients */}
      <div className={`absolute inset-0 transition-colors duration-500 ${
        isDarkMode
          ? 'bg-linear-to-br from-[rgba(11,12,14,0.85)] via-[rgba(10,58,103,0.75)] to-[rgba(11,12,14,0.9)]'
          : 'bg-linear-to-br from-[rgba(255,255,255,0.75)] via-[rgba(219,234,254,0.65)] to-[rgba(239,246,255,0.85)]'
      }`} />
      <div className={`absolute inset-0 transition-colors duration-500 ${
        isDarkMode
          ? 'bg-linear-to-t from-[#0B0C0E] via-transparent to-transparent'
          : 'bg-linear-to-t from-white via-transparent to-transparent'
      }`} />
      
      {/* Slider Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? isDarkMode
                  ? 'w-8 bg-[#22D3EE]'
                  : 'w-8 bg-[#3B82F6]'
                : isDarkMode
                  ? 'w-2 bg-[#4A5568]'
                  : 'w-2 bg-[#CBD5E0]'
            }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        {/* Premium Badge */}
        <div className="mb-8 flex justify-center">
          <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-colors duration-500 ${
            isDarkMode
              ? 'border-[rgba(34,211,238,0.3)] bg-[rgba(20,26,31,0.6)] text-[#22D3EE]'
              : 'border-[rgba(59,130,246,0.3)] bg-[rgba(255,255,255,0.6)] text-[#3B82F6]'
          }`}>
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Discover Pakistan's Hidden Gems
          </span>
        </div>

        {/* Main Heading */}
        <h1 className={`mb-6 text-4xl font-bold tracking-normal sm:text-5xl md:text-6xl lg:text-7xl transition-colors duration-500 ${
          isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
        }`} style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.02em' }}>
          {renderText()}
        </h1>

        {/* Subtitle */}
        <p className={`mx-auto mb-12 max-w-2xl text-lg font-medium sm:text-xl md:text-2xl transition-colors duration-500 ${
          isDarkMode ? 'text-[#8B949E]' : 'text-[#4A5568]'
        }`}>
          Safe, comfortable journeys for international travelers. Explore majestic valleys, iconic peaks, and authentic culture with expert local guides.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/tours"
            className={`group flex items-center gap-3 rounded-2xl bg-linear-to-r px-8 py-4 text-base font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? 'from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)]'
                : 'from-[#3B82F6] to-[#60A5FA] text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]'
            }`}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Explore Tours
          </Link>
          <Link
            to="/gallery"
            className={`flex items-center gap-3 rounded-2xl border-2 px-8 py-4 text-base font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? 'border-[#4DBBFF] bg-[rgba(20,26,31,0.6)] text-[#4DBBFF] hover:bg-[rgba(77,187,255,0.1)]'
                : 'border-[#60A5FA] bg-[rgba(255,255,255,0.6)] text-[#60A5FA] hover:bg-[rgba(96,165,250,0.1)]'
            }`}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Watch Video
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { number: "500+", label: "Tours" },
            { number: "25K+", label: "Travelers" },
            { number: "50+", label: "Destinations" },
            { number: "4.9★", label: "Rating" }
          ].map((stat, index) => (
            <div key={index} className={`rounded-2xl border backdrop-blur-md p-6 transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? 'border-[rgba(34,211,238,0.2)] bg-[rgba(20,26,31,0.5)]'
                : 'border-[rgba(59,130,246,0.2)] bg-[rgba(255,255,255,0.5)]'
            }`}>
              <div className={`text-4xl font-black ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                {stat.number}
              </div>
              <div className={`mt-2 text-sm font-semibold uppercase tracking-wider ${
                isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
