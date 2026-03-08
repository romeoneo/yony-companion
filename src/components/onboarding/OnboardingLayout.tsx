import { useState, useEffect, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AUTOPLAY_INTERVAL = 4000;

// --- Shared animation variants ---
export const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" as const } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" as const },
  }),
};

// --- OnboardingSlide ---
interface OnboardingSlideProps {
  children: ReactNode;
}

export function OnboardingSlide({ children }: OnboardingSlideProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-6 py-8 relative overflow-hidden">
      {children}
    </div>
  );
}

// --- OnboardingNavigation ---
interface OnboardingNavigationProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export function OnboardingNavigation({ total, current, onSelect }: OnboardingNavigationProps) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`rounded-full transition-all duration-300 cursor-pointer ${
            i === current
              ? "w-8 h-2.5 bg-primary"
              : "w-2.5 h-2.5 bg-muted-foreground/20 hover:bg-muted-foreground/40"
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

// --- KeyboardNav ---
function KeyboardNav({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onNext, onPrev]);
  return null;
}

// --- OnboardingLayout ---
interface OnboardingLayoutProps {
  slides: ReactNode[];
  gameName?: string;
}

export default function OnboardingLayout({ slides }: OnboardingLayoutProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <div
      className="relative w-full h-full min-h-[480px] bg-background overflow-hidden select-none"
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
        >
          {slides[current]}
        </motion.div>
      </AnimatePresence>

      <OnboardingNavigation
        total={slides.length}
        current={current}
        onSelect={setCurrent}
      />

      <KeyboardNav onNext={next} onPrev={prev} />
    </div>
  );
}
