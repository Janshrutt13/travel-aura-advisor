
export interface UserPreferences {
  mood: string;
  budget: string;
  climate: string;
  activities: string[];
  duration: string;
}

export interface Hotel {
  name: string;
  rating: number;
  priceRange: string;
  image: string;
  features: string[];
}

export interface Flight {
  airline: string;
  price: string;
  duration: string;
  stops: number;
}

export interface Destination {
  name: string;
  country: string;
  description: string;
  image: string;
  matchReason: string;
  hotels: Hotel[];
  flights: Flight[];
  activities: string[];
  bestTimeToVisit: string;
  averageCost: string;
}
