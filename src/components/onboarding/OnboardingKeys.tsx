import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dilemma images
import reseauDesSecrets from "@/assets/keys/reseau-des-secrets.png";
import machineDesPossibles from "@/assets/keys/machine-des-possibles.png";
import ombresDuPasse from "@/assets/keys/ombres-du-passe.png";
import jardinDesIllusions from "@/assets/keys/jardin-des-illusions.png";
import projetHorizon from "@/assets/keys/projet-horizon.png";
import echoDesVoix from "@/assets/keys/echo-des-voix.png";
import bibliothequeDesAmes from "@/assets/keys/bibliotheque-des-ames.png";
import pontDesSilences from "@/assets/keys/pont-des-silences.png";
import veriteCachee from "@/assets/keys/verite-cachee.png";
import spiraleDesEmotions from "@/assets/keys/spirale-des-emotions.png";
import tambourMagique from "@/assets/keys/tambour-magique.png";
import lacDesReflets from "@/assets/keys/lac-des-reflets.png";
import marcheDesIdentites from "@/assets/keys/marche-des-identites.png";
import horlogeBrisee from "@/assets/keys/horloge-brisee.png";
import villeQuiChuchote from "@/assets/keys/ville-qui-chuchote.png";
import theatreAbandonne from "@/assets/keys/theatre-abandonne.png";

const dilemmas = [
  { title: "The Network of Secrets", image: reseauDesSecrets },
  { title: "The Machine of Possibilities", image: machineDesPossibles },
  { title: "Shadows of the Past", image: ombresDuPasse },
  { title: "The Garden of Illusions", image: jardinDesIllusions },
  { title: "The Horizon Project", image: projetHorizon },
  { title: "The Echo of Voices", image: echoDesVoix },
  { title: "The Library of Souls", image: bibliothequeDesAmes },
  { title: "The Bridge of Silences", image: pontDesSilences },
  { title: "Hidden Truths", image: veriteCachee },
  { title: "The Spiral of Emotions", image: spiraleDesEmotions },
  { title: "The Magic Drum", image: tambourMagique },
  { title: "The Lake of Reflections", image: lacDesReflets },
  { title: "The Market of Identities", image: marcheDesIdentites },
  { title: "The Broken Clock", image: horlogeBrisee },
  { title: "The Whispering City", image: villeQuiChuchote },
  { title: "Abandoned Theater", image: theatreAbandonne },
];

const values = [
  "Transmission", "Bienveillance", "Créativité", "Gratitude",
  "Cohésion", "Empathie", "Authenticité", "Résilience",
  "Tolérance", "Équité", "Reliance", "Intuition",
  "Lucidité", "Persévérance", "Humilité", "Patience",
];

// --- Animation variants ---

const slideVariants = {
  enter: { opacity: 0, scale: 1.02 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

// --- Slide Components ---

function SlideWelcome() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <motion.h1
        className="font-serif-display text-6xl md:text-8xl font-black tracking-tight text-foreground"
        custom={0}
        variants={staggerChild}
        initial="hidden"
        animate="visible"
      >
        Yony <span className="text-primary italic font-serif-display">Keys</span>
      </motion.h1>

      <motion.p
        className="font-sans-body text-xl md:text-2xl text-muted-foreground mt-6 max-w-md"
        custom={1}
        variants={staggerChild}
        initial="hidden"
        animate="visible"
      >
        Find the values that open the path
      </motion.p>
    </div>
  );
}

function SlideDilemma() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <motion.h2
        className="font-serif-display text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl"
        custom={0}
        variants={staggerChild}
        initial="hidden"
        animate="visible"
      >
        Every project faces moments of{" "}
        <span className="text-primary italic font-serif-display">uncertainty.</span>
      </motion.h2>

      <motion.p
        className="font-sans-body text-lg md:text-xl text-muted-foreground mt-6 max-w-lg"
        custom={1}
        variants={staggerChild}
        initial="hidden"
        animate="visible"
      >
        A dilemma appears… and a decision must be made.
      </motion.p>
    </div>
  );
}

function SlideKeys() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <motion.h2
        className="font-serif-display text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl"
        custom={0}
        variants={staggerChild}
        initial="hidden"
        animate="visible"
      >
        Choose two values to guide your{" "}
        <span className="text-primary italic font-serif-display">response.</span>
      </motion.h2>

      <motion.p
        className="font-sans-body text-lg md:text-xl text-muted-foreground mt-6 max-w-lg"
        custom={1}
        variants={staggerChild}
        initial="hidden"
        animate="visible"
      >
        These values become the keys that help you open a path.
      </motion.p>
    </div>
  );
}

function SlideDilemmas() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 py-8">
      <motion.h2
        className="font-serif-display text-3xl md:text-5xl font-bold text-foreground text-center mb-3"
        custom={0}
        variants={staggerChild}
        initial="hidden"
        animate="visible"
      >
        Explore the <span className="text-primary italic font-serif-display">16 dilemmas.</span>
      </motion.h2>

      <motion.p
        className="font-sans-body text-base md:text-lg text-muted-foreground text-center mb-6"
        custom={1}
        variants={staggerChild}
        initial="hidden"
        animate="visible"
      >
        Each dilemma invites you to reflect and choose your guiding values.
      </motion.p>

      <motion.div
        className="grid grid-cols-4 gap-x-6 gap-y-4 max-w-xl w-full"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
      >
        {dilemmas.map((d, i) => (
          <motion.div
            key={d.title}
            className="flex flex-col items-center gap-1.5 group cursor-pointer"
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
            }}
          >
            <div className="relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 w-12 h-12 md:w-14 md:h-14"
              style={{ boxShadow: "none" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 30px hsl(14 78% 54% / 0.3)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            >
              <img
                src={d.image}
                alt={d.title}
                className="w-full h-full object-cover rounded-xl"
                loading={i < 8 ? "eager" : "lazy"}
              />
            </div>
            <span className="font-sans-body text-xs md:text-sm text-foreground text-center leading-tight">
              {d.title}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function SlideValues() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-8">
      <motion.h2
        className="font-serif-display text-3xl md:text-5xl font-bold text-foreground text-center mb-3"
        custom={0}
        variants={staggerChild}
        initial="hidden"
        animate="visible"
      >
        Choose your <span className="text-primary italic font-serif-display">guiding values.</span>
      </motion.h2>

      <motion.p
        className="font-sans-body text-base md:text-lg text-muted-foreground text-center mb-8"
        custom={1}
        variants={staggerChild}
        initial="hidden"
        animate="visible"
      >
        Select two values that resonate with your reflection.
      </motion.p>

      <motion.div
        className="grid grid-cols-4 gap-3 max-w-2xl w-full"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {values.map((v) => (
          <motion.button
            key={v}
            className="px-5 py-3 rounded-full border border-border font-serif-display text-sm tracking-wider transition-all duration-300 cursor-pointer bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {v}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

function SlideShare() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <motion.h2
        className="font-serif-display text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl"
        custom={0}
        variants={staggerChild}
        initial="hidden"
        animate="visible"
      >
        Share your creation on{" "}
        <span className="text-primary italic font-serif-display">social media.</span>
      </motion.h2>

      <motion.p
        className="font-sans-body text-lg md:text-xl text-muted-foreground mt-6 max-w-lg"
        custom={1}
        variants={staggerChild}
        initial="hidden"
        animate="visible"
      >
        Post it and connect it to your project.
      </motion.p>

      <motion.div
        className="flex gap-6 mt-12"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {[
          { label: "Instagram", icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          )},
          { label: "TikTok", icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z" />
            </svg>
          )},
          { label: "YouTube", icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
              <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19 31.56 31.56 0 000 12a31.56 31.56 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.56 31.56 0 0024 12a31.56 31.56 0 00-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
            </svg>
          )},
          { label: "LinkedIn", icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.46A1.75 1.75 0 0024 22.27V1.73A1.75 1.75 0 0022.23 0z" />
            </svg>
          )},
        ].map((social) => (
          <motion.a
            key={social.label}
            href="#"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-border bg-card flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

// --- Main Component ---

const slides = [SlideWelcome, SlideDilemma, SlideKeys, SlideDilemmas, SlideValues, SlideShare];

export default function OnboardingKeys() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
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

  const SlideComponent = slides[current];

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
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`rounded-full transition-all duration-300 cursor-pointer h-3 ${
              i === current
                ? "w-10 bg-primary"
                : "w-3 bg-border hover:bg-muted-foreground/40"
            }`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
