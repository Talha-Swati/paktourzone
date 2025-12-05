import React, { useState } from "react";
import { Link } from "react-router-dom";

const tourPackages = [
  { id: 1, name: "Hunza Valley Explorer", category: "adventure", duration: "6 Days", price: "52,000", difficulty: "Moderate", image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800", rating: 4.9, reviews: 342 },
  { id: 2, name: "Skardu Frozen Lakes", category: "winter", duration: "5 Days", price: "45,000", difficulty: "Easy", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800", rating: 4.8, reviews: 289 },
  { id: 3, name: "Naran Weekend Escape", category: "weekend", duration: "3 Days", price: "28,000", difficulty: "Easy", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", rating: 4.7, reviews: 456 },
  { id: 4, name: "Fairy Meadows Trek", category: "adventure", duration: "4 Days", price: "38,000", difficulty: "Hard", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", rating: 5.0, reviews: 178 },
  { id: 5, name: "Swat Valley Cultural", category: "culture", duration: "5 Days", price: "42,000", difficulty: "Easy", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", rating: 4.6, reviews: 234 },
  { id: 6, name: "K2 Base Camp Trek", category: "adventure", duration: "12 Days", price: "125,000", difficulty: "Expert", image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800", rating: 5.0, reviews: 89 },
  { id: 7, name: "Neelum Valley Retreat", category: "weekend", duration: "4 Days", price: "35,000", difficulty: "Easy", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", rating: 4.8, reviews: 312 },
  { id: 8, name: "Chitral Winter Special", category: "winter", duration: "7 Days", price: "58,000", difficulty: "Moderate", image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800", rating: 4.7, reviews: 167 },
  { id: 9, name: "Kalash Festival Tour", category: "culture", duration: "5 Days", price: "48,000", difficulty: "Easy", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800", rating: 4.9, reviews: 201 },
];

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const filteredTours = tourPackages
    .filter(tour => selectedCategory === "all" || tour.category === selectedCategory)
    .filter(tour => selectedDifficulty === "all" || tour.difficulty === selectedDifficulty)
    .sort((a, b) => {
      if (sortBy === "price-low") return parseInt(a.price) - parseInt(b.price);
      if (sortBy === "price-high") return parseInt(b.price) - parseInt(a.price);
      if (sortBy === "rating") return b.rating - a.rating;
      return b.reviews - a.reviews; // popular
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-cyan-200 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                <span className="text-xl font-black text-white">PT</span>
              </div>
              <div>
                <h1 className="text-lg font-black text-slate-900">PakTourZone</h1>
                <p className="text-[9px] font-bold uppercase tracking-wider text-cyan-600">Tour Packages</p>
              </div>
            </div>
            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:shadow-cyan-500/50 hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-4">
              🏔️ Explore Northern Pakistan
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Find Your Perfect Adventure
            </h1>
            <p className="text-lg text-cyan-100 max-w-2xl mx-auto mb-8">
              Choose from {tourPackages.length}+ carefully curated tour packages across Pakistan's most stunning destinations
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 text-white">
                <p className="text-3xl font-bold">{tourPackages.length}+</p>
                <p className="text-xs uppercase tracking-wider text-cyan-100">Tour Packages</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 text-white">
                <p className="text-3xl font-bold">4.8★</p>
                <p className="text-xs uppercase tracking-wider text-cyan-100">Average Rating</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 text-white">
                <p className="text-3xl font-bold">2.5K+</p>
                <p className="text-xs uppercase tracking-wider text-cyan-100">Happy Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-[73px] z-40 border-b border-cyan-200 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-slate-700">Category:</span>
              {["all", "adventure", "winter", "weekend", "culture"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Difficulty & Sort */}
            <div className="flex items-center gap-3">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">All Levels</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Hard">Hard</option>
                <option value="Expert">Expert</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <p className="mt-3 text-sm text-slate-600">
            Showing <span className="font-bold text-cyan-600">{filteredTours.length}</span> tour{filteredTours.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredTours.map((tour, index) => (
              <article
                key={tour.id}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${tour.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute left-4 top-4 rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-600">
                    {tour.category}
                  </span>
                  
                  {/* Rating */}
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-lg bg-white/90 backdrop-blur-sm px-2 py-1">
                    <span className="text-sm font-bold text-amber-500">★</span>
                    <span className="text-xs font-bold text-slate-700">{tour.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {tour.name}
                  </h3>

                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
                    <span className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 font-semibold text-slate-700">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 font-semibold text-slate-700">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {tour.difficulty}
                    </span>
                  </div>

                  <div className="mb-4 text-sm text-slate-600">
                    <p className="flex items-center gap-1">
                      <span className="text-amber-500">★★★★★</span>
                      <span className="font-semibold text-slate-700">{tour.reviews}</span> reviews
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4">
                    <div>
                      <p className="text-xs text-slate-500">Starting from</p>
                      <p className="text-2xl font-black text-slate-900">
                        PKR {tour.price}
                      </p>
                    </div>
                    <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:shadow-cyan-500/50 hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="py-20 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
                <svg className="h-10 w-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">No tours found</h3>
              <p className="text-slate-600">Try adjusting your filters to see more results</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-cyan-200 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-black text-white">Can't Find What You're Looking For?</h2>
          <p className="mb-8 text-lg text-cyan-100">
            Let us create a custom tour package tailored to your preferences, budget, and schedule.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-cyan-600 shadow-xl transition-all hover:shadow-2xl hover:scale-105">
              Request Custom Tour
            </button>
            <button className="rounded-xl border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-cyan-600">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-slate-600">© 2025 PakTourZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Tours;
