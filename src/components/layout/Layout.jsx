import { useNavbarSetup, useClickOutside } from '../../hooks';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Centralized Layout Component
 * Wraps all pages with consistent Navbar and Footer
 * Handles all navbar setup and click-outside logic internally
 * 
 * Usage:
 * <Layout>
 *   <YourPageContent />
 * </Layout>
 */
const Layout = ({ children, className = '' }) => {
  const { navbarProps, isDarkMode, themeDropdownRef } = useNavbarSetup();

  useClickOutside([themeDropdownRef], [navbarProps.setThemeDropdownOpen]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode
        ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]'
        : 'bg-gradient-to-b from-white to-[#F8FAFB] text-[#1F2937]'
    } ${className}`}>
      <Navbar {...navbarProps} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Layout;
