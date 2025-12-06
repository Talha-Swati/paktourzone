import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [themeMode, setThemeMode] = useState('system'); // 'system', 'light', 'dark'
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const languageDropdownRef = useRef(null);
  const themeDropdownRef = useRef(null);

  // Determine if dark mode should be active
  const isDarkMode = themeMode === 'system' ? true : themeMode === 'dark';

  // Hero slider images
  const heroImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', // Mountain landscape
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80', // Mountain peak
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', // Valley
    'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=1920&q=80', // Snow mountains
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Auto-play slider - 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setLanguageDropdownOpen(false);
      }
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target)) {
        setThemeDropdownOpen(false);
      }
    };

    if (languageDropdownOpen || themeDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageDropdownOpen, themeDropdownOpen]);

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { 
      name: t('nav.tours'), 
      path: "/tours", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Adventure Tours", path: "/tours?type=adventure", icon: "🏔️" },
        { name: "Family Packages", path: "/tours?type=family", icon: "👨‍👩‍👧‍👦" },
        { name: "Honeymoon Specials", path: "/tours?type=honeymoon", icon: "💑" },
        { name: "Corporate Tours", path: "/tours?type=corporate", icon: "💼" },
        { name: "Customized Tours", path: "/tours?type=customized", icon: "⚙️" },
        { name: "Budget Tours", path: "/tours?type=budget", icon: "💰" },
      ]
    },
    { 
      name: t('nav.destinations'), 
      path: "/destinations",
      hasDropdown: true,
      dropdownItems: [
        { name: "Hunza Valley", path: "/destinations/hunza", icon: "🏔️" },
        { name: "Skardu & Baltistan", path: "/destinations/skardu", icon: "⛰️" },
        { name: "Swat Valley", path: "/destinations/swat", icon: "🌲" },
        { name: "Naran Kaghan", path: "/destinations/naran", icon: "🏞️" },
        { name: "Fairy Meadows", path: "/destinations/fairy-meadows", icon: "🌸" },
        { name: "Kashmir", path: "/destinations/kashmir", icon: "🍃" },
        { name: "View All Destinations", path: "/destinations", icon: "🗺️" },
      ]
    },
    { 
      name: "Services", 
      path: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Hotel Booking", path: "/services/hotels", icon: "🏨" },
        { name: "Transport Services", path: "/services/transport", icon: "🚐" },
        { name: "Tour Guides", path: "/services/guides", icon: "👨‍🏫" },
        { name: "Visa Assistance", path: "/services/visa", icon: "📋" },
        { name: "Travel Insurance", path: "/services/insurance", icon: "🛡️" },
        { name: "Photography Services", path: "/services/photography", icon: "📸" },
      ]
    },
    { name: "Special Offers", path: "/offers", badge: "HOT" },
    { name: t('nav.gallery'), path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Travel Guide", path: "/blog" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-[#0B0C0E] text-[#F2F6F9]' 
        : 'bg-gradient-to-br from-[#F8FAFB] via-[#E8F4F8] to-[#F0F9FF] text-[#1A202C]'
    }`}>
      {/* ===== TOP BAR ===== */}
      <div className={`relative z-[60] border-b transition-colors duration-500 backdrop-blur-sm ${
        isDarkMode
          ? 'border-[rgba(30,36,43,0.5)] bg-[rgba(11,12,14,0.95)]'
          : 'border-[rgba(34,211,238,0.2)] bg-[rgba(255,255,255,0.95)]'
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className={`flex items-center gap-6 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
            <a href="tel:+923001234567" className="flex items-center gap-2 transition-colors hover:text-[#22D3EE]">
              <span>📞</span>
              <span>+92 300 1234567</span>
            </a>
            <a href="mailto:info@paktourzone.com" className="hidden md:flex items-center gap-2 transition-colors hover:text-[#22D3EE]">
              <span>✉️</span>
              <span>info@paktourzone.com</span>
            </a>
            <span className="hidden lg:flex items-center gap-2 text-[#4DBBFF]">
              <span>🕐</span>
              <span>Mon - Sat: 9AM - 6PM (PKT)</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            {/* Theme Selector Dropdown - Compact with Glowing Arrow */}
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

            {/* Language Selector */}
            <div className="relative" ref={languageDropdownRef}>
              <button 
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)} 
                className="flex items-center gap-1 text-[#C4CCD4] hover:text-[#22D3EE] transition-colors cursor-pointer"
              >
                <span>🌍</span>
                <span className="font-semibold">{i18n.language.toUpperCase().slice(0, 2)}</span>
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {languageDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-[#141A1F] border border-[#1E242B] shadow-2xl shadow-[rgba(0,0,0,0.5)] z-[70] overflow-hidden">
                <button onClick={() => { changeLanguage('en'); setLanguageDropdownOpen(false); }} className="block w-full px-4 py-3 text-left text-sm text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE] transition-colors border-b border-[rgba(30,36,43,0.5)]">🇬🇧 English</button>
                <button onClick={() => { changeLanguage('es'); setLanguageDropdownOpen(false); }} className="block w-full px-4 py-3 text-left text-sm text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE] transition-colors border-b border-[rgba(30,36,43,0.5)]">🇪🇸 Español</button>
                <button onClick={() => { changeLanguage('fr'); setLanguageDropdownOpen(false); }} className="block w-full px-4 py-3 text-left text-sm text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE] transition-colors border-b border-[rgba(30,36,43,0.5)]">�� Français</button>
                <button onClick={() => { changeLanguage('de'); setLanguageDropdownOpen(false); }} className="block w-full px-4 py-3 text-left text-sm text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE] transition-colors border-b border-[rgba(30,36,43,0.5)]">🇩🇪 Deutsch</button>
                <button onClick={() => { changeLanguage('ru'); setLanguageDropdownOpen(false); }} className="block w-full px-4 py-3 text-left text-sm text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE] transition-colors border-b border-[rgba(30,36,43,0.5)]">🇷🇺 Русский</button>
                <button onClick={() => { changeLanguage('ar'); setLanguageDropdownOpen(false); }} className="block w-full px-4 py-3 text-left text-sm text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE] transition-colors border-b border-[rgba(30,36,43,0.5)]">🇸🇦 العربية</button>
                <button onClick={() => { changeLanguage('zh'); setLanguageDropdownOpen(false); }} className="block w-full px-4 py-3 text-left text-sm text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE] transition-colors border-b border-[rgba(30,36,43,0.5)]">🇨🇳 中文</button>
                <button onClick={() => { changeLanguage('ur'); setLanguageDropdownOpen(false); }} className="block w-full px-4 py-3 text-left text-sm text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE] transition-colors">🇵🇰 اردو</button>
                </div>
              )}
            </div>
            {/* Social Icons */}
            <a href="#" className="text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <header className={`sticky top-0 z-50 border-b backdrop-blur-xl shadow-lg transition-colors duration-500 ${
        isDarkMode
          ? 'border-[rgba(30,36,43,0.5)] bg-[rgba(11,12,14,0.95)]'
          : 'border-[rgba(59,130,246,0.2)] bg-[rgba(255,255,255,0.95)]'
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#22D3EE] to-[#0A3A67] opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#22D3EE] to-[#0A3A67] shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all">
                <span className="text-2xl font-black text-[#F2F6F9]">PT</span>
              </div>
            </div>
            <div className="leading-tight">
              <h1 className={`text-xl font-black tracking-tight group-hover:text-[#22D3EE] transition-colors ${
                isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
              }`}>
                PakTourZone
              </h1>
              <p className={`text-[9px] font-bold uppercase tracking-[0.15em] ${
                isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
              }`}>
                Northern Pakistan Adventures
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.path}
                  className={`group/link relative px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${
                    isDarkMode
                      ? 'text-[#C4CCD4] hover:text-[#F2F6F9]'
                      : 'text-[#4A5568] hover:text-[#1A202C]'
                  }`}
                >
                  {item.name}
                  {item.badge && (
                    <span className="ml-1 rounded-md bg-linear-to-r from-[#FF6B6B] to-[#FF8E53] px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-lg animate-pulse">
                      {item.badge}
                    </span>
                  )}
                  {item.hasDropdown && (
                    <svg className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {index === 0 && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]" />
                  )}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] transition-all duration-300 group-hover/link:w-full" />
                </Link>
                
                {item.hasDropdown && item.dropdownItems && (
                  <div className={`absolute left-0 top-full mt-2 w-64 rounded-xl border shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50 ${
                    isDarkMode
                      ? 'bg-[#141A1F] border-[#1E242B]'
                      : 'bg-white border-[#E2E8F0] shadow-[rgba(0,0,0,0.15)]'
                  }`}>
                    <div className="p-2">
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={dropItem.path}
                          className={`block px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                            isDarkMode
                              ? 'text-[#C4CCD4] hover:bg-[rgba(34,211,238,0.1)] hover:text-[#22D3EE]'
                              : 'text-[#4A5568] hover:bg-[#EBF8FF] hover:text-[#3B82F6]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{dropItem.icon || "🏔️"}</span>
                            <span>{dropItem.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className={`hidden lg:flex items-center gap-2 rounded-xl bg-linear-to-r px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? 'from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]'
                : 'from-[#3B82F6] to-[#60A5FA] text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]'
            }`}>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {t('nav.bookNow')}
            </button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`flex lg:hidden h-11 w-11 items-center justify-center rounded-xl border backdrop-blur-sm transition-colors duration-300 ${
                isDarkMode
                  ? 'border-[rgba(77,187,255,0.3)] bg-[rgba(20,26,31,0.6)] text-[#4DBBFF]'
                  : 'border-[rgba(59,130,246,0.3)] bg-[rgba(255,255,255,0.6)] text-[#3B82F6]'
              }`}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`border-t backdrop-blur-xl lg:hidden transition-colors duration-500 ${
            isDarkMode
              ? 'border-[rgba(30,36,43,0.5)] bg-[rgba(11,12,14,0.98)]'
              : 'border-[rgba(59,130,246,0.2)] bg-[rgba(255,255,255,0.98)]'
          }`}>
            <nav className="mx-auto max-w-7xl px-6 py-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={item.path}
                    className={`block py-3 text-sm font-semibold transition-colors ${
                      isDarkMode
                        ? 'text-[#C4CCD4] hover:text-[#22D3EE]'
                        : 'text-[#4A5568] hover:text-[#3B82F6]'
                    }`}
                    onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-2 my-2">
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={dropItem.path}
                          className="block py-2 text-xs text-[#C4CCD4] hover:text-[#22D3EE] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          🏔️ {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="mt-4 w-full rounded-xl bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#0B0C0E]">
                {t('nav.bookNow')}
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Slider Background */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${image}')`,
                backgroundAttachment: 'fixed'
              }}
            />
          ))}
        </div>
        
        {/* Multi-layer Gradients */}
        <div className={`absolute inset-0 transition-colors duration-500 ${
          isDarkMode
            ? 'bg-gradient-to-br from-[rgba(11,12,14,0.85)] via-[rgba(10,58,103,0.75)] to-[rgba(11,12,14,0.9)]'
            : 'bg-gradient-to-br from-[rgba(255,255,255,0.75)] via-[rgba(219,234,254,0.65)] to-[rgba(239,246,255,0.85)]'
        }`} />
        <div className={`absolute inset-0 transition-colors duration-500 ${
          isDarkMode
            ? 'bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent'
            : 'bg-gradient-to-t from-white via-transparent to-transparent'
        }`} />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 left-1/4 w-72 h-72 opacity-10 rounded-full blur-3xl animate-pulse ${
            isDarkMode ? 'bg-[#22D3EE]' : 'bg-[#3B82F6]'
          }`} />
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 opacity-10 rounded-full blur-3xl animate-pulse ${
            isDarkMode ? 'bg-[#4DBBFF]' : 'bg-[#60A5FA]'
          }`} style={{animationDelay: '1s'}} />
        </div>

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
                    ? 'w-2 bg-[rgba(196,204,212,0.5)] hover:bg-[rgba(196,204,212,0.8)]'
                    : 'w-2 bg-[rgba(59,130,246,0.4)] hover:bg-[rgba(59,130,246,0.7)]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
          <div className={`mb-6 inline-block rounded-full border backdrop-blur-sm px-6 py-2 transition-colors duration-500 ${
            isDarkMode
              ? 'border-[rgba(34,211,238,0.3)] bg-[rgba(20,26,31,0.6)]'
              : 'border-[rgba(59,130,246,0.3)] bg-[rgba(255,255,255,0.6)]'
          }`}>
            <span className={`text-sm font-semibold transition-colors duration-500 ${
              isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
            }`}>🏔️ {t('hero.badge')}</span>
          </div>
          
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className={`block transition-colors duration-500 ${
              isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
            }`}>{t('hero.title1')}</span>
            <span className={`block bg-clip-text text-transparent transition-colors duration-500 ${
              isDarkMode
                ? 'bg-gradient-to-r from-[#22D3EE] via-[#4DBBFF] to-[#22D3EE]'
                : 'bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6]'
            }`}>
              {t('hero.title2')}
            </span>
          </h1>
          
          <p className={`mx-auto mb-12 max-w-3xl text-xl md:text-2xl leading-relaxed transition-colors duration-500 ${
            isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'
          }`}>
            {t('hero.description')}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
            <Link to="/tours">
              <button className={`group relative overflow-hidden rounded-2xl px-10 py-5 text-lg font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)]'
                  : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]'
              }`}>
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  {t('hero.exploreTours')}
                </span>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#4DBBFF] to-[#22D3EE]'
                    : 'bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]'
                }`} />
              </button>
            </Link>
            
            <button className={`group flex items-center gap-3 rounded-2xl border-2 backdrop-blur-sm px-10 py-5 text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? 'border-[rgba(77,187,255,0.5)] bg-[rgba(20,26,31,0.6)] text-[#F2F6F9] hover:border-[#22D3EE] hover:bg-[rgba(34,211,238,0.1)]'
                : 'border-[rgba(59,130,246,0.5)] bg-[rgba(255,255,255,0.6)] text-[#1A202C] hover:border-[#3B82F6] hover:bg-[rgba(59,130,246,0.1)]'
            }`}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('hero.watchVideo')}
            </button>
          </div>

          {/* Sleek Inline Stats Bar */}
          <div className={`inline-flex flex-wrap items-center justify-center gap-8 md:gap-12 px-8 py-6 rounded-2xl border backdrop-blur-md transition-colors duration-500 ${
            isDarkMode
              ? 'border-[rgba(34,211,238,0.2)] bg-[rgba(20,26,31,0.4)]'
              : 'border-[rgba(59,130,246,0.2)] bg-[rgba(255,255,255,0.4)]'
          }`}>
            <AnimatedStatBadge 
              target={12000}
              suffix="+"
              label={t('hero.travelers')}
              duration={2500}
            />
            <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-[rgba(34,211,238,0.5)] to-transparent" />
            <AnimatedStatBadge 
              target={50}
              suffix="+"
              label={t('hero.destinations')}
              duration={2000}
            />
            <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-[rgba(34,211,238,0.5)] to-transparent" />
            <AnimatedStatBadge 
              target={15}
              suffix=" Yrs"
              label={t('hero.experience')}
              duration={1500}
            />
            <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-[rgba(34,211,238,0.5)] to-transparent" />
            <AnimatedStatBadge 
              target={4.9}
              suffix="★"
              label={t('hero.rating')}
              duration={2000}
              decimal={true}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-8 w-8 text-[#22D3EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== QUICK ACTION BUTTONS ===== */}
      <section className="relative -mt-16 z-10 px-6">
        <div className="mx-auto max-w-7xl">
          <div className={`rounded-2xl border backdrop-blur-xl shadow-2xl overflow-hidden transition-colors duration-500 ${
            isDarkMode
              ? 'border-[rgba(34,211,238,0.15)] bg-[rgba(20,26,31,0.95)]'
              : 'border-[rgba(59,130,246,0.15)] bg-[rgba(255,255,255,0.95)]'
          }`}>
            <div className={`flex flex-wrap items-center divide-x transition-colors duration-500 ${
              isDarkMode
                ? 'divide-[rgba(34,211,238,0.1)]'
                : 'divide-[rgba(59,130,246,0.1)]'
            }`}>
              {/* Plan My Trip */}
              <button className={`group flex-1 min-w-[140px] flex flex-col items-center gap-2 px-4 py-4 transition-all duration-300 border-b-2 border-transparent ${
                isDarkMode
                  ? 'hover:bg-[rgba(34,211,238,0.08)] hover:border-[#22D3EE]'
                  : 'hover:bg-[rgba(59,130,246,0.08)] hover:border-[#3B82F6]'
              }`}>
                <svg className={`h-5 w-5 group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className={`text-xs font-semibold transition-colors ${
                  isDarkMode
                    ? 'text-[#C4CCD4] group-hover:text-[#22D3EE]'
                    : 'text-[#4A5568] group-hover:text-[#3B82F6]'
                }`}>Plan My Trip</span>
              </button>

              {/* Request Quote */}
              <button className={`group flex-1 min-w-[140px] flex flex-col items-center gap-2 px-4 py-4 transition-all duration-300 border-b-2 border-transparent ${
                isDarkMode
                  ? 'hover:bg-[rgba(34,211,238,0.08)] hover:border-[#22D3EE]'
                  : 'hover:bg-[rgba(59,130,246,0.08)] hover:border-[#3B82F6]'
              }`}>
                <svg className={`h-5 w-5 group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className={`text-xs font-semibold transition-colors ${
                  isDarkMode
                    ? 'text-[#C4CCD4] group-hover:text-[#22D3EE]'
                    : 'text-[#4A5568] group-hover:text-[#3B82F6]'
                }`}>Request Quote</span>
              </button>

              {/* Download Brochure */}
              <button className={`group flex-1 min-w-[140px] flex flex-col items-center gap-2 px-4 py-4 transition-all duration-300 border-b-2 border-transparent ${
                isDarkMode
                  ? 'hover:bg-[rgba(34,211,238,0.08)] hover:border-[#22D3EE]'
                  : 'hover:bg-[rgba(59,130,246,0.08)] hover:border-[#3B82F6]'
              }`}>
                <svg className={`h-5 w-5 group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className={`text-xs font-semibold transition-colors ${
                  isDarkMode
                    ? 'text-[#C4CCD4] group-hover:text-[#22D3EE]'
                    : 'text-[#4A5568] group-hover:text-[#3B82F6]'
                }`}>Brochure</span>
              </button>

              {/* 24/7 Support */}
              <button className={`group flex-1 min-w-[140px] flex flex-col items-center gap-2 px-4 py-4 transition-all duration-300 border-b-2 border-transparent ${
                isDarkMode
                  ? 'hover:bg-[rgba(34,211,238,0.08)] hover:border-[#22D3EE]'
                  : 'hover:bg-[rgba(59,130,246,0.08)] hover:border-[#3B82F6]'
              }`}>
                <svg className={`h-5 w-5 group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className={`text-xs font-semibold transition-colors ${
                  isDarkMode
                    ? 'text-[#C4CCD4] group-hover:text-[#22D3EE]'
                    : 'text-[#4A5568] group-hover:text-[#3B82F6]'
                }`}>24/7 Support</span>
              </button>

              {/* Best Deals */}
              <button className={`group flex-1 min-w-[140px] flex flex-col items-center gap-2 px-4 py-4 transition-all duration-300 border-b-2 border-[#FF6B6B] relative ${
                isDarkMode
                  ? 'bg-[rgba(255,107,107,0.1)] hover:bg-[rgba(255,107,107,0.15)]'
                  : 'bg-[rgba(255,107,107,0.08)] hover:bg-[rgba(255,107,107,0.12)]'
              }`}>
                <div className="absolute top-2 right-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B6B] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B6B]"></span>
                  </span>
                </div>
                <svg className="h-5 w-5 text-[#FF6B6B] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-bold text-[#FF6B6B] group-hover:text-[#FF8E53] transition-colors">Best Deals</span>
              </button>

              {/* Travel Insurance */}
              <button className={`group flex-1 min-w-[140px] flex flex-col items-center gap-2 px-4 py-4 transition-all duration-300 border-b-2 border-transparent ${
                isDarkMode
                  ? 'hover:bg-[rgba(34,211,238,0.08)] hover:border-[#22D3EE]'
                  : 'hover:bg-[rgba(59,130,246,0.08)] hover:border-[#3B82F6]'
              }`}>
                <svg className={`h-5 w-5 group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className={`text-xs font-semibold transition-colors ${
                  isDarkMode
                    ? 'text-[#C4CCD4] group-hover:text-[#22D3EE]'
                    : 'text-[#4A5568] group-hover:text-[#3B82F6]'
                }`}>Insurance</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED TOURS WITH FLIP CARDS ===== */}
      <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-b from-[#0B0C0E] via-[#0F1419] to-[#0B0C0E]'
          : 'bg-gradient-to-b from-white via-[#F8FAFB] to-white'
      }`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322D3EE' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
        </div>

        {/* Floating gradient orbs */}
        <div className={`absolute top-20 left-10 w-72 h-72 opacity-10 rounded-full blur-3xl animate-pulse ${
          isDarkMode ? 'bg-[#22D3EE]' : 'bg-[#3B82F6]'
        }`} style={{animationDuration: '4s'}} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 opacity-10 rounded-full blur-3xl animate-pulse ${
          isDarkMode ? 'bg-[#4DBBFF]' : 'bg-[#60A5FA]'
        }`} style={{animationDuration: '6s', animationDelay: '2s'}} />

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
              }`}>{t('tours.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <Link to="/tours" className={`group inline-block transition-colors ${
                isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
              }`}>
                <span className={`transition-colors duration-500 ${
                  isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
                }`}>{t('tours.title1')} </span>
                <span className={`bg-clip-text text-transparent transition-colors duration-500 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#22D3EE] via-[#4DBBFF] to-[#22D3EE]'
                    : 'bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6]'
                }`}>
                  {t('tours.title2')}
                </span>
                <div className={`h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full mt-2 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]'
                    : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
                }`} />
              </Link>
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'
            }`}>
              {t('tours.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FlipCard
              frontImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
              title={t('tour.hunza.title')}
              subtitle={t('tour.hunza.subtitle')}
              price="$1,299"
              description={t('tour.hunza.description')}
              highlights={[
                t('tour.hunza.highlight1'),
                t('tour.hunza.highlight2'),
                t('tour.hunza.highlight3'),
                t('tour.hunza.highlight4')
              ]}
              link="/tours?destination=hunza"
            />
            
            <FlipCard
              frontImage="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800"
              title={t('tour.skardu.title')}
              subtitle={t('tour.skardu.subtitle')}
              price="$2,499"
              description={t('tour.skardu.description')}
              highlights={[
                t('tour.skardu.highlight1'),
                t('tour.skardu.highlight2'),
                t('tour.skardu.highlight3'),
                t('tour.skardu.highlight4')
              ]}
              link="/tours?destination=skardu"
            />
            
            <FlipCard
              frontImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
              title={t('tour.fairy.title')}
              subtitle={t('tour.fairy.subtitle')}
              price="$899"
              description={t('tour.fairy.description')}
              highlights={[
                t('tour.fairy.highlight1'),
                t('tour.fairy.highlight2'),
                t('tour.fairy.highlight3'),
                t('tour.fairy.highlight4')
              ]}
              link="/tours?destination=fairy-meadows"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/tours">
              <button className={`group rounded-xl border-2 backdrop-blur-sm px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? 'border-[rgba(77,187,255,0.5)] bg-[rgba(20,26,31,0.6)] text-[#F2F6F9] hover:border-[#22D3EE] hover:bg-[rgba(34,211,238,0.1)]'
                  : 'border-[rgba(59,130,246,0.5)] bg-[rgba(255,255,255,0.6)] text-[#1A202C] hover:border-[#3B82F6] hover:bg-[rgba(59,130,246,0.1)]'
              }`}>
                <span className="flex items-center gap-2">
                  {t('tours.viewAll')}
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US WITH FLIP CARDS ===== */}
      <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-[#0B0C0E]' : 'bg-[#F8FAFB]'
      }`}>
        {/* Premium background effects */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-1/4 w-96 h-96 opacity-5 rounded-full blur-3xl ${
            isDarkMode ? 'bg-[#22D3EE]' : 'bg-[#3B82F6]'
          }`} />
          <div className={`absolute bottom-0 right-1/4 w-96 h-96 opacity-5 rounded-full blur-3xl ${
            isDarkMode ? 'bg-[#4DBBFF]' : 'bg-[#60A5FA]'
          }`} />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <div className={`inline-flex items-center gap-2 mb-6 rounded-full border backdrop-blur-sm px-6 py-3 transition-colors duration-500 ${
              isDarkMode
                ? 'border-[rgba(34,211,238,0.3)] bg-[rgba(20,26,31,0.6)] shadow-[0_0_30px_rgba(34,211,238,0.2)]'
                : 'border-[rgba(59,130,246,0.3)] bg-[rgba(255,255,255,0.6)] shadow-[0_0_30px_rgba(59,130,246,0.15)]'
            }`}>
              <div className="h-2 w-2 rounded-full bg-[#FFD700] animate-pulse" />
              <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${
                isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
              }`}>{t('why.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <Link to="/about" className={`group inline-block transition-colors ${
                isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
              }`}>
                <span className={`transition-colors duration-500 ${
                  isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
                }`}>{t('why.title1')} </span>
                <span className={`bg-clip-text text-transparent transition-colors duration-500 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#22D3EE] via-[#4DBBFF] to-[#22D3EE]'
                    : 'bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6]'
                }`}>
                  {t('why.title2')}
                </span>
                <div className={`h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full mt-2 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]'
                    : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
                }`} />
              </Link>
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'
            }`}>
              {t('why.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureFlipCard
              icon="🛡️"
              title={t('why.safe.title')}
              description={t('why.safe.description')}
            />
            <FeatureFlipCard
              icon="👥"
              title={t('why.guides.title')}
              description={t('why.guides.description')}
            />
            <FeatureFlipCard
              icon="💎"
              title={t('why.premium.title')}
              description={t('why.premium.description')}
            />
            <FeatureFlipCard
              icon="🌟"
              title={t('why.value.title')}
              description={t('why.value.description')}
            />
          </div>
        </div>
      </section>

      {/* ===== DESTINATIONS GRID ===== */}
      <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-b from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]'
          : 'bg-gradient-to-b from-white via-[#EBF8FF] to-white'
      }`}>
        {/* Parallax background image */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')] bg-cover bg-center bg-fixed"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
        </div>

        {/* Gradient overlay mesh */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isDarkMode
            ? 'bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_50%)]'
            : 'bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_50%)]'
        }`} />
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isDarkMode
            ? 'bg-[radial-gradient(circle_at_bottom_left,rgba(77,187,255,0.15),transparent_50%)]'
            : 'bg-[radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.12),transparent_50%)]'
        }`} />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <div className={`inline-flex items-center gap-2 mb-6 rounded-full border backdrop-blur-md px-6 py-3 transition-colors duration-500 ${
              isDarkMode
                ? 'border-[rgba(34,211,238,0.5)] bg-[rgba(20,26,31,0.9)] shadow-[0_0_40px_rgba(34,211,238,0.3)]'
                : 'border-[rgba(59,130,246,0.5)] bg-[rgba(255,255,255,0.9)] shadow-[0_0_40px_rgba(59,130,246,0.2)]'
            }`}>
              <div className={`h-2 w-2 rounded-full animate-pulse ${
                isDarkMode ? 'bg-[#22D3EE]' : 'bg-[#3B82F6]'
              }`} />
              <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${
                isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
              }`}>{t('destinations.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <Link to="/destinations" className={`group inline-block transition-colors ${
                isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
              }`}>
                <span className={`transition-colors duration-500 ${
                  isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
                }`}>{t('destinations.title1')} </span>
                <span className={`bg-clip-text text-transparent transition-colors duration-500 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#22D3EE] via-[#4DBBFF] to-[#22D3EE]'
                    : 'bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6]'
                }`}>
                  {t('destinations.title2')}
                </span>
                <div className={`h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full mt-2 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]'
                    : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
                }`} />
              </Link>
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light transition-colors duration-500 ${
              isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
            }`}>
              {t('destinations.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DestinationCard 
              image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"
              name="Hunza Valley"
              tours="12 Tours Available"
              link="/destinations?region=hunza"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600"
              name="Skardu"
              tours="8 Tours Available"
              link="/destinations?region=skardu"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"
              name="Swat Valley"
              tours="10 Tours Available"
              link="/destinations?region=swat"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600"
              name="Naran Kaghan"
              tours="15 Tours Available"
              link="/destinations?region=naran"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"
              name="Fairy Meadows"
              tours="5 Tours Available"
              link="/destinations?region=fairy-meadows"
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600"
              name="Murree & Galiyat"
              tours="7 Tours Available"
              link="/destinations?region=murree"
            />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-[#0B0C0E]' : 'bg-white'
      }`}>
        {/* Premium gradient background */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isDarkMode
            ? 'bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%)]'
            : 'bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_60%)]'
        }`} />
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          isDarkMode
            ? 'bg-[radial-gradient(ellipse_at_bottom,rgba(77,187,255,0.08),transparent_60%)]'
            : 'bg-[radial-gradient(ellipse_at_bottom,rgba(96,165,250,0.06),transparent_60%)]'
        }`} />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <div className={`inline-flex items-center gap-2 mb-6 rounded-full border backdrop-blur-sm px-6 py-3 transition-colors duration-500 ${
              isDarkMode
                ? 'border-[rgba(34,211,238,0.3)] bg-[rgba(20,26,31,0.6)] shadow-[0_0_30px_rgba(34,211,238,0.2)]'
                : 'border-[rgba(59,130,246,0.3)] bg-[rgba(255,255,255,0.6)] shadow-[0_0_30px_rgba(59,130,246,0.15)]'
            }`}>
              <div className="h-2 w-2 rounded-full bg-[#FFD700] animate-pulse" />
              <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${
                isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
              }`}>{t('testimonials.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className={`transition-colors duration-500 ${
                isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
              }`}>{t('testimonials.title1')} </span>
              <span className={`bg-clip-text text-transparent transition-colors duration-500 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-[#22D3EE] via-[#4DBBFF] to-[#22D3EE]'
                  : 'bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6]'
              }`}>
                {t('testimonials.title2')}
              </span>
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'
            }`}>
              {t('testimonials.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Johnson"
              country="United Kingdom"
              image="https://i.pravatar.cc/150?img=1"
              rating={5}
              text="Absolutely breathtaking! The Hunza Valley tour exceeded all my expectations. Our guide was knowledgeable and the accommodations were top-notch."
            />
            <TestimonialCard 
              name="Michael Schmidt"
              country="Germany"
              image="https://i.pravatar.cc/150?img=12"
              rating={5}
              text="Best adventure of my life! The K2 base camp trek was challenging but incredibly rewarding. PakTourZone handled everything perfectly."
            />
            <TestimonialCard 
              name="Emma Williams"
              country="USA"
              image="https://i.pravatar.cc/150?img=5"
              rating={5}
              text="Professional, safe, and unforgettable. I felt completely secure throughout my solo trip. The local hospitality was amazing!"
            />
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419]'
          : 'bg-gradient-to-b from-[#F8FAFB] to-white'
      }`}>
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 left-1/3 w-64 h-64 opacity-5 rounded-full blur-3xl animate-pulse ${
            isDarkMode ? 'bg-[#22D3EE]' : 'bg-[#3B82F6]'
          }`} style={{animationDuration: '5s'}} />
          <div className={`absolute bottom-1/4 right-1/3 w-80 h-80 opacity-5 rounded-full blur-3xl animate-pulse ${
            isDarkMode ? 'bg-[#4DBBFF]' : 'bg-[#60A5FA]'
          }`} style={{animationDuration: '7s', animationDelay: '1s'}} />
        </div>

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
              }`}>{t('gallery.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <Link to="/gallery" className={`group inline-block transition-colors ${
                isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
              }`}>
                <span className={`transition-colors duration-500 ${
                  isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
                }`}>{t('gallery.title1')} </span>
                <span className={`bg-clip-text text-transparent transition-colors duration-500 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#22D3EE] via-[#4DBBFF] to-[#22D3EE]'
                    : 'bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6]'
                }`}>
                  {t('gallery.title2')}
                </span>
                <div className={`h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full mt-2 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]'
                    : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
                }`} />
              </Link>
            </h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'
            }`}>
              {t('gallery.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 1, label: "Hunza Valley" },
              { id: 2, label: "K2 Base Camp" },
              { id: 3, label: "Fairy Meadows" },
              { id: 4, label: "Attabad Lake" },
              { id: 5, label: "Swat Valley" },
              { id: 6, label: "Nanga Parbat" },
              { id: 7, label: "Skardu" },
              { id: 8, label: "Shangrila Resort" }
            ].map((item) => (
              <Link 
                to="/gallery" 
                key={item.id} 
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={`https://images.unsplash.com/photo-${item.id % 2 === 0 ? '1506905925346-21bda4d32df4' : '1464207687429-7505649dae38'}?w=400`}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,12,14,0.9)] via-[rgba(11,12,14,0.4)] to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Cyan glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#22D3EE] to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-[#F2F6F9] mb-1">{item.label}</h3>
                  <div className="flex items-center gap-2 text-sm text-[#22D3EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-semibold">View Gallery</span>
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-3 right-3 h-10 w-10 border-t-2 border-r-2 border-[#22D3EE] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-40 overflow-hidden">
        {/* Premium gradient background */}
        <div className={`absolute inset-0 transition-colors duration-500 ${
          isDarkMode
            ? 'bg-gradient-to-br from-[#0A3A67] via-[#22D3EE] to-[#4DBBFF]'
            : 'bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#60A5FA]'
        }`} />
        
        {/* Parallax background image */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')] bg-cover bg-center opacity-20"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] opacity-20" />
        
        {/* Glowing orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 mb-8 rounded-full border-2 backdrop-blur-sm px-6 py-3 transition-colors duration-500 ${
            isDarkMode
              ? 'border-[rgba(11,12,14,0.3)] bg-[rgba(11,12,14,0.2)]'
              : 'border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.2)]'
          }`}>
            <div className="h-2 w-2 rounded-full bg-[#FFD700] animate-pulse" />
            <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${
              isDarkMode ? 'text-[#0B0C0E]' : 'text-white'
            }`}>{t('cta.badge')}</span>
          </div>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight transition-colors duration-500 ${
            isDarkMode ? 'text-[#0B0C0E]' : 'text-white'
          }`}>
            {t('cta.title1')}
            <br />
            <span className={`bg-clip-text text-transparent transition-colors duration-500 ${
              isDarkMode
                ? 'bg-gradient-to-r from-[#0B0C0E] via-[rgba(11,12,14,0.8)] to-[#0B0C0E]'
                : 'bg-gradient-to-r from-white via-[rgba(255,255,255,0.8)] to-white'
            }`}>
              {t('cta.title2')}
            </span>
          </h2>
          
          <p className={`text-lg md:text-xl mb-12 font-medium max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
            isDarkMode ? 'text-[#0B0C0E]' : 'text-white'
          }`}>
            {t('cta.description')}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <Link to="/tours">
              <button className={`group relative overflow-hidden rounded-2xl px-12 py-6 text-lg font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-110 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] text-[#22D3EE] shadow-[0_0_40px_rgba(11,12,14,0.6)] hover:shadow-[0_0_60px_rgba(11,12,14,0.8)]'
                  : 'bg-white text-[#3B82F6] shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:shadow-[0_0_60px_rgba(255,255,255,0.8)]'
              }`}>
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  {t('cta.browseTours')}
                </span>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[rgba(34,211,238,0.2)] to-transparent'
                    : 'bg-gradient-to-r from-[rgba(59,130,246,0.2)] to-transparent'
                }`} />
              </button>
            </Link>
            
            <Link to="/contact">
              <button className={`group relative overflow-hidden rounded-2xl border-3 bg-transparent px-12 py-6 text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-110 ${
                isDarkMode
                  ? 'border-[#0B0C0E] text-[#0B0C0E] hover:bg-[#0B0C0E] hover:text-[#22D3EE] hover:shadow-[0_0_40px_rgba(11,12,14,0.4)]'
                  : 'border-white text-white hover:bg-white hover:text-[#3B82F6] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]'
              }`}>
                <span className="flex items-center gap-3">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t('cta.contactUs')}
                </span>
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className={`flex flex-wrap items-center justify-center gap-8 transition-colors duration-500 ${
            isDarkMode ? 'text-[#0B0C0E]' : 'text-white'
          }`}>
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-bold">{t('cta.tripAdvisor')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-bold">{t('cta.safeSecure')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold">{t('cta.priceGuarantee')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={`border-t pt-16 pb-8 transition-colors duration-500 ${
        isDarkMode
          ? 'border-[rgba(30,36,43,0.5)] bg-[#0B0C0E]'
          : 'border-[rgba(59,130,246,0.2)] bg-[#F8FAFB]'
      }`}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-[#22D3EE] to-[#0A3A67]'
                    : 'bg-gradient-to-br from-[#3B82F6] to-[#1E40AF]'
                }`}>
                  <span className="text-xl font-black text-white">PT</span>
                </div>
                <div>
                  <h3 className={`text-lg font-black transition-colors duration-500 ${
                    isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
                  }`}>PakTourZone</h3>
                  <p className={`text-[8px] uppercase tracking-wider transition-colors duration-500 ${
                    isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
                  }`}>Northern Pakistan</p>
                </div>
              </div>
              <p className={`text-sm mb-4 transition-colors duration-500 ${
                isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'
              }`}>
                {t('footer.tagline')}
              </p>
              <div className="flex gap-3">
                <a href="#" className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                  isDarkMode
                    ? 'bg-[rgba(20,26,31,0.6)] text-[#22D3EE] hover:bg-[rgba(34,211,238,0.2)]'
                    : 'bg-[rgba(59,130,246,0.1)] text-[#3B82F6] hover:bg-[rgba(59,130,246,0.2)]'
                }`}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                  isDarkMode
                    ? 'bg-[rgba(20,26,31,0.6)] text-[#22D3EE] hover:bg-[rgba(34,211,238,0.2)]'
                    : 'bg-[rgba(59,130,246,0.1)] text-[#3B82F6] hover:bg-[rgba(59,130,246,0.2)]'
                }`}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                  isDarkMode
                    ? 'bg-[rgba(20,26,31,0.6)] text-[#22D3EE] hover:bg-[rgba(34,211,238,0.2)]'
                    : 'bg-[rgba(59,130,246,0.1)] text-[#3B82F6] hover:bg-[rgba(59,130,246,0.2)]'
                }`}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 transition-colors duration-500 ${
                isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
              }`}>{t('footer.quickLinks')}</h4>
              <ul className={`space-y-2 text-sm transition-colors duration-500 ${
                isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'
              }`}>
                <li><Link to="/" className={`transition-colors ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}>Home</Link></li>
                <li><Link to="/about" className={`transition-colors ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}>About Us</Link></li>
                <li><Link to="/tours" className={`transition-colors ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}>Tours</Link></li>
                <li><Link to="/destinations" className={`transition-colors ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}>Destinations</Link></li>
                <li><Link to="/gallery" className={`transition-colors ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}>Gallery</Link></li>
                <li><Link to="/contact" className={`transition-colors ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}>Contact</Link></li>
              </ul>
            </div>

            {/* Popular Tours */}
            <div>
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 transition-colors duration-500 ${
                isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
              }`}>{t('footer.popularTours')}</h4>
              <ul className={`space-y-2 text-sm transition-colors duration-500 ${
                isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'
              }`}>
                <li><Link to="/tours?destination=hunza" className={`transition-colors ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}>Hunza Valley</Link></li>
                <li><Link to="/tours?destination=skardu" className={`transition-colors ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}>Skardu & K2</Link></li>
                <li><Link to="/tours?destination=swat" className={`transition-colors ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}>Swat Valley</Link></li>
                <li><Link to="/tours?destination=naran" className={`transition-colors ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}>Naran Kaghan</Link></li>
                <li><Link to="/tours?destination=fairy-meadows" className={`transition-colors ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}>Fairy Meadows</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 transition-colors duration-500 ${
                isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
              }`}>{t('footer.contactUs')}</h4>
              <ul className={`space-y-3 text-sm transition-colors duration-500 ${
                isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'
              }`}>
                <li className="flex items-start gap-2">
                  <span className={`mt-0.5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>📍</span>
                  <span>Gilgit-Baltistan, Pakistan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}>📞</span>
                  <a href="tel:+923001234567" className={`transition-colors ${
                    isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                  }`}>+92 300 1234567</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}>✉️</span>
                  <a href="mailto:info@paktourzone.com" className={`transition-colors ${
                    isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                  }`}>info@paktourzone.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`mt-0.5 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>🕐</span>
                  <span>Mon-Sat: 9AM - 6PM PKT</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm transition-colors duration-500 ${
            isDarkMode
              ? 'border-[rgba(30,36,43,0.5)] text-[#C4CCD4]'
              : 'border-[rgba(59,130,246,0.2)] text-[#4A5568]'
          }`}>
            <p>{t('footer.rights')}</p>
            <div className="flex gap-6">
              <Link to="/privacy" className={`transition-colors ${
                isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
              }`}>Privacy Policy</Link>
              <Link to="/terms" className={`transition-colors ${
                isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
              }`}>Terms of Service</Link>
              <Link to="/sitemap" className={`transition-colors ${
                isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
              }`}>Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <a 
        href="https://wa.me/923001234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-[#25D366] to-[#128C7E] shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] hover:scale-110"
      >
        <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </div>
  );
};

// ===== ANIMATED STAT BADGE COMPONENT (SLEEK & MINIMAL) =====
const AnimatedStatBadge = ({ target, suffix, label, duration, decimal = false }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const badgeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }

    return () => {
      if (badgeRef.current) {
        observer.unobserve(badgeRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = () => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOutQuart * target;
      
      setCount(decimal ? currentCount : Math.floor(currentCount));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <div ref={badgeRef} className="text-center">
      <div className="text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-[#22D3EE] via-[#4DBBFF] to-[#22D3EE] bg-clip-text text-transparent">
        {decimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs md:text-sm text-[#C4CCD4] uppercase tracking-wide font-medium">
        {label}
      </div>
    </div>
  );
};

// ===== FLIP CARD COMPONENT =====
const FlipCard = ({ frontImage, title, subtitle, price, description, highlights, link }) => {
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
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,12,14,0.95)] via-[rgba(11,12,14,0.4)] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="inline-block mb-2 rounded-full border border-[rgba(34,211,238,0.5)] bg-[rgba(20,26,31,0.8)] backdrop-blur-sm px-4 py-1">
              <span className="text-xs font-semibold text-[#22D3EE]">{subtitle}</span>
            </div>
            <h3 className="text-3xl font-black text-[#F2F6F9] mb-2">{title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-[#22D3EE]">{price}</span>
              <span className="text-sm text-[#C4CCD4]">per person</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0A3A67] via-[#141A1F] to-[#0B0C0E] border border-[rgba(34,211,238,0.3)]">
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#F2F6F9] mb-4">{title}</h3>
              <p className="text-sm text-[#C4CCD4] mb-6 leading-relaxed">{description}</p>
              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-2">Highlights:</p>
                {highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[#C4CCD4]">
                    <span className="text-[#22D3EE] mt-0.5">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link to={link}>
              <button className="w-full rounded-xl bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#0B0C0E] shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] hover:scale-105">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// ===== FEATURE FLIP CARD COMPONENT =====
const FeatureFlipCard = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 h-[280px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-[rgba(30,36,43,0.5)] bg-gradient-to-br from-[rgba(20,26,31,0.8)] to-[rgba(11,12,14,0.6)] backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center shadow-xl hover:border-[rgba(34,211,238,0.5)] transition-colors">
          <div className="text-6xl mb-4">{icon}</div>
          <h3 className="text-xl font-black text-[#F2F6F9]">{title}</h3>
          <p className="text-xs text-[#22D3EE] mt-2 uppercase tracking-wider">Click to learn more</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-[rgba(34,211,238,0.5)] bg-gradient-to-br from-[#0A3A67] to-[#0B0C0E] p-8 flex flex-col items-center justify-center text-center shadow-xl">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-lg font-black text-[#F2F6F9] mb-3">{title}</h3>
          <p className="text-sm text-[#C4CCD4] leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

// ===== DESTINATION CARD COMPONENT =====
const DestinationCard = ({ image, name, tours, link }) => {
  return (
    <Link to={link} className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,12,14,0.95)] via-[rgba(11,12,14,0.4)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#22D3EE] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-3xl font-black text-[#F2F6F9] mb-2">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-[#22D3EE]">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{tours}</span>
        </div>
        <div className="mt-4 flex items-center gap-2 text-[#22D3EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-bold">Explore Now</span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

// ===== TESTIMONIAL CARD COMPONENT =====
const TestimonialCard = ({ name, country, image, rating, text }) => {
  return (
    <div className="rounded-2xl border border-[rgba(30,36,43,0.5)] bg-gradient-to-br from-[rgba(20,26,31,0.8)] to-[rgba(11,12,14,0.6)] backdrop-blur-sm p-8 shadow-xl hover:border-[rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-4 mb-6">
        <img src={image} alt={name} className="h-16 w-16 rounded-full border-2 border-[#22D3EE] object-cover" />
        <div>
          <h4 className="text-lg font-bold text-[#F2F6F9]">{name}</h4>
          <p className="text-sm text-[#C4CCD4]">{country}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="h-5 w-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-sm text-[#C4CCD4] leading-relaxed italic">&ldquo;{text}&rdquo;</p>
    </div>
  );
};

export default Home;
