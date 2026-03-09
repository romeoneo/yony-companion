import { motion } from "framer-motion";
import { Globe, Target, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { GameRole, CountryCode, RegistrationData } from "@/pages/JoinGames";

interface SpecializationStepProps {
  role?: GameRole;
  country?: CountryCode;
  projectCategory?: string;
  tutorMissionAccepted?: boolean;
  onUpdate: (data: Partial<RegistrationData>) => void;
}

const countries = [
  { code: 'france', name: 'France', flag: '🇫🇷' },
  { code: 'spain', name: 'Espagne', flag: '🇪🇸' },
  { code: 'italy', name: 'Italie', flag: '🇮🇹' },
  { code: 'germany', name: 'Allemagne', flag: '🇩🇪' },
  { code: 'portugal', name: 'Portugal', flag: '🇵🇹' },
  { code: 'morocco', name: 'Maroc', flag: '🇲🇦' },
  { code: 'senegal', name: 'Sénégal', flag: '🇸🇳' },
  { code: 'ivory_coast', name: 'Côte d\'Ivoire', flag: '🇨🇮' },
  { code: 'burkina_faso', name: 'Burkina Faso', flag: '🇧🇫' },
  { code: 'mali', name: 'Mali', flag: '🇲🇱' },
  { code: 'algeria', name: 'Algérie', flag: '🇩🇿' },
  { code: 'tunisia', name: 'Tunisie', flag: '🇹🇳' },
  { code: 'madagascar', name: 'Madagascar', flag: '🇲🇬' },
  { code: 'mauritius', name: 'Maurice', flag: '🇲🇺' },
  { code: 'canada', name: 'Canada', flag: '🇨🇦' },
  { code: 'belgium', name: 'Belgique', flag: '🇧🇪' }
];

const projectCategories = [
  "Impact Social",
  "Environnement & Durabilité", 
  "Éducation & Formation",
  "Santé & Bien-être",
  "Innovation Technologique",
  "Arts & Culture",
  "Entrepreneuriat",
  "Développement Communautaire"
];

const SpecializationStep = ({ 
  role, 
  country, 
  projectCategory, 
  tutorMissionAccepted, 
  onUpdate 
}: SpecializationStepProps) => {

  if (role === 'yony_flowers_tutor') {
    return (
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Mission <span style={{ color: "#e76830" }}>Tuteur</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            En tant que Tuteur Yony Flowers, vous avez une mission spéciale.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-primary/10 to-orange-500/10 p-8 rounded-2xl border border-primary/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-3">Votre Mission : Recruter 8 Yony Seeds</h3>
                <p className="text-muted-foreground mb-4">
                  Votre rôle est de découvrir et d'inviter <strong>8 porteurs de rêves</strong> (Yony Seeds) 
                  à rejoindre le Yonyverse. Ces personnes porteront des projets d'impact dans différentes 
                  catégories et pays.
                </p>
                <div className="bg-background/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Vos responsabilités :</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Identifier des porteurs de projets d'impact authentiques</li>
                    <li>• Les accompagner dans leur inscription au Yonyverse</li>
                    <li>• Maintenir un lien avec vos 8 Yony Seeds</li>
                    <li>• Faciliter leur intégration dans la communauté</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-lg font-medium mb-6">
              Acceptez-vous cette mission de mentorat ?
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button
                variant={tutorMissionAccepted === false ? "default" : "outline"}
                onClick={() => onUpdate({ tutorMissionAccepted: false })}
                className="px-8"
              >
                Pas maintenant
              </Button>
              <Button
                variant={tutorMissionAccepted === true ? "default" : "outline"}
                onClick={() => onUpdate({ tutorMissionAccepted: true })}
                className="px-8 flex items-center gap-2"
                style={{ 
                  backgroundColor: tutorMissionAccepted ? "#e76830" : undefined,
                  borderColor: tutorMissionAccepted ? "#e76830" : undefined 
                }}
              >
                <Check className="w-4 h-4" />
                J'accepte la mission
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (role === 'yony_flowers_project') {
    return (
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Votre <span style={{ color: "#e76830" }}>Projet</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choisissez le pays et la catégorie qui correspondent à votre projet d'impact.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Country Selection */}
          <div>
            <Label className="text-lg font-medium mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Pays d'impact *
            </Label>
            <RadioGroup 
              value={country} 
              onValueChange={(value) => onUpdate({ country: value as CountryCode })}
              className="grid grid-cols-2 md:grid-cols-3 gap-3"
            >
              {countries.map((countryOption) => (
                <div key={countryOption.code} className="flex items-center space-x-2">
                  <RadioGroupItem value={countryOption.code} id={countryOption.code} />
                  <Label 
                    htmlFor={countryOption.code}
                    className="flex items-center gap-2 cursor-pointer text-sm font-normal"
                  >
                    <span className="text-lg">{countryOption.flag}</span>
                    {countryOption.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Project Category */}
          <div>
            <Label className="text-lg font-medium mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Catégorie de projet *
            </Label>
            <RadioGroup 
              value={projectCategory} 
              onValueChange={(value) => onUpdate({ projectCategory: value })}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {projectCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <RadioGroupItem value={category} id={category} />
                  <Label 
                    htmlFor={category}
                    className="cursor-pointer text-sm font-normal"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Custom category option */}
          <div>
            <Label htmlFor="customCategory" className="text-sm font-medium">
              Autre catégorie (si non listée)
            </Label>
            <Input
              id="customCategory"
              placeholder="Décrivez votre catégorie de projet..."
              onChange={(e) => onUpdate({ projectCategory: e.target.value })}
              className="mt-2"
            />
          </div>
        </div>

        {country && projectCategory && (
          <motion.div
            className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm text-primary font-medium">
              ✨ Projet configuré : <strong>{projectCategory}</strong> en <strong>{countries.find(c => c.code === country)?.name}</strong>
            </p>
          </motion.div>
        )}
      </div>
    );
  }

  // For other roles, show a simpler confirmation
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Prêt à <span style={{ color: "#e76830" }}>commencer</span> !
        </h2>
        <p className="text-muted-foreground text-lg">
          Votre rôle est configuré. Passons à la définition de votre engagement.
        </p>
      </div>

      <motion.div
        className="max-w-md mx-auto p-6 rounded-xl bg-primary/5 border border-primary/20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Check className="w-8 h-8 text-primary mx-auto mb-3" />
        <p className="font-medium">Configuration terminée !</p>
        <p className="text-sm text-muted-foreground">
          Vous pouvez passer à l'étape suivante.
        </p>
      </motion.div>
    </div>
  );
};

export default SpecializationStep;