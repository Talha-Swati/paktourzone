import React from "react";
import { Link } from "react-router-dom";

const milestones = [
  { year: "2015", title: "Company Founded", description: "Started our journey with a passion for showcasing Northern Pakistan's beauty" },
  { year: "2017", title: "1000+ Travelers", description: "Crossed our first major milestone of serving 1000 happy customers" },
  { year: "2019", title: "Award Winning", description: "Received Pakistan Tourism Excellence Award for best tour operator" },
  { year: "2021", title: "Digital Transformation", description: "Launched online booking platform and mobile app" },
  { year: "2023", title: "10,000+ Adventures", description: "Successfully organized over 10,000 memorable trips" },
  { year: "2025", title: "Going Global", description: "Expanding services to international tourists" },
];

const team = [
  { name: "Ahmed Khan", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400", bio: "15+ years of experience in tourism" },
  { name: "Sarah Ali", role: "Head of Operations", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400", bio: "Expert in travel logistics" },
  { name: "Hassan Malik", role: "Chief Tour Guide", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400", bio: "Mountain expert & local culture enthusiast" },
  { name: "Fatima Raza", role: "Customer Success Lead", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", bio: "Passionate about creating memorable experiences" },
];

const values = [
  { icon: "🛡️", title: "Safety First", description: "Your safety is our top priority. We maintain the highest safety standards on all our tours." },
  { icon: "🌟", title: "Excellence", description: "We strive for excellence in every aspect of our service, from planning to execution." },
  { icon: "🤝", title: "Trust & Transparency", description: "Honest pricing, clear communication, and reliable service you can count on." },
  { icon: "🌍", title: "Sustainability", description: "Committed to eco-friendly tourism that preserves nature for future generations." },
  { icon: "❤️", title: "Passion", description: "We love what we do and it shows in every tour we organize." },
  { icon: "🎯", title: "Customer First", description: "Your satisfaction drives everything we do. We go the extra mile for you." },
];

const About = () => {
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
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#22D3EE]">About Us</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#C4CCD4]">
              <Link to="/" className="transition-colors hover:text-[#22D3EE]">Home</Link>
              <Link to="/tours" className="transition-colors hover:text-[#22D3EE]">Tours</Link>
              <Link to="/about" className="text-[#22D3EE]">About</Link>
              <Link to="/contact" className="transition-colors hover:text-[#22D3EE]">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3A67]/30 via-transparent to-[#22D3EE]/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#22D3EE33,_transparent_50%)]"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-6">
            🏔️ Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Crafting <span className="bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] bg-clip-text text-transparent">Unforgettable</span> Journeys
          </h1>
          <p className="text-xl text-[#C4CCD4] max-w-3xl mx-auto mb-12 leading-relaxed">
            For over a decade, we've been helping adventurers discover the breathtaking beauty of Northern Pakistan. 
            Our mission is to create authentic, safe, and memorable experiences that last a lifetime.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="rounded-2xl border border-[#1E242B] bg-[#141A1F] backdrop-blur-sm p-6">
              <p className="text-4xl font-black text-[#22D3EE] mb-2">10+</p>
              <p className="text-sm uppercase tracking-wider text-[#C4CCD4]">Years Experience</p>
            </div>
            <div className="rounded-2xl border border-[#1E242B] bg-[#141A1F] backdrop-blur-sm p-6">
              <p className="text-4xl font-black text-[#22D3EE] mb-2">10K+</p>
              <p className="text-sm uppercase tracking-wider text-[#C4CCD4]">Happy Travelers</p>
            </div>
            <div className="rounded-2xl border border-[#1E242B] bg-[#141A1F] backdrop-blur-sm p-6">
              <p className="text-4xl font-black text-[#22D3EE] mb-2">4.9★</p>
              <p className="text-sm uppercase tracking-wider text-[#C4CCD4]">Average Rating</p>
            </div>
            <div className="rounded-2xl border border-[#1E242B] bg-[#141A1F] backdrop-blur-sm p-6">
              <p className="text-4xl font-black text-[#22D3EE] mb-2">50+</p>
              <p className="text-sm uppercase tracking-wider text-[#C4CCD4]">Destinations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#22D3EE] via-[#4DBBFF] to-[#22D3EE] opacity-30"></div>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl font-black text-white">A Decade of Excellence</h2>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                {/* Year Badge */}
                <div className="flex-1 text-right" style={{ textAlign: index % 2 === 0 ? "right" : "left" }}>
                  <div className={`inline-block ${index % 2 !== 0 ? "ml-0" : "ml-auto"}`}>
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#0B0C0E] bg-gradient-to-br from-[#22D3EE] to-[#4DBBFF] text-xl font-black text-[#0B0C0E] shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                      {milestone.year.slice(2)}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className="group rounded-2xl border border-[#1E242B] bg-[#141A1F] p-6 transition-all duration-300 hover:border-[#22D3EE] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                    <p className="text-sm font-bold uppercase tracking-wider text-[#22D3EE] mb-2">{milestone.year}</p>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#22D3EE] transition-colors">{milestone.title}</h3>
                    <p className="text-[#C4CCD4]">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-y border-[#1E242B] bg-gradient-to-b from-[#0F1A27] to-[#0B0C0E] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-4">
              Our Values
            </span>
            <h2 className="text-4xl font-black text-white mb-4">What We Stand For</h2>
            <p className="text-lg text-[#C4CCD4] max-w-2xl mx-auto">
              These core values guide everything we do and shape every experience we create.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#1E242B] bg-[#141A1F] p-8 transition-all duration-300 hover:border-[#4DBBFF] hover:shadow-[0_0_30px_rgba(77,187,255,0.2)] hover:-translate-y-2"
              >
                <div className="mb-4 text-5xl">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#22D3EE] transition-colors">{value.title}</h3>
                <p className="text-[#C4CCD4] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-4">
              Meet The Team
            </span>
            <h2 className="text-4xl font-black text-white mb-4">Passionate Professionals</h2>
            <p className="text-lg text-[#C4CCD4] max-w-2xl mx-auto">
              Our dedicated team of travel experts, guides, and support staff work tirelessly to make your adventures extraordinary.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-3xl">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm text-[#C4CCD4]">{member.bio}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#22D3EE] transition-colors">{member.name}</h3>
                <p className="text-sm uppercase tracking-wider text-[#22D3EE]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#1E242B] bg-gradient-to-r from-[#0A3A67] via-[#0B0C0E] to-[#0A3A67] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-black text-white">Ready to Explore with Us?</h2>
          <p className="mb-8 text-lg text-[#C4CCD4]">
            Join thousands of happy travelers who trusted us with their Northern Pakistan adventures.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0B0C0E] shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:scale-105">
              View Our Tours
            </button>
            <button className="rounded-xl border-2 border-[#22D3EE] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#22D3EE] transition-all hover:bg-[#22D3EE]/10">
              Contact Us
            </button>
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

export default About;
