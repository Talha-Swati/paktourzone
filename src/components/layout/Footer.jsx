import { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`border-t pt-16 pb-8 transition-colors ${
      isDarkMode ? 'border-[rgba(30,36,43,0.5)] bg-[#0B0C0E]' : 'border-[rgba(59,130,246,0.2)] bg-[#F8FAFB]'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <h3 className={`text-lg sm:text-xl font-bold mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
              PakTourZone
            </h3>
            <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#6B7280]'}`}>
              Explore Pakistan's breathtaking beauty with expert guides.
            </p>
          </div>
          <div>
            <h4 className={`font-bold mb-4 text-base ${isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Tours', path: '/tours' },
                { name: 'Destinations', path: '/destinations' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`text-sm sm:text-base hover:text-[#22D3EE] transition hover:underline ${
                      isDarkMode ? 'text-[#C4CCD4]' : 'text-[#6B7280]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`font-bold mb-4 text-base ${isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}`}>
              Popular Destinations
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Hunza Valley', slug: 'hunza-valley' },
                { name: 'Skardu', slug: 'skardu' },
                { name: 'Swat Valley', slug: 'swat-valley' },
                { name: 'Fairy Meadows', slug: 'fairy-meadows' }
              ].map((dest) => (
                <li key={dest.slug}>
                  <Link 
                    to={`/destination/${dest.slug}`} 
                    className={`text-sm sm:text-base hover:text-[#22D3EE] transition hover:underline ${
                      isDarkMode ? 'text-[#C4CCD4]' : 'text-[#6B7280]'
                    }`}
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`font-bold mb-4 text-base ${isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}`}>
              Contact
            </h4>
            <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#6B7280]'}`}>
              Email: info@paktourzone.com
            </p>
            <p className={`mt-2 text-sm sm:text-base ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#6B7280]'}`}>
              Phone: +92 300 1234567
            </p>
          </div>
        </div>
        <div className={`pt-8 border-t text-center text-xs sm:text-sm ${
          isDarkMode ? 'border-[rgba(30,36,43,0.5)] text-[#8B949E]' : 'border-[rgba(59,130,246,0.2)] text-[#6B7280]'
        }`}>
          <p className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 flex-wrap">
            <span>&copy; 2026 PakTourZone. All rights reserved.</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>
              Powered and maintained by{' '}
              <a 
                href="https://zentredge.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-orange-500 hover:text-orange-600 hover:underline transition"
              >
                Zentredge
              </a>
            </span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="flex gap-2">
              <Link 
                to="/terms-conditions"
                className={`hover:underline transition ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}
              >
                Terms & Conditions
              </Link>
              <span>|</span>
              <Link 
                to="/privacy-policy"
                className={`hover:underline transition ${
                  isDarkMode ? 'hover:text-[#22D3EE]' : 'hover:text-[#3B82F6]'
                }`}
              >
                Privacy Policy
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
