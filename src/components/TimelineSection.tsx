import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const territories = [
  "Benin", "Gabon", "South Africa", "Madagascar",
  "Egypt", "Turkey", "Sweden", "Mongolia",
  "India", "Indonesia", "Japan", "Papua New Guinea",
  "Easter Island", "Mexico", "Brazil", "Peru",
];

const TimelineSection = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => { scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" }); };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {t("timeline.title")} <span className="text-gradient-copper italic">{t("timeline.titleAccent")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("timeline.subtitle")}</p>
        </motion.div>
        <div className="flex justify-end gap-2 mb-4">
          <button onClick={() => scroll(-1)} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
          <button onClick={() => scroll(1)} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"><ChevronRight className="w-5 h-5" /></button>
        </div>
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {territories.map((territory, i) => (
            <motion.div key={i} className="min-w-[220px] p-6 rounded-2xl bg-card sacred-border flex-shrink-0 snap-start hover:glow-soft transition-all duration-300" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <div className="text-primary font-sans-body text-sm font-medium mb-1">{t("timeline.day")} {i * 16 + 1}–{(i + 1) * 16}</div>
              <div className="text-xl font-serif font-bold mb-2">{t("timeline.cycle")} {i + 1}</div>
              <div className="text-foreground font-medium">{territory}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;