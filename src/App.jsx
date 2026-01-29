import './globals.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load pages for code splitting and faster initial load
const Home = lazy(() => import('./pages/Home'));
const AdventureTours = lazy(() => import('./pages/Trip/AdventureTours'));
const FamilyTours = lazy(() => import('./pages/Trip/FamilyTours'));
const HoneymoonTours = lazy(() => import('./pages/Trip/HoneymoonTours'));
const CorporateTours = lazy(() => import('./pages/Trip/CorporateTours'));
const BudgetTours = lazy(() => import('./pages/Trip/BudgetTours'));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail'));
const CustomTourBuilder = lazy(() => import('./pages/CustomTourBuilder'));
const Destinations = lazy(() => import('./pages/Destinations'));

// Services Pages
const Services = lazy(() => import('./pages/Services/Services'));
const HotelBooking = lazy(() => import('./pages/Services/HotelBooking'));
const TransportServices = lazy(() => import('./pages/Services/TransportServices'));
const TourGuides = lazy(() => import('./pages/Services/TourGuides'));
const VisaAssistance = lazy(() => import('./pages/Services/VisaAssistance'));
const TravelInsurance = lazy(() => import('./pages/Services/TravelInsurance'));
const PhotographyServices = lazy(() => import('./pages/Services/PhotographyServices'));

// Special Pages
const SpecialOffers = lazy(() => import('./pages/SpecialOffers'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Reviews = lazy(() => import('./pages/Reviews'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const BookNow = lazy(() => import('./pages/BookNow'));
const Tours = lazy(() => import('./pages/Tours'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#0B0C0E] to-[#0F1419]">
    <div className="text-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#22D3EE] border-r-transparent"></div>
      <p className="mt-4 text-[#E0E7EE]">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="overflow-x-hidden w-full">
          <Router>
            <Suspense fallback={<PageLoader />}>
              <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Tours */}
              <Route path="/tours" element={<Tours />} />
              
              {/* Tour Routes */}
              <Route path="/trip/adventure" element={<AdventureTours />} />
              <Route path="/trip/family" element={<FamilyTours />} />
              <Route path="/trip/honeymoon" element={<HoneymoonTours />} />
              <Route path="/trip/corporate" element={<CorporateTours />} />
              <Route path="/trip/budget" element={<BudgetTours />} />
              
              {/* Destination Routes */}
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destination/:slug" element={<DestinationDetail />} />
              
              {/* Custom Tour */}
              <Route path="/custom-tour" element={<CustomTourBuilder />} />
              
              {/* Services Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/hotels" element={<HotelBooking />} />
              <Route path="/services/transport" element={<TransportServices />} />
              <Route path="/services/guides" element={<TourGuides />} />
              <Route path="/services/visa" element={<VisaAssistance />} />
              <Route path="/services/insurance" element={<TravelInsurance />} />
              <Route path="/services/photography" element={<PhotographyServices />} />
              
              {/* Special Pages */}
              <Route path="/offers" element={<SpecialOffers />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-now" element={<BookNow />} />
              
              {/* Legal Pages */}
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </Router>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
