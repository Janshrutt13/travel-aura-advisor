
import type { UserPreferences, Destination } from "@/types/travel";

const destinations: Destination[] = [
  {
    name: "Bali",
    country: "Indonesia",
    description: "Tropical paradise with stunning beaches, ancient temples, and vibrant culture.",
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
      }
    ]
  },
  {
    name: "Tokyo",
    country: "Japan",
    description: "Vibrant metropolis blending ancient traditions with cutting-edge technology.",
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
      }
    ]
  },
  {
    name: "Santorini",
    country: "Greece",
    description: "Romantic island paradise with stunning sunsets and whitewashed buildings.",
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
      }
    ]
  },
  {
    name: "Patagonia",
    country: "Chile/Argentina",
    description: "Wild frontier with dramatic landscapes, glaciers, and incredible wildlife.",
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
      }
    ]
  },
  {
    name: "Marrakech",
    country: "Morocco",
    description: "Exotic imperial city with bustling souks, palaces, and desert adventures.",
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
      }
    ]
  },
  {
    name: "Reykjavik",
    country: "Iceland",
    description: "Gateway to otherworldly landscapes, Northern Lights, and geothermal wonders.",
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
      }
    ]
  }
];

export const getRecommendations = (preferences: UserPreferences): Destination[] => {
  // Simple scoring algorithm based on preferences
  const scoredDestinations = destinations.map(destination => {
    let score = 0;
    
    // Mood-based scoring
    if (preferences.mood === 'relaxed' && destination.activities.includes('Beach')) score += 3;
    if (preferences.mood === 'adventurous' && destination.activities.includes('Adventure Sports')) score += 3;
    if (preferences.mood === 'romantic' && destination.name === 'Santorini') score += 3;
    if (preferences.mood === 'cultural' && destination.activities.includes('Museums')) score += 3;
    if (preferences.mood === 'party' && destination.activities.includes('Nightlife')) score += 3;
    if (preferences.mood === 'spiritual' && destination.activities.includes('Temples')) score += 3;
    
    // Climate-based scoring
    if (preferences.climate === 'tropical' && ['Bali'].includes(destination.name)) score += 2;
    if (preferences.climate === 'temperate' && ['Tokyo', 'Santorini'].includes(destination.name)) score += 2;
    if (preferences.climate === 'cold' && ['Reykjavik', 'Patagonia'].includes(destination.name)) score += 2;
    if (preferences.climate === 'desert' && ['Marrakech'].includes(destination.name)) score += 2;
    
    // Activity-based scoring
    preferences.activities.forEach(activity => {
      if (destination.activities.includes(activity)) {
        score += 1;
      }
    });
    
    // Budget-based scoring (simplified)
    const avgCost = parseInt(destination.averageCost.split('-')[0].replace('$', ''));
    if (preferences.budget === 'budget' && avgCost < 100) score += 1;
    if (preferences.budget === 'mid' && avgCost >= 100 && avgCost < 150) score += 1;
    if (preferences.budget === 'luxury' && avgCost >= 150) score += 1;
    
    return { ...destination, score };
  });
  
  // Sort by score and return top 3
  return scoredDestinations
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
};
