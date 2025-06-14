import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plane, Hotel, Star, DollarSign } from "lucide-react";
import MoodSelector from "@/components/MoodSelector";
import PreferenceSelector from "@/components/PreferenceSelector";
import DestinationCard from "@/components/DestinationCard";
import DestinationDetails from "@/components/DestinationDetails";
import { getRecommendations } from "@/utils/recommendationEngine";
import type { UserPreferences, Destination } from "@/types/travel";

const backgroundImages = [
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1920&h=1080&fit=crop'
];

const Index = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [preferences, setPreferences] = useState<UserPreferences>({
    mood: '',
    budget: '',
    climate: '',
    activities: [],
    duration: ''
  });
  const [recommendations, setRecommendations] = useState<Destination[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  // Rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleGetRecommendations = () => {
    const results = getRecommendations(preferences);
    setRecommendations(results);
    setShowRecommendations(true);
  };

  const handleExploreDestination = (destination: Destination) => {
    setSelectedDestination(destination);
  };

  const handleBackToRecommendations = () => {
    setSelectedDestination(null);
  };

  const handleBackToPreferences = () => {
    setShowRecommendations(false);
    setSelectedDestination(null);
  };

  const canGetRecommendations = preferences.mood && preferences.budget && preferences.climate;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
        }}
      />
      <div className="fixed inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Travel Aura Advisor
          </h1>
          <p className="text-xl text-white/90 drop-shadow-md">
            Discover your perfect destination based on your mood and preferences
          </p>
        </div>

        {selectedDestination ? (
          <DestinationDetails 
            destination={selectedDestination}
            onBack={handleBackToRecommendations}
          />
        ) : !showRecommendations ? (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800">
                  Tell us about your travel vibe
                </CardTitle>
                <CardDescription className="text-gray-600">
                  We'll recommend destinations that match your mood and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <MoodSelector 
                  selectedMood={preferences.mood}
                  onMoodChange={(mood) => setPreferences(prev => ({ ...prev, mood }))}
                />
                
                <PreferenceSelector 
                  preferences={preferences}
                  onPreferencesChange={setPreferences}
                />

                <div className="flex justify-center pt-6">
                  <Button 
                    onClick={handleGetRecommendations}
                    disabled={!canGetRecommendations}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    Get My Recommendations
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Button 
                onClick={handleBackToPreferences}
                variant="outline"
                className="bg-white/90 backdrop-blur-sm border-white/50 text-gray-800 hover:bg-white"
              >
                ← Back to Preferences
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((destination, index) => (
                <DestinationCard 
                  key={index}
                  destination={destination}
                  onExplore={() => handleExploreDestination(destination)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
