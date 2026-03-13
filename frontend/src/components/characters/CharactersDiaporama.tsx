import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { archetypes, type ArchetypeKey } from "@/data/archetypes";
import ArchetypeSelector from "./ArchetypeSelector";
import HeroBanner from "./HeroBanner";
import ProfileCard from "./ProfileCard";
import TabsContent from "./TabsContent";

export default function CharactersDiaporama() {
  const [selected, setSelected] = useState<ArchetypeKey>("light");
  const archetype = archetypes.find((a) => a.key === selected)!;
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Swipe detection for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      const currentIndex = archetypes.findIndex((a) => a.key === selected);
      if (diff > 0 && currentIndex < archetypes.length - 1) {
        // Swipe left - next archetype
        setSelected(archetypes[currentIndex + 1].key);
      } else if (diff < 0 && currentIndex > 0) {
        // Swipe right - previous archetype
        setSelected(archetypes[currentIndex - 1].key);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = archetypes.findIndex((a) => a.key === selected);
      if (e.key === "ArrowRight" && currentIndex < archetypes.length - 1) {
        setSelected(archetypes[currentIndex + 1].key);
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        setSelected(archetypes[currentIndex - 1].key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <section 
      id="characters" 
      className={`min-h-screen bg-black ${archetype.themeClass}`}
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ArchetypeSelector selected={selected} onSelect={setSelected} />
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={archetype.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <HeroBanner archetype={archetype} />
          <ProfileCard archetype={archetype} />
          <TabsContent archetype={archetype} />
        </motion.div>
      </AnimatePresence>

      {/* Swipe indicator for mobile */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-50 bg-black/80 px-4 py-2 rounded-full">
        {archetypes.map((a) => (
          <div
            key={a.key}
            className={`w-2 h-2 rounded-full transition-all ${
              selected === a.key ? "bg-primary w-4" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
