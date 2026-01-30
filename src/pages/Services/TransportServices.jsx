import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import PageLayout from '../../components/layout/PageLayout';
import { servicesData } from '../../data/servicesData';

const TransportServices = () => {
  const { isDarkMode } = useTheme();
  const transportData = servicesData.transport;
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <PageLayout
      seo={{
        title: 'Transport Services in Northern Pakistan | PakTourZone',
        description: 'Safe, comfortable transport with experienced local drivers. Choose from sedans, SUVs, and 4x4s for mountain travel.',
        keywords: 'Pakistan transport services, 4x4 rental Pakistan, Northern Pakistan driver, tour transport',
        url: '/services/transport'
      }}
      className={`transition-colors duration-500 ${
      isDarkMode
        ? 'bg-linear-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]'
        : 'bg-linear-to-b from-white to-[#F8FAFB] text-[#1F2937]'
    }`}
    >

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${transportData.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-green-900/90 to-emerald-900/90"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-4">{transportData.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {transportData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              {transportData.tagline}
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {transportData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Vehicle Fleet */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Vehicle Fleet for Northern Pakistan Travel
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportData.vehicleTypes.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className={`rounded-xl overflow-hidden ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer`}
                onClick={() => setSelectedVehicle(selectedVehicle === index ? null : index)}
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${vehicle.image}')` }}
                ></div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {vehicle.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Capacity</span>
                      <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {vehicle.capacity}
                      </p>
                    </div>
                    <div>
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Luggage</span>
                      <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {vehicle.luggage}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {vehicle.price}
                    </div>
                    <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {vehicle.bestFor}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="text-green-600">✓</span>
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/custom-tour"
                    className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Additional Transport Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportData.services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                } hover:shadow-lg transition-shadow`}
              >
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.name}
                </h3>
                <p className={`mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <div className="text-xl font-bold text-green-600 mb-4">
                  {service.price}
                </div>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Why Choose Our Transport Service
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportData.whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {reason.title}
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-linear-to-r from-green-50 to-emerald-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to Book Transport for Your Tour?
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Safe, comfortable, and reliable transport for your entire journey
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/custom-tour"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Book Transport
            </Link>
            <Link
              to="/services"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

    </PageLayout>
  );
};

export default TransportServices;
