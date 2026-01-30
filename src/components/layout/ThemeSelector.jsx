import React from 'react';

const ThemeSelector = ({ isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen, themeDropdownRef }) => {

  return (
    <div 
      className="relative" 
      ref={themeDropdownRef}
      onMouseEnter={() => window.innerWidth >= 1024 && setThemeDropdownOpen(true)}
      onMouseLeave={() => window.innerWidth >= 1024 && setThemeDropdownOpen(false)}
    >
      <button
        onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
        className={`group relative p-1.5 xl:p-2.5 rounded-lg transition-all duration-300 ${
          isDarkMode
            ? 'hover:bg-[rgba(34,211,238,0.1)]'
            : 'hover:bg-[rgba(59,130,246,0.1)]'
        }`}
        aria-label="Theme selector"
      >
        <svg
          className={`h-5 w-5 xl:h-6 xl:w-6 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <g>
            <rect x="11" y="2" width="2" height="4" rx="1" />
            <rect x="11" y="18" width="2" height="4" rx="1" />
            <rect x="2" y="11" width="4" height="2" rx="1" />
            <rect x="18" y="11" width="4" height="2" rx="1" />
            <rect x="4.2" y="4.2" width="2" height="4" rx="1" transform="rotate(-45 5.2 6.2)" />
            <rect x="17.8" y="15.8" width="2" height="4" rx="1" transform="rotate(-45 18.8 17.8)" />
            <rect x="15.8" y="4.2" width="2" height="4" rx="1" transform="rotate(45 16.8 6.2)" />
            <rect x="4.2" y="15.8" width="2" height="4" rx="1" transform="rotate(45 5.2 17.8)" />
          </g>
        </svg>
      </button>

      {/* Dropdown Menu */}
      {themeDropdownOpen && (
        <div className={`absolute right-0 top-full mt-2 w-44 rounded-xl border shadow-2xl z-[70] overflow-hidden transition-colors duration-500 animate-fadeIn ${
          isDarkMode
            ? 'bg-[#141A1F] border-[#1E242B] shadow-[rgba(0,0,0,0.5)]'
            : 'bg-white border-[#E2E8F0] shadow-[rgba(0,0,0,0.15)]'
        }`}>
          <button 
            onClick={() => { setThemeMode('system'); setThemeDropdownOpen(false); }} 
            className={`flex items-center gap-3 w-full px-4 py-3 text-left text-sm transition-colors border-b ${
              isDarkMode
                ? 'text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE] border-[rgba(30,36,43,0.5)]'
                : 'text-[#4A5568] hover:bg-[#EBF8FF] hover:text-[#3B82F6] border-[#E2E8F0]'
            } ${themeMode === 'system' ? (isDarkMode ? 'bg-[rgba(34,211,238,0.1)] text-[#22D3EE]' : 'bg-[#EBF8FF] text-[#3B82F6]') : ''}`}
          >
            <span className="font-semibold">System Default</span>
            {themeMode === 'system' && <span className="ml-auto text-xs">✓</span>}
          </button>
          
          <button 
            onClick={() => { setThemeMode('light'); setThemeDropdownOpen(false); }} 
            className={`flex items-center gap-3 w-full px-4 py-3 text-left text-sm transition-colors border-b ${
              isDarkMode
                ? 'text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE] border-[rgba(30,36,43,0.5)]'
                : 'text-[#4A5568] hover:bg-[#EBF8FF] hover:text-[#3B82F6] border-[#E2E8F0]'
            } ${themeMode === 'light' ? (isDarkMode ? 'bg-[rgba(34,211,238,0.1)] text-[#22D3EE]' : 'bg-[#EBF8FF] text-[#3B82F6]') : ''}`}
          >
            <span className="font-semibold">Light Mode</span>
            {themeMode === 'light' && <span className="ml-auto text-xs">✓</span>}
          </button>
          
          <button 
            onClick={() => { setThemeMode('dark'); setThemeDropdownOpen(false); }} 
            className={`flex items-center gap-3 w-full px-4 py-3 text-left text-sm transition-colors ${
              isDarkMode
                ? 'text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE]'
                : 'text-[#4A5568] hover:bg-[#EBF8FF] hover:text-[#3B82F6]'
            } ${themeMode === 'dark' ? (isDarkMode ? 'bg-[rgba(34,211,238,0.1)] text-[#22D3EE]' : 'bg-[#EBF8FF] text-[#3B82F6]') : ''}`}
          >
            <span className="font-semibold">Dark Mode</span>
            {themeMode === 'dark' && <span className="ml-auto text-xs">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
