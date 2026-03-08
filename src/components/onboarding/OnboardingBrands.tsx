import { motion } from "framer-motion";
import OnboardingLayout, { OnboardingSlide, fadeUp } from "./OnboardingLayout";
import brandMatch1 from "@/assets/brands/brand-match-1.jpg";
import brandMatch2 from "@/assets/brands/brand-match-2.jpg";
import brandMatch3 from "@/assets/brands/brand-match-3.jpg";
import brandMatch4 from "@/assets/brands/brand-match-4.jpg";

const brands = [
  { name: "Terra Verde", emoji: "🌿", x: 15, y: 15, delay: 0.2 },
  { name: "Solaris", emoji: "☀️", x: 55, y: 8, delay: 0.4 },
  { name: "Oceana", emoji: "🌊", x: 70, y: 40, delay: 0.6 },
  { name: "Roots Co.", emoji: "🌱", x: 10, y: 50, delay: 0.8 },
  { name: "Lumina", emoji: "✨", x: 45, y: 58, delay: 1.0 },
  { name: "Cultura", emoji: "🎨", x: 72, y: 68, delay: 1.2 },
];

const matchCards = [
  { img: brandMatch1, brand: "Sakura Bento" },
  { img: brandMatch2, brand: "Wabi Sabi Home" },
  { img: brandMatch3, brand: "Lagom Studio" },
  { img: brandMatch4, brand: "Verdure Paris" },
];

const regions = [
  { name: "Europe", x: 52, y: 25 }, { name: "Afrique", x: 50, y: 55 },
  { name: "Asie", x: 70, y: 30 }, { name: "Amériques", x: 25, y: 40 },
  { name: "Océanie", x: 80, y: 65 },
];

const slides = [
  <OnboardingSlide key="s1">
    <motion.h1 className="font-serif-display text-5xl md:text-7xl font-black tracking-tight text-foreground text-center leading-tight relative z-10" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Yony <span className="text-primary italic">Brands</span>
    </motion.h1>
    <motion.p className="font-sans-body text-sm md:text-base text-muted-foreground max-w-lg text-center mt-4 relative z-10" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Explore, learn, play, and support brands creating social, cultural, and ecological impact.
    </motion.p>
    <motion.div className="flex flex-wrap justify-center gap-3 mt-6 max-w-sm relative z-10" custom={2} variants={fadeUp} initial="hidden" animate="visible">
      {brands.map((b) => (
        <div key={b.name} className="flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 shadow-sm">
          <span>{b.emoji}</span>
          <span className="font-sans-body text-xs font-medium text-foreground">{b.name}</span>
        </div>
      ))}
    </motion.div>
  </OnboardingSlide>,

  <OnboardingSlide key="s2">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-center mb-6" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      <span className="text-foreground">Brand </span><span className="text-primary italic">Explorer</span>
    </motion.h2>
    <motion.div className="w-64 rounded-xl bg-card border border-border p-5 shadow-sm" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-lg">🌿</div>
        <div><p className="font-serif-display font-bold text-sm text-foreground">Terra Verde</p><p className="text-[10px] text-muted-foreground font-sans-body">@terra.verde</p></div>
      </div>
      {["Mission", "Valeurs", "Actions"].map((label) => (
        <div key={label} className="mb-1.5 rounded-md bg-secondary px-3 py-1.5">
          <p className="text-[10px] font-medium text-muted-foreground font-sans-body uppercase tracking-wide">{label}</p>
        </div>
      ))}
    </motion.div>
    <motion.p className="font-sans-body text-sm text-muted-foreground max-w-lg text-center mt-5" custom={2} variants={fadeUp} initial="hidden" animate="visible">
      Learn about an impact brand through its story, mission, values, and actions.
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="s3">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-center mb-6" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      <span className="text-foreground">Brand </span><span className="text-primary italic">Match</span>
    </motion.h2>
    <motion.div className="grid grid-cols-2 gap-2 max-w-[200px]" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      {matchCards.map((card) => (
        <div key={card.brand} className="w-[90px] h-[90px] rounded-lg overflow-hidden">
          <img src={card.img} alt={card.brand} className="w-full h-full object-cover" />
        </div>
      ))}
    </motion.div>
    <motion.p className="font-sans-body text-sm text-muted-foreground max-w-lg text-center mt-5" custom={2} variants={fadeUp} initial="hidden" animate="visible">
      Match each image with the correct impact brand.
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="s4">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-center mb-6" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      <span className="text-foreground">Explore by </span><span className="text-primary italic">Region</span>
    </motion.h2>
    <motion.div className="relative w-full max-w-sm h-48" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      {regions.map((r, i) => (
        <motion.div key={r.name} className="absolute flex flex-col items-center" style={{ left: `${r.x}%`, top: `${r.y}%` }}
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.15, type: "spring" }}>
          <motion.div className="w-2.5 h-2.5 rounded-full bg-primary" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          <span className="mt-1 text-[10px] font-sans-body font-medium text-foreground whitespace-nowrap">{r.name}</span>
        </motion.div>
      ))}
    </motion.div>
    <motion.p className="font-sans-body text-sm text-muted-foreground max-w-lg text-center mt-4" custom={2} variants={fadeUp} initial="hidden" animate="visible">
      Filter brands by continent or country.
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="s5">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-center" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      <span className="text-foreground">Redistribute the </span><span className="text-primary italic">Light.</span>
    </motion.h2>
    <motion.p className="font-sans-body text-sm text-muted-foreground max-w-lg text-center mt-4" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Redistribute your tokens to the Flowers of the Yonyverse and support their projects.
    </motion.p>
  </OnboardingSlide>,
];

export default function OnboardingBrands() {
  return <OnboardingLayout slides={slides} gameName="Yony Brands" />;
}
