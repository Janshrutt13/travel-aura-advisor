
import type { UserPreferences, Destination } from "@/types/travel";

const destinations: Destination[] = [
  {
    name: "Bali",
    country: "Indonesia",
    description: "Tropical paradise with stunning beaches, ancient temples, and vibrant culture. Experience the perfect blend of spiritual awakening and natural beauty.",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
    matchReason: "Perfect for relaxation with beautiful beaches and spiritual experiences",
    activities: ["Beach", "Temples", "Yoga", "Surfing", "Photography"],
    bestTimeToVisit: "Apr-Oct",
    averageCost: "$70-120/day",
    hotels: [
      {
        name: "Ubud Hanging Gardens",
        rating: 4.8,
        priceRange: "$180-280/night",
        image: "",
        features: ["Infinity Pool", "Spa", "Jungle View"]
      },
      {
        name: "The Mulia Resort",
        rating: 4.6,
        priceRange: "$120-200/night",
        image: "",
        features: ["Beach Access", "Multiple Pools", "Fine Dining"]
      },
      {
        name: "Alila Villas Uluwatu",
        rating: 4.7,
        priceRange: "$300-450/night",
        image: "",
        features: ["Cliff Top Location", "Ocean Views", "Private Villas"]
      }
    ],
    flights: [
      {
        airline: "Singapore Airlines",
        price: "$850-1200",
        duration: "18h 30m",
        stops: 1
      },
      {
        airline: "Qatar Airways",
        price: "$780-950",
        duration: "19h 45m",
        stops: 1
      },
      {
        airline: "Emirates",
        price: "$900-1100",
        duration: "20h 15m",
        stops: 1
      }
    ]
  },
  {
    name: "Faroe Islands",
    country: "Denmark",
    description: "Remote Nordic archipelago with dramatic cliffs, grass-roof houses, and pristine wilderness. Perfect for those seeking untouched natural beauty.",
    image: "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=800&h=600&fit=crop",
    matchReason: "Ideal for adventure seekers wanting unique, off-the-beaten-path experiences",
    activities: ["Hiking", "Photography", "Bird Watching", "Kayaking", "Northern Lights"],
    bestTimeToVisit: "May-Sep",
    averageCost: "$120-180/day",
    hotels: [
      {
        name: "Hotel Føroyar",
        rating: 4.2,
        priceRange: "$150-220/night",
        image: "",
        features: ["Harbor Views", "Modern Design", "Restaurant"]
      },
      {
        name: "Hilton Garden Inn",
        rating: 4.1,
        priceRange: "$120-180/night",
        image: "",
        features: ["City Center", "Fitness Center", "Business Facilities"]
      },
      {
        name: "Guesthouse Marknagil",
        rating: 4.5,
        priceRange: "$80-120/night",
        image: "",
        features: ["Traditional Style", "Garden Views", "Home Cooked Meals"]
      }
    ],
    flights: [
      {
        airline: "Atlantic Airways",
        price: "$650-850",
        duration: "12h 45m",
        stops: 1
      },
      {
        airline: "SAS",
        price: "$600-800",
        duration: "13h 30m",
        stops: 1
      }
    ]
  },
  {
    name: "Socotra Island",
    country: "Yemen",
    description: "UNESCO World Heritage site known as the 'Galápagos of the Indian Ocean' with unique flora and fauna found nowhere else on Earth.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    matchReason: "Perfect for nature lovers seeking truly unique and remote experiences",
    activities: ["Wildlife", "Photography", "Hiking", "Beach", "Botany"],
    bestTimeToVisit: "Oct-Apr",
    averageCost: "$80-150/day",
    hotels: [
      {
        name: "Socotra Specialist Hotel",
        rating: 3.8,
        priceRange: "$60-100/night",
        image: "",
        features: ["Local Cuisine", "Guided Tours", "Basic Amenities"]
      },
      {
        name: "Homhil Plateau Lodge",
        rating: 4.0,
        priceRange: "$70-120/night",
        image: "",
        features: ["Mountain Views", "Eco-Friendly", "Dragon Blood Trees"]
      }
    ],
    flights: [
      {
        airline: "Felix Airways",
        price: "$800-1200",
        duration: "16h 20m",
        stops: 2
      },
      {
        airline: "Emirates via Dubai",
        price: "$900-1300",
        duration: "18h 45m",
        stops: 2
      }
    ]
  },
  {
    name: "Tokyo",
    country: "Japan",
    description: "Vibrant metropolis blending ancient traditions with cutting-edge technology. From serene temples to neon-lit districts, experience the essence of modern Japan.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    matchReason: "Perfect for cultural experiences and urban adventures",
    activities: ["Museums", "Food Tours", "Temples", "Shopping", "Nightlife"],
    bestTimeToVisit: "Mar-May, Sep-Nov",
    averageCost: "$120-200/day",
    hotels: [
      {
        name: "Park Hyatt Tokyo",
        rating: 4.7,
        priceRange: "$400-600/night",
        image: "",
        features: ["City Views", "Luxury Spa", "Fine Dining"]
      },
      {
        name: "Shibuya Excel Hotel",
        rating: 4.2,
        priceRange: "$150-250/night",
        image: "",
        features: ["Central Location", "Modern Rooms", "Rooftop Bar"]
      },
      {
        name: "Aman Tokyo",
        rating: 4.9,
        priceRange: "$800-1200/night",
        image: "",
        features: ["Ultra Luxury", "Imperial Palace Views", "Zen Design"]
      },
      {
        name: "Hotel Gracery Shinjuku",
        rating: 4.0,
        priceRange: "$120-180/night",
        image: "",
        features: ["Godzilla Theme", "Shinjuku Location", "Movie Theater"]
      }
    ],
    flights: [
      {
        airline: "ANA",
        price: "$650-900",
        duration: "11h 30m",
        stops: 0
      },
      {
        airline: "United",
        price: "$580-750",
        duration: "13h 15m",
        stops: 1
      },
      {
        airline: "JAL",
        price: "$700-950",
        duration: "12h 00m",
        stops: 0
      }
    ]
  },
  {
    name: "Lofoten Islands",
    country: "Norway",
    description: "Dramatic peaks rising directly from the sea, pristine beaches, and traditional fishing villages. Experience the midnight sun and Northern Lights.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    matchReason: "Perfect for adventure and unique Arctic experiences",
    activities: ["Northern Lights", "Hiking", "Photography", "Fishing", "Kayaking"],
    bestTimeToVisit: "May-Sep (Midnight Sun), Oct-Mar (Northern Lights)",
    averageCost: "$150-250/day",
    hotels: [
      {
        name: "Eliassen Rorbuer",
        rating: 4.6,
        priceRange: "$200-350/night",
        image: "",
        features: ["Traditional Fisherman's Cabins", "Sea Views", "Authentic Experience"]
      },
      {
        name: "Scandic Leknes",
        rating: 4.1,
        priceRange: "$120-200/night",
        image: "",
        features: ["Modern Hotel", "Airport Shuttle", "Restaurant"]
      },
      {
        name: "Svinøya Rorbuer",
        rating: 4.7,
        priceRange: "$180-280/night",
        image: "",
        features: ["Historic Cabins", "Harbor Location", "Northern Lights Views"]
      }
    ],
    flights: [
      {
        airline: "SAS",
        price: "$700-1000",
        duration: "14h 30m",
        stops: 2
      },
      {
        airline: "Norwegian",
        price: "$600-850",
        duration: "15h 45m",
        stops: 2
      }
    ]
  },
  {
    name: "Santorini",
    country: "Greece",
    description: "Romantic island paradise with stunning sunsets, whitewashed buildings perched on volcanic cliffs, and crystal-clear Aegean waters.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    matchReason: "Ideal for romantic getaways with breathtaking views",
    activities: ["Beach", "Wine Tasting", "Photography", "Sunset Viewing", "Sailing"],
    bestTimeToVisit: "Apr-Oct",
    averageCost: "$100-180/day",
    hotels: [
      {
        name: "Canaves Oia Suites",
        rating: 4.9,
        priceRange: "$500-800/night",
        image: "",
        features: ["Infinity Pool", "Caldera Views", "Private Terraces"]
      },
      {
        name: "Astra Suites",
        rating: 4.6,
        priceRange: "$300-500/night",
        image: "",
        features: ["Cliff Location", "Sunset Views", "Luxury Spa"]
      },
      {
        name: "Grace Hotel Santorini",
        rating: 4.8,
        priceRange: "$400-700/night",
        image: "",
        features: ["Champagne Lounge", "Caldera Views", "Minimalist Design"]
      }
    ],
    flights: [
      {
        airline: "Emirates",
        price: "$700-1000",
        duration: "16h 45m",
        stops: 1
      },
      {
        airline: "Lufthansa",
        price: "$650-850",
        duration: "15h 30m",
        stops: 1
      },
      {
        airline: "Aegean Airlines",
        price: "$600-800",
        duration: "14h 20m",
        stops: 1
      }
    ]
  },
  {
    name: "Raja Ampat",
    country: "Indonesia",
    description: "Remote marine paradise known as the 'Four Kings' with the richest marine biodiversity on Earth. Perfect for world-class diving and pristine nature.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    matchReason: "Ultimate destination for diving enthusiasts and marine life lovers",
    activities: ["Diving", "Snorkeling", "Photography", "Bird Watching", "Kayaking"],
    bestTimeToVisit: "Oct-Apr",
    averageCost: "$100-200/day",
    hotels: [
      {
        name: "Sorido Bay Resort",
        rating: 4.5,
        priceRange: "$250-400/night",
        image: "",
        features: ["Dive Resort", "Over Water Bungalows", "Marine Conservation"]
      },
      {
        name: "Papua Paradise Eco Resort",
        rating: 4.3,
        priceRange: "$200-350/night",
        image: "",
        features: ["Eco-Friendly", "Diving Packages", "Pristine Location"]
      },
      {
        name: "Meridian Adventure Marina",
        rating: 4.4,
        priceRange: "$180-300/night",
        image: "",
        features: ["Marina Location", "Dive Center", "Island Hopping"]
      }
    ],
    flights: [
      {
        airline: "Garuda Indonesia",
        price: "$1200-1600",
        duration: "24h 30m",
        stops: 3
      },
      {
        airline: "Lion Air",
        price: "$1000-1400",
        duration: "26h 15m",
        stops: 3
      }
    ]
  },
  {
    name: "Bhutan",
    country: "Bhutan",
    description: "The Last Shangri-La, a carbon-negative kingdom where Gross National Happiness matters more than GDP. Experience ancient monasteries and pristine Himalayan landscapes.",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop",
    matchReason: "Perfect for spiritual seekers and those wanting authentic cultural experiences",
    activities: ["Temples", "Hiking", "Photography", "Cultural Tours", "Meditation"],
    bestTimeToVisit: "Mar-May, Sep-Nov",
    averageCost: "$250-350/day",
    hotels: [
      {
        name: "Amankora Thimphu",
        rating: 4.8,
        priceRange: "$800-1200/night",
        image: "",
        features: ["Ultra Luxury", "Traditional Architecture", "Spa"]
      },
      {
        name: "Hotel Druk",
        rating: 4.2,
        priceRange: "$150-250/night",
        image: "",
        features: ["City Center", "Traditional Design", "Mountain Views"]
      },
      {
        name: "Taj Tashi",
        rating: 4.6,
        priceRange: "$300-500/night",
        image: "",
        features: ["Luxury Hotel", "Dzong Architecture", "Fine Dining"]
      }
    ],
    flights: [
      {
        airline: "Druk Air",
        price: "$1200-1800",
        duration: "18h 45m",
        stops: 2
      },
      {
        airline: "Bhutan Airlines",
        price: "$1100-1600",
        duration: "19h 30m",
        stops: 2
      }
    ]
  },
  {
    name: "Patagonia",
    country: "Chile/Argentina",
    description: "Wild frontier with dramatic landscapes, ancient glaciers, and incredible wildlife. Experience the raw beauty of the world's most remote wilderness.",
    image: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=800&h=600&fit=crop",
    matchReason: "Perfect for adventure seekers and nature lovers",
    activities: ["Hiking", "Wildlife", "Photography", "Glaciers", "Adventure Sports"],
    bestTimeToVisit: "Nov-Mar",
    averageCost: "$80-150/day",
    hotels: [
      {
        name: "EcoCamp Patagonia",
        rating: 4.5,
        priceRange: "$200-350/night",
        image: "",
        features: ["Eco Domes", "Torres del Paine Views", "Sustainable"]
      },
      {
        name: "Las Torres Patagonia",
        rating: 4.7,
        priceRange: "$400-600/night",
        image: "",
        features: ["Luxury Lodge", "Spa", "Guided Tours"]
      },
      {
        name: "Explora Patagonia",
        rating: 4.8,
        priceRange: "$500-800/night",
        image: "",
        features: ["All-Inclusive", "Expert Guides", "Remote Location"]
      }
    ],
    flights: [
      {
        airline: "LATAM",
        price: "$900-1300",
        duration: "22h 15m",
        stops: 2
      },
      {
        airline: "American Airlines",
        price: "$850-1100",
        duration: "20h 45m",
        stops: 1
      },
      {
        airline: "Aerolíneas Argentinas",
        price: "$800-1200",
        duration: "21h 30m",
        stops: 2
      }
    ]
  },
  {
    name: "Salar de Uyuni",
    country: "Bolivia",
    description: "World's largest salt flat creating a mirror effect during rainy season and endless white desert during dry season. A surreal landscape like nowhere else on Earth.",
    image: "https://images.unsplash.com/photo-1544550285-f813152fb2fd?w=800&h=600&fit=crop",
    matchReason: "Perfect for photographers and those seeking otherworldly experiences",
    activities: ["Photography", "Stargazing", "Flamingo Watching", "Salt Harvesting", "Jeep Tours"],
    bestTimeToVisit: "May-Oct (Dry), Dec-Apr (Mirror Effect)",
    averageCost: "$60-120/day",
    hotels: [
      {
        name: "Hotel de Sal Luna Salada",
        rating: 4.3,
        priceRange: "$120-200/night",
        image: "",
        features: ["Made of Salt", "Unique Architecture", "Salt Flat Views"]
      },
      {
        name: "Kachi Lodge",
        rating: 4.6,
        priceRange: "$200-350/night",
        image: "",
        features: ["Luxury Dome", "Stargazing", "Eco-Friendly"]
      },
      {
        name: "Hotel Jardines de Uyuni",
        rating: 4.0,
        priceRange: "$80-150/night",
        image: "",
        features: ["Central Location", "Traditional Style", "Tour Arrangements"]
      }
    ],
    flights: [
      {
        airline: "Boliviana de Aviación",
        price: "$800-1200",
        duration: "18h 30m",
        stops: 2
      },
      {
        airline: "LATAM",
        price: "$900-1300",
        duration: "20h 15m",
        stops: 2
      }
    ]
  },
  {
    name: "Marrakech",
    country: "Morocco",
    description: "Exotic imperial city with bustling souks, magnificent palaces, and desert adventures. Experience the intoxicating blend of Arab, Berber, and French cultures.",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73d15?w=800&h=600&fit=crop",
    matchReason: "Perfect for cultural immersion and exotic experiences",
    activities: ["Souks", "Palaces", "Food Tours", "Desert", "Hammams"],
    bestTimeToVisit: "Mar-May, Sep-Nov",
    averageCost: "$50-100/day",
    hotels: [
      {
        name: "La Mamounia",
        rating: 4.8,
        priceRange: "$300-500/night",
        image: "",
        features: ["Palace Hotel", "Spa", "Historic Gardens"]
      },
      {
        name: "Riad Yasmine",
        rating: 4.4,
        priceRange: "$80-150/night",
        image: "",
        features: ["Traditional Riad", "Rooftop Terrace", "Medina Location"]
      },
      {
        name: "Royal Mansour",
        rating: 4.9,
        priceRange: "$800-1500/night",
        image: "",
        features: ["Royal Palace", "Private Riads", "Ultimate Luxury"]
      },
      {
        name: "Riad Kniza",
        rating: 4.5,
        priceRange: "$150-250/night",
        image: "",
        features: ["Boutique Hotel", "Art Collection", "Rooftop Pool"]
      }
    ],
    flights: [
      {
        airline: "Royal Air Maroc",
        price: "$550-750",
        duration: "12h 30m",
        stops: 1
      },
      {
        airline: "Air France",
        price: "$600-800",
        duration: "14h 15m",
        stops: 1
      },
      {
        airline: "Emirates",
        price: "$650-850",
        duration: "13h 45m",
        stops: 1
      }
    ]
  },
  {
    name: "Madagascar",
    country: "Madagascar",
    description: "The eighth continent with 90% endemic species, from lemurs to baobab trees. Experience evolution in isolation on this biodiversity hotspot.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    matchReason: "Perfect for wildlife enthusiasts and adventure seekers",
    activities: ["Wildlife", "Lemurs", "Photography", "Hiking", "Baobab Avenue"],
    bestTimeToVisit: "Apr-Oct",
    averageCost: "$80-150/day",
    hotels: [
      {
        name: "Andasibe Hotel",
        rating: 4.2,
        priceRange: "$100-180/night",
        image: "",
        features: ["Rainforest Location", "Lemur Spotting", "Eco-Lodge"]
      },
      {
        name: "Mantadia Lodge",
        rating: 4.4,
        priceRange: "$120-200/night",
        image: "",
        features: ["National Park Access", "Wildlife Tours", "Traditional Architecture"]
      },
      {
        name: "Palissandre Hotel",
        rating: 4.0,
        priceRange: "$80-150/night",
        image: "",
        features: ["Capital Location", "Business Facilities", "Local Cuisine"]
      }
    ],
    flights: [
      {
        airline: "Air Madagascar",
        price: "$1200-1800",
        duration: "22h 45m",
        stops: 2
      },
      {
        airline: "Air France",
        price: "$1400-2000",
        duration: "20h 30m",
        stops: 1
      }
    ]
  },
  {
    name: "Reykjavik",
    country: "Iceland",
    description: "Gateway to otherworldly landscapes, Northern Lights, and geothermal wonders. Experience the land of fire and ice with its dramatic contrasts.",
    image: "https://images.unsplash.com/photo-1551524164-d526a0d5b4f0?w=800&h=600&fit=crop",
    matchReason: "Perfect for adventure and unique natural phenomena",
    activities: ["Northern Lights", "Geysers", "Glaciers", "Hot Springs", "Photography"],
    bestTimeToVisit: "Sep-Mar (Lights), Jun-Aug (Weather)",
    averageCost: "$150-250/day",
    hotels: [
      {
        name: "Hotel Rangá",
        rating: 4.6,
        priceRange: "$200-400/night",
        image: "",
        features: ["Northern Lights Views", "Observatory", "Luxury Spa"]
      },
      {
        name: "Canopy by Hilton",
        rating: 4.3,
        priceRange: "$150-250/night",
        image: "",
        features: ["City Center", "Modern Design", "Rooftop Bar"]
      },
      {
        name: "ION Adventure Hotel",
        rating: 4.7,
        priceRange: "$300-500/night",
        image: "",
        features: ["Geothermal Location", "Northern Lights Bar", "Luxury Spa"]
      }
    ],
    flights: [
      {
        airline: "Icelandair",
        price: "$400-600",
        duration: "5h 30m",
        stops: 0
      },
      {
        airline: "Delta",
        price: "$500-700",
        duration: "8h 45m",
        stops: 1
      },
      {
        airline: "United",
        price: "$450-650",
        duration: "7h 20m",
        stops: 1
      }
    ]
  },
  {
    name: "Easter Island",
    country: "Chile",
    description: "Most remote inhabited island on Earth, famous for its mysterious Moai statues. Experience Polynesian culture in the middle of the Pacific Ocean.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    matchReason: "Perfect for history buffs and those seeking mysterious ancient cultures",
    activities: ["Moai Statues", "Archaeological Sites", "Polynesian Culture", "Stargazing", "Hiking"],
    bestTimeToVisit: "Oct-Apr",
    averageCost: "$150-250/day",
    hotels: [
      {
        name: "Hangaroa Eco Village & Spa",
        rating: 4.5,
        priceRange: "$300-500/night",
        image: "",
        features: ["Eco-Luxury", "Spa", "Cultural Experiences"]
      },
      {
        name: "Hotel Otai",
        rating: 4.2,
        priceRange: "$150-250/night",
        image: "",
        features: ["Central Location", "Traditional Design", "Ocean Views"]
      },
      {
        name: "Altiplanico Rapa Nui",
        rating: 4.4,
        priceRange: "$200-350/night",
        image: "",
        features: ["Boutique Hotel", "Local Architecture", "Sustainable Tourism"]
      }
    ],
    flights: [
      {
        airline: "LATAM",
        price: "$1200-1800",
        duration: "12h 45m",
        stops: 1
      },
      {
        airline: "Sky Airline",
        price: "$1000-1500",
        duration: "11h 30m",
        stops: 1
      }
    ]
  }
];

export const getRecommendations = (preferences: UserPreferences): Destination[] => {
  // Enhanced scoring algorithm based on preferences
  const scoredDestinations = destinations.map(destination => {
    let score = 0;
    
    // Mood-based scoring with more nuanced matching
    const moodScoring = {
      'relaxed': ['Beach', 'Spa', 'Hot Springs', 'Yoga', 'Wine Tasting'],
      'adventurous': ['Hiking', 'Adventure Sports', 'Kayaking', 'Diving', 'Wildlife'],
      'romantic': ['Sunset Viewing', 'Wine Tasting', 'Beach', 'Sailing'],
      'cultural': ['Museums', 'Temples', 'Palaces', 'Cultural Tours', 'Archaeological Sites'],
      'party': ['Nightlife', 'Food Tours', 'Shopping'],
      'spiritual': ['Temples', 'Meditation', 'Yoga', 'Cultural Tours'],
      'nature': ['Wildlife', 'Photography', 'Bird Watching', 'Glaciers', 'Geysers']
    };
    
    if (moodScoring[preferences.mood]) {
      moodScoring[preferences.mood].forEach(activity => {
        if (destination.activities.includes(activity)) score += 2;
      });
    }
    
    // Special destination bonuses based on mood
    const moodDestinationBonus = {
      'relaxed': ['Bali', 'Santorini', 'Maldives'],
      'adventurous': ['Patagonia', 'Lofoten Islands', 'Raja Ampat', 'Faroe Islands'],
      'romantic': ['Santorini', 'Bali', 'Paris'],
      'cultural': ['Tokyo', 'Bhutan', 'Marrakech', 'Easter Island'],
      'spiritual': ['Bhutan', 'Bali', 'India'],
      'nature': ['Madagascar', 'Socotra Island', 'Raja Ampat', 'Salar de Uyuni']
    };
    
    if (moodDestinationBonus[preferences.mood]?.includes(destination.name)) {
      score += 3;
    }
    
    // Climate-based scoring
    const climateMatching = {
      'tropical': ['Bali', 'Raja Ampat', 'Madagascar'],
      'temperate': ['Tokyo', 'Santorini', 'Marrakech'],
      'cold': ['Reykjavik', 'Lofoten Islands', 'Patagonia', 'Faroe Islands'],
      'desert': ['Marrakech', 'Salar de Uyuni'],
      'island': ['Santorini', 'Bali', 'Easter Island', 'Faroe Islands', 'Lofoten Islands', 'Socotra Island']
    };
    
    if (climateMatching[preferences.climate]?.includes(destination.name)) {
      score += 2;
    }
    
    // Activity-based scoring
    preferences.activities.forEach(activity => {
      if (destination.activities.includes(activity)) {
        score += 1;
      }
    });
    
    // Budget-based scoring (enhanced)
    const avgCost = parseInt(destination.averageCost.split('-')[0].replace('$', ''));
    if (preferences.budget === 'budget' && avgCost < 100) score += 2;
    if (preferences.budget === 'mid' && avgCost >= 80 && avgCost < 180) score += 2;
    if (preferences.budget === 'luxury' && avgCost >= 120) score += 2;
    
    // Duration-based adjustments
    if (preferences.duration === 'weekend' && ['Tokyo', 'Reykjavik', 'Marrakech'].includes(destination.name)) score += 1;
    if (preferences.duration === 'week' && ['Bali', 'Patagonia', 'Madagascar'].includes(destination.name)) score += 1;
    if (preferences.duration === 'month' && ['Bhutan', 'Madagascar', 'Patagonia', 'Raja Ampat'].includes(destination.name)) score += 1;
    
    return { ...destination, score };
  });
  
  // Sort by score and return top 3, ensuring variety
  return scoredDestinations
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
};
