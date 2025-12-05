import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-purple-200 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                <span className="text-xl font-black text-white">PT</span>
              </div>
              <div>
                <h1 className="text-lg font-black text-slate-900">PakTourZone</h1>
                <p className="text-[9px] font-bold uppercase tracking-wider text-purple-600">Contact Us</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
              <Link to="/" className="transition-colors hover:text-purple-600">Home</Link>
              <Link to="/tours" className="transition-colors hover:text-purple-600">Tours</Link>
              <Link to="/about" className="transition-colors hover:text-purple-600">About</Link>
              <Link to="/contact" className="text-purple-600">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2E4NTVmNyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-600 mb-4 shadow-sm">
            💬 Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
            Let's Plan Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Adventure</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions about our tours? Want to customize your trip? Our team is here to help you create the perfect Northern Pakistan experience.
          </p>
        </div>
      </section>

      {/* Main Content - Split Layout */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Side - Contact Form */}
            <div className="rounded-3xl bg-white p-8 md:p-12 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 mb-3">Send Us a Message</h2>
                <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-purple-500/20"
                      placeholder="Ahmed Khan"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-purple-500/20"
                      placeholder="ahmed@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-purple-500/20"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label htmlFor="destination" className="mb-2 block text-sm font-bold text-slate-700">
                    Interested Destination
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-purple-500/20"
                  >
                    <option value="">Select a destination</option>
                    <option value="hunza">Hunza Valley</option>
                    <option value="skardu">Skardu</option>
                    <option value="naran">Naran Kaghan</option>
                    <option value="swat">Swat Valley</option>
                    <option value="fairy">Fairy Meadows</option>
                    <option value="chitral">Chitral</option>
                    <option value="neelum">Neelum Valley</option>
                    <option value="custom">Custom Trip</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-purple-500/20 resize-none"
                    placeholder="Tell us about your travel plans, group size, preferred dates, and any special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </button>
              </form>
            </div>

            {/* Right Side - Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl text-white shadow-lg">
                      📍
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900">Visit Our Office</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Blue Area, F-7 Markaz<br />
                        Islamabad, Pakistan<br />
                        44000
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl text-white shadow-lg">
                      📞
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900">Call Us</h3>
                      <p className="text-slate-600">
                        <a href="tel:+923001234567" className="block transition-colors hover:text-purple-600">+92 300 1234567</a>
                        <a href="tel:+923211234567" className="block transition-colors hover:text-purple-600">+92 321 1234567</a>
                      </p>
                      <p className="mt-2 text-sm text-slate-500">Mon - Sat: 9AM - 6PM</p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl text-white shadow-lg">
                      ✉️
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900">Email Us</h3>
                      <p className="text-slate-600">
                        <a href="mailto:info@paktourzone.com" className="block transition-colors hover:text-purple-600">info@paktourzone.com</a>
                        <a href="mailto:bookings@paktourzone.com" className="block transition-colors hover:text-purple-600">bookings@paktourzone.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl text-white shadow-lg">
                      💬
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900">WhatsApp</h3>
                      <p className="text-slate-600 mb-3">Quick responses via WhatsApp</p>
                      <a
                        href="https://wa.me/923001234567"
                        className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-green-600"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        Chat Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-lg font-bold text-slate-900">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white transition-all hover:scale-110 hover:shadow-lg">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white transition-all hover:scale-110 hover:shadow-lg">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 text-white transition-all hover:scale-110 hover:shadow-lg">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-500 text-white transition-all hover:scale-110 hover:shadow-lg">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-purple-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-600 mb-4">
              Quick Answers
            </span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "How far in advance should I book?", a: "We recommend booking at least 2-3 weeks in advance, especially for peak season (May-September)." },
              { q: "What's included in the tour packages?", a: "Most packages include transportation, accommodation, meals, and guided tours. Check individual package details for specifics." },
              { q: "Do you offer custom itineraries?", a: "Yes! We specialize in creating custom tours based on your preferences, budget, and schedule." },
              { q: "What about travel insurance?", a: "We strongly recommend travel insurance. We can help you arrange comprehensive coverage." },
            ].map((faq, index) => (
              <details key={index} className="group rounded-2xl bg-slate-50 p-6 transition-all hover:bg-slate-100">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-bold text-slate-900">
                  {faq.q}
                  <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-slate-600">© 2025 PakTourZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
