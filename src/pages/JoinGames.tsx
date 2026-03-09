import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Users, Sparkles, Trophy, Globe, Heart, Wand2, Star, Shield, Home, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import RoleSelectionStep from "@/components/funnel/RoleSelectionStep";
import PersonalInfoStep from "@/components/funnel/PersonalInfoStep";
import SpecializationStep from "@/components/funnel/SpecializationStep";
import EngagementStep from "@/components/funnel/EngagementStep";
import ConfirmationStep from "@/components/funnel/ConfirmationStep";

export type GameRole = 
  | 'yony_flowers_tutor'
  | 'yony_flowers_project'
  | 'yony_brands'
  | 'yony_lights'
  | 'yony_places'
  | 'yony_angels'
  | 'yony_magics'
  | 'yony_stars'
  | 'yony_guards';

export type CountryCode = 
  | 'france' | 'spain' | 'italy' | 'germany' | 'portugal' | 'morocco'
  | 'senegal' | 'ivory_coast' | 'burkina_faso' | 'mali' | 'algeria' 
  | 'tunisia' | 'madagascar' | 'mauritius' | 'canada' | 'belgium';

export interface RegistrationData {
  role?: GameRole;
  fullName?: string;
  email?: string;
  country?: CountryCode;
  projectCategory?: string;
  engagementText?: string;
  intentionText?: string;
  avatarFile?: File;
  tutorMissionAccepted?: boolean;
}

const roleConfig = {
  yony_flowers_tutor: {
    name: "Yony Flowers (Tutor)",
    icon: Users,
    color: "hsl(var(--primary))",
    description: "Guide and mentor 8 Yony Seeds in their development journey"
  },
  yony_flowers_project: {
    name: "Yony Flowers (Project Bearer)",
    icon: Sparkles,
    color: "hsl(var(--primary))",
    description: "Bring an impact project to a specific country"
  },
  yony_brands: {
    name: "Yony Brands",
    icon: Trophy,
    color: "#e76830",
    description: "Create and develop the visual identity of the Yonyverse"
  },
  yony_lights: {
    name: "Yony Lights",
    icon: Sparkles,
    color: "#f59e0b",
    description: "Illuminate and amplify the stories of the journey"
  },
  yony_places: {
    name: "Yony Places",
    icon: Globe,
    color: "#10b981",
    description: "Explore and connect the territories of the game"
  },
  yony_angels: {
    name: "Yony Angels",
    icon: Heart,
    color: "#ec4899",
    description: "Support and nurture the community"
  },
  yony_magics: {
    name: "Yony Magics",
    icon: Wand2,
    color: "#8b5cf6",
    description: "Create extraordinary and immersive experiences"
  },
  yony_stars: {
    name: "Yony Stars",
    icon: Star,
    color: "#06b6d4",
    description: "Shine and inspire through excellence"
  },
  yony_guards: {
    name: "Yony Guards",
    icon: Shield,
    color: "#374151",
    description: "Protect and maintain the harmony of the Yonyverse"
  }
};

const JoinGames = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({});
  const totalSteps = 5;

  const progressPercentage = (currentStep / totalSteps) * 100;

  const updateData = (data: Partial<RegistrationData>) => {
    setRegistrationData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel your registration? All entered information will be lost.")) {
      navigate("/");
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!registrationData.role;
      case 2:
        return !!(registrationData.fullName && registrationData.email);
      case 3:
        // All roles need a country, Yony Flowers Tutor needs mission acceptance
        if (registrationData.role === 'yony_flowers_tutor') {
          return !!(registrationData.country && registrationData.tutorMissionAccepted);
        }
        return !!registrationData.country;
      case 4:
        // Yony Flowers Project needs project category in addition to engagement texts
        if (registrationData.role === 'yony_flowers_project') {
          return !!(registrationData.engagementText && registrationData.intentionText && registrationData.projectCategory);
        }
        return !!(registrationData.engagementText && registrationData.intentionText);
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Progress */}
      <div className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="flex items-center gap-2 shrink-0"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
            <h1 className="text-2xl font-serif font-bold flex-1 text-center">
              Join the <span style={{ color: "#e76830" }}>Yonyverse</span>
            </h1>
            <div className="text-sm text-muted-foreground shrink-0">
              Step {currentStep} of {totalSteps}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Role</span>
              <span>Profile</span>
              <span>Country</span>
              <span>Engagement</span>
              <span>Confirmation</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Card className="p-8">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <RoleSelectionStep
                  selectedRole={registrationData.role}
                  onRoleSelect={(role) => updateData({ role })}
                  roleConfig={roleConfig}
                />
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <PersonalInfoStep
                  fullName={registrationData.fullName || ""}
                  email={registrationData.email || ""}
                  avatarFile={registrationData.avatarFile}
                  onUpdate={updateData}
                />
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <SpecializationStep
                  role={registrationData.role}
                  country={registrationData.country}
                  tutorMissionAccepted={registrationData.tutorMissionAccepted}
                  onUpdate={updateData}
                />
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <EngagementStep
                  engagementText={registrationData.engagementText || ""}
                  intentionText={registrationData.intentionText || ""}
                  projectCategory={registrationData.projectCategory}
                  role={registrationData.role}
                  onUpdate={updateData}
                />
              </motion.div>
            )}

            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <ConfirmationStep
                  registrationData={registrationData}
                  roleConfig={roleConfig}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {currentStep < 5 && (
            <div className="flex justify-between mt-8 pt-6 border-t">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  className="flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </Button>
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
              </div>

              <Button
                onClick={nextStep}
                disabled={!canProceed()}
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default JoinGames;
