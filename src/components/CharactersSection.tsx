import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import charSeeds from "@/assets/char-seeds.png";
import charBrands from "@/assets/char-brands.png";
import charLights from "@/assets/char-lights.png";
import charAngels from "@/assets/char-angels.png";
import charStars from "@/assets/char-stars.png";
import charMagics from "@/assets/char-magics.png";
import charGuards from "@/assets/char-guards.png";
import charPlaces from "@/assets/char-places.png";

const characterKeys = ["seeds", "brands", "lights", "angels", "stars", "magics", "guards", "places"] as const;
const images = [charSeeds, charBrands, charLights, charAngels, charStars, charMagics, charGuards, charPlaces];

const CharactersSection = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = characterKeys.length;

  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;

  const go = useCallback((to: number) => { setDirection(to > active ? 1 : -1); setActive(to); }, [active]);
  const goPrev = useCallback(() => { setDirection(-1); setActive((a) => (a - 1 + total) % total); }, [total]);
  const goNext = useCallback(() => { setDirection(1); setActive((a) => (a + 1) % total); }, [total]);

  useEffect(() => { const id = setInterval(goNext, 5000); return () => clearInterval(id); }, [goNext]);

  const key = characterKeys[active];

  return (
    <section id="characters" className="relative w-full" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="text-center pt-20 pb-12 px-6">
        <motion.h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: "#f6f2f0" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {t("characters.title")} <span style={{ color: "#e4632c" }} className="italic">{t("characters.titleAccent")}</span>
        </motion.h2>
        <p style={{ color: "#978B83", fontFamily: "'Montserrat', sans-serif" }} className="text-lg">{t("characters.subtitle")}</p>
      </div>

      <div className="relative w-full aspect-video overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img key={active} src={images[active]} alt={t(`characters.${key}.name`)} className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: direction * 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -direction * 60 }} transition={{ duration: 0.6 }} />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none" style={{ background: "linear-gradient(to top, #0a0a0a, transparent)" }} />
        <button onClick={goPrev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md" style={{ border: "1px solid rgba(255,255,255,0.35)" }}>
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button onClick={goNext} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md" style={{ border: "1px solid rgba(255,255,255,0.35)" }}>
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="relative -mt-6 z-10 mx-auto w-[92%] max-w-5xl py-6" style={{ backgroundColor: "#f6f2f0", clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)" }}>
        <div className="flex items-center justify-center gap-6 md:gap-12 px-8">
          <button onClick={goPrev} className="hidden md:block text-center transition-opacity cursor-pointer" style={{ opacity: 0.35 }}>
            <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "#e4632c", fontFamily: "'Montserrat', sans-serif" }}>{t(`characters.${characterKeys[prev]}.subtitle`)}</p>
            <p className="text-lg font-black tracking-wide" style={{ color: "#000", fontFamily: "'Montserrat', sans-serif" }}>{t(`characters.${characterKeys[prev]}.name`)}</p>
          </button>
          <div className="text-center flex-shrink-0">
            <div className="w-10 h-[2px] mx-auto mb-2" style={{ backgroundColor: "#e4632c" }} />
            <p className="text-xs uppercase tracking-[0.3em] mb-1" style={{ color: "#e4632c", fontFamily: "'Montserrat', sans-serif" }}>{t(`characters.${key}.subtitle`)}</p>
            <p className="text-2xl md:text-3xl font-black tracking-wide" style={{ color: "#000", fontFamily: "'Montserrat', sans-serif" }}>{t(`characters.${key}.name`)}</p>
            <div className="w-10 h-[2px] mx-auto mt-2" style={{ backgroundColor: "#e4632c" }} />
          </div>
          <button onClick={goNext} className="hidden md:block text-center transition-opacity cursor-pointer" style={{ opacity: 0.35 }}>
            <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "#e4632c", fontFamily: "'Montserrat', sans-serif" }}>{t(`characters.${characterKeys[next]}.subtitle`)}</p>
            <p className="text-lg font-black tracking-wide" style={{ color: "#000", fontFamily: "'Montserrat', sans-serif" }}>{t(`characters.${characterKeys[next]}.name`)}</p>
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.p key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}
            style={{ color: "#978B83", fontFamily: "'Montserrat', sans-serif", fontWeight: 400, lineHeight: 1.8 }}>
            {t(`characters.${key}.description`)}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CharactersSection;
