
import { Card, CardContent } from "@/components/ui/card";

interface MoodOption {
  id: string;
  label: string;
  emoji: string;
  description: string;
}

const moods: MoodOption[] = [
  { id: 'adventurous', label: 'Adventurous', emoji: '🏔️', description: 'Seeking thrills and new experiences' },
  { id: 'relaxed', label: 'Relaxed', emoji: '🏖️', description: 'Want to unwind and recharge' },
  { id: 'romantic', label: 'Romantic', emoji: '💕', description: 'Perfect for couples and love' },
  { id: 'cultural', label: 'Cultural', emoji: '🏛️', description: 'Interested in history and culture' },
  { id: 'party', label: 'Party', emoji: '🎉', description: 'Ready to celebrate and have fun' },
  { id: 'spiritual', label: 'Spiritual', emoji: '🧘', description: 'Seeking peace and mindfulness' },
];

interface MoodSelectorProps {
  selectedMood: string;
  onMoodChange: (mood: string) => void;
}

const MoodSelector = ({ selectedMood, onMoodChange }: MoodSelectorProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">What's your travel mood?</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {moods.map((mood) => (
          <Card 
            key={mood.id}
            className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
              selectedMood === mood.id 
                ? 'ring-2 ring-blue-500 bg-blue-50 border-blue-200' 
                : 'hover:bg-gray-50'
            }`}
            onClick={() => onMoodChange(mood.id)}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">{mood.emoji}</div>
              <div className="font-medium text-sm mb-1">{mood.label}</div>
              <div className="text-xs text-gray-600">{mood.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
