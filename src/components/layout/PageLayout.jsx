import { useNavbarSetup, useClickOutside } from '../../hooks';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../common/SEO';

/**
 * PageLayout Component
 * Provides consistent layout structure for all pages
 * Automatically handles navbar, footer, and SEO
 * 
 * Usage:
 * <PageLayout seo={{ title: 'Page Title', description: '...' }}>
 *   <YourPageContent />
 * </PageLayout>
 */

const PageLayout = ({ 
  children, 
  seo = {}, 
  showNavbar = true, 
  showFooter = true,
  className = '' 
}) => {
  const { navbarProps, isDarkMode, themeDropdownRef } = useNavbarSetup();

  return (
    <>
      {seo.title && <SEO {...seo} />}
      
      <div className={`min-h-screen transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]' 
          : 'bg-gradient-to-b from-white to-[#F8FAFB] text-[#1F2937]'
      } ${className}`}>
        {showNavbar && <Navbar {...navbarProps} />}
        
        <main>
          {children}
        </main>
        
        {showFooter && <Footer isDarkMode={isDarkMode} />}
      </div>
    </>
  );
};

export default PageLayout;
