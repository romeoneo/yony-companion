import { motion } from "framer-motion";
import { Heart, Target, Lightbulb } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GameRole, RegistrationData } from "@/pages/JoinGames";

interface EngagementStepProps {
  engagementText: string;
  intentionText: string;
  role?: GameRole;
  onUpdate: (data: Partial<RegistrationData>) => void;
}

const getEngagementPrompts = (role?: GameRole) => {
  const prompts = {
    yony_flowers_tutor: {
      engagement: "What motivates you to become a tutor and mentor 8 Yony Seeds in their development?",
      intention: "What vision do you carry for the impact you and your mentees will have together?"
    },
    yony_flowers_project: {
      engagement: "Tell us about your impact project. What problem do you want to solve?",
      intention: "How do you see your contribution to the Yonyverse and the evolution of your project?"
    },
    yony_brands: {
      engagement: "What are you passionate about when it comes to creating visual identities and brands?",
      intention: "How do you wish to contribute to the visual identity of the Yonyverse?"
    },
    yony_lights: {
      engagement: "Why is it important for you to illuminate and amplify stories?",
      intention: "Which Yonyverse stories do you want to bring into the light?"
    },
    yony_places: {
      engagement: "What draws you to exploring and connecting territories?",
      intention: "How do you envision connecting the different places of the Yonyverse?"
    },
    yony_angels: {
      engagement: "What drives you to support and nurture others?",
      intention: "What kind of support do you wish to bring to the community?"
    },
    yony_magics: {
      engagement: "What is your approach to creating extraordinary experiences?",
      intention: "What kinds of magical experiences do you want to create for the Yonyverse?"
    },
    yony_stars: {
      engagement: "What inspires you to shine and inspire others through excellence?",
      intention: "In what area do you wish to excel and lead by example?"
    },
    yony_guards: {
      engagement: "Why are community protection and harmony important to you?",
      intention: "How do you plan to maintain the balance and safety of the Yonyverse?"
    }
  };

  return prompts[role!] || prompts.yony_flowers_project;
};

const EngagementStep = ({ engagementText, intentionText, role, onUpdate }: EngagementStepProps) => {
  const prompts = getEngagementPrompts(role);

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Your <span style={{ color: "#e76830" }}>Engagement</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Share your motivation and vision with the Yonyverse community.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        {/* Engagement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
              <Heart className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <Label htmlFor="engagement" className="text-lg font-medium block mb-2">
                Your engagement *
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                {prompts.engagement}
              </p>
              <Textarea
                id="engagement"
                value={engagementText}
                onChange={(e) => onUpdate({ engagementText: e.target.value })}
                placeholder="Express your passion and what motivates you to take on this role..."
                className="min-h-[120px] text-base"
                maxLength={500}
              />
              <div className="text-xs text-muted-foreground mt-1 text-right">
                {engagementText.length}/500 characters
              </div>
            </div>
          </div>
        </motion.div>

        {/* Intention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center mt-1">
              <Target className="w-4 h-4 text-orange-500" />
            </div>
            <div className="flex-1">
              <Label htmlFor="intention" className="text-lg font-medium block mb-2">
                Your intention *
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                {prompts.intention}
              </p>
              <Textarea
                id="intention"
                value={intentionText}
                onChange={(e) => onUpdate({ intentionText: e.target.value })}
                placeholder="Describe your vision and the impact you wish to have..."
                className="min-h-[120px] text-base"
                maxLength={500}
              />
              <div className="text-xs text-muted-foreground mt-1 text-right">
                {intentionText.length}/500 characters
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-secondary/50 p-6 rounded-xl border border-border"
        >
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-yellow-500 mt-1" />
            <div>
              <h4 className="font-medium mb-2">Tip for an authentic application</h4>
              <p className="text-sm text-muted-foreground">
                Be sincere and specific. The Yonyverse community values authenticity
                and genuine passion. Feel free to share your personal experiences
                and what makes your approach unique.
              </p>
            </div>
          </div>
        </motion.div>

        {engagementText && intentionText && (
          <motion.div
            className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm text-primary font-medium">
              ✨ Excellent! Your engagement and intention are clearly expressed.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EngagementStep;
