import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const characters = [
  {
    role: "Yony Seeds",
    initial: "S",
    color: "hsl(120, 40%, 45%)",
    description: "Dream carriers presenting impact projects during the nine months of the Yony Games. Each Seed belongs to a Flower group of eight Seeds representing a territory.",
  },
  {
    role: "Yony Brands",
    initial: "B",
    color: "hsl(25, 60%, 45%)",
    description: "Visionary partners who align their brand identity with the cultural values of the Yony Games, amplifying the reach of dreams across the world.",
  },
  {
    role: "Yony Lights",
    initial: "L",
    color: "hsl(45, 80%, 50%)",
    description: "Creative luminaries who illuminate the cultural narratives of each territory through art, music, and storytelling.",
  },
  {
    role: "Yony Places",
    initial: "P",
    color: "hsl(200, 50%, 45%)",
    description: "Sacred spaces and venues that host the physical manifestations of the Yony Games across the 16 founding territories.",
  },
  {
    role: "Yony Angels",
    initial: "A",
    color: "hsl(300, 30%, 55%)",
    description: "Generous guardians who provide resources and guidance to nurture the dreams of the Seeds throughout the journey.",
  },
  {
    role: "Yony Stars",
    initial: "★",
    color: "hsl(38, 75%, 50%)",
    description: "Renowned figures who lend their influence and wisdom to elevate the visibility and impact of the Yony Games.",
  },
  {
    role: "Yony Magics",
    initial: "M",
    color: "hsl(280, 50%, 50%)",
    description: "Digital artists and technologists who weave immersive experiences, bringing the mythological universe to life.",
  },
  {
    role: "Yony Guards",
    initial: "G",
    color: "hsl(160, 40%, 40%)",
    description: "Protectors of the values and integrity of the Yony Games, ensuring fairness, respect and cultural authenticity.",
  },
];

const CharactersSection = () => {
  const [active, setActive] = useState(0);
  const char = characters[active];

  return (
    <section id="characters" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            The <span className="text-gradient-copper italic">Characters</span>
          </h2>
          <p className="text-muted-foreground text-lg">Archetypal roles that shape the Yonyverse.</p>
        </motion.div>

        {/* Featured character */}
        <motion.div
          key={active}
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-serif font-bold text-primary-foreground"
            style={{ backgroundColor: char.color }}
          >
            {char.initial}
          </div>
          <h3 className="text-3xl font-serif font-bold mb-4">{char.role}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">{char.description}</p>
          <button className="px-6 py-3 border border-primary/30 rounded-full text-foreground font-sans-body hover:bg-primary/5 transition-all">
            Discover Role
          </button>
        </motion.div>

        {/* Character selector */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setActive((p) => (p - 1 + characters.length) % characters.length)}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <div className="flex gap-3 flex-wrap justify-center">
            {characters.map((c, i) => (
              <button
                key={c.role}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-full text-sm font-sans-body transition-all duration-300 ${
                  i === active
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {c.role}
              </button>
            ))}
          </div>
          <button
            onClick={() => setActive((p) => (p + 1) % characters.length)}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
