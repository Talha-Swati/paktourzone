// Structured Data (Schema.org) for SEO

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "PakTourZone",
  "description": "Premier tour operator specializing in Northern Pakistan adventure tours and travel packages",
  "url": "https://paktourzone.com",
  "logo": "https://paktourzone.com/logo.png",
  "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
  "telephone": "+92-300-1234567",
  "email": "info@paktourzone.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Pakistan",
    "addressRegion": "Gilgit Baltistan"
  },
  "sameAs": [
    "https://facebook.com/paktourzone",
    "https://instagram.com/paktourzone",
    "https://twitter.com/paktourzone"
  ],
  "priceRange": "$$$",
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  }
});

export const getTourPackageSchema = (tour) => ({
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": tour.title,
  "description": tour.description,
  "image": tour.image,
  "touristType": "Adventure Traveler",
  "itinerary": {
    "@type": "ItemList",
    "itemListElement": tour.highlights?.map((highlight, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": highlight
    })) || []
  },
  "offers": {
    "@type": "Offer",
    "price": tour.price?.replace(/\D/g, ''),
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": `https://paktourzone.com${tour.link}`,
    "validFrom": new Date().toISOString()
  },
  "provider": {
    "@type": "TravelAgency",
    "name": "PakTourZone"
  }
});

export const getDestinationSchema = (destination) => ({
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": destination.name,
  "description": destination.description,
  "image": destination.image,
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Pakistan",
    "addressRegion": destination.region || "Gilgit Baltistan"
  },
  "touristType": ["Adventure Traveler", "Nature Lover", "Mountain Enthusiast"],
  "geo": destination.coordinates ? {
    "@type": "GeoCoordinates",
    "latitude": destination.coordinates.lat,
    "longitude": destination.coordinates.lng
  } : undefined
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://paktourzone.com${item.url}`
  }))
});

export const getReviewSchema = (reviews) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": reviews.averageRating || "4.9",
  "reviewCount": reviews.count || "1250",
  "bestRating": "5",
  "worstRating": "1"
});

export const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
