import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Tours", path: "/tours", hasDropdown: true },
  { name: "Destinations", path: "/destinations" },
  { name: "Gallery", path: "/gallery" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F2F6F9]">
      {/* ===== TOP BAR ===== */}
      <div className="border-b border-[rgba(30,36,43,0.5)] bg-[rgba(11,12,14,0.95)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6 text-[#C4CCD4]">
            <a href="tel:+923001234567" className="flex items-center gap-2 transition-colors hover:text-[#22D3EE]">
              <span>📞</span>
              <span>+92 300 1234567</span>
            </a>
            <a href="mailto:info@paktourzone.com" className="hidden md:flex items-center gap-2 transition-colors hover:text-[#22D3EE]">
              <span>✉️</span>
              <span>info@paktourzone.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>
          </div>
        </div>
      </div>
      {/* ===== MAIN NAVBAR ===== */}
      <header className="sticky top-0 z-50 border-b border-[rgba(30,36,43,0.5)] bg-[rgba(11,12,14,0.95)] backdrop-blur-xl shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#22D3EE] to-[#0A3A67] opacity-20 blur-xl"></div>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#22D3EE] to-[#0A3A67] shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <span className="text-2xl font-black text-[#F2F6F9]">PT</span>
              </div>
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-black tracking-tight text-[#F2F6F9]">
                PakTourZone
              </h1>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#22D3EE]">
                Northern Pakistan Adventures
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="group relative px-4 py-2 text-sm font-semibold text-[#C4CCD4] transition-all duration-300 hover:text-[#F2F6F9]"
              >
                {item.name}
                {index === 0 && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]" />
                )}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden h-11 w-11 items-center justify-center rounded-xl border border-[rgba(77,187,255,0.3)] bg-[rgba(20,26,31,0.6)] backdrop-blur-sm text-[#4DBBFF] transition-all duration-300 hover:border-[#22D3EE] hover:bg-[rgba(34,211,238,0.1)] hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] lg:flex">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="hidden lg:flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#0B0C0E] shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] hover:scale-105">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Now
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden h-11 w-11 items-center justify-center rounded-xl border border-[rgba(77,187,255,0.3)] bg-[rgba(20,26,31,0.6)] backdrop-blur-sm text-[#4DBBFF]"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-[rgba(30,36,43,0.5)] bg-[rgba(11,12,14,0.98)] backdrop-blur-xl lg:hidden">
            <nav className="mx-auto max-w-7xl px-6 py-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block py-3 text-sm font-semibold text-[#C4CCD4] transition-colors hover:text-[#22D3EE]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#0B0C0E]">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section className="relative min-h-[700px] overflow-hidden border-b border-[#1E242B]">
        {/* Background image + gradient overlay */}
        <div className="absolute inset-0">
          {/* Mountain background image */}
          <div 
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')",
            }}
          />
          {/* Dark gradient overlay - Night Sky feel */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(11,12,14,0.7)] via-[rgba(10,58,103,0.4)] to-[#0B0C0E]" />
          {/* Vignette shadow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#0B0C0E_100%)]" />
          {/* Light fog overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,246,249,0.1),_transparent_60%)]" />
          {/* Side cyan glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(34,211,238,0.08)_0%,_transparent_50%)]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-24 pt-20 md:flex-row md:items-center md:pb-32 md:pt-28">
          {/* Left content */}
          <div className="max-w-xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-aurora/40 bg-carbon/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-aurora">
              North Hilly Adventures
              <span className="h-1 w-1 rounded-full bg-aurora" />
              <span className="text-moon">Skardu • Hunza • Naran</span>
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Discover the{" "}
              <span className="bg-gradient-to-r from-ice via-aurora to-glacier bg-clip-text text-transparent">
                Dark Sky
              </span>{" "}
              of the North.
            </h1>

            <p className="max-w-md text-sm text-moon md:text-base">
              Experience starry nights in Skardu, frozen lakes in Naran and
              snow-dusted peaks in Hunza. Curated trips with comfy stays,
              local guides and unforgettable views.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-aurora px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-carbon shadow-glowCyan transition hover:bg-auroraSoft hover:shadow-glowCyan">
                Book Winter Trip
              </button>
              <button className="rounded-full border border-smokeCharcoal px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-moon transition hover:border-ice hover:text-ice">
                Explore Packages
              </button>
              <div className="flex items-center gap-3 text-xs text-moon">
                <div className="flex -space-x-2">
                  <div className="h-7 w-7 rounded-full border border-carbon bg-[url('/images/avatar-1.jpg')] bg-cover bg-center" />
                  <div className="h-7 w-7 rounded-full border border-carbon bg-[url('/images/avatar-2.jpg')] bg-cover bg-center" />
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-carbon bg-deepSlate text-[10px] text-moon">
                    +18
                  </div>
                </div>
                <span>“Best North tour of my life.”</span>
              </div>
            </div>
          </div>

          {/* Right content – Stats cards */}
          <div className="mt-10 flex-1 md:mt-0">
            <div className="grid gap-5 md:grid-cols-2">
              <HeroStat
                label="Customer Rating"
                value="4.9★"
                sub="5,000+ Reviews"
                icon="⭐"
              />
              <HeroStat
                label="Tour Destinations"
                value="50+"
                sub="Northern Valleys"
                icon="🏔️"
              />
              <HeroStat
                label="Experience"
                value="10 Years"
                sub="Premium Service"
                icon="🎖️"
              />
              <HeroStat
                label="Success Rate"
                value="100%"
                sub="Safe Adventures"
                icon="✓"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PACKAGES SECTION ===== */}
      <section className="border-b border-[#1E242B] bg-gradient-to-b from-[#0F1A27] to-[#0B0C0E] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-block rounded-full bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.2)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-4">
                Popular Tours
              </span>
              <h2 className="text-4xl font-bold md:text-5xl text-[#F2F6F9]">
                Featured Winter Packages
              </h2>
              <p className="mt-3 max-w-2xl text-base text-[#C4CCD4]">
                Handpicked experiences across Pakistan's Northern areas with premium transport, 
                comfortable stays, and expert local guides.
              </p>
            </div>
            <button className="text-sm font-bold uppercase tracking-wider text-[#4DBBFF] transition-all hover:text-[#22D3EE] hover:gap-2 flex items-center gap-1">
              View All Trips
              <span className="transition-transform inline-block">→</span>
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PackageCard
              tag="MOST POPULAR"
              title="Skardu Frozen Lake Escape"
              nights="5 Days • 4 Nights"
              difficulty="Easy–Moderate"
              price="PKR 45,000"
              image="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
            />
            <PackageCard
              tag="ADVENTURE"
              title="Hunza Valley Explorer"
              nights="6 Days • 5 Nights"
              difficulty="Moderate"
              price="PKR 52,000"
              image="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600"
            />
            <PackageCard
              tag="WEEKEND"
              title="Naran Snowfall Weekend"
              nights="3 Days • 2 Nights"
              difficulty="Easy"
              price="PKR 28,000"
              image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"
            />
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="border-b border-[#1E242B] bg-[#0B0C0E] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block rounded-full bg-[rgba(77,187,255,0.1)] border border-[rgba(77,187,255,0.2)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#4DBBFF] mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold md:text-5xl text-[#F2F6F9]">
              Premium Travel <span className="text-[#22D3EE]">Experience</span>
            </h2>
            <p className="mt-4 text-base text-[#C4CCD4]">
              Local experts, safe transport, and cozy stays — making your Northern Pakistan journey unforgettable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="🚙"
              title="4x4 Premium Transport"
              description="Comfortable jeeps and buses with experienced drivers for safe mountain travel."
            />
            <FeatureCard
              icon="🏔️"
              title="Expert Local Guides"
              description="Professional guides with deep knowledge of Northern Pakistan's culture and terrain."
            />
            <FeatureCard
              icon="🏨"
              title="Cozy Accommodations"
              description="Handpicked guest houses and hotels with bonfire nights and local cuisine."
            />
            <FeatureCard
              icon="📸"
              title="Photography Friendly"
              description="Drone-friendly stops and scenic viewpoints for capturing perfect moments."
            />
            <FeatureCard
              icon="🛡️"
              title="100% Safety First"
              description="Comprehensive insurance and safety measures for worry-free adventures."
            />
            <FeatureCard
              icon="💎"
              title="Best Value Pricing"
              description="Competitive rates with no hidden costs — transparent pricing always."
            />
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="border-b border-[#1E242B] bg-gradient-to-b from-[#0F1A27] to-[#0B0C0E] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <span className="inline-block rounded-full bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.2)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-4">
                Gallery
              </span>
              <h2 className="text-4xl font-bold md:text-5xl text-[#F2F6F9]">
                Glimpses from the North
              </h2>
            </div>
            <button className="text-sm font-bold uppercase tracking-wider text-[#4DBBFF] transition-all hover:text-[#22D3EE]">
              View Gallery →
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <GalleryTile label="Starry Skies" image="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500" />
            <GalleryTile label="Frozen Lakes" image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500" />
            <GalleryTile label="Snowy Peaks" image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500" />
            <GalleryTile label="Valley Sunrise" image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500" />
          </div>
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section className="bg-[radial-gradient(circle_at_top,_#22D3EE33,_transparent_60%),_#0B0C0E] py-14">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ice">
            Ready For Your Next Escape?
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Tell us your travel dates and we’ll craft a custom Northern
            itinerary for you.
          </h2>
          <p className="mt-3 text-sm text-moon">
            Solo, couple, family or group — we handle stays, transport and
            local permits while you just enjoy the mountains.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-full bg-aurora px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-carbon shadow-glowCyan transition hover:bg-auroraSoft hover:shadow-glowCyan">
              Plan My Trip
            </button>
            <button className="rounded-full border border-smokeCharcoal px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-moon transition hover:border-ice hover:text-ice">
              WhatsApp Our Team
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-[rgba(30,36,43,0.5)] bg-gradient-to-b from-[#0B0C0E] to-[#0F1A27]">
        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#22D3EE] to-[#0A3A67] opacity-20 blur-lg"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#22D3EE] to-[#0A3A67]">
                    <span className="text-xl font-black text-[#F2F6F9]">PT</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#F2F6F9]">PakTourZone</h3>
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#22D3EE]">Northern Adventures</p>
                </div>
              </div>
              <p className="text-sm text-[#C4CCD4] leading-relaxed mb-6">
                Your trusted partner for exploring Pakistan's breathtaking Northern areas. Premium tours, expert guides, unforgettable experiences.
              </p>
              <div className="flex gap-3">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(77,187,255,0.1)] border border-[rgba(77,187,255,0.2)] text-[#4DBBFF] transition-all hover:bg-[rgba(34,211,238,0.2)] hover:border-[#22D3EE] hover:text-[#22D3EE]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(77,187,255,0.1)] border border-[rgba(77,187,255,0.2)] text-[#4DBBFF] transition-all hover:bg-[rgba(34,211,238,0.2)] hover:border-[#22D3EE] hover:text-[#22D3EE]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(77,187,255,0.1)] border border-[rgba(77,187,255,0.2)] text-[#4DBBFF] transition-all hover:bg-[rgba(34,211,238,0.2)] hover:border-[#22D3EE] hover:text-[#22D3EE]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-[#F2F6F9]">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} className="text-sm text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tours */}
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-[#F2F6F9]">Popular Tours</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">Hunza Valley Tour</a></li>
                <li><a href="#" className="text-sm text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">Skardu Adventure</a></li>
                <li><a href="#" className="text-sm text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">Swat Valley Trip</a></li>
                <li><a href="#" className="text-sm text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">Naran Kaghan</a></li>
                <li><a href="#" className="text-sm text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">Fairy Meadows</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-[#F2F6F9]">Get in Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#22D3EE]">📍</span>
                  <span className="text-sm text-[#C4CCD4]">Blue Area, Islamabad, Pakistan</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#22D3EE]">📞</span>
                  <a href="tel:+923001234567" className="text-sm text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">+92 300 1234567</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#22D3EE]">✉️</span>
                  <a href="mailto:info@paktourzone.com" className="text-sm text-[#C4CCD4] transition-colors hover:text-[#22D3EE]">info@paktourzone.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#22D3EE]">🕐</span>
                  <span className="text-sm text-[#C4CCD4]">Mon - Sat: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(30,36,43,0.5)] bg-[rgba(11,12,14,0.8)]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-[#C4CCD4]">
            <p>© {new Date().getFullYear()} PakTourZone. All rights reserved. | Designed with ❤️ for adventure seekers</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-[#22D3EE]">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-[#22D3EE]">Terms & Conditions</a>
              <a href="#" className="transition-colors hover:text-[#22D3EE]">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const HeroStat = ({ label, value, sub, icon }) => (
  <div className="group rounded-2xl border border-[rgba(30,36,43,0.6)] bg-[rgba(20,26,31,0.4)] backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(77,187,255,0.6)] hover:bg-[rgba(20,26,31,0.6)] hover:shadow-[0_0_18px_rgba(34,211,238,0.4)]">
    <div className="mb-3 text-3xl">{icon}</div>
    <p className="text-xs font-bold uppercase tracking-wider text-[#C4CCD4]">
      {label}
    </p>
    <p className="mt-2 text-3xl font-bold text-[#F2F6F9]">{value}</p>
    <p className="mt-1 text-sm text-[#C4CCD4]">{sub}</p>
  </div>
);

const PackageCard = ({ tag, title, nights, difficulty, price, image }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#1E242B] bg-[#141A1F] transition-all duration-300 hover:-translate-y-2 hover:border-[#4DBBFF] hover:shadow-[0_0_18px_rgba(34,211,238,0.4)]">
    <div
      className="relative h-56 w-full overflow-hidden"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[rgba(11,12,14,0.4)] to-transparent" />
      <span className="absolute left-4 top-4 rounded-lg bg-[rgba(34,211,238,0.9)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0B0C0E] backdrop-blur-sm">
        {tag}
      </span>
    </div>
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h3 className="text-xl font-bold text-[#F2F6F9]">{title}</h3>
      <div className="flex flex-wrap items-center gap-3 text-xs text-[#C4CCD4]">
        <span className="rounded-lg bg-[rgba(77,187,255,0.1)] border border-[rgba(77,187,255,0.2)] px-3 py-1">
          {nights}
        </span>
        <span className="rounded-lg border border-[#1E242B] px-3 py-1">
          {difficulty}
        </span>
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-[#1E242B] pt-4">
        <div>
          <p className="text-xs text-[#C4CCD4]">Starting from</p>
          <p className="text-xl font-bold text-[#22D3EE]">{price}</p>
        </div>
        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#4DBBFF] transition-all group-hover:text-[#22D3EE] group-hover:gap-3">
          Details
          <span>→</span>
        </button>
      </div>
    </div>
  </article>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="group rounded-2xl border border-[#1E242B] bg-[#141A1F] p-6 transition-all duration-300 hover:border-[#4DBBFF] hover:shadow-[0_0_12px_rgba(77,187,255,0.3)]">
    <div className="mb-4 text-4xl">{icon}</div>
    <h3 className="mb-2 text-lg font-bold text-[#F2F6F9]">{title}</h3>
    <p className="text-sm leading-relaxed text-[#C4CCD4]">{description}</p>
  </div>
);

const GalleryTile = ({ label, image }) => (
  <div className="group relative h-64 overflow-hidden rounded-2xl border border-[#1E242B] transition-all duration-300 hover:border-[#4DBBFF] hover:shadow-[0_0_12px_rgba(34,211,238,0.3)]">
    <div
      className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url('${image}')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[rgba(11,12,14,0.3)] to-transparent" />
    <div className="absolute bottom-5 left-5">
      <p className="text-base font-bold text-[#F2F6F9]">{label}</p>
    </div>
  </div>
);

export default Home;
