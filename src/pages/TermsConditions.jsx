import { useState, useMemo, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/common/SEO';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaFileContract } from 'react-icons/fa';

const TermsConditions = () => {
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
    themeDropdownRef
  }), [isDarkMode, mobileMenuOpen, themeMode, themeDropdownOpen, setThemeDropdownOpen]);

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using PakTourZone services, you accept and agree to be bound by the terms and conditions outlined in this agreement. If you do not agree to these terms, please do not use our services.'
    },
    {
      title: '2. Booking and Payment',
      content: 'All bookings are subject to availability and confirmation. Payment terms will be communicated at the time of booking. We accept various payment methods including bank transfers, credit cards, and online payment platforms. Full payment or a deposit may be required to confirm your booking.'
    },
    {
      title: '3. Cancellation and Refund Policy',
      content: 'Cancellation policies vary depending on the tour package and timing. Cancellations made 30 days or more before the tour date may be eligible for a full refund minus processing fees. Cancellations within 15-30 days may receive a 50% refund. Cancellations within 15 days of the tour date are generally non-refundable. Special circumstances will be considered on a case-by-case basis.'
    },
    {
      title: '4. Travel Insurance',
      content: 'We strongly recommend that all travelers purchase comprehensive travel insurance covering medical expenses, trip cancellation, lost luggage, and emergency evacuation. PakTourZone is not responsible for any costs arising from unforeseen circumstances that would be covered by travel insurance.'
    },
    {
      title: '5. Health and Safety',
      content: 'Travelers must disclose any medical conditions that may affect their ability to participate in tours. Some tours involve physical activity and may not be suitable for individuals with certain health conditions. PakTourZone reserves the right to refuse participation if we believe a traveler\'s health or fitness level poses a risk.'
    },
    {
      title: '6. Travel Documents',
      content: 'It is the responsibility of travelers to ensure they have valid passports, visas, and any other required travel documents. PakTourZone can provide assistance and guidance but is not responsible for any issues arising from incomplete or invalid documentation.'
    },
    {
      title: '7. Changes to Itinerary',
      content: 'PakTourZone reserves the right to modify tour itineraries due to weather conditions, political situations, natural disasters, or other circumstances beyond our control. We will make every effort to provide comparable alternatives and will notify travelers of any significant changes as soon as possible.'
    },
    {
      title: '8. Liability',
      content: 'PakTourZone acts as an intermediary between travelers and service providers (hotels, transport companies, guides, etc.). While we carefully select our partners, we are not liable for their actions, negligence, or failure to provide services. Our liability is limited to the amount paid for the tour package.'
    },
    {
      title: '9. Behavior and Conduct',
      content: 'Travelers are expected to behave respectfully towards guides, other travelers, local communities, and the environment. PakTourZone reserves the right to remove any traveler from a tour if their behavior is deemed inappropriate, dangerous, or disruptive, without refund.'
    },
    {
      title: '10. Photography and Media',
      content: 'PakTourZone may take photographs or videos during tours for promotional purposes. By participating in our tours, you consent to the use of such media. If you do not wish to be photographed or featured, please inform us in writing.'
    },
    {
      title: '11. Intellectual Property',
      content: 'All content on the PakTourZone website, including text, images, logos, and graphics, is the property of PakTourZone and protected by intellectual property laws. Unauthorized use, reproduction, or distribution is prohibited.'
    },
    {
      title: '12. Privacy',
      content: 'We are committed to protecting your privacy. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal information.'
    },
    {
      title: '13. Governing Law',
      content: 'These terms and conditions are governed by the laws of Pakistan. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of Pakistan.'
    },
    {
      title: '14. Contact Information',
      content: 'For questions or concerns regarding these terms and conditions, please contact us at info@paktourzone.com or call +92 300 1234567.'
    }
  ];

  return (
    <>
      <SEO
        title="Terms & Conditions | PakTourZone"
        description="Read PakTourZone's terms and conditions for booking tours, cancellation policies, liability, and other important information for travelers."
        keywords="terms and conditions, booking policy, cancellation policy, travel terms, PakTourZone policies"
        url="/terms-conditions"
      />

      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDarkMode ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]' : 'bg-gradient-to-b from-white to-[#F8FAFB] text-[#1F2937]'
        }`}
      >
        <Navbar {...navbarProps} />

        {/* Hero Section */}
        <section
          className={`relative py-20 overflow-hidden ${
            isDarkMode ? 'bg-gradient-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-gradient-to-br from-white via-[#EBF8FF] to-white'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`inline-block p-4 rounded-full mb-6 ${isDarkMode ? 'bg-[#22D3EE]/10' : 'bg-blue-50'}`}>
                <FaFileContract className={`text-5xl ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} />
              </div>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
                } bg-clip-text text-transparent`}
              >
                Terms & Conditions
              </h1>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                Last Updated: January 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className={`p-8 rounded-xl mb-8 ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white'}`}>
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                  Welcome to PakTourZone. These terms and conditions outline the rules and regulations for the use of our services and website. By booking a tour or using our services, you agree to comply with and be bound by the following terms.
                </p>
              </div>

              <div className="space-y-6">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${
                      isDarkMode ? 'bg-[#141A1F] hover:bg-[#1A2129]' : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <h2 className={`text-xl md:text-2xl font-bold mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                      {section.title}
                    </h2>
                    <p className={`leading-relaxed ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className={`mt-8 p-6 rounded-xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-blue-50'}`}>
                <p className={`text-center ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                  By using PakTourZone services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default TermsConditions;
