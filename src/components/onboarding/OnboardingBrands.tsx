import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brandMatch1 from "@/assets/brands/brand-match-1.jpg";
import brandMatch2 from "@/assets/brands/brand-match-2.jpg";
import brandMatch3 from "@/assets/brands/brand-match-3.jpg";
import brandMatch4 from "@/assets/brands/brand-match-4.jpg";

// --- Slide Visual Components ---

const BrandCard = ({ name, emoji, delay, x, y }: { name: string; emoji: string; delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute rounded-lg bg-card border border-border px-4 py-3 shadow-sm"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
    transition={{
      opacity: { delay, duration: 0.6 },
      scale: { delay, duration: 0.6 },
      y: { delay: delay + 0.6, duration: 3, repeat: Infinity, ease: "easeInOut" },
    }}
  >
    <span className="mr-2">{emoji}</span>
    <span className="font-sans-body text-sm font-medium text-foreground">{name}</span>
  </motion.div>
);

const SlideOneVisual = () => {
  const brands = [
    { name: "Terra Verde", emoji: "🌿", x: 15, y: 20, delay: 0.2 },
    { name: "Solaris", emoji: "☀️", x: 55, y: 10, delay: 0.4 },
    { name: "Oceana", emoji: "🌊", x: 70, y: 45, delay: 0.6 },
    { name: "Roots Co.", emoji: "🌱", x: 10, y: 55, delay: 0.8 },
    { name: "Lumina", emoji: "✨", x: 45, y: 65, delay: 1.0 },
    { name: "Cultura", emoji: "🎨", x: 75, y: 75, delay: 1.2 },
  ];

  return (
    <div className="relative w-full h-64 md:h-80">
      <svg viewBox="0 0 400 200" className="w-full h-full opacity-10">
        {Array.from({ length: 60 }).map((_, i) => (
          <circle key={i} cx={30 + (i % 12) * 30} cy={20 + Math.floor(i / 12) * 35} r="2" fill="currentColor" className="text-foreground" />
        ))}
      </svg>
      {brands.map((b) => <BrandCard key={b.name} {...b} />)}
    </div>
  );
};

const SlideTwoVisual = () => (
  <div className="flex justify-center">
    <motion.div className="w-72 md:w-80 rounded-xl bg-card border border-border p-6 shadow-sm"
      initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7, ease: "easeOut" }}>
      <motion.div className="flex items-center gap-3 mb-4" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
        <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-xl">🌿</div>
        <div>
          <p className="font-serif-display font-bold text-foreground">Terra Verde</p>
          <p className="text-xs text-muted-foreground font-sans-body">@terra.verde</p>
        </div>
      </motion.div>
      {["Mission", "Valeurs", "Actions"].map((label, i) => (
        <motion.div key={label} className="mb-2 rounded-md bg-secondary px-3 py-2"
          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.2 }}>
          <p className="text-xs font-medium text-muted-foreground font-sans-body uppercase tracking-wide">{label}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const SlideThreeVisual = () => {
  const cards = [
    { img: brandMatch1, brand: "Sakura Bento", delay: 0.2 },
    { img: brandMatch2, brand: "Wabi Sabi Home", delay: 0.4 },
    { img: brandMatch3, brand: "Lagom Studio", delay: 0.6 },
    { img: brandMatch4, brand: "Verdure Paris", delay: 0.8 },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto">
      {cards.map((card) => (
        <motion.div key={card.brand} className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.03 }}
          transition={{ delay: card.delay, duration: 0.5 }}>
          <img src={card.img} alt={card.brand} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
};

const SlideFourVisual = () => {
  const regions = [
    { name: "Europe", x: 52, y: 25, delay: 0.3 },
    { name: "Afrique", x: 50, y: 55, delay: 0.5 },
    { name: "Asie", x: 70, y: 30, delay: 0.7 },
    { name: "Amériques", x: 25, y: 40, delay: 0.9 },
    { name: "Océanie", x: 80, y: 65, delay: 1.1 },
  ];

  return (
    <div className="relative w-full h-56 md:h-72">
      <svg viewBox="0 0 400 200" className="w-full h-full opacity-[0.07]">
        {Array.from({ length: 80 }).map((_, i) => (
          <circle key={i} cx={15 + (i % 16) * 24} cy={15 + Math.floor(i / 16) * 35} r="2" fill="currentColor" className="text-foreground" />
        ))}
      </svg>
      {regions.map((r) => (
        <motion.div key={r.name} className="absolute" style={{ left: `${r.x}%`, top: `${r.y}%` }}
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: r.delay, duration: 0.5, type: "spring" }}>
          <div className="relative flex flex-col items-center">
            <motion.div className="w-3 h-3 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: r.delay }} />
            <span className="mt-1 text-xs font-sans-body font-medium text-foreground whitespace-nowrap">{r.name}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const SlideFiveVisual = () => {
  const lights = [
    { x: 20, y: 30, size: 8, delay: 0.2 },
    { x: 35, y: 15, size: 6, delay: 0.4 },
    { x: 50, y: 25, size: 10, delay: 0.1 },
    { x: 65, y: 10, size: 5, delay: 0.6 },
    { x: 80, y: 35, size: 7, delay: 0.3 },
    { x: 25, y: 55, size: 5, delay: 0.8 },
    { x: 45, y: 50, size: 9, delay: 0.5 },
    { x: 70, y: 55, size: 6, delay: 0.7 },
    { x: 55, y: 40, size: 4, delay: 0.9 },
    { x: 40, y: 65, size: 7, delay: 1.0 },
    { x: 15, y: 45, size: 5, delay: 0.6 },
    { x: 85, y: 20, size: 6, delay: 0.4 },
    { x: 30, y: 70, size: 4, delay: 1.1 },
    { x: 75, y: 45, size: 8, delay: 0.3 },
    { x: 60, y: 70, size: 5, delay: 0.9 },
  ];

  return (
    <div className="relative w-full h-56 md:h-72">
      {lights.map((l, i) => (
        <motion.div key={i} className="absolute rounded-full bg-primary"
          style={{ width: l.size, height: l.size, left: `${l.x}%`, top: `${l.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.8, 0.2, 0.7, 0.3], scale: [0, 1.2, 0.8, 1, 0.9] }}
          transition={{ delay: l.delay, duration: 4, repeat: Infinity, ease: "easeInOut" }} />
      ))}
      {lights.filter((_, i) => i % 3 === 0).map((l, i) => (
        <motion.div key={`glow-${i}`} className="absolute rounded-full bg-primary/10"
          style={{ width: l.size * 4, height: l.size * 4, left: `calc(${l.x}% - ${l.size * 1.5}px)`, top: `calc(${l.y}% - ${l.size * 1.5}px)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0.1, 0.3] }}
          transition={{ delay: l.delay + 0.2, duration: 5, repeat: Infinity, ease: "easeInOut" }} />
      ))}
    </div>
  );
};

// --- Slide Data ---

interface Slide {
  title: string;
  titleAccent: string;
  subtitle: string;
  visual: React.ReactNode;
}

const slides: Slide[] = [
  {
    title: "Discover Brands", titleAccent: "Changing the World",
    subtitle: "Explore, learn, play, and support brands creating social, cultural, and ecological impact across the world.",
    visual: <SlideOneVisual />,
  },
  {
    title: "Brand", titleAccent: "Explorer",
    subtitle: "Learn about an impact brand through its story, mission, values, and actions. Each brand offers its own discovery journey.",
    visual: <SlideTwoVisual />,
  },
  {
    title: "Brand", titleAccent: "Match",
    subtitle: "Match each image with the correct impact brand. Test your knowledge while discovering inspiring initiatives.",
    visual: <SlideThreeVisual />,
  },
  {
    title: "Explore by", titleAccent: "Region",
    subtitle: "Filter brands by continent or country. Or explore all brands and discover impact initiatives around the world.",
    visual: <SlideFourVisual />,
  },
  {
    title: "Redistribute the", titleAccent: "Light.",
    subtitle: "Redistribute your tokens to the Flowers of the Yonyverse and support their projects.",
    visual: <SlideFiveVisual />,
  },
];

// --- Main Component ---

export default function OnboardingBrands() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isPaused, currentSlide, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full max-w-2xl px-6 flex flex-col items-center">
        {/* Visual */}
        <AnimatePresence mode="wait">
          <motion.div key={`visual-${currentSlide}`} className="w-full mb-10"
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }}>
            {slide.visual}
          </motion.div>
        </AnimatePresence>

        {/* Title */}
        <AnimatePresence mode="wait">
          <motion.div key={`text-${currentSlide}`} className="text-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <motion.h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
              <span className="text-foreground">{slide.title} </span>
              <span className="text-primary italic">{slide.titleAccent}</span>
            </motion.h1>
            <motion.p className="font-sans-body text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed"
              initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
              {slide.subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex items-center gap-2.5 mt-10">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className={`relative rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-10 h-3 bg-primary" : "w-3 h-3 bg-muted"
              }`} />
          ))}
        </div>
      </div>

      <KeyboardNav onNext={nextSlide} onPrev={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)} />
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
