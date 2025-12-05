# 📚 Pages Guide - PakTourZone

This project includes **6 professional pages** with different layouts, themes, and animations. Each page showcases unique design patterns and interactions.

## 🎨 Available Pages

### 1. **Home.jsx** 🌙 (Dark Theme)
**Theme:** Northern Noir - Dark & Elegant
- **Layout:** Traditional marketing homepage
- **Features:**
  - Dual navigation (top bar + main navbar)
  - Hero section with stats cards
  - Featured packages grid
  - Features/benefits section
  - Gallery preview
  - CTA strip
  - Comprehensive footer
- **Colors:** Dark blues, cyan accents
- **Best For:** Main landing page with complete information

---

### 2. **Tours.jsx** ☀️ (Light Theme)
**Theme:** Clean & Bright
- **Layout:** Grid-based catalog with advanced filtering
- **Features:**
  - Sticky header
  - Category filters (all, adventure, winter, weekend, culture)
  - Difficulty level dropdown
  - Sort options (popular, rating, price)
  - Responsive card grid
  - Animated hover effects
  - Empty state handling
- **Colors:** Cyan/blue gradients on white background
- **Best For:** Product/tour listing pages with filtering

---

### 3. **Destinations.jsx** 🌙 (Dark Theme)
**Theme:** Modern & Dynamic
- **Layout:** Horizontal scrolling showcase
- **Features:**
  - Hero with statistics
  - Horizontal scrolling cards with navigation buttons
  - Selected destination spotlight
  - Detail panel with highlights
  - Interactive card selection
  - Smooth scroll animations
- **Colors:** Dark backgrounds with cyan accents
- **Best For:** Showcasing locations/destinations with rich imagery

---

### 4. **Gallery.jsx** ☀️ (Light Theme)
**Theme:** Vibrant & Colorful
- **Layout:** Masonry grid with lightbox
- **Features:**
  - Category filtering
  - Responsive masonry layout (varied card heights/widths)
  - Lightbox modal for full-size images
  - Hover overlay with details
  - Stats section
  - Image metadata (title, location)
- **Colors:** Rose/orange gradients
- **Best For:** Photo galleries, portfolios

---

### 5. **About.jsx** 🌙 (Dark Theme)
**Theme:** Professional & Storytelling
- **Layout:** Timeline-based narrative
- **Features:**
  - Hero with company stats
  - Vertical timeline with milestones
  - Values/principles grid
  - Team member cards with bio overlay
  - Alternating timeline layout
  - Hover animations on team photos
- **Colors:** Dark slate with cyan highlights
- **Best For:** Company history, team pages, mission/values

---

### 6. **Contact.jsx** ☀️ (Light Theme)
**Theme:** Approachable & Functional
- **Layout:** Split-screen design
- **Features:**
  - Full contact form with validation
  - Contact information cards (address, phone, email, WhatsApp)
  - Social media links
  - FAQ accordion section
  - Form state management
  - Multiple contact methods
- **Colors:** Purple/pink gradients
- **Best For:** Contact pages, support pages, inquiry forms

---

## 🚀 How to Switch Pages

Open `src/App.jsx` and **uncomment** the page you want to view:

```jsx
function App() {
  return <Home />;           // 🌙 Currently active
  // return <Tours />;       // ☀️ Uncomment to view
  // return <Destinations />; // 🌙 Uncomment to view
  // return <Gallery />;     // ☀️ Uncomment to view
  // return <About />;       // 🌙 Uncomment to view
  // return <Contact />;     // ☀️ Uncomment to view
}
```

**Only ONE page should be uncommented at a time.**

---

## 🎯 Page Characteristics Summary

| Page | Theme | Style | Key Feature | Use Case |
|------|-------|-------|-------------|----------|
| Home | 🌙 Dark | Comprehensive | Full homepage | Landing page |
| Tours | ☀️ Light | Grid + Filters | Advanced filtering | Product catalog |
| Destinations | 🌙 Dark | Horizontal Scroll | Interactive cards | Location showcase |
| Gallery | ☀️ Light | Masonry + Lightbox | Image focus | Photo gallery |
| About | 🌙 Dark | Timeline | Story narrative | Company info |
| Contact | ☀️ Light | Form + Info | Contact methods | Get in touch |

---

## 🎨 Design Themes

### Dark Theme Pages (Northern Noir)
- **Colors:** `#0B0C0E`, `#22D3EE`, `#4DBBFF`, `#C4CCD4`
- **Feel:** Professional, mysterious, premium
- **Used in:** Home, Destinations, About

### Light Theme Pages (Bright & Modern)
- **Colors:** Various pastels (cyan, rose, purple) on white
- **Feel:** Clean, approachable, energetic
- **Used in:** Tours, Gallery, Contact

---

## 🔧 Customization Tips

1. **Change Colors:** Update gradient colors in className attributes
2. **Add Content:** Modify the data arrays at the top of each file
3. **Animations:** Adjust `transition-all`, `duration-*`, and `hover:` classes
4. **Layout:** Change grid columns with `grid-cols-*` classes
5. **Responsive:** Modify `md:` and `lg:` breakpoint classes

---

## 📱 All Pages Are Responsive

Every page includes:
- Mobile-first design
- Responsive breakpoints (sm, md, lg, xl)
- Touch-friendly interactions
- Flexible layouts

---

## ✨ Special Features by Page

- **Home:** Mobile menu, dual headers, gradient overlays
- **Tours:** Live filtering, sorting, dynamic counts
- **Destinations:** Horizontal scroll, spotlight selection
- **Gallery:** Lightbox modal, masonry layout, varied sizes
- **About:** Alternating timeline, team hover effects
- **Contact:** Form handling, WhatsApp integration, FAQ accordion

---

**Enjoy exploring the designs! 🚀**
