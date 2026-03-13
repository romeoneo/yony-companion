import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!registrationData.role || !registrationData.fullName || !registrationData.email) {
      toast({ title: t("confirmation.error"), description: t("confirmation.errorFields"), variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      // If Supabase is not configured, mock the submission
      if (!supabase || !import.meta.env.VITE_SUPABASE_URL) {
        await new Promise(resolve => setTimeout(resolve, 1200));
        setIsSubmitted(true);
        toast({ title: "Bienvenue dans le Yonyverse !", description: t("confirmation.successDesc") });
        return;
      }

      let avatarUrl = null;

      if (registrationData.avatarFile) {
        const fileExt = registrationData.avatarFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from('avatars').upload(fileName, registrationData.avatarFile);
        if (uploadError) throw new Error(t("confirmation.errorUpload"));
        const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(fileName);
        avatarUrl = publicUrl;
      }

      const engagementParts: string[] = [];
      if (registrationData.contributionTypes?.length) {
        engagementParts.push(`Contributions: ${registrationData.contributionTypes.map(k => t(`engagementStep.contributions.${k}`)).join(', ')}`);
      }
      if (registrationData.areasOfInterest?.length) {
        engagementParts.push(`Interests: ${registrationData.areasOfInterest.map(k => t(`engagementStep.interests.${k}`)).join(', ')}`);
      }
      if (registrationData.roleIdentity) {
        engagementParts.push(`Role: ${t(`engagementStep.roles.${registrationData.roleIdentity}`)}`);
      }
      const engagementText = engagementParts.join(' | ');
      const intentionText = registrationData.optionalMessage || '';

      const { error: insertError } = await supabase
        .from('game_registrations')
        .insert({
          email: registrationData.email,
          full_name: registrationData.fullName,
          role: registrationData.role,
          country: registrationData.country || null,
          project_category: registrationData.projectCategory || null,
          engagement_text: engagementText,
          intention_text: intentionText,
          avatar_url: avatarUrl,
          tutor_mission_accepted: registrationData.tutorMissionAccepted || false,
          registration_step: 5,
          is_completed: true
        });

      if (insertError) throw insertError;

      const contributionLabels = registrationData.contributionTypes?.map(k => t(`engagementStep.contributions.${k}`)) || [];
      const interestLabels = registrationData.areasOfInterest?.map(k => t(`engagementStep.interests.${k}`)) || [];
      const roleName = roleConfig[registrationData.role!]?.name || registrationData.role;

      await supabase.from('registrations').insert({
        name: registrationData.fullName,
        email: registrationData.email,
        country: registrationData.country || null,
        contribution_types: contributionLabels,
        interest_areas: interestLabels,
        role: roleName,
        message: registrationData.optionalMessage || '',
      });

      supabase.functions.invoke('send-registration-email', {
        body: {
          name: registrationData.fullName,
          email: registrationData.email,
          country: registrationData.country || null,
          role: roleName,
          contribution_types: contributionLabels,
          interest_areas: interestLabels,
          message: registrationData.optionalMessage || '',
        },
      }).catch(err => console.error('Email sending failed:', err));

      setIsSubmitted(true);
      toast({ title: t("confirmation.successTitle"), description: t("confirmation.successDesc") });
    } catch (error: any) {
      console.error('Error submitting registration:', error);
      toast({ title: t("confirmation.error"), description: error.message || t("confirmation.errorGeneric"), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-serif font-bold mb-4">
          {t("confirmation.welcomeTitle")} <span style={{ color: "#e76830" }}>{t("confirmation.welcomeTitleAccent")}</span>!
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto">{t("confirmation.welcomeDesc")}</p>
        <div className="bg-secondary/50 p-6 rounded-xl max-w-lg mx-auto">
          <h3 className="font-semibold mb-2">{t("confirmation.nextSteps")}</h3>
          <ul className="text-sm text-muted-foreground space-y-1 text-left">
            <li>• {t("confirmation.nextStep1")}</li>
            <li>• {t("confirmation.nextStep2")}</li>
            <li>• {t("confirmation.nextStep3")}</li>
            <li>• {t("confirmation.nextStep4")}</li>
          </ul>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          {t("confirmation.title")} <span style={{ color: "#e76830" }}>{t("confirmation.titleAccent")}</span>
        </h2>
        <p className="text-muted-foreground text-lg">{t("confirmation.subtitle")}</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Profile Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {t("confirmation.profile")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("confirmation.name")}</span>
              <span className="font-medium">{registrationData.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("confirmation.email")}</span>
              <span className="font-medium">{registrationData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("confirmation.photo")}</span>
              <span className="font-medium">{registrationData.avatarFile ? t("confirmation.uploaded") : t("confirmation.notProvided")}</span>
            </div>
          </CardContent>
        </Card>

        {/* Role Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              {t("confirmation.role")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary" className="px-3 py-1" style={{ backgroundColor: `${roleConfig[registrationData.role!]?.color}20` }}>
              {roleConfig[registrationData.role!]?.name}
            </Badge>
            {registrationData.role === 'yony_flowers_tutor' && (
              <div className="bg-secondary/30 p-3 rounded-lg mt-3">
                <p className="text-sm"><strong>{t("confirmation.mission")}</strong> {t("confirmation.missionDesc")}</p>
                <p className="text-sm text-green-600">{t("confirmation.missionAccepted")}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contribution Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              {t("confirmation.engagementIntention")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {(registrationData.contributionTypes?.length ?? 0) > 0 && (
              <div>
                <h4 className="font-medium mb-2">{t("engagementStep.contributionTitle")}</h4>
                <div className="flex flex-wrap gap-2">
                  {registrationData.contributionTypes!.map((key) => (
                    <Badge key={key} variant="outline" className="text-xs">{t(`engagementStep.contributions.${key}`)}</Badge>
                  ))}
                </div>
              </div>
            )}
            {(registrationData.areasOfInterest?.length ?? 0) > 0 && (
              <div>
                <h4 className="font-medium mb-2">{t("engagementStep.interestsTitle")}</h4>
                <div className="flex flex-wrap gap-2">
                  {registrationData.areasOfInterest!.map((key) => (
                    <Badge key={key} variant="outline" className="text-xs">{t(`engagementStep.interests.${key}`)}</Badge>
                  ))}
                </div>
              </div>
            )}
            {registrationData.roleIdentity && (
              <div>
                <h4 className="font-medium mb-2">{t("engagementStep.roleTitle")}</h4>
                <Badge variant="secondary">{t(`engagementStep.roles.${registrationData.roleIdentity}`)}</Badge>
              </div>
            )}
            {registrationData.optionalMessage && (
              <div>
                <h4 className="font-medium mb-2">{t("engagementStep.optionalTitle")}</h4>
                <p className="text-sm text-muted-foreground bg-secondary/30 p-3 rounded-lg">{registrationData.optionalMessage}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <motion.div className="text-center pt-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button onClick={handleSubmit} disabled={isSubmitting} size="lg" className="px-12 py-4 text-lg bg-primary hover:bg-primary/90">
            {isSubmitting ? (
              <><Loader className="w-5 h-5 animate-spin mr-2" />{t("confirmation.submitting")}</>
            ) : (
              <><Send className="w-5 h-5 mr-2" />{t("confirmation.submit")}</>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
