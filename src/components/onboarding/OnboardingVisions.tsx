import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Youtube, Linkedin, Music, Palette, Sparkles, Feather } from "lucide-react";

// Art form images
import artPhotography from "@/assets/visions/art-photography.jpg";
import artMusic from "@/assets/visions/art-music.jpg";
import artIllustration from "@/assets/visions/art-illustration.jpg";
import artDance from "@/assets/visions/art-dance.jpg";
import artPoetry from "@/assets/visions/art-poetry.jpg";
import artCrafts from "@/assets/visions/art-crafts.jpg";

// Profile images
import profileAmara from "@/assets/visions/profile-amara.jpg";
import profileCarlos from "@/assets/visions/profile-carlos.jpg";
import profileLinh from "@/assets/visions/profile-linh.jpg";

// Figure images
import figPatience from "@/assets/visions/figures/patience.png";
import figHumilite from "@/assets/visions/figures/humilite.png";
import figPerseverance from "@/assets/visions/figures/perseverance.png";
import figLucidite from "@/assets/visions/figures/lucidite.png";
import figIntuition from "@/assets/visions/figures/intuition.png";
import figReliance from "@/assets/visions/figures/reliance.png";
import figEquite from "@/assets/visions/figures/equite.png";
import figTolerance from "@/assets/visions/figures/tolerance.png";
import figResilience from "@/assets/visions/figures/resilience.png";
import figAuthenticite from "@/assets/visions/figures/authenticite.png";
import figTransmission from "@/assets/visions/figures/transmission.png";
import figBienveillance from "@/assets/visions/figures/bienveillance.png";
import figCreativite from "@/assets/visions/figures/creativite.png";
import figGratitude from "@/assets/visions/figures/gratitude.png";
import figCohesion from "@/assets/visions/figures/cohesion.png";
import figEmpathie from "@/assets/visions/figures/empathie.png";

const AUTOPLAY_INTERVAL = 4000;

const figures = [
  { label: "Patience", image: figPatience },
  { label: "Humilité", image: figHumilite },
  { label: "Persévérance", image: figPerseverance },
  { label: "Lucidité", image: figLucidite },
  { label: "Intuition", image: figIntuition },
  { label: "Reliance", image: figReliance },
  { label: "Équité", image: figEquite },
  { label: "Tolérance", image: figTolerance },
  { label: "Résilience", image: figResilience },
  { label: "Authenticité", image: figAuthenticite },
  { label: "Transmission", image: figTransmission },
  { label: "Bienveillance", image: figBienveillance },
  { label: "Créativité", image: figCreativite },
  { label: "Gratitude", image: figGratitude },
  { label: "Cohésion", image: figCohesion },
  { label: "Empathie", image: figEmpathie },
];

const participants = [
  { name: "Amara Diallo", project: "Roots of Ubuntu", art: "Photography", quote: "Through my lens, I capture the resilience of my community and the beauty of our shared heritage.", image: profileAmara },
  { name: "Carlos Mendoza", project: "Voces del Río", art: "Music", quote: "Each melody carries the voice of the river — a song of hope for those who listen.", image: profileCarlos },
  { name: "Linh Tran", project: "Silk & Stories", art: "Illustration", quote: "My drawings weave together centuries of tradition with the dreams of tomorrow.", image: profileLinh },
];

const artForms = [
  { label: "Photographie", image: artPhotography },
  { label: "Musique", image: artMusic },
  { label: "Illustration", image: artIllustration },
  { label: "Danse", image: artDance },
  { label: "Poésie", image: artPoetry },
  { label: "Artisanat", image: artCrafts },
];

// --- Animation variants ---

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

const staggerContainer = {
  center: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const staggerChild = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -10 },
};

// --- Sub-components ---

function FloatingElement({ children, delay = 0, x = 0, y = 0 }: { children: React.ReactNode; delay?: number; x?: number; y?: number }) {
  return (
    <motion.div
      className="absolute opacity-20"
      style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
      animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function Slide1() {
  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden" variants={staggerContainer} initial="enter" animate="center" exit="exit">
      <FloatingElement delay={0} x={-30} y={-25}><Palette className="w-16 h-16 text-primary" /></FloatingElement>
      <FloatingElement delay={1} x={25} y={-20}><Music className="w-12 h-12 text-primary" /></FloatingElement>
      <FloatingElement delay={2} x={-20} y={20}><Sparkles className="w-14 h-14 text-primary" /></FloatingElement>
      <FloatingElement delay={0.5} x={30} y={25}><Feather className="w-10 h-10 text-primary" /></FloatingElement>

      <motion.h1 variants={staggerChild} className="font-serif-display text-5xl md:text-7xl lg:text-8xl text-foreground text-center leading-tight">
        Yony <span className="text-primary italic">Visions</span>
      </motion.h1>
      <motion.p variants={staggerChild} className="font-sans-body text-lg md:text-xl text-muted-foreground mt-6 text-center max-w-lg">
        Give visibility to your project through art
      </motion.p>
    </motion.div>
  );
}

function Slide2() {
  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen px-6" variants={staggerContainer} initial="enter" animate="center" exit="exit">
      <motion.p variants={staggerChild} className="font-serif-display text-3xl md:text-5xl text-foreground text-center leading-snug max-w-3xl">
        Every project carries an <span className="text-primary italic">artistic universe.</span>
      </motion.p>
      <motion.p variants={staggerChild} className="font-sans-body text-lg text-muted-foreground mt-4 text-center max-w-xl">
        This challenge invites you to share the creations that express your vision.
      </motion.p>
      <motion.div variants={staggerChild} className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
        {artForms.map((art, i) => (
          <motion.div
            key={art.label}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden shadow-md">
              <img src={art.image} alt={art.label} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-sans-body text-muted-foreground">{art.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Slide3() {
  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen px-6" variants={staggerContainer} initial="enter" animate="center" exit="exit">
      <motion.p variants={staggerChild} className="font-serif-display text-3xl md:text-5xl text-foreground text-center leading-snug max-w-3xl">
        Choisis une des <span className="text-primary italic">16 figures.</span>
      </motion.p>
      <motion.p variants={staggerChild} className="font-sans-body text-lg text-muted-foreground mt-4 text-center max-w-xl">
        Each figure represents a source of inspiration.
      </motion.p>
      <motion.div variants={staggerChild} className="grid grid-cols-4 gap-3 mt-10 max-w-2xl">
        {figures.map((fig, i) => (
          <motion.div
            key={fig.label}
            className="flex flex-col items-center gap-1.5"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3 + i * 0.06, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-md border border-border"
              whileHover={{ scale: 1.1, boxShadow: "0 8px 25px hsl(22 70% 47% / 0.25)" }}
            >
              <img src={fig.image} alt={fig.label} className="w-full h-full object-cover" />
            </motion.div>
            <span className="text-[10px] md:text-xs font-sans-body text-muted-foreground">{fig.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Slide4() {
  const socials = [
    { icon: Instagram, label: "Instagram" },
    { icon: () => <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z"/></svg>, label: "TikTok" },
    { icon: Youtube, label: "YouTube" },
    { icon: Linkedin, label: "LinkedIn" },
  ];
  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen px-6" variants={staggerContainer} initial="enter" animate="center" exit="exit">
      <motion.p variants={staggerChild} className="font-serif-display text-3xl md:text-5xl text-foreground text-center leading-snug max-w-3xl">
        Share your creation on <span className="text-primary italic">social media.</span>
      </motion.p>
      <motion.p variants={staggerChild} className="font-sans-body text-lg text-muted-foreground mt-4 text-center max-w-xl">
        Post it and connect it to your project.
      </motion.p>
      <motion.div variants={staggerChild} className="flex gap-6 mt-12">
        {socials.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-card border border-border flex items-center justify-center shadow-sm text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Slide5() {
  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen px-6" variants={staggerContainer} initial="enter" animate="center" exit="exit">
      <motion.p variants={staggerChild} className="font-serif-display text-3xl md:text-5xl text-foreground text-center leading-snug max-w-3xl">
        Each creation reveals a <span className="text-primary italic">vision.</span>
      </motion.p>
      <motion.p variants={staggerChild} className="font-sans-body text-lg text-muted-foreground mt-4 text-center max-w-xl mb-10">
        And each vision brings a project into the light.
      </motion.p>

      <motion.div variants={staggerChild} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {participants.map((p, i) => (
          <motion.div
            key={p.name}
            className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/30">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif-display text-lg text-foreground font-semibold">{p.name}</h3>
            <p className="text-primary font-sans-body text-sm mt-1">{p.project}</p>
            <p className="text-muted-foreground text-xs uppercase tracking-wider mt-2 font-sans-body">{p.art}</p>
            <p className="text-muted-foreground text-sm mt-3 italic font-sans-body leading-relaxed">"{p.quote}"</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// --- Main Component ---

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5];

export default function OnboardingVisions() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
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
      className="relative w-full min-h-screen bg-background overflow-hidden font-sans-body"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="relative h-3 transition-all duration-300"
            style={{ width: i === current ? '2.5rem' : '0.75rem' }}
            aria-label={`Go to slide ${i + 1}`}
          >
            <span className={`block w-full h-full transition-all duration-300 ${i === current ? "bg-primary rounded-full" : "bg-border rounded-full hover:bg-muted-foreground/40"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
