import React, { useState } from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800", category: "mountains", title: "Hunza Valley", location: "Gilgit-Baltistan", height: "tall" },
  { id: 2, src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", category: "lakes", title: "Shangrila Lake", location: "Skardu" },
  { id: 3, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", category: "mountains", title: "Snow Peaks", location: "Naran", height: "tall" },
  { id: 4, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", category: "mountains", title: "Fairy Meadows", location: "Nanga Parbat" },
  { id: 5, src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", category: "culture", title: "Starry Nights", location: "Northern Areas" },
  { id: 6, src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800", category: "lakes", title: "Ratti Gali Lake", location: "Neelum Valley", height: "wide" },
  { id: 7, src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800", category: "culture", title: "Local Culture", location: "Chitral" },
  { id: 8, src: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800", category: "mountains", title: "K2 Base Camp", location: "Skardu", height: "tall" },
  { id: 9, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", category: "lakes", title: "Saiful Malook", location: "Naran Kaghan" },
  { id: 10, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", category: "mountains", title: "Passu Cones", location: "Hunza Valley", height: "wide" },
  { id: 11, src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", category: "culture", title: "Traditional Village", location: "Kalash Valley" },
  { id: 12, src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", category: "lakes", title: "Attabad Lake", location: "Hunza" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 shadow-lg">
                <span className="text-xl font-black text-white">PT</span>
              </div>
              <div>
                <h1 className="text-lg font-black text-slate-900">PakTourZone</h1>
                <p className="text-[9px] font-bold uppercase tracking-wider text-rose-600">Gallery</p>
              </div>
            </div>
            <button className="rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:shadow-rose-500/50 hover:scale-105">
              Upload Photo
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 mb-4 shadow-sm">
            📸 Visual Journey
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
            Picture Perfect <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Moments</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Explore stunning visuals captured across Pakistan's Northern landscapes. Each image tells a story of adventure, beauty, and wonder.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["all", "mountains", "lakes", "culture"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg scale-105"
                    : "bg-white text-slate-700 shadow-md hover:shadow-lg hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <p className="text-sm text-slate-600">
              Showing <span className="font-bold text-rose-600">{filteredImages.length}</span> photo{filteredImages.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setLightboxImage(image)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  image.height === "tall" ? "md:row-span-2" : 
                  image.height === "wide" ? "md:col-span-2" : ""
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                      <p className="flex items-center gap-1 text-sm text-rose-300">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {image.location}
                      </p>
                    </div>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-all hover:bg-white/30">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute left-4 top-4 rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </span>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="py-20 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
                <svg className="h-10 w-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">No images found</h3>
              <p className="text-slate-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-slate-200 bg-gradient-to-br from-slate-50 to-rose-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 text-3xl text-white shadow-lg">
                📷
              </div>
              <p className="text-3xl font-black text-slate-900">500+</p>
              <p className="text-sm text-slate-600">Photos</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 text-3xl text-white shadow-lg">
                🏔️
              </div>
              <p className="text-3xl font-black text-slate-900">15</p>
              <p className="text-sm text-slate-600">Destinations</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 text-3xl text-white shadow-lg">
                ⭐
              </div>
              <p className="text-3xl font-black text-slate-900">4.9</p>
              <p className="text-sm text-slate-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 text-3xl text-white shadow-lg">
                👥
              </div>
              <p className="text-3xl font-black text-slate-900">1K+</p>
              <p className="text-sm text-slate-600">Contributors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-black text-slate-900">Share Your Adventures</h2>
          <p className="mb-8 text-lg text-slate-600">
            Been on a tour with us? Share your photos and inspire other travelers to explore the beauty of Northern Pakistan.
          </p>
          <button className="rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105">
            Upload Your Photos
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-h-[80vh] w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{lightboxImage.title}</h3>
              <p className="flex items-center justify-center gap-2 text-rose-300">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {lightboxImage.location}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-slate-600">© 2025 PakTourZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
