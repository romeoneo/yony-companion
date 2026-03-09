import { motion } from "framer-motion";
import { GameRole } from "@/pages/JoinGames";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EngagementStepProps {
  engagementText: string;
  intentionText: string;
  projectCategory?: string;
  role?: GameRole;
  onUpdate: (data: Partial<{
    engagementText: string;
    intentionText: string;
    projectCategory: string;
  }>) => void;
}

const projectCategories = [
  'Social Initiatives',
  'Education & Training',
  'Innovation & Technology',
  'Nature & Environment',
  'Health & Wellness',
  'Arts & Culture',
  'Tourism & Traditions',
  'Other'
];

const getEngagementPrompt = (role?: GameRole) => {
  switch (role) {
    case 'yony_flowers_tutor':
      return "As a Tutor, describe your teaching philosophy and approach to mentoring young talents. What methods do you use to inspire and guide your students?";
    case 'yony_flowers_project':
      return "Describe the impact project you want to bring to your chosen country. What problem does it solve and how will it benefit the local community?";
    case 'yony_brands':
      return "How do you envision contributing to the visual identity and brand development of the Yonyverse? What's your creative approach?";
    case 'yony_lights':
      return "How would you illuminate and amplify the stories within the Yonyverse? What storytelling techniques do you excel at?";
    case 'yony_places':
      return "Describe how you would explore and connect different territories in the Yonyverse. What's your approach to cultural discovery?";
    case 'yony_angels':
      return "How do you plan to support and nurture the Yonyverse community? What's your approach to community building?";
    case 'yony_magics':
      return "Describe the extraordinary and immersive experiences you would create for the Yonyverse. What makes your approach unique?";
    case 'yony_stars':
      return "How do you plan to shine and inspire excellence within the Yonyverse? What's your strategy for motivation and achievement?";
    case 'yony_guards':
      return "How would you protect and maintain harmony in the Yonyverse? What's your approach to conflict resolution and community management?";
    default:
      return "Describe your vision and approach for contributing to the Yonyverse. What unique value do you bring?";
  }
};

const getIntentionPrompt = (role?: GameRole) => {
  switch (role) {
    case 'yony_flowers_tutor':
      return "What drives your passion for education and mentorship? How do you see yourself growing through this experience?";
    case 'yony_flowers_project':
      return "What personal motivations led you to this project idea? How will this experience contribute to your own growth?";
    default:
      return "What are your personal motivations for joining the Yonyverse? How do you hope to grow through this experience?";
  }
};

const EngagementStep = ({ engagementText, intentionText, projectCategory, role, onUpdate }: EngagementStepProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Your <span style={{ color: "#e76830" }}>Engagement</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Tell us about your vision, expertise, and personal motivations for joining the Yonyverse.
        </p>
      </div>

      <div className="space-y-6">
        {/* Specialization Domain - for Yony Flowers Project */}
        {role === 'yony_flowers_project' && (
          <div className="space-y-2">
            <Label htmlFor="project-category" className="text-base font-medium">
              Project Category / Domain of Specialization *
            </Label>
            <Select
              value={projectCategory || ""}
              onValueChange={(value) => onUpdate({ projectCategory: value })}
            >
              <SelectTrigger id="project-category" className="h-14">
                <SelectValue placeholder="Select your project category..." />
              </SelectTrigger>
              <SelectContent>
                {projectCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              This defines your area of specialization and helps us understand your project focus.
            </p>
          </div>
        )}

        {/* Vision & Approach */}
        <div className="space-y-2">
          <Label htmlFor="engagement" className="text-base font-medium">
            Your Vision & Approach *
          </Label>
          <Textarea
            id="engagement"
            value={engagementText}
            onChange={(e) => onUpdate({ engagementText: e.target.value })}
            placeholder={getEngagementPrompt(role)}
            className="min-h-32 resize-none"
          />
          <p className="text-sm text-muted-foreground">
            Minimum 50 characters. Share your professional vision and approach for your role.
          </p>
        </div>

        {/* Personal Intentions */}
        <div className="space-y-2">
          <Label htmlFor="intention" className="text-base font-medium">
            Personal Motivations & Growth *
          </Label>
          <Textarea
            id="intention"
            value={intentionText}
            onChange={(e) => onUpdate({ intentionText: e.target.value })}
            placeholder={getIntentionPrompt(role)}
            className="min-h-32 resize-none"
          />
          <p className="text-sm text-muted-foreground">
            Minimum 50 characters. Tell us about your personal motivations and expected growth.
          </p>
        </div>

        {/* Progress indicator */}
        {engagementText.length >= 50 && intentionText.length >= 50 && (
          <motion.div
            className="p-4 rounded-lg bg-green-50 border border-green-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-medium text-green-700">
              ✨ Great! Your engagement responses meet the minimum requirements.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EngagementStep;