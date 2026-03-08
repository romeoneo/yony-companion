import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Handshake } from "lucide-react";
import OnboardingVoices from "@/components/onboarding/OnboardingVoices";
import OnboardingVisions from "@/components/onboarding/OnboardingVisions";
import OnboardingLegends from "@/components/onboarding/OnboardingLegends";
import OnboardingKeys from "@/components/onboarding/OnboardingKeys";
import OnboardingLights from "@/components/onboarding/OnboardingLights";
import OnboardingBrands from "@/components/onboarding/OnboardingBrands";
import OnboardingPlaces from "@/components/onboarding/OnboardingPlaces";
import OnboardingWorldTour from "@/components/onboarding/OnboardingWorldTour";

const visibilityGames = [
  { id: "voices", title: "Yony Voices", description: "Amplify cultural stories through voice and narrative, sharing wisdom across communities." },
  { id: "visions", title: "Yony Visions", description: "Give visibility to your project through art — photography, illustration, music and beyond." },
  { id: "legends", title: "Yony Legends", description: "Turn mystery into imagination. Uncover the legends hidden within each territory." },
  { id: "keys", title: "Yony Keys", description: "Unlock cultural knowledge through collaborative riddles and ancient wisdom puzzles." },
];

const engagementGames = [
  { id: "lights", title: "Yony Lights", description: "Illuminate impact projects through creative storytelling and cultural celebration." },
  { id: "brands", title: "Yony Brands", description: "Connect brands with cultural values, creating authentic partnerships that elevate dreams." },
  { id: "places", title: "Yony Places", description: "Discover sacred spaces and venues that host the physical games across territories." },
  { id: "worldtour", title: "Yony Travels", description: "Discover the cultural traditions and connections that unite 16 inspiring countries." },
];

const onboardingComponents: Record<string, React.ComponentType> = {
  voices: OnboardingVoices,
  visions: OnboardingVisions,
  legends: OnboardingLegends,
  keys: OnboardingKeys,
  lights: OnboardingLights,
  brands: OnboardingBrands,
  places: OnboardingPlaces,
  worldtour: OnboardingWorldTour,
};

interface GameCardProps {
  game: { id: string; title: string; description: string };
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const GameCard = ({ game, isActive, onClick, index }: GameCardProps) => (
  <motion.button
    onClick={onClick}
    className={`text-left p-5 rounded-2xl sacred-border transition-all duration-300 cursor-pointer ${
      isActive
        ? "border-2 border-copper bg-copper/5 shadow-md"
        : "bg-card hover:border-copper/40"
    }`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    whileHover={{ y: -2 }}
  >
    <h4 className="font-serif text-lg font-bold mb-1.5 text-foreground">{game.title}</h4>
    <p className="text-muted-foreground text-sm leading-relaxed mb-2">{game.description}</p>
    <span className="text-copper text-sm font-sans font-medium">Discover Game →</span>
  </motion.button>
);

function PreviewPanel({ activeId }: { activeId: string }) {
  const ActiveComponent = onboardingComponents[activeId];
  return (
    <div className="w-full lg:w-[60%] rounded-2xl border border-border bg-card overflow-hidden relative h-[480px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function GameGroup({
  icon: Icon,
  title,
  games,
  activeId,
  onSelect,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  games: typeof visibilityGames;
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Icon className="w-5 h-5 text-copper" />
        <h3 className="font-serif text-2xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[40%] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {games.map((game, i) => (
            <GameCard key={game.id} game={game} isActive={activeId === game.id} onClick={() => onSelect(game.id)} index={i} />
          ))}
        </div>
        <PreviewPanel activeId={activeId} />
      </div>
    </div>
  );
}

const GamesSection = () => {
  const [activeVisibility, setActiveVisibility] = useState("voices");
  const [activeEngagement, setActiveEngagement] = useState("lights");

  return (
    <section id="games" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            The <span className="text-gradient-copper italic">Yony Games</span>
          </h2>
          <p className="text-muted-foreground text-lg">Eight games that elevate dreams, cultures and wisdom.</p>
        </motion.div>

        <div className="space-y-20">
          <GameGroup icon={Eye} title="Visibility Games" games={visibilityGames} activeId={activeVisibility} onSelect={setActiveVisibility} />
          <GameGroup icon={Handshake} title="Engagement Games" games={engagementGames} activeId={activeEngagement} onSelect={setActiveEngagement} />
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
