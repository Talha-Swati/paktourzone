# PakTourZone.com 🏔️

A modern, SEO-optimized tour booking platform showcasing the breathtaking beauty of Northern Pakistan. Built with React 19, featuring dynamic routing, theme management, and comprehensive tour packages.

![PakTourZone](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1-38bdf8)
![SEO](https://img.shields.io/badge/SEO-Optimized-green)

## 🌟 Features

- **SEO-Optimized** with structured data (Schema.org) and meta tags
- **Dark/Light Theme** with system preference detection
- **Fully Responsive** mobile-first design
- **Code-Split Routes** for optimal performance
- **WCAG 2.1 Compliant** accessibility
- **Interactive Components** - modals, forms, animations

## 📄 Key Pages

1. **Home** - Hero section, featured tours, quick actions
2. **Destinations** - 6 major destinations with detail pages
3. **Tour Types** - Adventure, Family, Honeymoon, Corporate, Budget
4. **Services** - Hotel booking, transport, guides, visa, insurance
5. **Custom Tour Builder** - Interactive form with pricing
6. **Gallery** - Image showcase with lightbox
7. **Special Offers** - Seasonal discounts and deals

## 🚀 Tech Stack

- **Frontend:** React 19.2.0
- **Styling:** Tailwind CSS 4.1.17
- **Routing:** React Router DOM 7.9.6
- **SEO:** react-helmet-async 2.0.5
- **Icons:** Lucide React, React Icons
- **Build Tool:** Vite 7.2.4
- **Forms:** React Hook Form + Zod validation
- **Animations:** Framer Motion

## 📚 Documentation

For complete technical documentation, architecture details, SEO implementation, and deployment guide, see [TECHNICAL_DOCUMENTATION.md](TECHNICAL_DOCUMENTATION.md)

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/paktourzone.com.git

# Navigate to project directory
cd paktourzone.com

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Design Themes

### Dark Theme (Northern Noir)
- **Pages:** Home, Destinations, About
- **Colors:** `#0B0C0E`, `#22D3EE`, `#4DBBFF`, `#C4CCD4`
- **Style:** Professional, mysterious, premium

### Light Theme (Bright & Modern)
- **Pages:** Tours, Gallery, Contact
- **Colors:** Various pastels (cyan, rose, purple) on white
- **Style:** Clean, approachable, energetic

## 🌐 Live Demo

🔗 [Visit PakTourZone.com](https://paktourzone.vercel.app)

## 📂 Project Structure

```
paktourzone/
├── public/           # Static assets
├── src/
│   ├── Pages/       # Page components
│   │   ├── Home.jsx
│   │   ├── Tours.jsx
│   │   ├── Destinations.jsx
│   │   ├── Gallery.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── assets/      # Images and media
│   ├── App.jsx      # Main app with routes
│   ├── main.jsx     # Entry point
│   └── globals.css  # Global styles
├── .gitignore
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎯 Key Features by Page

- **Home:** Mobile menu, dual headers, gradient overlays
- **Tours:** Live filtering, sorting, dynamic counts
- **Destinations:** Horizontal scroll, spotlight selection
- **Gallery:** Lightbox modal, masonry layout
- **About:** Timeline, team hover effects
- **Contact:** Form validation, WhatsApp integration, FAQ accordion

## 🔧 Configuration

The project uses Tailwind CSS 4.1 with custom Northern Noir color palette. See `NORTHERN_NOIR_COLORS.md` for the complete color reference.

## 📱 Responsive Design

All pages are fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ for adventure seekers exploring Northern Pakistan

---

⭐ Star this repo if you find it helpful!
