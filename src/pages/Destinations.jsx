import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Hunza Valley",
    region: "Gilgit-Baltistan",
    description: "Ancient Silk Road destination with breathtaking mountain views, historic forts, and legendary hospitality.",
    highlights: ["Baltit Fort", "Attabad Lake", "Passu Cones", "Karimabad"],
    bestTime: "March - October",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200",
    tours: 12,
    altitude: "2,438m"
  },
  {
    id: 2,
    name: "Skardu",
    region: "Gilgit-Baltistan",
    description: "Gateway to the world's highest peaks, featuring pristine lakes, desert landscapes, and K2 base camp.",
    highlights: ["Shangrila Lake", "Deosai Plains", "Shigar Fort", "Katpana Desert"],
    bestTime: "April - September",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200",
    tours: 15,
    altitude: "2,286m"
  },
  {
    id: 3,
    name: "Naran Kaghan",
    region: "Khyber Pakhtunkhwa",
    description: "Lush green valleys with crystal-clear streams, pine forests, and the stunning Saif-ul-Malook Lake.",
    highlights: ["Lake Saiful Malook", "Babusar Top", "Lulusar Lake", "Ansoo Lake"],
    bestTime: "May - September",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    tours: 18,
    altitude: "2,409m"
  },
  {
    id: 4,
    name: "Swat Valley",
    region: "Khyber Pakhtunkhwa",
    description: "Switzerland of Pakistan with emerald rivers, archaeological sites, and Buddhist heritage.",
    highlights: ["Malam Jabba", "Kalam Valley", "Mahodand Lake", "Buddhist Ruins"],
    bestTime: "March - November",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",
    tours: 10,
    altitude: "980m"
  },
  {
    id: 5,
    name: "Fairy Meadows",
    region: "Gilgit-Baltistan",
    description: "Alpine meadow offering the most stunning views of Nanga Parbat, the ninth-highest peak in the world.",
    highlights: ["Nanga Parbat View", "Beyal Camp", "Raikot Glacier", "Star Gazing"],
    bestTime: "June - September",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
    tours: 8,
    altitude: "3,300m"
  },
  {
    id: 6,
    name: "Chitral",
    region: "Khyber Pakhtunkhwa",
    description: "Remote mountain paradise home to the Kalash people, unique culture, and Hindu Kush peaks.",
    highlights: ["Kalash Valleys", "Chitral Fort", "Shandur Pass", "Tirich Mir"],
    bestTime: "May - October",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200",
    tours: 7,
    altitude: "1,500m"
  },
  {
    id: 7,
    name: "Neelum Valley",
    region: "Azad Kashmir",
    description: "Paradise on earth with verdant landscapes, rushing rivers, and serene mountain villages.",
    highlights: ["Keran", "Arang Kel", "Ratti Gali Lake", "Taobat"],
    bestTime: "April - October",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    tours: 11,
    altitude: "1,524m"
  },
];

const Destinations = () => {
  const scrollRef = useRef(null);
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);
  const [isDragging, setIsDragging] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F2F6F9]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#1E242B] bg-[rgba(11,12,14,0.95)] backdrop-blur-xl shadow-lg">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#22D3EE] to-[#0A3A67] shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <span className="text-xl font-black text-white">PT</span>
              </div>
              <div>
                <h1 className="text-lg font-black text-[#F2F6F9]">PakTourZone</h1>
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#22D3EE]">Destinations</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#C4CCD4]">
              <Link to="/" className="transition-colors hover:text-[#22D3EE]">Home</Link>
              <Link to="/tours" className="transition-colors hover:text-[#22D3EE]">Tours</Link>
              <Link to="/destinations" className="text-[#22D3EE]">Destinations</Link>
              <Link to="/contact" className="transition-colors hover:text-[#22D3EE]">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3A67]/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#22D3EE33,_transparent_50%)]"></div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-6">
              🗺️ Discover Pakistan
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Explore <span className="bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] bg-clip-text text-transparent">Majestic</span> Destinations
            </h1>
            <p className="text-xl text-[#C4CCD4] mb-8 leading-relaxed">
              From snow-capped peaks to emerald valleys, discover the hidden gems of Northern Pakistan. 
              Each destination tells a unique story of nature's grandeur.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#22D3EE]/20 to-[#4DBBFF]/20 border border-[#22D3EE]/30">
                  <span className="text-2xl">🏔️</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#22D3EE]">{destinations.length}</p>
                  <p className="text-xs uppercase tracking-wider text-[#C4CCD4]">Destinations</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#22D3EE]/20 to-[#4DBBFF]/20 border border-[#22D3EE]/30">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#22D3EE]">{destinations.reduce((acc, d) => acc + d.tours, 0)}+</p>
                  <p className="text-xs uppercase tracking-wider text-[#C4CCD4]">Tour Packages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Cards */}
      <section className="relative py-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-[#F2F6F9]">Featured Destinations</h2>
            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#4DBBFF]/30 bg-[#141A1F] text-[#4DBBFF] transition-all hover:border-[#22D3EE] hover:bg-[#22D3EE]/10"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#4DBBFF]/30 bg-[#141A1F] text-[#4DBBFF] transition-all hover:border-[#22D3EE] hover:bg-[#22D3EE]/10"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-6 pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
          {destinations.map((destination, index) => (
            <article
              key={destination.id}
              onClick={() => setSelectedDestination(destination)}
              className={`group relative flex-shrink-0 w-96 cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-3 ${
                selectedDestination.id === destination.id ? "ring-4 ring-[#22D3EE] shadow-[0_0_40px_rgba(34,211,238,0.5)]" : "shadow-xl"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${destination.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-end p-8 h-[500px]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-lg bg-[#22D3EE]/20 backdrop-blur-sm border border-[#22D3EE]/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#22D3EE]">
                    {destination.region}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#C4CCD4]">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    {destination.altitude}
                  </span>
                </div>

                <h3 className="mb-3 text-3xl font-black text-white group-hover:text-[#22D3EE] transition-colors">
                  {destination.name}
                </h3>

                <p className="mb-4 text-sm text-[#C4CCD4] leading-relaxed line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm text-[#C4CCD4]">
                    <span>🎯</span>
                    <span className="font-semibold">{destination.tours} Tours</span>
                  </div>
                  <button className="text-sm font-bold uppercase tracking-wider text-[#22D3EE] transition-all hover:text-[#4DBBFF] flex items-center gap-2 group">
                    Explore
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Selected Destination Detail */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[#0F1A27]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <span className="inline-block rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-4">
                  Destination Spotlight
                </span>
                <h2 className="text-4xl font-black text-white mb-4">{selectedDestination.name}</h2>
                <p className="text-lg text-[#C4CCD4] leading-relaxed">{selectedDestination.description}</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white">Key Highlights</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedDestination.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-xl border border-[#1E242B] bg-[#141A1F] p-3 text-sm text-[#C4CCD4]"
                    >
                      <span className="text-[#22D3EE]">✓</span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#1E242B] bg-[#141A1F] p-4">
                  <p className="text-xs uppercase tracking-wider text-[#C4CCD4] mb-2">Best Time to Visit</p>
                  <p className="text-lg font-bold text-[#22D3EE]">{selectedDestination.bestTime}</p>
                </div>
                <div className="rounded-2xl border border-[#1E242B] bg-[#141A1F] p-4">
                  <p className="text-xs uppercase tracking-wider text-[#C4CCD4] mb-2">Available Tours</p>
                  <p className="text-lg font-bold text-[#22D3EE]">{selectedDestination.tours} Packages</p>
                </div>
              </div>

              <button className="w-full rounded-xl bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0B0C0E] shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:scale-105">
                View {selectedDestination.tours} Tours to {selectedDestination.name}
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#22D3EE] to-[#4DBBFF] opacity-20 blur-3xl"></div>
              <div className="relative overflow-hidden rounded-3xl border border-[#22D3EE]/30 shadow-2xl">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1E242B] bg-[#0F1A27] py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-[#C4CCD4]">© 2025 PakTourZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Destinations;
