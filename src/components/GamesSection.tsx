import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Handshake, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
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

function MobileModal({ activeId, onClose }: { activeId: string; onClose: () => void }) {
  const ActiveComponent = onboardingComponents[activeId];
  const game = [...visibilityGames, ...engagementGames].find((g) => g.id === activeId);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <span className="font-serif text-lg font-bold text-foreground">{game?.title}</span>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition-colors cursor-pointer">
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
      <div className="flex-1 relative overflow-hidden">
        <ActiveComponent />
      </div>
    </motion.div>
  );
}

function GameGroup({
  icon: Icon,
  title,
  description,
  games,
  activeId,
  onSelect,
  isMobile,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  games: typeof visibilityGames;
  activeId: string;
  onSelect: (id: string) => void;
  isMobile: boolean;
}) {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="w-5 h-5 text-copper" />
          <h3 className="font-serif text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm ml-8">{description}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className={`w-full ${isMobile ? "" : "lg:w-[40%]"} grid grid-cols-1 sm:grid-cols-2 gap-4`}>
          {games.map((game, i) => (
            <GameCard key={game.id} game={game} isActive={!isMobile && activeId === game.id} onClick={() => onSelect(game.id)} index={i} />
          ))}
        </div>
        {!isMobile && <PreviewPanel activeId={activeId} />}
      </div>
    </div>
  );
}

const GamesSection = () => {
  const [activeVisibility, setActiveVisibility] = useState("voices");
  const [activeEngagement, setActiveEngagement] = useState("lights");
  const [mobileModal, setMobileModal] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const handleSelect = (id: string, setter: (id: string) => void) => {
    setter(id);
    if (isMobile) setMobileModal(id);
  };

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
          <GameGroup isMobile={isMobile} icon={Eye} title="Visibility Games" description="These games help Yony Seeds share their vision, values, personality, and story with their community." games={visibilityGames} activeId={activeVisibility} onSelect={(id) => handleSelect(id, setActiveVisibility)} />
          <GameGroup isMobile={isMobile} icon={Handshake} title="Engagement Games" description="Players explore the games, discover new perspectives, and earn Light Points to redistribute to Yony Flowers." games={engagementGames} activeId={activeEngagement} onSelect={(id) => handleSelect(id, setActiveEngagement)} />
        </div>
      </div>

      <AnimatePresence>
        {mobileModal && (
          <MobileModal activeId={mobileModal} onClose={() => setMobileModal(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default GamesSection;
