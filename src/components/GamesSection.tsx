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
  { id: "worldtour", title: "Yony World Tour", description: "Weave digital experiences that bring the mythological universe to life." },
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
    className={`text-left p-6 rounded-2xl sacred-border transition-all duration-300 cursor-pointer ${
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
    <h4 className="font-serif text-xl font-bold mb-2 text-foreground">{game.title}</h4>
    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{game.description}</p>
    <span className="text-copper text-sm font-sans font-medium">Discover Game →</span>
  </motion.button>
);

const GamesSection = () => {
  const [activeVisibility, setActiveVisibility] = useState("voices");
  const [activeEngagement, setActiveEngagement] = useState("lights");

  const ActiveVisibilityComponent = onboardingComponents[activeVisibility];
  const ActiveEngagementComponent = onboardingComponents[activeEngagement];

  return (
    <section id="games" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            The <span className="text-gradient-copper italic">Yony Games</span>
          </h2>
          <p className="text-muted-foreground text-lg">Eight games that elevate dreams, cultures and wisdom.</p>
        </motion.div>

        {/* Visibility Games */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Eye className="w-5 h-5 text-copper" />
            <h3 className="font-serif text-2xl font-semibold">Visibility Games</h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: 2x2 grid */}
            <div className="w-full lg:w-[40%] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {visibilityGames.map((game, i) => (
                <GameCard
                  key={game.id}
                  game={game}
                  isActive={activeVisibility === game.id}
                  onClick={() => setActiveVisibility(game.id)}
                  index={i}
                />
              ))}
            </div>

            {/* Right: preview panel */}
            <div className="w-full lg:w-[60%] rounded-2xl border border-border bg-card overflow-hidden relative min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVisibility}
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="w-full h-full [&>div]:!h-full [&>div]:!min-h-0">
                    <ActiveVisibilityComponent />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Engagement Games */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="w-5 h-5 text-copper" />
            <h3 className="font-serif text-2xl font-semibold">Engagement Games</h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-[40%] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {engagementGames.map((game, i) => (
                <GameCard
                  key={game.id}
                  game={game}
                  isActive={activeEngagement === game.id}
                  onClick={() => setActiveEngagement(game.id)}
                  index={i}
                />
              ))}
            </div>

            <div className="w-full lg:w-[60%] rounded-2xl border border-border bg-card overflow-hidden relative min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEngagement}
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="w-full h-full [&>div]:!h-full [&>div]:!min-h-0">
                    <ActiveEngagementComponent />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
