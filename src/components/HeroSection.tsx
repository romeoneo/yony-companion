import { motion } from "framer-motion";
import { useState } from "react";

const EggOfYony = () => (
  <div className="relative w-48 h-64 md:w-64 md:h-80 mx-auto">
    {/* Rays */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-full opacity-10"
          style={{
            background: "linear-gradient(to top, transparent, hsl(40 80% 55% / 0.4), transparent)",
            transform: `rotate(${i * 30}deg)`,
          }}
        />
      ))}
    </motion.div>

    {/* Glow backdrop */}
    <motion.div
      className="absolute inset-0 rounded-full bg-golden/10 blur-3xl"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Egg shape */}
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-2xl" style={{ filter: "drop-shadow(0 0 30px hsl(40 80% 55% / 0.4))" }}>
        <defs>
          <radialGradient id="eggGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="hsl(40, 90%, 75%)" />
            <stop offset="40%" stopColor="hsl(38, 75%, 55%)" />
            <stop offset="80%" stopColor="hsl(25, 60%, 45%)" />
            <stop offset="100%" stopColor="hsl(20, 50%, 35%)" />
          </radialGradient>
          <radialGradient id="eggShine" cx="35%" cy="25%" r="30%">
            <stop offset="0%" stopColor="hsl(45, 100%, 90%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="100" cy="150" rx="75" ry="110" fill="url(#eggGrad)" />
        <ellipse cx="100" cy="150" rx="75" ry="110" fill="url(#eggShine)" />
        {/* Sacred geometry lines */}
        <circle cx="100" cy="140" r="35" fill="none" stroke="hsl(45, 100%, 85%)" strokeWidth="0.5" opacity="0.3" />
        <circle cx="100" cy="140" r="50" fill="none" stroke="hsl(45, 100%, 85%)" strokeWidth="0.3" opacity="0.2" />
      </svg>
    </motion.div>
  </div>
);

const HeroSection = () => {
  const [lang] = useState("en");

  const content = {
    en: {
      title: "",
      titleAccent: "Yonyverse",
      subtitle: "A global universe where dreams, cultures and wisdom come together.",
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
          <span className="text-foreground">{t.title} </span>
          <span className="text-gradient-copper italic">{t.titleAccent}</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Egg */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="z-10"
      >
        <EggOfYony />
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
