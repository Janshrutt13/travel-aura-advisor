
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Plane, Hotel, DollarSign, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import type { Destination } from "@/types/travel";

interface DestinationDetailsProps {
  destination: Destination;
  onBack: () => void;
}

const DestinationDetails = ({ destination, onBack }: DestinationDetailsProps) => {
  const handleBookFlight = (flight: any) => {
    // In a real app, this would redirect to booking sites
    window.open(`https://www.google.com/flights?q=${encodeURIComponent(destination.name + ' flights')}`, '_blank');
  };

  const handleBookHotel = (hotel: any) => {
    // In a real app, this would redirect to booking sites
    window.open(`https://www.booking.com/search.html?ss=${encodeURIComponent(destination.name)}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Button 
          onClick={onBack}
          variant="outline"
          className="bg-white/90 backdrop-blur-sm border-white/50 text-gray-800 hover:bg-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Recommendations
        </Button>
      </div>

      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
        {/* Hero Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={destination.image} 
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-3xl font-bold">{destination.name}</h1>
            <p className="text-lg opacity-90">{destination.country}</p>
          </div>
        </div>

        <CardHeader>
          <CardDescription className="text-base text-gray-700 leading-relaxed">
            {destination.description}
          </CardDescription>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-sm font-medium text-blue-800">
              💡 {destination.matchReason}
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Clock className="h-5 w-5 text-gray-600" />
              <div>
                <p className="font-medium text-sm">Best Time to Visit</p>
                <p className="text-gray-600">{destination.bestTimeToVisit}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <DollarSign className="h-5 w-5 text-gray-600" />
              <div>
                <p className="font-medium text-sm">Average Daily Cost</p>
                <p className="text-gray-600">{destination.averageCost}</p>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Popular Activities</h3>
            <div className="flex flex-wrap gap-2">
              {destination.activities.map((activity, index) => (
                <span key={index} className="px-3 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                  {activity}
                </span>
              ))}
            </div>
          </div>

          {/* Hotels Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Hotel className="h-5 w-5 text-purple-600" />
              Recommended Hotels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destination.hotels.map((hotel, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">{hotel.name}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="flex">
                            {[...Array(Math.floor(hotel.rating))].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({hotel.rating})</span>
                        </div>
                      </div>
                      <span className="text-lg font-bold text-green-600">
                        {hotel.priceRange}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {hotel.features.map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button 
                      onClick={() => handleBookHotel(hotel)}
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Book Hotel
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Flights Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Plane className="h-5 w-5 text-blue-600" />
              Flight Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destination.flights.map((flight, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">{flight.airline}</h4>
                        <p className="text-sm text-gray-600">
                          Duration: {flight.duration}
                        </p>
                        <p className="text-sm text-gray-600">
                          Stops: {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-blue-600">
                        {flight.price}
                      </span>
                    </div>
                    <Button 
                      onClick={() => handleBookFlight(flight)}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Book Flight
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* General Booking Links */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Quick Booking Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                onClick={() => window.open(`https://www.google.com/flights?q=${encodeURIComponent(destination.name + ' flights')}`, '_blank')}
                variant="outline"
                className="h-12"
              >
                <Plane className="mr-2 h-4 w-4" />
                Search All Flights
              </Button>
              <Button 
                onClick={() => window.open(`https://www.booking.com/search.html?ss=${encodeURIComponent(destination.name)}`, '_blank')}
                variant="outline"
                className="h-12"
              >
                <Hotel className="mr-2 h-4 w-4" />
                Search All Hotels
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DestinationDetails;
