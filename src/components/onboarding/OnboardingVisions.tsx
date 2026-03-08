import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin, Music, Palette, Sparkles, Feather } from "lucide-react";
import OnboardingLayout, { OnboardingSlide, fadeUp } from "./OnboardingLayout";

import artPhotography from "@/assets/visions/art-photography.jpg";
import artMusic from "@/assets/visions/art-music.jpg";
import artIllustration from "@/assets/visions/art-illustration.jpg";
import artDance from "@/assets/visions/art-dance.jpg";
import artPoetry from "@/assets/visions/art-poetry.jpg";
import artCrafts from "@/assets/visions/art-crafts.jpg";
import profileAmara from "@/assets/visions/profile-amara.jpg";
import profileCarlos from "@/assets/visions/profile-carlos.jpg";
import profileLinh from "@/assets/visions/profile-linh.jpg";
import figPatience from "@/assets/visions/figures/patience.png";
import figHumilite from "@/assets/visions/figures/humilite.png";
import figPerseverance from "@/assets/visions/figures/perseverance.png";
import figLucidite from "@/assets/visions/figures/lucidite.png";
import figIntuition from "@/assets/visions/figures/intuition.png";
import figReliance from "@/assets/visions/figures/reliance.png";
import figEquite from "@/assets/visions/figures/equite.png";
import figTolerance from "@/assets/visions/figures/tolerance.png";
import figResilience from "@/assets/visions/figures/resilience.png";
import figAuthenticite from "@/assets/visions/figures/authenticite.png";
import figTransmission from "@/assets/visions/figures/transmission.png";
import figBienveillance from "@/assets/visions/figures/bienveillance.png";
import figCreativite from "@/assets/visions/figures/creativite.png";
import figGratitude from "@/assets/visions/figures/gratitude.png";
import figCohesion from "@/assets/visions/figures/cohesion.png";
import figEmpathie from "@/assets/visions/figures/empathie.png";

const figures = [
  { label: "Patience", image: figPatience }, { label: "Humilité", image: figHumilite },
  { label: "Persévérance", image: figPerseverance }, { label: "Lucidité", image: figLucidite },
  { label: "Intuition", image: figIntuition }, { label: "Reliance", image: figReliance },
  { label: "Équité", image: figEquite }, { label: "Tolérance", image: figTolerance },
  { label: "Résilience", image: figResilience }, { label: "Authenticité", image: figAuthenticite },
  { label: "Transmission", image: figTransmission }, { label: "Bienveillance", image: figBienveillance },
  { label: "Créativité", image: figCreativite }, { label: "Gratitude", image: figGratitude },
  { label: "Cohésion", image: figCohesion }, { label: "Empathie", image: figEmpathie },
];

const participants = [
  { name: "Amara Diallo", project: "Roots of Ubuntu", art: "Photography", quote: "Through my lens, I capture the resilience of my community.", image: profileAmara },
  { name: "Carlos Mendoza", project: "Voces del Río", art: "Music", quote: "Each melody carries the voice of the river.", image: profileCarlos },
  { name: "Linh Tran", project: "Silk & Stories", art: "Illustration", quote: "My drawings weave together centuries of tradition.", image: profileLinh },
];

const artForms = [
  { label: "Photographie", image: artPhotography }, { label: "Musique", image: artMusic },
  { label: "Illustration", image: artIllustration }, { label: "Danse", image: artDance },
  { label: "Poésie", image: artPoetry }, { label: "Artisanat", image: artCrafts },
];

function FloatingElement({ children, delay = 0, x = 0, y = 0 }: { children: React.ReactNode; delay?: number; x?: number; y?: number }) {
  return (
    <motion.div className="absolute opacity-15 pointer-events-none" style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
      animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
}

const slides = [
  <OnboardingSlide key="s1">
    <FloatingElement delay={0} x={-30} y={-25}><Palette className="w-12 h-12 text-primary" /></FloatingElement>
    <FloatingElement delay={1} x={25} y={-20}><Music className="w-10 h-10 text-primary" /></FloatingElement>
    <FloatingElement delay={2} x={-20} y={20}><Sparkles className="w-11 h-11 text-primary" /></FloatingElement>
    <FloatingElement delay={0.5} x={30} y={25}><Feather className="w-9 h-9 text-primary" /></FloatingElement>
    <motion.h1 className="font-serif-display text-5xl md:text-7xl font-black tracking-tight text-foreground text-center leading-tight relative z-10" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Yony <span className="text-primary italic">Visions</span>
    </motion.h1>
    <motion.p className="font-sans-body text-base md:text-lg text-muted-foreground mt-4 text-center max-w-lg relative z-10" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Give visibility to your project through art
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="s2">
    <motion.p className="font-serif-display text-2xl md:text-4xl text-foreground text-center leading-snug max-w-2xl" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Every project carries an <span className="text-primary italic">artistic universe.</span>
    </motion.p>
    <motion.p className="font-sans-body text-base text-muted-foreground mt-4 text-center max-w-xl" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      This challenge invites you to share the creations that express your vision.
    </motion.p>
    <motion.div className="grid grid-cols-3 gap-3 mt-8 max-w-sm" custom={2} variants={fadeUp} initial="hidden" animate="visible">
      {artForms.map((art) => (
        <div key={art.label} className="flex flex-col items-center gap-1.5">
          <div className="w-20 h-20 rounded-lg overflow-hidden shadow-sm"><img src={art.image} alt={art.label} className="w-full h-full object-cover" /></div>
          <span className="text-[10px] font-sans-body text-muted-foreground">{art.label}</span>
        </div>
      ))}
    </motion.div>
  </OnboardingSlide>,

  <OnboardingSlide key="s3">
    <motion.p className="font-serif-display text-2xl md:text-4xl text-foreground text-center leading-snug max-w-2xl" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Choisis une des <span className="text-primary italic">16 figures.</span>
    </motion.p>
    <motion.p className="font-sans-body text-base text-muted-foreground mt-3 text-center max-w-xl" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Each figure represents a source of inspiration.
    </motion.p>
    <motion.div className="grid grid-cols-4 gap-x-3 gap-y-1.5 mt-4 max-w-sm" custom={2} variants={fadeUp} initial="hidden" animate="visible">
      {figures.map((fig) => (
        <div key={fig.label} className="flex flex-col items-center gap-0.5">
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-border shadow-sm"><img src={fig.image} alt={fig.label} className="w-full h-full object-cover" /></div>
          <span className="text-[8px] font-sans-body text-muted-foreground">{fig.label}</span>
        </div>
      ))}
    </motion.div>
  </OnboardingSlide>,

  <OnboardingSlide key="s4">
    <motion.p className="font-serif-display text-2xl md:text-4xl text-foreground text-center leading-snug max-w-2xl" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Share your creation on <span className="text-primary italic">social media.</span>
    </motion.p>
    <motion.p className="font-sans-body text-base text-muted-foreground mt-4 text-center max-w-xl" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Post it and connect it to your project.
    </motion.p>
    <motion.div className="flex gap-5 mt-8" custom={2} variants={fadeUp} initial="hidden" animate="visible">
      {[Instagram, Music, Youtube, Linkedin].map((Icon, i) => (
        <div key={i} className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-primary">
          <Icon className="w-6 h-6" />
        </div>
      ))}
    </motion.div>
  </OnboardingSlide>,

  <OnboardingSlide key="s5">
    <motion.p className="font-serif-display text-2xl md:text-4xl text-foreground text-center leading-snug max-w-2xl" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Each creation reveals a <span className="text-primary italic">vision.</span>
    </motion.p>
    <motion.p className="font-sans-body text-base text-muted-foreground mt-3 text-center max-w-xl" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      And each vision brings a project into the light.
    </motion.p>
    <motion.div className="grid grid-cols-3 gap-3 mt-8 max-w-2xl w-full" custom={2} variants={fadeUp} initial="hidden" animate="visible">
      {participants.map((p) => (
        <div key={p.name} className="bg-card border border-border rounded-xl p-4 text-center shadow-sm">
          <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-2 border-2 border-primary/30">
            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
          </div>
          <h3 className="font-serif-display text-sm text-foreground font-semibold">{p.name}</h3>
          <p className="text-primary font-sans-body text-xs mt-0.5">{p.project}</p>
          <p className="text-muted-foreground text-[10px] uppercase tracking-wider mt-1 font-sans-body">{p.art}</p>
          <p className="text-muted-foreground text-xs mt-2 italic font-sans-body leading-relaxed">"{p.quote}"</p>
        </div>
      ))}
    </motion.div>
  </OnboardingSlide>,
];

export default function OnboardingVisions() {
  return <OnboardingLayout slides={slides} />;
}
