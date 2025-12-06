# 🗺️ Architecture Diagram - Dynamic Destination System

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                            │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │   Home   │  │Adventure │  │Destinations│ │  Direct  │       │
│  │   Page   │  │  Tours   │  │  Dropdown  │  │   URL    │       │
│  └─────┬────┘  └─────┬────┘  └─────┬──────┘ └─────┬────┘       │
│        │             │              │              │            │
│        └─────────────┴──────────────┴──────────────┘            │
│                              │                                   │
│                              ▼                                   │
│                    /destination/:slug                            │
│                                                                  │
└──────────────────────────────┬───────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ROUTING LAYER (App.jsx)                       │
│                                                                  │
│  Route: /destination/:slug                                       │
│  Component: <DestinationDetail />                                │
│                                                                  │
└──────────────────────────────┬───────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│              DestinationDetail.jsx (Component)                   │
│                                                                  │
│  1. Extract slug from URL params                                 │
│  2. Call getDestinationBySlug(slug)                             │
│  3. Render page with fetched data                               │
│                                                                  │
└──────────────────────────────┬───────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│              DATA LAYER (destinationsData.js)                    │
│                                                                  │
│  {                                                               │
│    'k2-base-camp': { /* full data */ },                         │
│    'hunza-valley': { /* full data */ },                         │
│    'swat-valley':  { /* full data */ },                         │
│    // Add more destinations here                                │
│  }                                                               │
│                                                                  │
│  Helper Functions:                                               │
│  - getDestinationBySlug(slug)                                   │
│  - getDestinationsByCategory(category)                          │
│  - getAllDestinations()                                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram

```
USER ACTION                    DATA PROCESSING                 DISPLAY
───────────                    ───────────────                 ───────

Click "View Details"           Extract :slug                   
on Swat tour card    ───────►  from URL                        
                               (swat-valley)                   
                                      │                         
                                      ▼                         
                               getDestinationBySlug(           
                                 'swat-valley'                 
                               )                               
                                      │                         
                                      ▼                         
                               Return data object:             
                               {                               
                                 name: "Swat Valley Trek"      
                                 duration: "6 Days"           
                                 pricing: {                   
                                   basic: {...}               
                                   premium: {...}  ────────►  Render 3-tier
                                   ultimate: {...}             pricing table
                                 }                             
                                 itinerary: [...]  ─────────►  Render day-by-day
                                 highlights: [...]  ────────►  Render grid
                                 // ... more data              
                               }                               
                                      │                         
                                      ▼                         
                               Pass to Component               
                                      │                         
                                      ▼                         
                                                               Complete page
                                                               with all sections
```

---

## Component Hierarchy

```
<DestinationDetail>
│
├── <TopBar>                    (Global navigation bar)
│   ├── Contact info
│   ├── Language selector
│   └── Theme selector
│
├── <Navbar>                    (Main navigation menu)
│   ├── Home
│   ├── Tours dropdown
│   └── Destinations dropdown
│
├── Hero Section
│   ├── Image Gallery
│   │   ├── Auto-rotating slider
│   │   ├── ← Previous button
│   │   ├── Next button →
│   │   └── Image indicators (dots)
│   │
│   └── Hero Overlay
│       ├── Difficulty badge
│       ├── Destination name
│       ├── Meta info (location, duration, rating)
│       └── Quick action buttons
│
├── Main Content Area (Grid: 2 columns on desktop)
│   │
│   ├── Left Column (lg:col-span-2)
│   │   │
│   │   ├── Overview Section
│   │   │   └── Full description
│   │   │
│   │   ├── Highlights Section
│   │   │   └── Grid of highlights
│   │   │
│   │   ├── Itinerary Section
│   │   │   ├── Toggle button (Show All/Show Less)
│   │   │   └── Day cards (collapsible)
│   │   │
│   │   ├── Pricing Section ⭐ KEY FEATURE
│   │   │   │
│   │   │   ├── Mobile View
│   │   │   │   ├── Package selector dropdown
│   │   │   │   └── Single package display
│   │   │   │
│   │   │   └── Desktop View
│   │   │       ├── Basic Package Card
│   │   │       │   ├── $X,XXX
│   │   │       │   ├── Feature list
│   │   │       │   └── [Book Now] button
│   │   │       │
│   │   │       ├── Premium Package Card ⭐
│   │   │       │   ├── "Most Popular" badge
│   │   │       │   ├── $X,XXX
│   │   │       │   ├── Enhanced feature list
│   │   │       │   └── [Book Now] button
│   │   │       │
│   │   │       └── Ultimate Package Card
│   │   │           ├── $X,XXX
│   │   │           ├── Luxury feature list
│   │   │           └── [Book Now] button
│   │   │
│   │   ├── Inclusions/Exclusions Section
│   │   │   ├── What's Included (green)
│   │   │   └── What's NOT Included (red)
│   │   │
│   │   └── What to Bring Section
│   │       └── Checklist grid
│   │
│   └── Right Column (lg:col-span-1)
│       │
│       ├── Quick Info Card (sticky)
│       │   ├── Best time to visit
│       │   └── Fitness level
│       │
│       ├── Contact Card
│       │   ├── "Need Help Planning?"
│       │   └── [Contact Us] button
│       │
│       └── Share Card
│           └── Social media buttons
│
├── Call to Action Section
│   ├── Headline
│   ├── Description
│   ├── [Book This Tour] button
│   └── [View More Tours] button
│
└── Footer
    ├── Brand column
    ├── Quick Links column
    ├── Popular Destinations column
    └── Contact Info column
```

---

## Pricing Component Structure

```
<Pricing Section id="pricing">
│
├── Section Title
│   "Package Pricing"
│
├── Mobile View (lg:hidden)
│   │
│   ├── <select> Dropdown
│   │   ├── <option> Basic - $1,499
│   │   ├── <option> Premium - $1,899 (Popular)
│   │   └── <option> Ultimate - $2,699
│   │
│   └── Selected Package Card
│       ├── Package title
│       ├── Price display
│       ├── Features list (map)
│       │   └── ✓ Feature items
│       └── [Book Now] button
│
└── Desktop View (hidden lg:grid grid-cols-3)
    │
    ├── Basic Package Card
    │   │
    │   ├── Header
    │   │   └── "Basic Package"
    │   │
    │   ├── Price Section
    │   │   ├── $1,499
    │   │   └── "per person"
    │   │
    │   ├── Features List
    │   │   ├── ✓ Standard hotels
    │   │   ├── ✓ Group tour
    │   │   ├── ✓ Shared transport
    │   │   ├── ✓ Standard meals
    │   │   ├── ✓ Group guide
    │   │   └── ✓ Basic rafting
    │   │
    │   └── [Book Now] button
    │       (gray background)
    │
    ├── Premium Package Card ⭐
    │   │
    │   ├── Popular Badge
    │   │   "Most Popular"
    │   │   (absolute top-right)
    │   │
    │   ├── Header
    │   │   └── "Premium Package"
    │   │
    │   ├── Price Section
    │   │   ├── $1,899
    │   │   └── "per person"
    │   │
    │   ├── Features List
    │   │   ├── ✓ Comfortable hotels (3-4★)
    │   │   ├── ✓ Smaller group (4-6)
    │   │   ├── ✓ Comfortable SUV
    │   │   ├── ✓ Better meal variety
    │   │   ├── ✓ Dedicated guide
    │   │   ├── ✓ Advanced rafting + photos
    │   │   ├── ✓ Horse riding included
    │   │   └── ✓ Shopping guide
    │   │
    │   └── [Book Now] button
    │       (cyan background)
    │       (border: 2px cyan)
    │       (shadow: cyan glow)
    │
    └── Ultimate Package Card
        │
        ├── Header
        │   └── "Ultimate Package"
        │
        ├── Price Section
        │   ├── $2,699
        │   └── "per person"
        │
        ├── Features List
        │   ├── ✓ Luxury resorts
        │   ├── ✓ Private tour (1-4)
        │   ├── ✓ Private 4x4
        │   ├── ✓ Gourmet meals
        │   ├── ✓ Personal guide + photographer
        │   ├── ✓ Ski equipment included
        │   ├── ✓ Private rafting
        │   ├── ✓ Helicopter tour
        │   ├── ✓ Cultural dinner
        │   ├── ✓ Gemstone expert
        │   └── ✓ Spa access
        │
        └── [Book Now] button
            (gray background)
```

---

## State Management Flow

```
Component State:
┌─────────────────────────────────────────────┐
│ const [destination, setDestination]          │
│ const [selectedPackage, setSelectedPackage]  │
│ const [currentImageIndex, setCurrentImageIndex]│
│ const [showFullItinerary, setShowFullItinerary]│
│ const [mobileMenuOpen, setMobileMenuOpen]    │
│ const [languageDropdownOpen, ...]           │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│ useEffect (on mount)                         │
│  └──► Load destination from URL slug         │
│       └──► setDestination(data)              │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│ useEffect (image rotation)                   │
│  └──► setInterval(5000ms)                    │
│       └──► setCurrentImageIndex(next)        │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│ User Interactions                            │
│  ├──► Click package dropdown (mobile)        │
│  │     └──► setSelectedPackage(value)        │
│  │                                           │
│  ├──► Click "Show All Days"                  │
│  │     └──► setShowFullItinerary(true)       │
│  │                                           │
│  ├──► Click image arrows                     │
│  │     └──► setCurrentImageIndex(±1)         │
│  │                                           │
│  └──► Click image indicators                 │
│        └──► setCurrentImageIndex(index)      │
└─────────────────────────────────────────────┘
```

---

## Responsive Behavior

```
Screen Size          Layout Changes
───────────          ──────────────

Mobile              │ Single column
(< 768px)           │ Package dropdown selector
                    │ Full-width hero
                    │ Stacked sections
                    │ Sidebar below content
                    │ Hamburger menu
                    │
                    ▼
                    ┌─────────────┐
                    │   Content   │
                    │   Content   │
                    │   Content   │
                    │   Sidebar   │
                    └─────────────┘

Tablet              │ 2-column pricing
(768px - 1024px)    │ Some side-by-side sections
                    │ Optimized spacing
                    │
                    ▼
                    ┌──────┬──────┐
                    │ Cont │ Cont │
                    ├──────┴──────┤
                    │   Sidebar   │
                    └─────────────┘

Desktop             │ 3-column pricing grid
(> 1024px)          │ Main + Sidebar layout
                    │ Sticky sidebar
                    │ Full navigation
                    │
                    ▼
                    ┌────────┬────┐
                    │        │Side│
                    │ Content│bar │
                    │        │    │
                    └────────┴────┘
```

---

## Theme Integration

```
ThemeContext
     │
     ├──► isDarkMode (boolean)
     │
     ▼
Apply to all sections:
     │
     ├──► Hero Section
     │    ├── Dark: bg-[#0B0C0E] text-[#E0E7EE]
     │    └── Light: bg-white text-[#1F2937]
     │
     ├──► Content Cards
     │    ├── Dark: bg-[#0F1419] border-gray-700
     │    └── Light: bg-[#F9FAFB] border-gray-200
     │
     ├──► Pricing Cards
     │    ├── Dark: bg-[#0F1419] borders dark
     │    └── Light: bg-white borders light
     │
     ├──► Buttons
     │    ├── Primary: Always cyan (#22D3EE)
     │    ├── Secondary: Adapts to theme
     │    └── Hover: Lighter shades
     │
     └──► Text
          ├── Dark: #E0E7EE → #C9D6DF
          └── Light: #1F2937 → #4B5563
```

---

## File Relationships

```
App.jsx
  │
  ├── imports DestinationDetail (lazy)
  │      │
  │      └── Route: /destination/:slug
  │
  └── renders with <Suspense>

DestinationDetail.jsx
  │
  ├── imports destinationsData.js
  │      │
  │      └── getDestinationBySlug(slug)
  │
  ├── imports TopBar.jsx
  ├── imports Navbar.jsx
  ├── imports ThemeContext.jsx
  ├── imports react-router-dom
  ├── imports react-i18next
  └── imports react-icons/fa

destinationsData.js
  │
  ├── exports destinationsData {}
  ├── exports getDestinationBySlug()
  ├── exports getDestinationsByCategory()
  └── exports getAllDestinations()

navigationData.js
  │
  └── Updated with destination links:
      ├── /destination/hunza-valley
      ├── /destination/swat-valley
      └── /destination/k2-base-camp
```

---

## URL to Data Mapping

```
URL Parameter         Data Object Key
─────────────         ───────────────

:slug                 →  destinationsData[slug]
  │                        │
  ├─ "k2-base-camp"   →   'k2-base-camp': { ... }
  ├─ "hunza-valley"   →   'hunza-valley': { ... }
  └─ "swat-valley"    →   'swat-valley': { ... }

Example Flow:
─────────────

User visits: /destination/swat-valley
                     │
                     ▼
URL param extracted: slug = "swat-valley"
                     │
                     ▼
Function called: getDestinationBySlug("swat-valley")
                     │
                     ▼
Returns: destinationsData['swat-valley']
                     │
                     ▼
Object: {
  id: 'swat-valley',
  name: 'Swat Valley Trek',
  pricing: {
    basic: { price: 1499, ... },
    premium: { price: 1899, ... },
    ultimate: { price: 2699, ... }
  },
  // ... all other data
}
                     │
                     ▼
Component renders complete page with all data
```

---

## Performance Optimizations

```
Code Splitting
└──► React.lazy() for DestinationDetail
     └──► Only loads when route accessed
          └──► Smaller initial bundle

Memoization
├──► React.memo() on component
│    └──► Prevents unnecessary re-renders
│
└──► useMemo() for computed values
     └──► Caches expensive calculations

Image Optimization
├──► Lazy loading images
├──► Responsive image sizes
└──► Progressive loading

State Management
└──► Minimal state updates
     └──► Only what changed
          └──► Better performance
```

---

This architecture is:
- ✅ **Scalable** - Add unlimited destinations
- ✅ **Maintainable** - Update one place
- ✅ **Performant** - Lazy loading + memoization
- ✅ **User-friendly** - Consistent experience
- ✅ **Professional** - Industry-standard design

**Used by:** Booking.com, Airbnb, Expedia, Viator, GetYourGuide! 🚀
