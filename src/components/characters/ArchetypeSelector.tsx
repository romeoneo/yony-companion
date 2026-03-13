import { archetypes, type ArchetypeKey } from "@/data/archetypes";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface Props {
  selected: ArchetypeKey;
  onSelect: (key: ArchetypeKey) => void;
}

export default function ArchetypeSelector({ selected, onSelect }: Props) {
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

  return (
    <div className="sticky top-14 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10">
      <div className="flex flex-col items-center gap-4 py-6 px-4">
        {/* New styled title - "Les Yony Magics" */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-display font-bold">
            <span className="text-white">Les </span>
            <span className="text-gradient-yony italic">Yony Magics</span>
          </h2>
          <p className="text-sm md:text-base font-sans-body text-white/50 mt-2">
            Les 8 Personnages-clés
          </p>
        </div>
        
        <div className="relative w-full max-w-3xl">
          {/* Scroll buttons for desktop */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-black/80 rounded-full text-white/70 hover:text-white transition-colors hidden md:flex"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
          
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-2 overflow-x-auto scrollbar-hide px-2 md:px-8 scroll-smooth snap-x snap-mandatory touch-pan-x justify-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {archetypes.map((a) => (
              <motion.button
                key={a.key}
                onClick={() => onSelect(a.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-sans-body font-medium border transition-all duration-200 snap-center ${
                  selected === a.key
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-black/50 text-white/70 border-white/20 hover:border-primary/50 hover:text-white"
                }`}
              >
                {a.label}
              </motion.button>
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-black/80 rounded-full text-white/70 hover:text-white transition-colors hidden md:flex"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
