import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Youtube, Linkedin, Music } from "lucide-react";

// ── Floating glow orb ──────────────────────────────────────────────
function GlowOrb({
  x, y, size = 8, delay = 0, color = "primary",
}: {
  x: string; y: string; size?: number; delay?: number; color?: "primary" | "muted";
}) {
  return (
    <motion.div
      className={`absolute rounded-full ${color === "primary" ? "bg-primary/30" : "bg-muted-foreground/15"}`}
      style={{ left: x, top: y, width: size, height: size }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.8, 0.4], scale: [0, 1.2, 1] }}
      transition={{ duration: 2.5, delay, repeat: Infinity, repeatType: "reverse" }}
    />
  );
}

// ── Slide 1: Welcome ──────────────────────────────────────────────
function SlideWelcome() {
  const orbs = Array.from({ length: 20 }, (_, i) => ({
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: 4 + Math.random() * 14,
    delay: Math.random() * 3,
  }));

  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      {orbs.map((orb, i) => (
        <GlowOrb key={i} {...orb} color={i % 3 === 0 ? "primary" : "muted"} />
      ))}
      <motion.h1
        className="font-serif-display text-6xl md:text-8xl font-bold text-foreground text-center leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Yony{" "}
        <motion.span
          className="italic text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Lights
        </motion.span>
      </motion.h1>
      <motion.p
        className="mt-6 font-sans-body text-lg md:text-xl text-muted-foreground text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Discover the creators who illuminate the world
      </motion.p>
    </div>
  );
}

// ── Slide 2: Discover ────────────────────────────────────────────
function SlideDiscover() {
  const silhouettes = [
    { x: "20%", delay: 0.3 },
    { x: "40%", delay: 0.6 },
    { x: "60%", delay: 0.9 },
    { x: "80%", delay: 1.2 },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-full px-8">
      <div className="absolute bottom-[20%] w-full flex justify-center gap-12">
        {silhouettes.map((s, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.25, y: 0 }}
            transition={{ delay: s.delay, duration: 1.2 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-foreground/10" />
            <div className="w-10 h-20 mt-2 rounded-t-full bg-foreground/5" />
            <motion.div
              className="absolute -top-3 w-3 h-3 rounded-full bg-primary/60"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, delay: s.delay, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </div>

      <motion.p
        className="font-serif-display text-3xl md:text-5xl font-bold text-foreground text-center leading-snug max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore creators whose culture, traditions, and causes{" "}
        <span className="italic text-primary">inspire the world.</span>
      </motion.p>
      <motion.p
        className="mt-6 font-sans-body text-lg text-muted-foreground text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Each one carries a light worth discovering.
      </motion.p>
    </div>
  );
}

// ── Slide 3: The Parabole ─────────────────────────────────────────
function SlideParabole() {
  const lines = [
    "Read a short",
    "parabole.",
    "From this story,",
    "guess which creator",
    "it describes.",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <motion.div
        className="max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="font-serif-display text-3xl md:text-5xl font-bold text-foreground leading-snug">
          {lines.map((line, i) => (
            <motion.span
              key={i}
              className={`inline ${i === 1 || i === 4 ? "italic text-primary" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.25, duration: 0.7 }}
            >
              {line}{" "}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-10 max-w-lg p-6 rounded-lg border border-border bg-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <p className="text-xs uppercase tracking-widest text-primary font-sans-body mb-3">
          Parabole
        </p>
        <p className="font-sans-body text-sm md:text-base text-foreground italic leading-relaxed">
          "Là où les montagnes semblent impossibles à cultiver, elle révèle des
          escaliers de terre que des mains anciennes ont sculptés…"
        </p>
      </motion.div>
    </div>
  );
}

// ── Slide 4: Choose the Creator ───────────────────────────────────
function SlideChoose() {
  const creators = [
    { initial: "E", name: "Elena Quispe", handle: "@elena.terrasses" },
    { initial: "A", name: "Arjun Patel", handle: "@arjun.stepwells" },
    { initial: "J", name: "Jean-Baptiste Rivière", handle: "@jb.patrimoine" },
    { initial: "C", name: "Carlos Tepetl", handle: "@carlos.milpa" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <motion.p
        className="font-serif-display text-3xl md:text-5xl font-bold text-foreground text-center leading-snug max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Identify the creator among{" "}
        <span className="italic text-primary">four possible answers.</span>
      </motion.p>
      <motion.p
        className="mt-4 font-sans-body text-lg text-muted-foreground text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        You may reveal clues to help you.
      </motion.p>

      <div className="grid grid-cols-2 gap-4 mt-10 max-w-xl w-full">
        {creators.map((c, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card cursor-pointer transition-colors hover:border-primary/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-serif-display font-bold text-foreground text-sm">
              {c.initial}
            </div>
            <div>
              <p className="font-serif-display font-bold text-sm text-foreground">{c.name}</p>
              <p className="font-sans-body text-xs text-muted-foreground">{c.handle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Slide 5: Collect the Lights ──────────────────────────────────
function SlideCollect() {
  const scoring = [
    { label: "Parabole only", pts: "20 pts", color: "text-primary" },
    { label: "With 2 clues", pts: "10 pts", color: "text-primary" },
    { label: "With 3 clues", pts: "5 pts", color: "text-primary" },
    { label: "Wrong answer", pts: "0 pts", color: "text-muted-foreground" },
  ];

  const stars = Array.from({ length: 15 }, (_, i) => ({
    x: `${10 + Math.random() * 80}%`,
    y: `${10 + Math.random() * 80}%`,
    size: 3 + Math.random() * 8,
    delay: Math.random() * 2,
  }));

  return (
    <div className="relative flex flex-col items-center justify-center h-full px-8">
      {stars.map((s, i) => (
        <GlowOrb key={i} x={s.x} y={s.y} size={s.size} delay={s.delay} />
      ))}

      <motion.p
        className="font-serif-display text-3xl md:text-5xl font-bold text-foreground text-center leading-snug max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Each correct answer adds a new{" "}
        <span className="italic text-primary">light</span> to your collection.
      </motion.p>
      <motion.p
        className="mt-4 font-sans-body text-lg text-muted-foreground text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Build your personal constellation of inspiring creators.
      </motion.p>

      <motion.div
        className="mt-10 grid grid-cols-2 gap-3 max-w-xs w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {scoring.map((s, i) => (
          <motion.div
            key={i}
            className="flex justify-between items-center p-3 rounded-lg border border-border bg-card"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
          >
            <span className="font-sans-body text-xs text-muted-foreground">{s.label}</span>
            <span className={`font-serif-display font-bold text-sm ${s.color}`}>{s.pts}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ── Slide 6: Share ────────────────────────────────────────────────
function SlideShare() {
  const socials = [
    { icon: Instagram, label: "Instagram" },
    { icon: Music, label: "TikTok" },
    { icon: Youtube, label: "YouTube" },
    { icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <motion.p
        className="font-serif-display text-3xl md:text-5xl font-bold text-foreground text-center leading-snug max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore inspiring lights
        <br />
        <span className="italic text-primary">on social media.</span>
      </motion.p>

      <div className="flex gap-6 mt-12">
        {socials.map((s, i) => (
          <motion.div
            key={i}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border flex items-center justify-center cursor-pointer transition-colors hover:border-primary/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
          >
            <s.icon className="w-6 h-6 md:w-7 md:h-7 text-primary/70" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────
const slides = [SlideWelcome, SlideDiscover, SlideParabole, SlideChoose, SlideCollect, SlideShare];

export default function OnboardingLights() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next]);

  const CurrentSlide = slides[current];

  return (
    <div
      className="relative w-full h-screen bg-background overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-500 ease-out ${
              i === current
                ? "w-12 h-5 bg-primary"
                : "w-4 h-4 bg-muted-foreground/25 hover:bg-muted-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
