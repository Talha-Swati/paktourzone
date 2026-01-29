import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import PageHero from '../components/common/PageHero';
import { termsSections } from '../data/legalData';
import { FaFileContract } from 'react-icons/fa';

const TermsConditions = () => {
  const { isDarkMode } = useTheme();

  return (
    <PageLayout
      seo={{
        title: 'Terms & Conditions | PakTourZone',
        description: "Read PakTourZone's terms and conditions for booking tours, cancellation policies, liability, and other important information for travelers.",
        keywords: 'terms and conditions, booking policy, cancellation policy, travel terms, PakTourZone policies',
        url: '/terms-conditions'
      }}
    >
      <PageHero
        title="Terms & Conditions"
        subtitle="Last Updated: January 2026"
        isDarkMode={isDarkMode}
      >
        <div className={`inline-block p-4 rounded-full mb-6 ${isDarkMode ? 'bg-[#22D3EE]/10' : 'bg-blue-50'}`}>
          <FaFileContract className={`text-5xl ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} />
        </div>
      </PageHero>

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
              {termsSections.map((section, index) => (
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
    </PageLayout>
  );
};

export default TermsConditions;
