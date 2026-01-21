import { useState, useMemo, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/common/SEO';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaShieldAlt } from 'react-icons/fa';

const PrivacyPolicy = () => {
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
      title: '1. Information We Collect',
      content: 'We collect personal information that you provide when booking tours or contacting us, including: name, email address, phone number, postal address, passport details (when required), payment information, emergency contact details, dietary requirements and health information (when relevant), travel preferences and special requests. We also collect information automatically through your use of our website, such as IP address, browser type, device information, pages visited, and time spent on our site.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use your personal information to: process and confirm your tour bookings, communicate with you about your tours and reservations, provide customer support and respond to inquiries, send booking confirmations and travel documents, process payments and refunds, improve our services and website functionality, send promotional materials and special offers (with your consent), comply with legal obligations and protect our rights, ensure safety and security of our travelers.'
    },
    {
      title: '3. Information Sharing',
      content: 'We may share your information with: service providers (hotels, transport companies, guides) necessary to deliver your tour, payment processors to handle transactions securely, marketing partners (only with your explicit consent), legal authorities when required by law or to protect our rights, business partners in the event of a merger or acquisition. We do not sell your personal information to third parties.'
    },
    {
      title: '4. Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes: secure SSL encryption for data transmission, restricted access to personal information on a need-to-know basis, regular security assessments and updates, secure payment processing through trusted providers. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.'
    },
    {
      title: '5. Cookies and Tracking Technologies',
      content: 'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences. Types of cookies we use include: essential cookies (required for website functionality), analytics cookies (to understand user behavior), marketing cookies (for personalized advertising, with consent).'
    },
    {
      title: '6. Your Rights',
      content: 'You have the right to: access your personal information we hold, request correction of inaccurate data, request deletion of your data (subject to legal requirements), object to processing of your personal information, withdraw consent for marketing communications, request data portability, lodge a complaint with a supervisory authority. To exercise these rights, please contact us at info@paktourzone.com.'
    },
    {
      title: '7. Data Retention',
      content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements. Booking and financial records are typically retained for 7 years as required by law. Marketing data is retained until you unsubscribe or request deletion.'
    },
    {
      title: '8. International Data Transfers',
      content: 'Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy and applicable data protection laws.'
    },
    {
      title: '9. Children\'s Privacy',
      content: 'Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately, and we will take steps to delete such information.'
    },
    {
      title: '10. Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to read the privacy policies of any third-party sites you visit.'
    },
    {
      title: '11. Marketing Communications',
      content: 'We may send you marketing communications about our tours, special offers, and travel tips if you have consented to receive such communications. You can opt out at any time by: clicking the unsubscribe link in our emails, contacting us at info@paktourzone.com, or updating your communication preferences in your account settings.'
    },
    {
      title: '12. Changes to This Privacy Policy',
      content: 'We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.'
    },
    {
      title: '13. Contact Us',
      content: 'If you have questions, concerns, or requests regarding this privacy policy or our data practices, please contact us at: Email: info@paktourzone.com, Phone: +92 300 1234567, or through our website contact form.'
    }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy | PakTourZone"
        description="Learn how PakTourZone collects, uses, and protects your personal information. Read our privacy policy for details on data security and your rights."
        keywords="privacy policy, data protection, personal information, data security, PakTourZone privacy"
        url="/privacy-policy"
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
                <FaShieldAlt className={`text-5xl ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} />
              </div>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
                } bg-clip-text text-transparent`}
              >
                Privacy Policy
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
                  At PakTourZone, we are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy explains how we collect, use, share, and protect your data when you use our services or visit our website.
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
                  Your privacy is important to us. If you have any questions or concerns about how we handle your personal information, please don't hesitate to contact us.
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

export default PrivacyPolicy;
