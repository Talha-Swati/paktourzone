import { useState, useMemo, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Custom hook for consistent navbar setup across all pages
 * Eliminates duplicate code for navbar state management and props
 */
export const useNavbarSetup = () => {
  const { isDarkMode, themeMode, setThemeMode, themeDropdownOpen, setThemeDropdownOpen } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const themeDropdownRef = useRef(null);

  const navbarProps = useMemo(() => ({
    isDarkMode,
    mobileMenuOpen,
    setMobileMenuOpen,
    themeMode,
    setThemeMode,
    themeDropdownOpen,
    setThemeDropdownOpen,
    themeDropdownRef,
  }), [isDarkMode, mobileMenuOpen, themeMode, themeDropdownOpen, setThemeDropdownOpen]);

  return { navbarProps, isDarkMode, themeDropdownRef };
};
