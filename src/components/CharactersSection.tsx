import { useState, useEffect, useCallback } from "react";
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

const characters = [
  {
    name: "Yony Seeds",
    subtitle: "Dream Bearers",
    image: charSeeds,
    description:
      "Dream carriers presenting impact projects during the nine months of the Yony Games. Each Seed belongs to a Flower group of eight Seeds representing a territory.",
  },
  {
    name: "Yony Brands",
    subtitle: "Visionary Partners",
    image: charBrands,
    description:
      "Visionary partners who align their brand identity with the cultural values of the Yony Games, amplifying the reach of dreams across the world.",
  },
  {
    name: "Yony Lights",
    subtitle: "Creative Luminaries",
    image: charLights,
    description:
      "Creative luminaries who illuminate the cultural narratives of each territory through art, music, and storytelling.",
  },
  {
    name: "Yony Angels",
    subtitle: "Generous Guardians",
    image: charAngels,
    description:
      "Generous guardians who provide resources and guidance to nurture the dreams of the Seeds throughout the journey.",
  },
  {
    name: "Yony Stars",
    subtitle: "Renowned Figures",
    image: charStars,
    description:
      "Renowned figures who lend their influence and wisdom to elevate the visibility and impact of the Yony Games.",
  },
  {
    name: "Yony Magics",
    subtitle: "Digital Artists",
    image: charMagics,
    description:
      "Digital artists and technologists who weave immersive experiences, bringing the mythological universe to life.",
  },
  {
    name: "Yony Guards",
    subtitle: "Value Protectors",
    image: charGuards,
    description:
      "Protectors of the values and integrity of the Yony Games, ensuring fairness, respect and cultural authenticity.",
  },
  {
    name: "Yony Places",
    subtitle: "Sacred Spaces",
    image: charPlaces,
    description:
      "Sacred spaces and venues that host the physical manifestations of the Yony Games across the 16 founding territories.",
  },
];

const CharactersSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = characters.length;

  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;

  const go = useCallback(
    (to: number) => {
      setDirection(to > active ? 1 : -1);
      setActive(to);
    },
    [active]
  );

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActive((a) => (a - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setDirection(1);
    setActive((a) => (a + 1) % total);
  }, [total]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const id = setInterval(goNext, 5000);
    return () => clearInterval(id);
  }, [goNext]);

  const char = characters[active];

  return (
    <section id="characters" className="relative w-full" style={{ backgroundColor: "#0a0a0a" }}>
      {/* ── Section title ── */}
      <div className="text-center pt-20 pb-12 px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold mb-4"
          style={{ color: "#f6f2f0" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span style={{ color: "#000000" }}>The</span> <span style={{ color: "#e4632c" }} className="italic">Characters</span>
        </motion.h2>
        <p style={{ color: "#978B83", fontFamily: "'Montserrat', sans-serif" }} className="text-lg">
          Archetypal roles that shape the Yonyverse.
        </p>
      </div>

      {/* ── Hero image ── */}
      <div className="relative w-full aspect-video overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={active}
            src={char.image}
            alt={char.name}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 60 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0a0a0a, transparent)",
          }}
        />

        {/* Nav arrows */}
        <button
          onClick={goPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md"
          style={{ border: "1px solid rgba(255,255,255,0.35)" }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md"
          style={{ border: "1px solid rgba(255,255,255,0.35)" }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* ── Cartouche bandeau ── */}
      <div
        className="relative -mt-6 z-10 mx-auto w-[92%] max-w-5xl py-6"
        style={{
          backgroundColor: "#f6f2f0",
          clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="flex items-center justify-center gap-6 md:gap-12 px-8">
          {/* Previous */}
          <button
            onClick={goPrev}
            className="hidden md:block text-center transition-opacity cursor-pointer"
            style={{ opacity: 0.35 }}
          >
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#e4632c", fontFamily: "'Montserrat', sans-serif" }}
            >
              {characters[prev].subtitle}
            </p>
            <p
              className="text-lg font-black tracking-wide"
              style={{ color: "#000", fontFamily: "'Montserrat', sans-serif" }}
            >
              {characters[prev].name}
            </p>
          </button>

          {/* Active center */}
          <div className="text-center flex-shrink-0">
            <div className="w-10 h-[2px] mx-auto mb-2" style={{ backgroundColor: "#e4632c" }} />
            <p
              className="text-xs uppercase tracking-[0.3em] mb-1"
              style={{ color: "#e4632c", fontFamily: "'Montserrat', sans-serif" }}
            >
              {char.subtitle}
            </p>
            <p
              className="text-2xl md:text-3xl font-black tracking-wide"
              style={{ color: "#000", fontFamily: "'Montserrat', sans-serif" }}
            >
              {char.name}
            </p>
            <div className="w-10 h-[2px] mx-auto mt-2" style={{ backgroundColor: "#e4632c" }} />
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            className="hidden md:block text-center transition-opacity cursor-pointer"
            style={{ opacity: 0.35 }}
          >
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#e4632c", fontFamily: "'Montserrat', sans-serif" }}
            >
              {characters[next].subtitle}
            </p>
            <p
              className="text-lg font-black tracking-wide"
              style={{ color: "#000", fontFamily: "'Montserrat', sans-serif" }}
            >
              {characters[next].name}
            </p>
          </button>
        </div>
      </div>

      {/* ── Description ── */}
      <div className="max-w-2xl mx-auto text-center px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            style={{
              color: "#978B83",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              lineHeight: 1.8,
            }}
          >
            {char.description}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CharactersSection;
