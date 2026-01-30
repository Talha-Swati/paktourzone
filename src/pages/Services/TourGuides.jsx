import { useState, useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';
import PageLayout from '../../components/layout/PageLayout';
import { FaStar, FaMapMarkerAlt, FaLanguage, FaMountain, FaHiking, FaCamera, FaUsers, FaLandmark, FaAward, FaGlobeAsia } from 'react-icons/fa';

// Tour Guides Data - Organized by Regions
const tourGuides = [
  // Hunza Valley Guides
  {
    id: 1,
    name: 'Karim Shah',
    area: 'Hunza Valley',
    region: 'hunza',
    avatar: 'https://ui-avatars.com/api/?name=Karim+Shah&background=22D3EE&color=fff&size=200',
    rating: 5.0,
    experience: '12 years',
    specialties: ['Mountain Trekking', 'Cultural Tours', 'Photography'],
    languages: ['English', 'Urdu', 'Burushaski', 'Chinese'],
    bio: 'Born and raised in Karimabad, Karim has intimate knowledge of Hunza\'s trails, culture, and history. A certified mountaineer with over 50 successful expeditions to high-altitude peaks including Rakaposhi base camp.',
    toursCompleted: 450,
    certifications: ['Mountain Guide License', 'First Aid Certified', 'Wilderness Emergency Responder']
  },
  {
    id: 2,
    name: 'Ayesha Khan',
    area: 'Hunza Valley',
    region: 'hunza',
    avatar: 'https://ui-avatars.com/api/?name=Ayesha+Khan&background=4DBBFF&color=fff&size=200',
    rating: 4.9,
    experience: '8 years',
    specialties: ['Cultural Heritage', 'Photography', 'Family Tours'],
    languages: ['English', 'Urdu', 'Wakhi', 'German'],
    bio: 'A passionate storyteller who brings Hunza\'s rich heritage to life. Specializes in cultural immersion tours, traditional crafts workshops, and family-friendly adventures. Expert in local cuisine and traditions.',
    toursCompleted: 320,
    certifications: ['Licensed Tour Guide', 'Cultural Heritage Specialist', 'Photography Guide']
  },
  
  // Skardu & Baltistan Guides
  {
    id: 3,
    name: 'Ahmed Ali Balti',
    area: 'Skardu & Baltistan',
    region: 'skardu',
    avatar: 'https://ui-avatars.com/api/?name=Ahmed+Ali&background=60A5FA&color=fff&size=200',
    rating: 5.0,
    experience: '15 years',
    specialties: ['High Altitude Trekking', 'K2 Base Camp', 'Mountaineering'],
    languages: ['English', 'Urdu', 'Balti', 'Italian'],
    bio: 'Veteran mountaineer with 15 years of experience leading expeditions to K2, Broad Peak, and Gasherbrum. Deep knowledge of Baltistan\'s rugged terrain, ancient forts, and Balti culture. Safety is his top priority.',
    toursCompleted: 280,
    certifications: ['Advanced Mountaineering Guide', 'High Altitude Specialist', 'Avalanche Safety']
  },
  {
    id: 4,
    name: 'Zainab Hussain',
    area: 'Skardu & Baltistan',
    region: 'skardu',
    avatar: 'https://ui-avatars.com/api/?name=Zainab+Hussain&background=22D3EE&color=fff&size=200',
    rating: 4.8,
    experience: '6 years',
    specialties: ['Deosai Plains', 'Wildlife Tours', 'Photography'],
    languages: ['English', 'Urdu', 'Balti'],
    bio: 'Wildlife enthusiast and professional photographer who specializes in Deosai National Park tours. Expert in spotting Himalayan brown bears, birds, and wildflowers. Creates unforgettable photography expeditions.',
    toursCompleted: 190,
    certifications: ['Wildlife Guide', 'Nature Photography Expert', 'Conservation Specialist']
  },

  // Gilgit Region Guides
  {
    id: 5,
    name: 'Rashid Karim',
    area: 'Gilgit Region',
    region: 'gilgit',
    avatar: 'https://ui-avatars.com/api/?name=Rashid+Karim&background=4DBBFF&color=fff&size=200',
    rating: 4.9,
    experience: '10 years',
    specialties: ['Karakoram Highway', 'Cultural Tours', 'History'],
    languages: ['English', 'Urdu', 'Shina', 'French'],
    bio: 'History buff and expert on the ancient Silk Road. Leads comprehensive tours along the Karakoram Highway, sharing stories of traders, conquests, and cultural exchanges. Knows every hidden gem in Gilgit.',
    toursCompleted: 380,
    certifications: ['Heritage Tour Guide', 'Historical Sites Expert', 'Licensed Driver Guide']
  },
  {
    id: 6,
    name: 'Fatima Noor',
    area: 'Gilgit Region',
    region: 'gilgit',
    avatar: 'https://ui-avatars.com/api/?name=Fatima+Noor&background=60A5FA&color=fff&size=200',
    rating: 5.0,
    experience: '7 years',
    specialties: ['Adventure Tours', 'Rock Climbing', 'Camping'],
    languages: ['English', 'Urdu', 'Shina'],
    bio: 'Adventure specialist with expertise in rock climbing, camping, and outdoor survival. Organizes thrilling multi day expeditions combining trekking, climbing, and cultural experiences in Gilgit Baltistan.',
    toursCompleted: 215,
    certifications: ['Rock Climbing Instructor', 'Outdoor Adventure Guide', 'Survival Skills Expert']
  },

  // Fairy Meadows & Nanga Parbat
  {
    id: 7,
    name: 'Hassan Diamer',
    area: 'Fairy Meadows',
    region: 'fairy-meadows',
    avatar: 'https://ui-avatars.com/api/?name=Hassan+Diamer&background=22D3EE&color=fff&size=200',
    rating: 5.0,
    experience: '14 years',
    specialties: ['Nanga Parbat Treks', 'Alpine Meadows', 'Camping'],
    languages: ['English', 'Urdu', 'Shina', 'Japanese'],
    bio: 'Local expert from Raikot village with unmatched knowledge of Fairy Meadows and Nanga Parbat. Has led over 400 treks to the base camp, ensuring safety and memorable experiences for all fitness levels.',
    toursCompleted: 520,
    certifications: ['Mountain Trekking Guide', 'Alpine Specialist', 'Emergency Response']
  },
  {
    id: 8,
    name: 'Sana Malik',
    area: 'Fairy Meadows',
    region: 'fairy-meadows',
    avatar: 'https://ui-avatars.com/api/?name=Sana+Malik&background=4DBBFF&color=fff&size=200',
    rating: 4.9,
    experience: '5 years',
    specialties: ['Nature Tours', 'Stargazing', 'Eco Tourism'],
    languages: ['English', 'Urdu', 'German'],
    bio: 'Environmentalist and stargazing expert who creates eco friendly tours to Fairy Meadows. Passionate about sustainable tourism and preserving the pristine beauty of alpine meadows around Nanga Parbat.',
    toursCompleted: 165,
    certifications: ['Eco Tourism Guide', 'Astronomy Educator', 'Environmental Conservation']
  },

  // Naran Kaghan Valley
  {
    id: 9,
    name: 'Bilal Khan',
    area: 'Naran Kaghan',
    region: 'naran-kaghan',
    avatar: 'https://ui-avatars.com/api/?name=Bilal+Khan&background=60A5FA&color=fff&size=200',
    rating: 4.8,
    experience: '9 years',
    specialties: ['Lake Saif ul Malook', 'Valley Tours', 'Fishing'],
    languages: ['English', 'Urdu', 'Hindko'],
    bio: 'Fourth-generation local guide with deep roots in Kaghan Valley. Specializes in scenic tours to Saif ul Malook, Lulusar Lake, and Babusar Top. Expert in local folklore and seasonal weather patterns.',
    toursCompleted: 340,
    certifications: ['Valley Guide License', 'Lake Safety Expert', 'Traditional Guide']
  },
  {
    id: 10,
    name: 'Maryam Saeed',
    area: 'Naran Kaghan',
    region: 'naran-kaghan',
    avatar: 'https://ui-avatars.com/api/?name=Maryam+Saeed&background=22D3EE&color=fff&size=200',
    rating: 5.0,
    experience: '6 years',
    specialties: ['Family Tours', 'Honeymoon Packages', 'Scenic Routes'],
    languages: ['English', 'Urdu', 'Hindko'],
    bio: 'Warm and personable guide specializing in family vacations and honeymoon trips. Creates customized romantic experiences and fun-filled family adventures through the scenic Kaghan Valley.',
    toursCompleted: 275,
    certifications: ['Family Tour Specialist', 'Hospitality Expert', 'Licensed Guide']
  },

  // Siran Valley Guides
  {
    id: 13,
    name: 'Adeel Farooq',
    area: 'Siran Valley',
    region: 'siran-valley',
    avatar: 'https://ui-avatars.com/api/?name=Adeel+Farooq&background=22D3EE&color=fff&size=200',
    rating: 4.8,
    experience: '8 years',
    specialties: ['Nature Trails', 'Photography', 'Family Tours'],
    languages: ['English', 'Urdu', 'Hindko'],
    bio: 'Local guide with deep knowledge of Siran Valley’s forests, rivers, and hidden viewpoints. Specializes in relaxed family itineraries, easy hikes, and scenic photography stops.',
    toursCompleted: 240,
    certifications: ['Nature Guide', 'First Aid Certified', 'Photography Guide']
  },
  {
    id: 14,
    name: 'Hina Riaz',
    area: 'Siran Valley',
    region: 'siran-valley',
    avatar: 'https://ui-avatars.com/api/?name=Hina+Riaz&background=4DBBFF&color=fff&size=200',
    rating: 4.9,
    experience: '6 years',
    specialties: ['Cultural Tours', 'Local Cuisine', 'Village Walks'],
    languages: ['English', 'Urdu', 'Hindko'],
    bio: 'Cultural guide focused on authentic village experiences, local crafts, and culinary traditions of the Hazara region. Creates warm, community-based travel memories.',
    toursCompleted: 190,
    certifications: ['Licensed Tour Guide', 'Cultural Heritage Specialist']
  },

  // Swat Valley Guides
  {
    id: 11,
    name: 'Imran Yousafzai',
    area: 'Swat Valley',
    region: 'swat',
    avatar: 'https://ui-avatars.com/api/?name=Imran+Yousafzai&background=4DBBFF&color=fff&size=200',
    rating: 4.9,
    experience: '11 years',
    specialties: ['Buddhist Heritage', 'Valley Tours', 'Historical Sites'],
    languages: ['English', 'Urdu', 'Pashto', 'Arabic'],
    bio: 'Archaeologist turned tour guide with extensive knowledge of Swat\'s Buddhist heritage and Gandhara civilization. Brings ancient history to life at sites like Mingora, Saidu Sharif, and Takht-i-Bahi.',
    toursCompleted: 410,
    certifications: ['Archaeological Guide', 'Heritage Specialist', 'Museum Educator']
  },
  {
    id: 12,
    name: 'Samina Afridi',
    area: 'Swat Valley',
    region: 'swat',
    avatar: 'https://ui-avatars.com/api/?name=Samina+Afridi&background=60A5FA&color=fff&size=200',
    rating: 4.8,
    experience: '7 years',
    specialties: ['Nature Trails', 'Riverside Tours', 'Local Crafts'],
    languages: ['English', 'Urdu', 'Pashto'],
    bio: 'Nature lover who showcases Swat\'s stunning rivers, waterfalls, and green valleys. Connects travelers with local artisans for authentic craft experiences including woodwork and embroidery.',
    toursCompleted: 290,
    certifications: ['Nature Guide', 'Cultural Tourism Expert', 'Craft Tour Specialist']
  }
];

const TourGuides = () => {
  const { isDarkMode } = useTheme();
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const regions = useMemo(() => [
    { id: 'all', name: 'All Regions', icon: <FaGlobeAsia /> },
    { id: 'hunza', name: 'Hunza Valley', icon: <FaMountain /> },
    { id: 'skardu', name: 'Skardu & Baltistan', icon: <FaMountain /> },
    { id: 'gilgit', name: 'Gilgit Region', icon: <FaLandmark /> },
    { id: 'fairy-meadows', name: 'Fairy Meadows', icon: <FaHiking /> },
    { id: 'naran-kaghan', name: 'Naran Kaghan', icon: <FaHiking /> },
    { id: 'siran-valley', name: 'Siran Valley', icon: <FaHiking /> },
    { id: 'swat', name: 'Swat Valley', icon: <FaLandmark /> }
  ], []);

  const specialties = useMemo(() => [
    'all',
    'Mountain Trekking',
    'Cultural Heritage',
    'Photography',
    'Family Tours',
    'High Altitude Trekking',
    'Wildlife Tours',
    'Adventure Tours'
  ], []);

  // Filter guides by region and specialty
  const filteredGuides = useMemo(() => {
    return tourGuides.filter(guide => {
      const matchesRegion = selectedRegion === 'all' || guide.region === selectedRegion;
      const matchesSpecialty = selectedSpecialty === 'all' || guide.specialties.some(s => s.includes(selectedSpecialty) || selectedSpecialty.includes(s));
      return matchesRegion && matchesSpecialty;
    });
  }, [selectedRegion, selectedSpecialty]);

  // Calculate average rating
  const averageRating = useMemo(() => {
    const total = tourGuides.reduce((sum, guide) => sum + guide.rating, 0);
    return (total / tourGuides.length).toFixed(1);
  }, []);

  // SEO structured data
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tour Guide Services",
    "provider": {
      "@type": "Organization",
      "name": "PakTourZone"
    },
    "areaServed": "Pakistan",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "reviewCount": tourGuides.length
    }
  }), [averageRating]);

  // Render star rating
  const StarRating = ({ rating }) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`text-sm ${index < Math.floor(rating) ? 'text-yellow-500' : isDarkMode ? 'text-gray-600' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  return (
    <PageLayout
      seo={{
        title: 'Expert Tour Guides in Northern Pakistan | PakTourZone',
        description: `Meet ${tourGuides.length} licensed local guides across Hunza, Skardu, Gilgit and more. Average ${averageRating}/5 rating from international travelers.`,
        keywords: 'Pakistan tour guides, local guides Hunza, Skardu guides, trekking guides, cultural guides',
        url: '/services/guides',
        structuredData
      }}
    >

        {/* Hero Section */}
        <section
          className={`relative py-20 overflow-hidden ${
            isDarkMode ? 'bg-linear-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-linear-to-br from-white via-[#EBF8FF] to-white'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`inline-block p-4 rounded-full mb-6 ${isDarkMode ? 'bg-[#22D3EE]/10' : 'bg-blue-50'}`}>
                <FaUsers className={`text-5xl ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} />
              </div>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
                } bg-clip-text text-transparent`}
              >
                Meet Our Expert Tour Guides
              </h1>
              <p className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                English speaking, safety focused guides who turn every destination into a meaningful story
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white'}`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                    {tourGuides.length}+
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                    Expert Guides
                  </div>
                </div>
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white'}`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                    {averageRating}⭐
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                    Average Rating
                  </div>
                </div>
                <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white'}`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                    6
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                    Regions Covered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className={`py-6 backdrop-blur-lg border-b ${isDarkMode ? 'bg-[#0B0C0E]/95 border-[#1E242B]' : 'bg-white/95 border-gray-200'}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Region Filter */}
              <div className="flex-1">
                <label className={`block mb-2 text-sm font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                  Filter by Region
                </label>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                        selectedRegion === region.id
                          ? isDarkMode
                            ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E]'
                            : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white'
                          : isDarkMode
                          ? 'bg-[#141A1F] text-[#C4CCD4] border border-[rgba(34,211,238,0.2)] hover:border-[#22D3EE]'
                          : 'bg-white text-[#4A5568] border border-gray-200 hover:border-blue-400'
                      }`}
                    >
                      {region.icon}
                      <span>{region.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Specialty Filter */}
              <div className="w-full md:w-64">
                <label className={`block mb-2 text-sm font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                  Filter by Specialty
                </label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg font-semibold transition-all border ${
                    isDarkMode
                      ? 'bg-[#141A1F] text-[#C4CCD4] border-[rgba(34,211,238,0.2)]'
                      : 'bg-white text-[#4A5568] border-gray-200'
                  } focus:outline-none`}
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty === 'all' ? 'All Specialties' : specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={`mt-4 text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
              Showing {filteredGuides.length} {filteredGuides.length === 1 ? 'guide' : 'guides'}
            </div>
          </div>
        </section>

        {/* Tour Guides Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredGuides.map((guide) => (
                <div
                  key={guide.id}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-xl ${
                    isDarkMode
                      ? 'bg-[#141A1F] border-[rgba(34,211,238,0.1)] hover:border-[rgba(34,211,238,0.3)]'
                      : 'bg-white border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={guide.avatar}
                      alt={guide.name}
                      className="w-20 h-20 rounded-full border-4 border-[#22D3EE]"
                    />
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                        {guide.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <FaMapMarkerAlt className={`text-sm ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} />
                        <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                          {guide.area}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <StarRating rating={guide.rating} />
                        <span className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                          {guide.rating} • {guide.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                    {guide.bio}
                  </p>

                  {/* Stats */}
                  <div className={`grid grid-cols-2 gap-3 mb-4 p-3 rounded-lg ${isDarkMode ? 'bg-[#0F1419]' : 'bg-gray-50'}`}>
                    <div>
                      <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                        Tours Completed
                      </div>
                      <div className={`text-xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                        {guide.toursCompleted}+
                      </div>
                    </div>
                    <div>
                      <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                        Experience
                      </div>
                      <div className={`text-xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                        {guide.experience}
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                      Specialties
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {guide.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-xs rounded-full ${
                            isDarkMode
                              ? 'bg-[#22D3EE]/10 text-[#22D3EE]'
                              : 'bg-blue-50 text-[#3B82F6]'
                          }`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <div className={`text-sm font-semibold mb-2 flex items-center gap-2 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                      <FaLanguage />
                      <span>Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {guide.languages.map((language, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-xs rounded ${
                            isDarkMode
                              ? 'bg-[#0F1419] text-[#8B949E]'
                              : 'bg-gray-100 text-[#6B7280]'
                          }`}
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <div className={`text-sm font-semibold mb-2 flex items-center gap-2 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                      <FaAward />
                      <span>Certifications</span>
                    </div>
                    <ul className={`space-y-1 ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                      {guide.certifications.map((cert, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <span className="text-green-500">✓</span>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          className={`py-16 ${
            isDarkMode ? 'bg-linear-to-r from-[#0F1419] to-[#141A1F]' : 'bg-linear-to-r from-gray-50 to-blue-50'
          }`}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
              Ready to Explore with an Expert?
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
              Book your tour and get matched with the perfect guide for your adventure
            </p>
            <a
              href="/destinations"
              className={`inline-block px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
                isDarkMode
                  ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                  : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
              } transform hover:scale-105`}
            >
              Browse Destinations
            </a>
          </div>
        </section>

    </PageLayout>
  );
};

export default TourGuides;
