import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    // Load theme from localStorage or default to 'system'
    return localStorage.getItem('theme') || 'system';
  });

  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  // Compute dark mode based on theme setting
  const isDarkMode = themeMode === 'system' ? true : themeMode === 'dark';

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const value = {
    themeMode,
    setThemeMode,
    isDarkMode,
    themeDropdownOpen,
    setThemeDropdownOpen,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
