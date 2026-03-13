import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";

const territoryKeys = [
  "benin", "gabon", "southAfrica", "madagascar", "egypt", "turkey", "sweden", "mongolia",
  "india", "indonesia", "japan", "papuaNewGuinea", "easterIsland", "mexico", "brazil", "peru",
] as const;

const positions = [
  { x: 48, y: 42 }, { x: 47, y: 48 }, { x: 52, y: 62 }, { x: 58, y: 58 },
  { x: 53, y: 32 }, { x: 55, y: 28 }, { x: 50, y: 18 }, { x: 70, y: 24 },
  { x: 66, y: 35 }, { x: 74, y: 48 }, { x: 80, y: 28 }, { x: 82, y: 48 },
  { x: 12, y: 58 }, { x: 18, y: 36 }, { x: 30, y: 52 }, { x: 24, y: 50 },
];

const WorldMapSection = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="world" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {t("worldMap.title")} <span className="text-gradient-copper italic">{t("worldMap.titleAccent")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t("worldMap.subtitle")}</p>
          <p className="text-muted-foreground text-base leading-[2.2] mt-2 max-w-2xl mx-auto">{t("worldMap.description")}</p>
        </motion.div>

        <div className="relative w-full aspect-[2/1] bg-card rounded-3xl sacred-border overflow-hidden mb-8">
          <div className="absolute inset-0 opacity-5 flex items-center justify-center">
            <svg viewBox="0 0 100 50" className="w-full h-full"><ellipse cx="50" cy="25" rx="45" ry="20" fill="none" stroke="currentColor" strokeWidth="0.2" /></svg>
          </div>
          {territoryKeys.map((key, i) => (
            <motion.button key={key} className="absolute group" style={{ left: `${positions[i].x}%`, top: `${positions[i].y}%`, transform: "translate(-50%, -50%)" }}
              onClick={() => setSelected(selected === i ? null : i)} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }}>
              <div className={`w-4 h-4 rounded-full transition-all duration-300 ${selected === i ? "bg-golden scale-150 glow-golden" : "bg-copper/60 hover:bg-copper hover:scale-125"}`} />
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-sans-body text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {t(`worldMap.territories.${key}.name`)}
              </span>
            </motion.button>
          ))}
        </div>

        {selected !== null && (
          <motion.div className="max-w-md mx-auto text-center p-6 rounded-2xl bg-card sacred-border" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h4 className="font-serif text-2xl font-bold mb-1">{t(`worldMap.territories.${territoryKeys[selected]}.name`)}</h4>
            <p className="text-copper font-semibold mb-2">{t(`worldMap.territories.${territoryKeys[selected]}.value`)}</p>
            <p className="text-muted-foreground text-sm">{t(`worldMap.territories.${territoryKeys[selected]}.desc`)}</p>
          </motion.div>
        )}

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {territoryKeys.map((key, i) => (
            <motion.button key={key} onClick={() => setSelected(i)}
              className={`p-3 rounded-xl text-sm font-sans-body transition-all duration-300 ${selected === i ? "bg-primary text-primary-foreground" : "bg-card sacred-border text-foreground hover:bg-secondary"}`}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
              {t(`worldMap.territories.${key}.value`)}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
