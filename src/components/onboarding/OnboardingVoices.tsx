import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

import portrait1 from "@/assets/voices/seed-portrait-1.jpg";
import portrait2 from "@/assets/voices/seed-portrait-2.jpg";
import portrait3 from "@/assets/voices/seed-portrait-3.jpg";

const TOTAL_SLIDES = 5;
const AUTO_INTERVAL = 4000;

const textReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" as const },
  }),
};

const seeds = [
  {
    portrait: portrait1,
    name: "Amara Diallo",
    project: "Roots of Ubuntu",
    theme: "A Childhood Memory",
    excerpt: "My grandmother's garden taught me that every seed carries a story waiting to be told.",
  },
  {
    portrait: portrait2,
    name: "Carlos Mendoza",
    project: "Voces del Río",
    theme: "A Turning Point",
    excerpt: "The day the river dried up, I knew I had to build something that could give back.",
  },
  {
    portrait: portrait3,
    name: "Linh Tran",
    project: "Silk & Stories",
    theme: "A Teacher's Words",
    excerpt: "She said: your hands carry centuries of craft. Don't let the thread break.",
  },
];

// --- Inlined sub-components ---

function OnboardingSlide({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-3xl mx-auto text-center">
        {children}
      </div>
    </motion.div>
  );
}

interface SeedCardProps {
  portrait: string;
  name: string;
  project: string;
  theme: string;
  excerpt: string;
  delay?: number;
}

function SeedCard({ portrait, name, project, theme, excerpt, delay = 0 }: SeedCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center rounded-2xl bg-card border border-border p-6 max-w-[240px] text-center shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <img
        src={portrait}
        alt={name}
        className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 mb-3"
      />
      <h4 className="font-serif-display text-lg font-semibold text-foreground">{name}</h4>
      <p className="text-xs text-primary font-sans-body mt-0.5 font-semibold">{project}</p>
      <span className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground font-sans-body">
        {theme}
      </span>
      <p className="mt-2 text-xs text-muted-foreground font-sans-body italic leading-relaxed">
        "{excerpt}"
      </p>
    </motion.div>
  );
}

// --- Main Component ---

export default function OnboardingVoices() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c < TOTAL_SLIDES - 1 ? c + 1 : c));
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c > 0 ? c - 1 : c));
  }, []);

  useEffect(() => {
    if (paused || current >= TOTAL_SLIDES - 1) return;
    const timer = setTimeout(next, AUTO_INTERVAL);
    return () => clearTimeout(timer);
  }, [current, paused, next]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Subtle warm gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl translate-y-1/3 -translate-x-1/3" />

      <AnimatePresence mode="wait">
        {current === 0 && (
          <OnboardingSlide key="s0">
            <motion.h1
              className="font-serif-display text-7xl md:text-9xl font-black text-foreground leading-none tracking-tight"
              custom={0}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Yony <span className="text-primary italic">Voices</span>
            </motion.h1>
            <motion.p
              className="mt-6 font-serif-display text-xl md:text-2xl text-muted-foreground font-light italic"
              custom={1}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              A space where stories give life to projects.
            </motion.p>
          </OnboardingSlide>
        )}

        {current === 1 && (
          <OnboardingSlide key="s1">
            <motion.p
              className="font-serif-display text-3xl md:text-5xl font-light text-foreground italic leading-snug"
              custom={0}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Every meaningful project begins with a story.
            </motion.p>
            <motion.p
              className="mt-8 font-sans-body text-base md:text-lg text-muted-foreground max-w-lg"
              custom={1}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Yony Voices invites Yony Seeds to share the personal moment,
              memory, or inspiration that gave birth to their vision.
            </motion.p>
          </OnboardingSlide>
        )}

        {current === 2 && (
          <OnboardingSlide key="s2">
            <motion.p
              className="font-serif-display text-3xl md:text-5xl font-light text-foreground leading-snug"
              custom={0}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Choose one of{" "}
              <span className="text-primary font-semibold">16 storytelling themes</span>.
            </motion.p>
            <motion.p
              className="mt-8 font-sans-body text-base md:text-lg text-muted-foreground max-w-lg"
              custom={1}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Tell your story through a short video, text, or audio.
            </motion.p>
          </OnboardingSlide>
        )}

        {current === 3 && (
          <OnboardingSlide key="s3">
            <motion.h2
              className="font-serif-display text-5xl md:text-7xl font-black text-foreground leading-tight"
              custom={0}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Share your story on<br />
              <span className="text-primary italic">social media.</span>
            </motion.h2>
            <motion.p
              className="mt-6 font-serif-display text-xl md:text-2xl text-muted-foreground font-light italic"
              custom={1}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Post it and connect it to your project.
            </motion.p>
            <motion.div
              className="flex gap-8 mt-12"
              custom={2}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              {[
                <svg key="ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 md:w-8 md:h-8"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>,
                <svg key="tt" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8"><path d="M16.6 5.82A4.28 4.28 0 0113.5 3h-3v12.4a2.6 2.6 0 01-2.6 2.6 2.6 2.6 0 01-2.6-2.6A2.6 2.6 0 017.9 12.8v-3.1a5.7 5.7 0 00-5.7 5.7 5.7 5.7 0 005.7 5.7 5.7 5.7 0 005.7-5.7V9.4a7.3 7.3 0 004.3 1.4V7.7a4.28 4.28 0 01-1.3-1.88z" /></svg>,
                <svg key="yt" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>,
                <svg key="li" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" /></svg>,
              ].map((icon, i) => (
                <div
                  key={i}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border bg-card/50 flex items-center justify-center text-primary"
                >
                  {icon}
                </div>
              ))}
            </motion.div>
          </OnboardingSlide>
        )}

        {current === 4 && (
          <OnboardingSlide key="s4">
            <motion.p
              className="font-serif-display text-3xl md:text-5xl font-light text-foreground leading-snug"
              custom={0}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Each voice helps a project{" "}
              <span className="text-primary">grow</span>.
            </motion.p>
            <motion.p
              className="mt-4 font-serif-display text-2xl md:text-3xl font-light text-muted-foreground"
              custom={1}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              And each story helps a Flower bloom in the{" "}
              <span className="text-primary font-semibold">Yonyverse</span>.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-10"
              custom={2}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              {seeds.map((s, i) => (
                <SeedCard key={s.name} {...s} delay={0.8 + i * 0.15} />
              ))}
            </motion.div>
          </OnboardingSlide>
        )}
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 h-2.5 bg-primary"
                : "w-2.5 h-2.5 bg-foreground/15 hover:bg-foreground/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
