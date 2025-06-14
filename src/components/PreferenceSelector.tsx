
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { UserPreferences } from "@/types/travel";

interface PreferenceSelectorProps {
  preferences: UserPreferences;
  onPreferencesChange: (preferences: UserPreferences) => void;
}

const budgetOptions = [
  { id: 'budget', label: 'Budget', emoji: '💰', range: '$500-1500' },
  { id: 'mid', label: 'Mid-range', emoji: '💳', range: '$1500-3000' },
  { id: 'luxury', label: 'Luxury', emoji: '💎', range: '$3000+' },
];

const climateOptions = [
  { id: 'tropical', label: 'Tropical', emoji: '🌴', temp: '75-85°F' },
  { id: 'temperate', label: 'Temperate', emoji: '🌤️', temp: '60-75°F' },
  { id: 'cold', label: 'Cold', emoji: '❄️', temp: '30-50°F' },
  { id: 'desert', label: 'Desert', emoji: '🏜️', temp: '80-100°F' },
];

const activityOptions = [
  'Beach', 'Mountains', 'Museums', 'Nightlife', 'Food Tours', 
  'Shopping', 'Adventure Sports', 'Wildlife', 'Photography', 'Wellness'
];

const durationOptions = [
  { id: 'weekend', label: 'Weekend (2-3 days)' },
  { id: 'week', label: 'Week (4-7 days)' },
  { id: 'extended', label: 'Extended (8+ days)' },
];

const PreferenceSelector = ({ preferences, onPreferencesChange }: PreferenceSelectorProps) => {
  const updatePreferences = (key: keyof UserPreferences, value: any) => {
    onPreferencesChange({
      ...preferences,
      [key]: value
    });
  };

  const toggleActivity = (activity: string) => {
    const activities = preferences.activities.includes(activity)
      ? preferences.activities.filter(a => a !== activity)
      : [...preferences.activities, activity];
    updatePreferences('activities', activities);
  };

  return (
    <div className="space-y-6">
      {/* Budget */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">What's your budget?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {budgetOptions.map((option) => (
            <Card 
              key={option.id}
              className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                preferences.budget === option.id 
                  ? 'ring-2 ring-green-500 bg-green-50 border-green-200' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => updatePreferences('budget', option.id)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{option.emoji}</div>
                <div className="font-medium text-sm mb-1">{option.label}</div>
                <div className="text-xs text-gray-600">{option.range}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Climate */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Preferred climate?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {climateOptions.map((option) => (
            <Card 
              key={option.id}
              className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                preferences.climate === option.id 
                  ? 'ring-2 ring-orange-500 bg-orange-50 border-orange-200' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => updatePreferences('climate', option.id)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{option.emoji}</div>
                <div className="font-medium text-sm mb-1">{option.label}</div>
                <div className="text-xs text-gray-600">{option.temp}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">What activities interest you?</h3>
        <div className="flex flex-wrap gap-2">
          {activityOptions.map((activity) => (
            <Button
              key={activity}
              variant={preferences.activities.includes(activity) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleActivity(activity)}
              className={`transition-all duration-200 ${
                preferences.activities.includes(activity) 
                  ? 'bg-purple-600 hover:bg-purple-700' 
                  : 'hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300'
              }`}
            >
              {activity}
            </Button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">How long is your trip?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {durationOptions.map((option) => (
            <Card 
              key={option.id}
              className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                preferences.duration === option.id 
                  ? 'ring-2 ring-blue-500 bg-blue-50 border-blue-200' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => updatePreferences('duration', option.id)}
            >
              <CardContent className="p-4 text-center">
                <div className="font-medium text-sm">{option.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreferenceSelector;
