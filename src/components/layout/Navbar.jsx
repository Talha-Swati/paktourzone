import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { getNavItems } from '../../data/navigationData';

const Navbar = ({ isDarkMode, mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = getNavItems();

  return (
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
          <Link to="/book-now" className={`hidden lg:flex items-center gap-2 rounded-xl bg-linear-to-r px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? 'from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]'
              : 'from-[#3B82F6] to-[#60A5FA] text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]'
          }`}>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Now
          </Link>
          
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
                        className={`block py-2 text-xs transition-colors ${
                          isDarkMode
                            ? 'text-[#8B949E] hover:text-[#22D3EE]'
                            : 'text-[#6B7280] hover:text-[#3B82F6]'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{dropItem.icon} {dropItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/book-now" className={`mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-linear-to-r px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-lg ${
              isDarkMode
                ? 'from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E]'
                : 'from-[#3B82F6] to-[#60A5FA] text-white'
            }`} onClick={() => setMobileMenuOpen(false)}>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default memo(Navbar);
