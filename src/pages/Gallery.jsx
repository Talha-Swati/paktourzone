import { useState, useMemo } from 'react';
import { useNavbarSetup } from '../hooks';
import SEO from '../components/common/SEO';

// Layout Components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Icons
import { FaSearch, FaTh, FaThLarge, FaTimes, FaMapMarkerAlt, FaCamera } from 'react-icons/fa';

// Gallery Photos Data - Using Unsplash for demo
const galleryPhotos = [
  {
    id: 1,
    title: 'Hunza Valley Autumn Colors',
    location: 'Hunza Valley',
    category: 'landscapes',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    photographer: 'PakTourZone',
    description: 'Golden autumn colors paint Hunza Valley in spectacular hues',
    tags: ['hunza', 'autumn', 'landscape']
  },
  {
    id: 2,
    title: 'Nanga Parbat Majesty',
    location: 'Fairy Meadows',
    category: 'mountains',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    photographer: 'PakTourZone',
    description: 'The Killer Mountain stands tall against the clear blue sky',
    tags: ['mountain', 'peak', 'nanga parbat']
  },
  {
    id: 3,
    title: 'Attabad Lake Serenity',
    location: 'Hunza Valley',
    category: 'lakes',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    photographer: 'PakTourZone',
    description: 'Crystal clear turquoise waters of Attabad Lake',
    tags: ['lake', 'water', 'hunza']
  },
  {
    id: 4,
    title: 'Skardu Sunset Magic',
    location: 'Skardu',
    category: 'landscapes',
    image: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=1200&q=80',
    photographer: 'PakTourZone',
    description: 'Breathtaking sunset over Skardu mountains',
    tags: ['sunset', 'skardu', 'landscape']
  },
  {
    id: 5,
    title: 'Deosai Plains Wildlife',
    location: 'Deosai National Park',
    category: 'wildlife',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    photographer: 'PakTourZone',
    description: 'Himalayan brown bear in the Land of Giants',
    tags: ['wildlife', 'deosai', 'nature']
  },
  {
    id: 6,
    title: 'Karakoram Highway Adventure',
    location: 'KKH',
    category: 'adventure',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    photographer: 'PakTourZone',
    description: 'The highest paved international road in the world',
    tags: ['road', 'adventure', 'kkh']
  },
  {
    id: 7,
    title: 'Baltit Fort Heritage',
    location: 'Karimabad',
    category: 'culture',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    photographer: 'PakTourZone',
    description: '700-year-old fort overlooking Hunza Valley',
    tags: ['fort', 'culture', 'heritage']
  },
  {
    id: 8,
    title: 'Shigar Fort Elegance',
    location: 'Shigar',
    category: 'culture',
    image: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=1200&q=80',
    photographer: 'PakTourZone',
    description: 'Beautifully restored heritage hotel in Baltistan',
    tags: ['fort', 'shigar', 'heritage']
  },
  {
    id: 9,
    title: 'Upper Kachura Lake',
    location: 'Skardu',
    category: 'lakes',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    photographer: 'PakTourZone',
    description: 'Shangrila Resort nestled by the pristine lake',
    tags: ['lake', 'skardu', 'shangrila']
  },
  {
    id: 10,
    title: 'Rakaposhi Basecamp Trek',
    location: 'Nagar Valley',
    category: 'adventure',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    photographer: 'PakTourZone',
    description: 'Trekking towards the magnificent Rakaposhi peak',
    tags: ['trek', 'mountain', 'adventure']
  },
  {
    id: 11,
    title: 'Passu Cones',
    location: 'Gojal Valley',
    category: 'mountains',
    image: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=1200&q=80',
    photographer: 'PakTourZone',
    description: 'Iconic cathedral-shaped peaks of Passu',
    tags: ['mountains', 'passu', 'gojal']
  },
  {
    id: 12,
    title: 'Khunjerab Pass Border',
    location: 'Pak-China Border',
    category: 'adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    photographer: 'PakTourZone',
    description: 'Highest border crossing in the world at 4,693m',
    tags: ['border', 'pass', 'khunjerab']
  }
];

const categories = [
  { id: 'all', name: 'All Photos', icon: '📸' },
  { id: 'landscapes', name: 'Landscapes', icon: '🏔️' },
  { id: 'mountains', name: 'Mountains', icon: '⛰️' },
  { id: 'lakes', name: 'Lakes', icon: '🏞️' },
  { id: 'culture', name: 'Culture', icon: '🏛️' },
  { id: 'adventure', name: 'Adventure', icon: '🎒' },
  { id: 'wildlife', name: 'Wildlife', icon: '🦌' }
];

const Gallery = () => {
  const { navbarProps, isDarkMode } = useNavbarSetup();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [layout, setLayout] = useState('grid');

  // SEO structured data
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "PakTourZone Photo Gallery",
    "description": "Stunning photography collection from Northern Pakistan's most beautiful destinations",
    "image": galleryPhotos.map(photo => photo.image),
    "about": {
      "@type": "Place",
      "name": "Northern Pakistan"
    }
  }), []);

  // Filter photos
  const filteredPhotos = useMemo(() => {
    let photos = galleryPhotos;

    // Category filter
    if (selectedCategory !== 'all') {
      photos = photos.filter(photo => photo.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      photos = photos.filter(photo =>
        photo.title.toLowerCase().includes(query) ||
        photo.location.toLowerCase().includes(query) ||
        photo.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return photos;
  }, [selectedCategory, searchQuery]);

  // Navigate lightbox
  const navigateLightbox = (direction) => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    if (direction === 'prev' && currentIndex > 0) {
      setSelectedPhoto(filteredPhotos[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[currentIndex + 1]);
    }
  };

  return (
    <>
      <SEO
        title="Photo Gallery - Northern Pakistan Beauty | PakTourZone"
        description="Explore stunning photography from Hunza, Skardu, Fairy Meadows, and other breathtaking destinations in Northern Pakistan. High-quality travel photos and landscapes."
        keywords="Pakistan photography, Hunza photos, Skardu images, travel photography, Northern Pakistan pictures, landscape photography"
        url="/gallery"
        image={galleryPhotos[0].image}
        structuredData={structuredData}
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
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500 mb-6">
                <FaCamera className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                  {galleryPhotos.length}+ Photos
                </span>
              </div>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
                } bg-clip-text text-transparent`}
              >
                Photo Gallery
              </h1>
              <p className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                Discover the breathtaking beauty of Northern Pakistan through our curated collection of stunning photography
              </p>

              {/* Search Bar */}
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <FaSearch className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`} />
                  <input
                    type="text"
                    placeholder="Search photos by location, tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border transition-colors ${
                      isDarkMode
                        ? 'bg-[#141A1F] border-[rgba(34,211,238,0.2)] text-[#E0E7EE] focus:border-[#22D3EE]'
                        : 'bg-white border-gray-200 text-[#1F2937] focus:border-blue-400'
                    } focus:outline-none`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Layout Controls */}
        <section className={`sticky top-16 z-40 py-4 backdrop-blur-lg border-b ${isDarkMode ? 'bg-[#0B0C0E]/95 border-[#1E242B]' : 'bg-white/95 border-gray-200'}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                      selectedCategory === cat.id
                        ? isDarkMode
                          ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E]'
                          : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white'
                        : isDarkMode
                        ? 'bg-[#141A1F] text-[#C4CCD4] border border-[rgba(34,211,238,0.2)] hover:border-[#22D3EE]'
                        : 'bg-white text-[#4A5568] border border-gray-200 hover:border-blue-400'
                    }`}
                  >
                    <span className="mr-1">{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Layout Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setLayout('grid')}
                  className={`p-2 rounded-lg transition-all ${
                    layout === 'grid'
                      ? isDarkMode
                        ? 'bg-[#22D3EE] text-[#0B0C0E]'
                        : 'bg-[#3B82F6] text-white'
                      : isDarkMode
                      ? 'bg-[#141A1F] text-[#C4CCD4]'
                      : 'bg-gray-100 text-[#4A5568]'
                  }`}
                  aria-label="Grid layout"
                >
                  <FaTh />
                </button>
                <button
                  onClick={() => setLayout('masonry')}
                  className={`p-2 rounded-lg transition-all ${
                    layout === 'masonry'
                      ? isDarkMode
                        ? 'bg-[#22D3EE] text-[#0B0C0E]'
                        : 'bg-[#3B82F6] text-white'
                      : isDarkMode
                      ? 'bg-[#141A1F] text-[#C4CCD4]'
                      : 'bg-gray-100 text-[#4A5568]'
                  }`}
                  aria-label="Masonry layout"
                >
                  <FaThLarge />
                </button>
              </div>
            </div>

            {/* Results count */}
            <div className={`mt-4 text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
              Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? 'photo' : 'photos'}
            </div>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredPhotos.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                  No photos found
                </h3>
                <p className={isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}>
                  Try adjusting your filters or search query
                </p>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${
                  layout === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {filteredPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setSelectedPhoto(photo)}
                    className={`group relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ${
                      layout === 'masonry' ? 'h-80' : 'aspect-square'
                    }`}
                  >
                    {/* Image */}
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-bold text-lg mb-1">{photo.title}</h3>
                        <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                          <FaMapMarkerAlt className="text-[#22D3EE]" />
                          <span>{photo.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {photo.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                          isDarkMode
                            ? 'bg-[#22D3EE]/20 border border-[#22D3EE] text-[#22D3EE]'
                            : 'bg-white/80 text-[#3B82F6]'
                        }`}
                      >
                        {categories.find(c => c.id === photo.category)?.icon} {photo.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <FaTimes size={24} />
            </button>

            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="mt-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h2>
                <div className="flex items-center gap-2 mb-3">
                  <FaMapMarkerAlt className="text-[#22D3EE]" />
                  <span className="text-gray-300">{selectedPhoto.location}</span>
                </div>
                <p className="text-gray-400 mb-4">{selectedPhoto.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedPhoto.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => navigateLightbox('prev')}
                  disabled={filteredPhotos.findIndex(p => p.id === selectedPhoto.id) === 0}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => navigateLightbox('next')}
                  disabled={filteredPhotos.findIndex(p => p.id === selectedPhoto.id) === filteredPhotos.length - 1}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default Gallery;
