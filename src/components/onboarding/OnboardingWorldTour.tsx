import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Territory data ---
interface Territory {
  name: string;
  x: number;
  y: number;
}

const territories: Territory[] = [
  { name: "Benin", x: 482, y: 280 },
  { name: "Gabon", x: 490, y: 310 },
  { name: "South Africa", x: 530, y: 400 },
  { name: "Madagascar", x: 580, y: 370 },
  { name: "Egypt", x: 540, y: 220 },
  { name: "Sweden", x: 510, y: 130 },
  { name: "Mongolia", x: 680, y: 170 },
  { name: "Turkey", x: 550, y: 195 },
  { name: "India", x: 640, y: 250 },
  { name: "Indonesia", x: 710, y: 310 },
  { name: "Japan", x: 760, y: 190 },
  { name: "Papua New Guinea", x: 770, y: 320 },
  { name: "Easter Island", x: 170, y: 380 },
  { name: "Mexico", x: 200, y: 240 },
  { name: "Peru", x: 240, y: 340 },
  { name: "Brazil", x: 310, y: 330 },
];

const continentPaths = [
  "M120,120 Q140,100 180,110 Q220,100 240,130 Q250,160 230,180 Q220,200 200,220 Q180,240 170,260 Q160,240 150,220 Q130,200 120,170 Z",
  "M220,270 Q240,260 260,280 Q280,300 300,320 Q310,350 300,380 Q280,410 260,420 Q240,410 230,380 Q220,350 225,320 Z",
  "M470,100 Q490,90 510,100 Q530,110 540,130 Q535,150 520,160 Q500,165 485,155 Q475,140 470,120 Z",
  "M470,200 Q490,190 520,200 Q540,220 550,250 Q560,290 550,330 Q540,370 520,400 Q500,410 490,390 Q475,350 470,310 Q465,270 468,240 Z",
  "M550,80 Q600,70 660,90 Q720,100 770,120 Q790,150 780,190 Q770,220 740,240 Q710,260 680,250 Q650,240 620,220 Q590,200 570,170 Q555,140 550,110 Z",
  "M680,260 Q700,255 720,270 Q740,280 760,290 Q770,310 760,330 Q740,340 720,330 Q700,320 690,300 Q680,280 680,260 Z",
  "M720,350 Q750,340 780,350 Q800,370 800,400 Q790,420 770,430 Q740,430 720,410 Q710,390 715,370 Z",
];

// --- Visual Components ---

function WorldMap({ showTerritories = false, showRoutes = false, showGlow = false }: { showTerritories?: boolean; showRoutes?: boolean; showGlow?: boolean }) {
  const routePath = territories.map((t, i) => `${i === 0 ? "M" : "L"}${t.x},${t.y}`).join(" ");

  return (
    <svg viewBox="0 0 900 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {continentPaths.map((d, i) => (
        <motion.path key={i} d={d} fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: i * 0.2, ease: "easeInOut" }} />
      ))}

      {showRoutes && (
        <motion.path d={routePath} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="6 4"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 4, ease: "easeInOut" }} />
      )}

      {showTerritories && territories.map((t, i) => (
        <motion.g key={t.name} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}>
          <motion.circle cx={t.x} cy={t.y} r="6" fill="hsl(var(--primary))"
            animate={{ r: [6, 8, 6] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }} />
          {showGlow && (
            <motion.circle cx={t.x} cy={t.y} r="12" fill="none" stroke="hsl(var(--primary))" strokeWidth="1"
              animate={{ r: [12, 18, 12], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }} />
          )}
          <text x={t.x} y={t.y - 12} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="8" fontFamily="DM Sans" opacity="0.7">
            {t.name}
          </text>
        </motion.g>
      ))}

      {showGlow && !showTerritories && territories.map((t, i) => (
        <motion.g key={t.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + i * 0.2 }}>
          <motion.circle cx={t.x} cy={t.y} r="4" fill="hsl(var(--primary))"
            animate={{ opacity: [0.3, 1, 0.3], r: [4, 7, 4] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }} />
          <motion.circle cx={t.x} cy={t.y} r="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"
            animate={{ r: [10, 20], opacity: [0.4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }} />
        </motion.g>
      ))}
    </svg>
  );
}

const symbols = ["✦", "◆", "◉", "△", "☽", "⬡", "✴", "❂", "⟡", "⊛"];

function RiddleVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {symbols.map((s, i) => {
        const angle = (i / symbols.length) * Math.PI * 2;
        const radius = 120 + Math.random() * 80;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <motion.span key={i} className="absolute text-primary text-2xl md:text-4xl"
            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.7, 0.4], scale: [0, 1.2, 1], rotate: [0, 15, -5] }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.15, ease: "easeOut" }}>
            {s}
          </motion.span>
        );
      })}
    </div>
  );
}

const particles = [
  { x: 30, y: 25, r: 6, glow: 18 },
  { x: 50, y: 35, r: 4, glow: 12 },
  { x: 45, y: 20, r: 5, glow: 16 },
  { x: 65, y: 15, r: 3, glow: 10 },
  { x: 70, y: 30, r: 5, glow: 14 },
  { x: 55, y: 45, r: 4, glow: 12 },
  { x: 35, y: 40, r: 3, glow: 10 },
  { x: 75, y: 25, r: 4, glow: 12 },
];

function LightParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.r * 2, height: p.r * 2, background: "hsl(var(--primary))" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.6, 0.3], scale: [0, 1.2, 1] }}
          transition={{ duration: 1.5, delay: 0.3 + i * 0.2, ease: "easeOut" }}>
          <motion.div className="absolute rounded-full border border-primary/20"
            style={{ width: p.glow * 2, height: p.glow * 2, left: -(p.glow - p.r), top: -(p.glow - p.r) }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }} />
        </motion.div>
      ))}
    </div>
  );
}

function SlideContent({ title, titleAccent, texts, children }: { title: string; titleAccent?: string; texts: string[]; children?: React.ReactNode }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        {children}
      </div>
      <div className="relative z-10 text-center max-w-3xl">
        <motion.h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-tight"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          {title}
          {titleAccent && <span className="italic text-primary font-bold"> {titleAccent}</span>}
        </motion.h1>
        {texts.map((text, i) => (
          <motion.p key={i} className="font-sans-body text-lg md:text-xl text-muted-foreground mt-4 first:mt-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: "easeOut" }}>
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

// --- Slide Data ---

interface SlideData {
  id: number;
  title: string;
  titleAccent: string;
  texts: string[];
  map?: { showTerritories?: boolean; showRoutes?: boolean; showGlow?: boolean };
  visual?: string;
}

const slides: SlideData[] = [
  {
    id: 1, title: "Yony", titleAccent: "Travels",
    texts: ["An international cultural treasure hunt.", "Follow journeys across the world and discover traditions, places, and stories."],
    map: { showRoutes: true },
  },
  {
    id: 2, title: "Explore 16", titleAccent: "Territories",
    texts: ["Each territory invites you to discover its traditions, places, and cultural mysteries."],
    map: { showTerritories: true },
  },
  {
    id: 3, title: "Follow the", titleAccent: "Journey",
    texts: ["Each destination reveals cultural clues and hidden knowledge."],
    map: { showRoutes: true, showGlow: true },
  },
  {
    id: 4, title: "Solve the", titleAccent: "Riddles",
    texts: ["Unlock the secrets of each territory by solving cultural riddles and challenges."],
    visual: "riddles",
  },
  {
    id: 5, title: "Collect the", titleAccent: "Light",
    texts: ["Each solved riddle rewards you with Light Tokens.", "Build your collection as you travel through the Yonyverse."],
    map: { showRoutes: true, showGlow: true },
  },
  {
    id: 6, title: "Redistribute the", titleAccent: "Light.",
    texts: ["Redistribute your tokens to the Flowers of the Yonyverse and support their projects."],
    visual: "light-particles",
  },
];

// --- Main Component ---

export default function OnboardingWorldTour() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <div
      className="relative w-full min-h-screen bg-background overflow-hidden cursor-default select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <SlideContent title={slide.title} titleAccent={slide.titleAccent} texts={slide.texts}>
            {slide.map && (
              <WorldMap showTerritories={slide.map.showTerritories} showRoutes={slide.map.showRoutes} showGlow={slide.map.showGlow} />
            )}
            {slide.visual === "riddles" && <RiddleVisual />}
            {slide.visual === "light-particles" && <LightParticles />}
          </SlideContent>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className="relative flex items-center justify-center transition-all duration-400"
            aria-label={`Go to slide ${i + 1}`}>
            <motion.span
              className={`block rounded-full ${i === current ? "bg-primary" : "bg-muted-foreground/40"}`}
              animate={{ width: i === current ? 32 : 10, height: 10 }}
              transition={{ duration: 0.35, ease: "easeInOut" }} />
          </button>
        ))}
      </div>

      <KeyboardNav onNext={next} onPrev={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)} />
    </div>
  );
}

function KeyboardNav({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev]);
  return null;
}
