import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { RegistrationData, GameRole } from "@/pages/JoinGames";

interface ConfirmationStepProps {
  registrationData: RegistrationData;
  roleConfig: Record<GameRole, any>;
}

const countryNames: Record<string, string> = {
  france: 'France', spain: 'Spain', italy: 'Italy', germany: 'Germany',
  portugal: 'Portugal', morocco: 'Morocco', senegal: 'Senegal',
  ivory_coast: 'Ivory Coast', burkina_faso: 'Burkina Faso', mali: 'Mali',
  algeria: 'Algeria', tunisia: 'Tunisia', madagascar: 'Madagascar',
  mauritius: 'Mauritius', canada: 'Canada', belgium: 'Belgium'
};

const ConfirmationStep = ({ registrationData, roleConfig }: ConfirmationStepProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!registrationData.role || !registrationData.fullName || !registrationData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let avatarUrl = null;

      if (registrationData.avatarFile) {
        const fileExt = registrationData.avatarFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(fileName, registrationData.avatarFile);

        if (uploadError) {
          throw new Error('Error uploading avatar');
        }

        const { data: { publicUrl } } = supabase.storage
          .from('avatars')
          .getPublicUrl(fileName);

        avatarUrl = publicUrl;
      }

      const { error: insertError } = await supabase
        .from('game_registrations')
        .insert({
          email: registrationData.email,
          full_name: registrationData.fullName,
          role: registrationData.role,
          country: registrationData.country || null,
          project_category: registrationData.projectCategory || null,
          engagement_text: registrationData.engagementText || '',
          intention_text: registrationData.intentionText || '',
          avatar_url: avatarUrl,
          tutor_mission_accepted: registrationData.tutorMissionAccepted || false,
          registration_step: 5,
          is_completed: true
        });

      if (insertError) {
        throw insertError;
      }

      setIsSubmitted(true);

      toast({
        title: "Registration successful!",
        description: "Your application has been submitted successfully.",
      });

    } catch (error: any) {
      console.error('Error submitting registration:', error);
      toast({
        title: "Error",
        description: error.message || "An error occurred during registration.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>

        <h2 className="text-3xl font-serif font-bold mb-4">
          Welcome to the <span style={{ color: "#e76830" }}>Yonyverse</span>!
        </h2>

        <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto">
          Your registration has been submitted successfully. The Yonyverse team will review
          your application and keep you informed about the next steps.
        </p>

        <div className="bg-secondary/50 p-6 rounded-xl max-w-lg mx-auto">
          <h3 className="font-semibold mb-2">Next steps:</h3>
          <ul className="text-sm text-muted-foreground space-y-1 text-left">
            <li>• Review of your application by the team</li>
            <li>• Email notification within 48 hours</li>
            <li>• Invitation to join the official community</li>
            <li>• The beginning of your adventure in the Yonyverse</li>
          </ul>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Confirm your <span style={{ color: "#e76830" }}>Registration</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Review your information before submitting your application.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Profile Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Name:</span>
              <span className="font-medium">{registrationData.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email:</span>
              <span className="font-medium">{registrationData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Photo:</span>
              <span className="font-medium">
                {registrationData.avatarFile ? "Uploaded ✓" : "Not provided"}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Role Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Role
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <Badge
                variant="secondary"
                className="px-3 py-1"
                style={{ backgroundColor: `${roleConfig[registrationData.role!]?.color}20` }}
              >
                {roleConfig[registrationData.role!]?.name}
              </Badge>
            </div>

            {registrationData.role === 'yony_flowers_tutor' && (
              <div className="bg-secondary/30 p-3 rounded-lg">
                <p className="text-sm">
                  <strong>Mission:</strong> Recruit and mentor 8 Yony Seeds
                </p>
                <p className="text-sm text-green-600">
                  ✓ Mission accepted
                </p>
              </div>
            )}

            {registrationData.role === 'yony_flowers_project' && (
              <div className="bg-secondary/30 p-3 rounded-lg space-y-2">
                <p className="text-sm">
                  <strong>Country:</strong> {registrationData.country ? countryNames[registrationData.country] : ''}
                </p>
                <p className="text-sm">
                  <strong>Category:</strong> {registrationData.projectCategory}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Engagement Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Engagement & Intention
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Your engagement:</h4>
              <p className="text-sm text-muted-foreground bg-secondary/30 p-3 rounded-lg">
                {registrationData.engagementText}
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Your intention:</h4>
              <p className="text-sm text-muted-foreground bg-secondary/30 p-3 rounded-lg">
                {registrationData.intentionText}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <motion.div
          className="text-center pt-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            size="lg"
            className="px-12 py-4 text-lg bg-primary hover:bg-primary/90"
          >
            {isSubmitting ? (
              <>
                <Loader className="w-5 h-5 animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Submit my application
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
