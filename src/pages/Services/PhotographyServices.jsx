import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import PageLayout from '../../components/layout/PageLayout';
import { servicesData } from '../../data/servicesData';

const PhotographyServices = () => {
  const { isDarkMode } = useTheme();
  const photoData = servicesData.photography;
  const [selectedPackage, setSelectedPackage] = useState(photoData.packages[1]); // Default to daily

  return (
    <PageLayout className={`min-h-screen transition-colors duration-500 ${
      isDarkMode
        ? 'bg-linear-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]'
        : 'bg-linear-to-b from-white to-[#F8FAFB] text-[#1F2937]'
    }`}>

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${photoData.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-indigo-900/90 to-purple-900/90"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-4">{photoData.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {photoData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              {photoData.tagline}
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {photoData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Photographers */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Photographers
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {photoData.photographers.map((photographer) => (
              <div
                key={photographer.id}
                className={`rounded-xl overflow-hidden ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="md:flex">
                  <div 
                    className="md:w-2/5 h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url('${photographer.image}')` }}
                  ></div>
                  
                  <div className="md:w-3/5 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {photographer.name}
                        </h3>
                        <p className="text-indigo-600 font-semibold mb-2">
                          {photographer.specialization}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {photographer.rating}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Experience
                        </span>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {photographer.experience}
                        </p>
                      </div>
                      <div>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Projects
                        </span>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {photographer.portfolio}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className={`text-sm block mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Equipment
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {photographer.equipment.map((item, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs ${
                              isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-indigo-100 text-indigo-800'
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <div className="text-2xl font-bold text-indigo-600">
                          {photographer.price}
                        </div>
                        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          per day
                        </div>
                      </div>
                      <Link
                        to="/custom-tour"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Packages */}
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Photography Packages
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photoData.packages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className={`p-6 rounded-xl cursor-pointer transition-all ${
                  selectedPackage.id === pkg.id
                    ? 'ring-2 ring-indigo-600 shadow-xl'
                    : ''
                } ${pkg.recommended ? 'transform scale-105' : ''} ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl`}
              >
                {pkg.recommended && (
                  <div className="bg-indigo-600 text-white text-center py-1 px-3 rounded-full text-sm font-semibold mb-4 inline-block">
                    ⭐ Popular
                  </div>
                )}
                
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">
                    {pkg.price}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {pkg.duration}
                  </div>
                </div>

                {pkg.bestFor && (
                  <p className={`text-sm mb-4 italic ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Best for: {pkg.bestFor}
                  </p>
                )}

                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-indigo-600 mt-1">✓</span>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Add-On Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photoData.services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                } hover:shadow-lg transition-shadow`}
              >
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.name}
                </h3>
                <p className={`mb-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <div className="text-xl font-bold text-indigo-600 mb-4">
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

      {/* Equipment & Delivery */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Professional Equipment
              </h2>
              <ul className="space-y-3">
                {photoData.equipment.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-indigo-600 text-xl">✓</span>
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Delivery Timeline
              </h2>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                  <div className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Preview Photos
                  </div>
                  <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {photoData.deliveryTimeline.preview}
                  </div>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                  <div className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Full Photo Delivery
                  </div>
                  <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {photoData.deliveryTimeline.fullDelivery}
                  </div>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                  <div className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Video Production
                  </div>
                  <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {photoData.deliveryTimeline.video}
                  </div>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                  <div className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Photo Book
                  </div>
                  <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {photoData.deliveryTimeline.photoBook}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-linear-to-r from-indigo-50 to-purple-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Capture Your Journey Forever
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Professional photography to preserve your Pakistan adventure in stunning detail
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/custom-tour"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Book Photography
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

export default PhotographyServices;
