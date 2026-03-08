import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "lucide-react";

// --- Animation variants ---
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

// --- Visual Components ---

const CITIES = [
  { x: 30, y: 35, label: "Paris" },
  { x: 18, y: 48, label: "Lima" },
  { x: 55, y: 30, label: "Cairo" },
  { x: 75, y: 42, label: "Delhi" },
  { x: 85, y: 55, label: "Jakarta" },
  { x: 42, y: 28, label: "Berlin" },
  { x: 12, y: 32, label: "New York" },
  { x: 62, y: 60, label: "Nairobi" },
  { x: 90, y: 25, label: "Tokyo" },
  { x: 25, y: 65, label: "Buenos Aires" },
  { x: 48, y: 55, label: "Lagos" },
  { x: 70, y: 20, label: "Beijing" },
];

function WorldMap({ animated, highlighted, className = "" }: { animated?: boolean; highlighted?: boolean; className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <svg viewBox="0 0 100 80" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {CITIES.map((city, i) => (
          <motion.g key={city.label}>
            {(animated || highlighted) && (
              <motion.circle
                cx={city.x}
                cy={city.y}
                r={highlighted ? 2.5 : 1.8}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth={0.15}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.5, 2] }}
                transition={{ duration: 3, delay: i * 0.25, repeat: Infinity, repeatDelay: 2 }}
              />
            )}
            <motion.circle
              cx={city.x}
              cy={city.y}
              r={highlighted ? 0.7 : 0.5}
              fill="hsl(var(--primary))"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

function QRVisual({ color = "hsl(var(--primary))", size = 20 }: { color?: string; size?: number }) {
  const cells: { r: number; c: number }[] = [];
  const grid = 9;
  for (let r = 0; r < grid; r++) {
    for (let c = 0; c < grid; c++) {
      const isFilled =
        (r < 3 && c < 3) ||
        (r < 3 && c >= grid - 3) ||
        (r >= grid - 3 && c < 3) ||
        Math.random() > 0.5;
      if (isFilled) cells.push({ r, c });
    }
  }

  return (
    <div className="pointer-events-none">
      <motion.svg
        viewBox={`0 0 ${grid} ${grid}`}
        style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
      >
        {cells.map(({ r, c }, i) => (
          <motion.rect
            key={`${r}-${c}`}
            x={c}
            y={r}
            width={0.85}
            height={0.85}
            rx={0.1}
            fill={color}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.01, duration: 0.3 }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

function ArtifactVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none flex items-center justify-center ${className}`}>
      <motion.svg viewBox="0 0 200 200" className="w-full h-full max-w-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        {[80, 60, 40, 20].map((r, i) => (
          <motion.circle key={r} cx={100} cy={100} r={r} fill="none" stroke="hsl(var(--primary))" strokeWidth={0.5}
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.3 + i * 0.15 }}
            transition={{ duration: 2, delay: i * 0.3, ease: "easeOut" }} />
        ))}
        <motion.path d="M100 70 L115 100 L100 130 L85 100 Z" fill="none" stroke="hsl(var(--primary))" strokeWidth={1}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
      </motion.svg>
    </div>
  );
}

const TOKENS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  startX: 50, startY: 40,
  endX: 20 + Math.random() * 60,
  endY: 20 + Math.random() * 50,
}));

function LightTokensVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <svg viewBox="0 0 100 80" className="w-full h-full opacity-[0.08]" preserveAspectRatio="xMidYMid slice">
        <motion.circle cx={50} cy={40} r={2} fill="hsl(var(--primary))" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.6] }} transition={{ duration: 1.5 }} />
        {TOKENS.map((t) => (
          <motion.circle key={t.id} cx={t.startX} cy={t.startY} r={0.6} fill="hsl(var(--primary))"
            initial={{ cx: t.startX, cy: t.startY, opacity: 0 }}
            animate={{ cx: [t.startX, t.endX], cy: [t.startY, t.endY], opacity: [0, 1, 0] }}
            transition={{ duration: 3, delay: t.id * 0.2, repeat: Infinity, repeatDelay: 1 }} />
        ))}
        {TOKENS.slice(0, 5).map((t, i) => (
          <motion.circle key={`flower-${i}`} cx={t.endX} cy={t.endY} r={1.5} fill="none" stroke="hsl(var(--primary))" strokeWidth={0.3}
            initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1 + i * 0.3 }} />
        ))}
      </svg>
    </div>
  );
}

// --- Slides ---

function SlideOne() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-6 relative">
      <WorldMap className="absolute inset-0 opacity-[0.07]" animated />
      <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10 text-center max-w-3xl">
        <motion.h1 variants={fadeUp} className="font-serif-display text-6xl md:text-8xl font-bold tracking-tight text-foreground">
          Yony <span className="italic text-primary font-normal">Places</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-muted-foreground font-light">
          Illuminate the world's cultural heritage.
        </motion.p>
        <motion.p variants={fadeUp} className="mt-3 text-base md:text-lg text-muted-foreground/80 font-light max-w-xl mx-auto">
          An immersive urban experience that transforms meaningful places into points of a global cultural movement.
        </motion.p>
      </motion.div>
    </div>
  );
}

function SlideTwo() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-6 relative">
      <WorldMap className="absolute inset-0 opacity-10" highlighted />
      <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10 text-center max-w-3xl">
        <motion.h1 variants={fadeUp} className="font-serif-display text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Go to a <span className="italic text-primary font-normal">Place.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-foreground/70 font-light max-w-lg mx-auto">
          Find a Yony Places partner location in one of the participating cities around the world.
        </motion.p>
      </motion.div>
    </div>
  );
}

function SlideThree() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-6 relative">
      <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10 text-center max-w-3xl">
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <QRVisual />
        </motion.div>
        <motion.h1 variants={fadeUp} className="font-serif-display text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Scan the <span className="italic text-primary font-normal">QR Code.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-foreground/70 font-light">
          Each location hosts a unique QR code.
        </motion.p>
        <motion.p variants={fadeUp} className="mt-3 text-base md:text-lg text-foreground/55 font-light max-w-lg mx-auto">
          Scan it to connect with a cultural object preserved outside its land of origin.
        </motion.p>
      </motion.div>
    </div>
  );
}

function SlideFour() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-6 relative">
      <ArtifactVisual className="absolute inset-0 opacity-[0.05]" />
      <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10 text-center max-w-3xl">
        <motion.h1 variants={fadeUp} className="font-serif-display text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Discover the <span className="italic text-primary font-normal">Story.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-foreground/70 font-light">
          Explore the history of the object.
        </motion.p>
        <motion.p variants={fadeUp} className="mt-3 text-base md:text-lg text-foreground/55 font-light max-w-lg mx-auto">
          Learn about its origins, its journey, and its meaning for the community it comes from.
        </motion.p>
      </motion.div>
    </div>
  );
}

function SlideFive() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-6">
      <motion.div variants={stagger} initial="hidden" animate="show" className="text-center max-w-2xl">
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <Gift className="w-12 h-12 text-primary" strokeWidth={1.5} />
        </motion.div>
        <motion.h1 variants={fadeUp} className="font-serif-display text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Receive a <span className="italic text-primary font-normal">Gift.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-foreground/70 font-light max-w-xl mx-auto">
          After each scan, enter the location lottery. Leave a Google review for the partner place and receive your reward.{" "}
          <span className="font-bold text-foreground">No losers</span> — every participation is rewarded.
        </motion.p>
      </motion.div>
    </div>
  );
}

function SlideSix() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-6 relative">
      <LightTokensVisual className="absolute inset-0" />
      <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10 text-center max-w-3xl">
        <motion.h1 variants={fadeUp} className="font-serif-display text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Redistribute the <span className="italic text-primary font-normal">Light.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-foreground/70 font-light">
          Earn Light Tokens after each scan.
        </motion.p>
        <motion.p variants={fadeUp} className="mt-3 text-base md:text-lg text-foreground/55 font-light max-w-lg mx-auto">
          Redistribute your tokens to the Flowers of the Yonyverse and support their projects.
        </motion.p>
      </motion.div>
    </div>
  );
}

// --- Main Component ---

const SLIDES = [SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix];
const SLIDE_DURATION = 4000;

export default function OnboardingPlaces() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, next, current]);

  const CurrentSlide = SLIDES[current];

  return (
    <div
      className="relative w-full min-h-screen bg-background overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group p-1"
            aria-label={`Slide ${i + 1}`}
          >
            <div
              className={`rounded-full transition-all duration-500 ${
                i === current
                  ? "w-10 h-4 bg-primary"
                  : "w-4 h-4 bg-foreground/15 group-hover:bg-foreground/30"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Keyboard nav */}
      <KeyboardNav
        onNext={next}
        onPrev={() => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
      />
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
