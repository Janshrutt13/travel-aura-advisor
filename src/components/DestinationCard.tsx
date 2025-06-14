import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Plane, Hotel, DollarSign, Clock } from "lucide-react";
import type { Destination } from "@/types/travel";

interface DestinationCardProps {
  destination: Destination;
  onExplore: () => void;
}

const DestinationCard = ({ destination, onExplore }: DestinationCardProps) => {
  return (
    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold">{destination.name}</h3>
          <p className="text-sm opacity-90">{destination.country}</p>
        </div>
      </div>

      <CardHeader className="pb-4">
        <CardDescription className="text-sm text-gray-600">
          {destination.description}
        </CardDescription>
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
          <p className="text-sm font-medium text-blue-800">
            💡 {destination.matchReason}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span>{destination.bestTimeToVisit}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <span>{destination.averageCost}</span>
          </div>
        </div>

        {/* Activities */}
        <div>
          <h4 className="font-medium text-sm mb-2">Popular Activities</h4>
          <div className="flex flex-wrap gap-1">
            {destination.activities.slice(0, 3).map((activity, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {activity}
              </span>
            ))}
          </div>
        </div>

        {/* Top Hotel */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-2 mb-2">
            <Hotel className="h-4 w-4 text-purple-600" />
            <h4 className="font-medium text-sm">Recommended Hotel</h4>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-sm">{destination.hotels[0].name}</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex">
                    {[...Array(Math.floor(destination.hotels[0].rating))].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({destination.hotels[0].rating})</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-green-600">
                {destination.hotels[0].priceRange}
              </span>
            </div>
          </div>
        </div>

        {/* Top Flight */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-2 mb-2">
            <Plane className="h-4 w-4 text-blue-600" />
            <h4 className="font-medium text-sm">Best Flight Deal</h4>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">{destination.flights[0].airline}</p>
                <p className="text-xs text-gray-600">
                  {destination.flights[0].duration} • {destination.flights[0].stops} stops
                </p>
              </div>
              <span className="text-sm font-semibold text-blue-600">
                {destination.flights[0].price}
              </span>
            </div>
          </div>
        </div>

        <Button 
          onClick={onExplore}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <MapPin className="mr-2 h-4 w-4" />
          Explore This Destination
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
