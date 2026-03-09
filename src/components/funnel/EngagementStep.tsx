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
      engagement: "Qu'est-ce qui vous motive à devenir un tuteur et à accompagner 8 Yony Seeds dans leur développement ?",
      intention: "Quelle vision portez-vous pour l'impact que vous et vos protégés aurez ensemble ?"
    },
    yony_flowers_project: {
      engagement: "Parlez-nous de votre projet d'impact. Quelle problématique souhaitez-vous résoudre ?",
      intention: "Comment voyez-vous votre contribution au Yonyverse et l'évolution de votre projet ?"
    },
    yony_brands: {
      engagement: "Qu'est-ce qui vous passionne dans la création d'identités visuelles et de marques ?",
      intention: "Comment souhaitez-vous contribuer à l'identité visuelle du Yonyverse ?"
    },
    yony_lights: {
      engagement: "Pourquoi est-il important pour vous d'illuminer et d'amplifier les histoires ?",
      intention: "Quelles histoires du Yonyverse souhaitez-vous mettre en lumière ?"
    },
    yony_places: {
      engagement: "Qu'est-ce qui vous attire dans l'exploration et la connexion des territoires ?",
      intention: "Comment envisagez-vous de connecter les différents lieux du Yonyverse ?"
    },
    yony_angels: {
      engagement: "Qu'est-ce qui vous pousse à accompagner et soutenir les autres ?",
      intention: "Quel type de soutien souhaitez-vous apporter à la communauté ?"
    },
    yony_magics: {
      engagement: "Quelle est votre approche pour créer des expériences extraordinaires ?",
      intention: "Quels types d'expériences magiques voulez-vous créer pour le Yonyverse ?"
    },
    yony_stars: {
      engagement: "Qu'est-ce qui vous inspire à briller et inspirer les autres par votre excellence ?",
      intention: "Dans quel domaine souhaitez-vous exceller et servir d'exemple ?"
    },
    yony_guards: {
      engagement: "Pourquoi la protection et l'harmonie de la communauté sont-elles importantes pour vous ?",
      intention: "Comment comptez-vous maintenir l'équilibre et la sécurité du Yonyverse ?"
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
          Votre <span style={{ color: "#e76830" }}>Engagement</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Partagez votre motivation et votre vision avec la communauté du Yonyverse.
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
                Votre engagement *
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                {prompts.engagement}
              </p>
              <Textarea
                id="engagement"
                value={engagementText}
                onChange={(e) => onUpdate({ engagementText: e.target.value })}
                placeholder="Exprimez votre passion et ce qui vous motive à rejoindre ce rôle..."
                className="min-h-[120px] text-base"
                maxLength={500}
              />
              <div className="text-xs text-muted-foreground mt-1 text-right">
                {engagementText.length}/500 caractères
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
                Votre intention *
              </Label>
              <p className="text-sm text-muted-foreground mb-3">
                {prompts.intention}
              </p>
              <Textarea
                id="intention"
                value={intentionText}
                onChange={(e) => onUpdate({ intentionText: e.target.value })}
                placeholder="Décrivez votre vision et l'impact que vous souhaitez avoir..."
                className="min-h-[120px] text-base"
                maxLength={500}
              />
              <div className="text-xs text-muted-foreground mt-1 text-right">
                {intentionText.length}/500 caractères
              </div>
            </div>
          </div>
        </motion.div>

        {/* Inspiration tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-secondary/50 p-6 rounded-xl border border-border"
        >
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-yellow-500 mt-1" />
            <div>
              <h4 className="font-medium mb-2">Conseil pour une candidature authentique</h4>
              <p className="text-sm text-muted-foreground">
                Soyez sincère et spécifique. La communauté du Yonyverse valorise l'authenticité 
                et la passion genuine. N'hésitez pas à partager vos expériences personnelles 
                et ce qui rend votre approche unique.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Progress indicator */}
        {engagementText && intentionText && (
          <motion.div
            className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm text-primary font-medium">
              ✨ Excellent ! Votre engagement et votre intention sont clairement exprimés.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EngagementStep;