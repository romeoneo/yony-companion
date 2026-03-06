import { motion } from "framer-motion";
import { useState } from "react";
import logoYonyverse from "@/assets/logo-yonyverse.png";

const HeroSection = () => {
  const [lang] = useState("en");

  const content = {
    en: {
      titleAccent: "Yonyverse",
      subtitle: "A Digital Garden for Collaborative Impact",
      narrative: "In ancient times, the first Queen of the world, Yony, saw humanity dividing itself in endless competitions. She imagined new games where people would compete not to dominate, but to elevate dreams, cultures and wisdom.",
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
          style={{ filter: "drop-shadow(0 0 30px hsl(40 80% 55% / 0.4))" }}
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
        <p className="text-copper font-serif text-xl font-semibold italic">
          {t.narrativeEnd}
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-sans-body font-medium text-lg hover:glow-copper transition-all duration-300 hover:scale-105">
          {t.cta1}
        </button>
        <button className="px-8 py-4 border border-primary/30 text-foreground rounded-full font-sans-body font-medium text-lg hover:bg-primary/5 transition-all duration-300">
          {t.cta2}
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
