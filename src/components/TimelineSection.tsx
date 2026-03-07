import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cycles = Array.from({ length: 16 }, (_, i) => ({
  number: i + 1,
  territory: [
    "Benin", "Gabon", "South Africa", "Madagascar",
    "Egypt", "Turkey", "Sweden", "Mongolia",
    "India", "Indonesia", "Japan", "Papua New Guinea",
    "Easter Island", "Mexico", "Brazil", "Peru",
  ][i],
  theme: [
    "Origins & Kindness", "Roots & Transmission", "Expression & Creativity", "Harvest & Gratitude",
    "Unity & Cohesion", "Bridges & Empathy", "Truth & Authenticity", "Endurance & Resilience",
    "Harmony & Tolerance", "Balance & Equity", "Insight & Intuition", "Bonds & Connection",
    "Clarity & Lucidity", "Strength & Perseverance", "Growth & Humility", "Mastery & Patience",
  ][i],
  days: `Day ${i * 16 + 1}–${(i + 1) * 16}`,
}));

const TimelineSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            The <span className="text-gradient-copper italic">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">256 days. 16 cycles. One epic cultural odyssey.</p>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-end gap-2 mb-4">
          <button onClick={() => scroll(-1)} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll(1)} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Timeline scroll */}
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {cycles.map((cycle, i) => (
            <motion.div
              key={cycle.number}
              className="min-w-[220px] p-6 rounded-2xl bg-card sacred-border flex-shrink-0 snap-start hover:glow-soft transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="text-primary font-sans-body text-sm font-medium mb-1">{cycle.days}</div>
              <div className="text-xl font-serif font-bold mb-2">Cycle {cycle.number}</div>
              <div className="text-foreground font-medium">{cycle.territory}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
