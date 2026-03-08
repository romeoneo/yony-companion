import { motion } from "framer-motion";
import { useState } from "react";

const territories = [
  { name: "Benin", value: "Lucidity", desc: "Lucidity reveals the truth that guides the journey.", x: 48, y: 42 },
  { name: "South Africa", value: "Transmission", desc: "Transmission carries wisdom across generations.", x: 52, y: 62 },
  { name: "Gabon", value: "Connection", desc: "Connection reminds us that every being is linked.", x: 47, y: 48 },
  { name: "Madagascar", value: "Tolerance", desc: "Tolerance allows differences to coexist in harmony.", x: 58, y: 58 },
  { name: "Egypt", value: "Gratitude", desc: "Gratitude honors the gifts received from the past.", x: 53, y: 32 },
  { name: "Turkey", value: "Authenticity", desc: "Authenticity expresses the truth of one's being.", x: 55, y: 28 },
  { name: "Sweden", value: "Cohesion", desc: "Cohesion unites individuals into a collective force.", x: 50, y: 18 },
  { name: "Mongolia", value: "Humility", desc: "Humility opens the path to true understanding.", x: 70, y: 24 },
  { name: "India", value: "Intuition", desc: "Intuition listens to the silent voice within.", x: 66, y: 35 },
  { name: "Indonesia", value: "Creativity", desc: "Creativity transforms imagination into living culture.", x: 74, y: 48 },
  { name: "Japan", value: "Perseverance", desc: "Perseverance shapes every step into mastery.", x: 80, y: 28 },
  { name: "Papua New Guinea", value: "Resilience", desc: "Resilience allows life to flourish despite adversity.", x: 82, y: 48 },
  { name: "Easter Island", value: "Patience", desc: "Patience reminds us that great things take time.", x: 12, y: 58 },
  { name: "Mexico", value: "Equity", desc: "Equity ensures that every voice has its place.", x: 18, y: 36 },
  { name: "Brazil", value: "Empathy", desc: "Empathy lets us feel the world through others.", x: 30, y: 52 },
  { name: "Peru", value: "Benevolence", desc: "Benevolence spreads generosity through every action.", x: 24, y: 50 },
];

const WorldMapSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="world" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Journey of the <span className="text-gradient-copper italic">Yony Egg</span>
          </h2>
          <p className="text-muted-foreground text-lg">16 founding territories. 16 values. One shared journey.</p>
        </motion.div>

        {/* Map */}
        <div className="relative w-full aspect-[2/1] bg-card rounded-3xl sacred-border overflow-hidden mb-8">
          {/* Simple world outline hint */}
          <div className="absolute inset-0 opacity-5 flex items-center justify-center">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <ellipse cx="50" cy="25" rx="45" ry="20" fill="none" stroke="currentColor" strokeWidth="0.2" />
            </svg>
          </div>

          {territories.map((t, i) => (
            <motion.button
              key={t.name}
              className="absolute group"
              style={{ left: `${t.x}%`, top: `${t.y}%`, transform: "translate(-50%, -50%)" }}
              onClick={() => setSelected(selected === i ? null : i)}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                selected === i ? "bg-golden scale-150 glow-golden" : "bg-copper/60 hover:bg-copper hover:scale-125"
              }`} />
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-sans-body text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {t.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Selected territory info */}
        {selected !== null && (
          <motion.div
            className="max-w-md mx-auto text-center p-6 rounded-2xl bg-card sacred-border"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h4 className="font-serif text-2xl font-bold mb-1">{territories[selected].name}</h4>
            <p className="text-copper font-semibold mb-2">{territories[selected].value}</p>
            <p className="text-muted-foreground text-sm">{territories[selected].desc}</p>
          </motion.div>
        )}

        {/* Values grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {territories.map((t, i) => (
            <motion.button
              key={t.value}
              onClick={() => setSelected(i)}
              className={`p-3 rounded-xl text-sm font-sans-body transition-all duration-300 ${
                selected === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-card sacred-border text-foreground hover:bg-secondary"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              {t.value}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
