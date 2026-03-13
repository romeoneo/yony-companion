import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StatCard {
  name: string;
  current: number;
  total: number;
}

const stats: StatCard[] = [
  { name: "Yony Flowers", current: 6, total: 256 },
  { name: "Yony Brands", current: 4, total: 256 },
  { name: "Yony Lights", current: 13, total: 256 },
  { name: "Yony Places", current: 6, total: 256 },
  { name: "Yony Angels", current: 4, total: 256 },
  { name: "Yony Magics", current: 11, total: 256 },
  { name: "Yony Stars", current: 22, total: 256 },
  { name: "Yony Guards", current: 6, total: 256 },
  { name: "Yony Medias", current: 2, total: 256 },
];

export default function ProgressStats() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  const totalRegistered = stats.reduce((sum, s) => sum + s.current, 0);

  return (
    <div className="bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-8">
          <p className="text-sm font-sans-body text-muted-foreground mb-2">
            {totalRegistered} inscrits
          </p>
        </div>

        {/* Cards container */}
        <div className="relative">
          {/* Scroll buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white shadow-lg rounded-full text-muted-foreground hover:text-foreground transition-colors hidden md:flex"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-2 md:px-12 scroll-smooth snap-x snap-mandatory touch-pan-x pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stats.map((stat, index) => {
              const percentage = Math.round((stat.current / stat.total) * 100);
              return (
                <motion.div
                  key={stat.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex-shrink-0 w-[140px] md:w-[160px] bg-secondary/50 rounded-2xl p-4 snap-center"
                >
                  {/* Card name */}
                  <p className="font-serif-display font-bold text-foreground text-sm md:text-base mb-6 h-12 flex items-center">
                    {stat.name}
                  </p>
                  
                  {/* Stats */}
                  <div className="mb-4">
                    <span className="text-2xl md:text-3xl font-serif-display font-bold text-foreground">
                      {stat.current}
                    </span>
                    <span className="text-sm text-muted-foreground font-sans-body">
                      {" "}/ {stat.total} · {percentage}%
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white shadow-lg rounded-full text-muted-foreground hover:text-foreground transition-colors hidden md:flex"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
