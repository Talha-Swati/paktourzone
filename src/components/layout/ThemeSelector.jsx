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
        className={`group relative p-2 rounded-lg transition-all duration-300 ${
          isDarkMode
            ? 'hover:bg-[rgba(34,211,238,0.1)]'
            : 'hover:bg-[rgba(59,130,246,0.1)]'
        }`}
        aria-label="Theme selector"
      >
        {/* Arrow Icon with Glow Effect */}
        <div className="relative">
          <svg
            className={`w-5 h-5 transition-all duration-300 ${
              themeDropdownOpen ? 'rotate-180' : ''
            } ${
              isDarkMode
                ? 'text-[#22D3EE] drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]'
                : 'text-[#3B82F6] drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]'
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 15.5l-6-6h12z" />
          </svg>
          
          {/* Additional Glow Ring */}
          <div
            className={`absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${
              isDarkMode
                ? 'bg-[#22D3EE] opacity-20 group-hover:opacity-40'
                : 'bg-[#3B82F6] opacity-15 group-hover:opacity-30'
            }`}
          />
        </div>
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
            <span className="text-lg">💻</span>
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
            <span className="text-lg">☀️</span>
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
            <span className="text-lg">🌙</span>
            <span className="font-semibold">Dark Mode</span>
            {themeMode === 'dark' && <span className="ml-auto text-xs">✓</span>}
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
