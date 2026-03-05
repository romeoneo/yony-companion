import { motion } from "framer-motion";
import { Eye, Handshake } from "lucide-react";

const visibilityGames = [
  { title: "Yony Voices", description: "Amplify cultural stories through voice and narrative, sharing wisdom across communities." },
  { title: "Yony Visions", description: "Give visibility to your project through art — photography, illustration, music and beyond." },
  { title: "Yony Legends", description: "Turn mystery into imagination. Uncover the legends hidden within each territory." },
  { title: "Yony Keys", description: "Unlock cultural knowledge through collaborative riddles and ancient wisdom puzzles." },
];

const engagementGames = [
  { title: "Yony Lights", description: "Illuminate impact projects through creative storytelling and cultural celebration." },
  { title: "Yony Brands", description: "Connect brands with cultural values, creating authentic partnerships that elevate dreams." },
  { title: "Yony Places", description: "Discover sacred spaces and venues that host the physical games across territories." },
  { title: "Yony Magics", description: "Weave digital experiences that bring the mythological universe to life." },
];

const GameCard = ({ game, index }: { game: { title: string; description: string }; index: number }) => (
  <motion.div
    className="p-6 rounded-2xl bg-card sacred-border hover:glow-soft transition-all duration-500 group cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -3 }}
  >
    <h4 className="font-serif text-xl font-bold mb-3 text-foreground group-hover:text-copper transition-colors">{game.title}</h4>
    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{game.description}</p>
    <button className="text-copper text-sm font-sans-body font-medium hover:underline">
      Discover Game →
    </button>
  </motion.div>
);

const GamesSection = () => {
  return (
    <section id="games" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
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

        {/* Visibility */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Eye className="w-5 h-5 text-copper" />
            <h3 className="font-serif text-2xl font-semibold">Visibility Games</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibilityGames.map((game, i) => (
              <GameCard key={game.title} game={game} index={i} />
            ))}
          </div>
        </div>

        {/* Engagement */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="w-5 h-5 text-copper" />
            <h3 className="font-serif text-2xl font-semibold">Engagement Games</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementGames.map((game, i) => (
              <GameCard key={game.title} game={game} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
