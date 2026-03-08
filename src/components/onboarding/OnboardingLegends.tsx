import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Legend images
import treeOfForgetting from "@/assets/legends/tree-of-forgetting.png";
import countingVolcano from "@/assets/legends/counting-volcano.png";
import forestThatErases from "@/assets/legends/forest-that-erases.png";
import lakesPulse from "@/assets/legends/lakes-pulse.png";
import turnedMoai from "@/assets/legends/turned-moai.png";
import obsidianMirror from "@/assets/legends/obsidian-mirror.png";
import dayWithoutCalls from "@/assets/legends/day-without-calls.png";
import whereWaterBegins from "@/assets/legends/where-water-begins.png";
import langouéClearing from "@/assets/legends/langoue-clearing.png";
import islandThatRemembers from "@/assets/legends/island-that-remembers.png";
import silenceOfAncestors from "@/assets/legends/silence-of-ancestors.png";
import tribunalOfAnimals from "@/assets/legends/tribunal-of-animals.png";
import twoDimensionalCity from "@/assets/legends/two-dimensional-city.png";
import suspendedBaths from "@/assets/legends/suspended-baths.png";
import shiftingVillage from "@/assets/legends/shifting-village.png";
import breathingLibrary from "@/assets/legends/breathing-library.png";

const legends = [
  { title: "The Tree of Forgetting", image: treeOfForgetting },
  { title: "The Counting Volcano", image: countingVolcano },
  { title: "The Forest That Erases", image: forestThatErases },
  { title: "The Lake's Pulse", image: lakesPulse },
  { title: "The Turned Moai", image: turnedMoai },
  { title: "The Obsidian Mirror", image: obsidianMirror },
  { title: "The Day Without Calls", image: dayWithoutCalls },
  { title: "Where the Water Begins", image: whereWaterBegins },
  { title: "The Langoué Clearing", image: langouéClearing },
  { title: "The Island That Remembers", image: islandThatRemembers },
  { title: "The Silence of the Ancestors", image: silenceOfAncestors },
  { title: "The Tribunal of Animals", image: tribunalOfAnimals },
  { title: "The Two-Dimensional City", image: twoDimensionalCity },
  { title: "The Suspended Baths", image: suspendedBaths },
  { title: "The Shifting Village", image: shiftingVillage },
  { title: "The Breathing Library", image: breathingLibrary },
];

const AUTOPLAY_INTERVAL = 4000;
const TOTAL_SLIDES = 5;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" as const } },
};

// Slide 1 — Welcome
function SlideWelcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 relative overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: "hsl(var(--copper) / 0.3)",
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      <motion.h1
        className="font-serif-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-center"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Yony{" "}
        <span className="text-gradient-copper italic font-medium">Legends</span>
      </motion.h1>

      <motion.p
        className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground font-sans-body italic tracking-wide"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Turn mystery into imagination
      </motion.p>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 80%, hsl(var(--copper) / 0.04) 0%, transparent 70%)" }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// Slide 2 — The Mystery
function SlideMystery() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 relative overflow-hidden">
      <motion.h2
        className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-tight"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Every legend begins with a{" "}
        <br />
        <span className="text-gradient-copper italic">mysterious situation.</span>
      </motion.h2>

      <motion.p
        className="mt-8 text-lg sm:text-xl text-muted-foreground font-sans-body italic text-center max-w-2xl"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        A moment appears… but its origin remains unknown.
      </motion.p>

      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--copper) / 0.08) 0%, transparent 70%)",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// Slide 3 — The Imagination
function SlideImagination() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 relative overflow-hidden">
      <motion.h2
        className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-tight"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Imagine what caused this{" "}
        <span className="text-gradient-copper italic">moment.</span>
      </motion.h2>

      <motion.p
        className="mt-8 text-lg sm:text-xl text-muted-foreground font-sans-body italic text-center max-w-2xl"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        And imagine what might happen next.
      </motion.p>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            backgroundColor: "hsl(var(--copper) / 0.1)",
            width: 4 + (i % 3) * 4,
            height: 4 + (i % 3) * 4,
            left: `${10 + i * 10}%`,
            top: `${30 + (i % 4) * 12}%`,
          }}
          animate={{ y: [-15, 15, -15], x: [-5, 5, -5], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
    </div>
  );
}

// Slide 4 — The 16 Legends
function SlideLegends() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12">
      <motion.h2
        className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Choisis une des{" "}
        <span className="text-gradient-copper italic">16 figures.</span>
      </motion.h2>

      <motion.p
        className="text-base sm:text-lg text-muted-foreground font-sans-body italic text-center mb-8 sm:mb-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
      >
        Each figure represents a source of inspiration.
      </motion.p>

      <motion.div
        className="grid grid-cols-4 gap-x-6 gap-y-5 max-w-3xl w-full"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
      >
        {legends.map((legend) => (
          <motion.div
            key={legend.title}
            className="flex flex-col items-center gap-2"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <div className="onboarding-legend-card group w-full">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={legend.image}
                  alt={legend.title}
                  className="onboarding-legend-card-image w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <span className="font-sans-body text-sm text-muted-foreground text-center leading-tight">
              {legend.title}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Slide 5 — Share
function SlideShare() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 relative overflow-hidden">
      <motion.h2
        className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-tight"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Share your story on{" "}
        <span className="text-gradient-copper italic">social media.</span>
      </motion.h2>

      <motion.p
        className="mt-6 text-lg sm:text-xl text-muted-foreground font-sans-body italic text-center max-w-2xl"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Post it and connect it to your project.
      </motion.p>

      <motion.div
        className="flex items-center gap-6 sm:gap-8 mt-12"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        {[
          { label: "Instagram", icon: <InstagramIcon /> },
          { label: "TikTok", icon: <TikTokIcon /> },
          { label: "YouTube", icon: <YouTubeIcon /> },
          { label: "LinkedIn", icon: <LinkedInIcon /> },
        ].map((social) => (
          <motion.div
            key={social.label}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-muted flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {social.icon}
          </motion.div>
        ))}
      </motion.div>

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: "hsl(var(--copper) / 0.4)",
            left: `${Math.random() * 80 + 10}%`,
            bottom: `${Math.random() * 40 + 10}%`,
          }}
          animate={{ y: [0, -60], opacity: [0, 0.8, 0], scale: [0, 1, 0.3] }}
          transition={{ duration: 2.5 + Math.random() * 2, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

// Social icons
function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <polygon points="10,8.5 16,12 10,15.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M8 11v5M8 8v.01M12 16v-5c0-1 .5-2 2-2s2 1 2 2v5" />
    </svg>
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

// Main Component
export default function OnboardingLegends() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slides = [
    <SlideWelcome key="welcome" />,
    <SlideMystery key="mystery" />,
    <SlideImagination key="imagination" />,
    <SlideLegends key="legends" />,
    <SlideShare key="share" />,
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-background overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`onboarding-progress-dot ${i === currentSlide ? "active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <KeyboardNav
        onNext={nextSlide}
        onPrev={() => setCurrentSlide((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES)}
      />
    </div>
  );
}
