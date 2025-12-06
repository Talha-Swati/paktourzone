import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ isDarkMode, languageDropdownOpen, setLanguageDropdownOpen, languageDropdownRef }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский' },
    { code: 'ar', flag: '🇸🇦', name: 'العربية' },
    { code: 'zh', flag: '🇨🇳', name: '中文' },
    { code: 'ur', flag: '🇵🇰', name: 'اردو' },
  ];

  return (
    <div className="relative" ref={languageDropdownRef}>
      <button 
        onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)} 
        className={`flex items-center gap-1 transition-colors cursor-pointer ${
          isDarkMode 
            ? 'text-[#C4CCD4] hover:text-[#22D3EE]'
            : 'text-[#4A5568] hover:text-[#3B82F6]'
        }`}
      >
        <span>🌍</span>
        <span className="font-semibold">{i18n.language.toUpperCase().slice(0, 2)}</span>
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {languageDropdownOpen && (
        <div className={`absolute right-0 top-full mt-2 w-44 rounded-xl border shadow-2xl z-[70] overflow-hidden ${
          isDarkMode
            ? 'bg-[#141A1F] border-[#1E242B] shadow-[rgba(0,0,0,0.5)]'
            : 'bg-white border-[#E2E8F0] shadow-[rgba(0,0,0,0.15)]'
        }`}>
          {languages.map((lang, index) => (
            <button 
              key={lang.code}
              onClick={() => { changeLanguage(lang.code); setLanguageDropdownOpen(false); }} 
              className={`block w-full px-4 py-3 text-left text-sm transition-colors ${
                index < languages.length - 1 ? 'border-b' : ''
              } ${
                isDarkMode
                  ? 'text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE] border-[rgba(30,36,43,0.5)]'
                  : 'text-[#4A5568] hover:bg-[#EBF8FF] hover:text-[#3B82F6] border-[#E2E8F0]'
              }`}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
