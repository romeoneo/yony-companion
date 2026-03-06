import { motion } from "framer-motion";
import { useState } from "react";
import logoYonyverse from "@/assets/logo-yonyverse.png";

const HeroSection = () => {
  const [lang] = useState("en");

  const content = {
    en: {
      titleAccent: "Yonyverse",
      subtitle: "Born To Impact",
      narrative: "In ancient times, Yony, the First Queen of the world, saw humanity divided by endless competition. She envisioned new games where people would unite in harmony to uplift dreams, cultures, and wisdom.",
      narrativeEnd: "These became the Yony Games.",
      cta1: "Enter Yonyverse",
      cta2: "Join the Yony Games",
    },
  };

  const t = content[lang as keyof typeof content] || content.en;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-golden/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Title */}
      <motion.div
        className="text-center mb-12 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-4">
          <span className="text-gradient-copper italic">{t.titleAccent}</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="z-10"
      >
        <motion.img
          src={logoYonyverse}
          alt="Yonyverse Logo"
          className="w-48 h-48 md:w-64 md:h-64 mx-auto drop-shadow-2xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          
        />
      </motion.div>

      {/* Narrative */}
      <motion.div
        className="max-w-2xl text-center mt-16 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 italic">
          "{t.narrative}"
        </p>
        <p className="text-copper font-serif text-xl font-semibold italic mb-8">
          {t.narrativeEnd}
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
          Yonyverse is a truly global and participatory space.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
          Through 16 activated countries and 8 visibility and engagement games, Yonyverse creates a shared ground where cultures, ideas, and talents from around the world can meet.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Like a great global stage, Yonyverse allows individuals, communities, and creators to participate, gain visibility, inspire one another, and grow together.
        </p>
      </motion.div>

    </section>
  );
};

export default HeroSection;
