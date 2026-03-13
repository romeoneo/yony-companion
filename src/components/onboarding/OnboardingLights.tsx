import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin, Music } from "lucide-react";
import OnboardingLayout, { OnboardingSlide, fadeUp } from "./OnboardingLayout";

function GlowOrb({ x, y, size = 8, delay = 0, color = "primary" }: { x: string; y: string; size?: number; delay?: number; color?: "primary" | "muted" }) {
  return (
    <motion.div className={`absolute rounded-full pointer-events-none ${color === "primary" ? "bg-primary/30" : "bg-muted-foreground/15"}`} style={{ left: x, top: y, width: size, height: size }}
      initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 0.8, 0.4], scale: [0, 1.2, 1] }} transition={{ duration: 2.5, delay, repeat: Infinity, repeatType: "reverse" }} />
  );
}

const orbs = Array.from({ length: 12 }, (_, i) => ({ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%`, size: 4 + Math.random() * 10, delay: Math.random() * 3 }));

const creators = [
  { initial: "E", name: "Elena Quispe", handle: "@elena.terrasses" },
  { initial: "A", name: "Arjun Patel", handle: "@arjun.stepwells" },
  { initial: "J", name: "Jean-Baptiste Rivière", handle: "@jb.patrimoine" },
  { initial: "C", name: "Carlos Tepetl", handle: "@carlos.milpa" },
];

export default function OnboardingLights() {
  const { t } = useTranslation();

  const scoring = [
    { label: t("onboarding.lights.scoring.paraboleOnly"), pts: "20 pts" },
    { label: t("onboarding.lights.scoring.with2clues"), pts: "10 pts" },
    { label: t("onboarding.lights.scoring.with3clues"), pts: "5 pts" },
    { label: t("onboarding.lights.scoring.wrongAnswer"), pts: "0 pts" },
  ];

  const slides = [
    <OnboardingSlide key="welcome">
      {orbs.map((orb, i) => <GlowOrb key={i} {...orb} color={i % 3 === 0 ? "primary" : "muted"} />)}
      <motion.h1 className="font-serif-display text-5xl md:text-7xl font-bold text-foreground text-center leading-tight relative z-10" custom={0} variants={fadeUp} initial="hidden" animate="visible">
        {t("onboarding.lights.title")} <span className="italic text-primary">{t("onboarding.lights.titleAccent")}</span>
      </motion.h1>
      <motion.p className="mt-4 font-sans-body text-base md:text-lg text-muted-foreground text-center max-w-md relative z-10" custom={1} variants={fadeUp} initial="hidden" animate="visible">{t("onboarding.lights.intro")}</motion.p>
    </OnboardingSlide>,
    <OnboardingSlide key="discover">
      <motion.p className="font-serif-display text-2xl md:text-4xl font-bold text-foreground text-center leading-snug max-w-2xl" custom={0} variants={fadeUp} initial="hidden" animate="visible">
        {t("onboarding.lights.slide1")} <span className="italic text-primary">{t("onboarding.lights.slide1accent")}</span>
      </motion.p>
      <motion.p className="mt-4 font-sans-body text-base text-muted-foreground text-center max-w-md" custom={1} variants={fadeUp} initial="hidden" animate="visible">{t("onboarding.lights.slide1desc")}</motion.p>
    </OnboardingSlide>,
    <OnboardingSlide key="parabole">
      <motion.div className="max-w-2xl text-center" custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <p className="font-serif-display text-2xl md:text-4xl font-bold text-foreground leading-snug">
          {t("onboarding.lights.slide2title")} <span className="italic text-primary">{t("onboarding.lights.slide2accent")}</span> {t("onboarding.lights.slide2desc")}
        </p>
      </motion.div>
      <motion.div className="mt-8 max-w-md p-5 rounded-lg border border-border bg-card" custom={1} variants={fadeUp} initial="hidden" animate="visible">
        <p className="text-xs uppercase tracking-widest text-primary font-sans-body mb-2">{t("onboarding.lights.paraboleLabel")}</p>
        <p className="font-sans-body text-sm text-foreground italic leading-relaxed">{t("onboarding.lights.paraboleExample")}</p>
      </motion.div>
    </OnboardingSlide>,
    <OnboardingSlide key="choose">
      <motion.p className="font-serif-display text-2xl md:text-4xl font-bold text-foreground text-center leading-snug max-w-2xl" custom={0} variants={fadeUp} initial="hidden" animate="visible">
        {t("onboarding.lights.slide3")} <span className="italic text-primary">{t("onboarding.lights.slide3accent")}</span>
      </motion.p>
      <motion.p className="mt-3 font-sans-body text-base text-muted-foreground text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">{t("onboarding.lights.slide3desc")}</motion.p>
      <motion.div className="grid grid-cols-2 gap-3 mt-8 max-w-md w-full" custom={2} variants={fadeUp} initial="hidden" animate="visible">
        {creators.map((c) => (
          <div key={c.name} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card cursor-pointer hover:border-primary/40 transition-colors">
            <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center font-serif-display font-bold text-foreground text-sm">{c.initial}</div>
            <div><p className="font-serif-display font-bold text-xs text-foreground">{c.name}</p><p className="font-sans-body text-[10px] text-muted-foreground">{c.handle}</p></div>
          </div>
        ))}
      </motion.div>
    </OnboardingSlide>,
    <OnboardingSlide key="collect">
      <motion.p className="font-serif-display text-2xl md:text-4xl font-bold text-foreground text-center leading-snug max-w-2xl" custom={0} variants={fadeUp} initial="hidden" animate="visible">
        {t("onboarding.lights.slide4")} <span className="italic text-primary">{t("onboarding.lights.slide4accent")}</span> {t("onboarding.lights.slide4desc")}
      </motion.p>
      <motion.p className="mt-3 font-sans-body text-base text-muted-foreground text-center max-w-md" custom={1} variants={fadeUp} initial="hidden" animate="visible">{t("onboarding.lights.slide4sub")}</motion.p>
      <motion.div className="mt-8 grid grid-cols-2 gap-2 max-w-xs w-full" custom={2} variants={fadeUp} initial="hidden" animate="visible">
        {scoring.map((s) => (
          <div key={s.label} className="flex justify-between items-center p-2.5 rounded-lg border border-border bg-card">
            <span className="font-sans-body text-[10px] text-muted-foreground">{s.label}</span>
            <span className="font-serif-display font-bold text-xs text-primary">{s.pts}</span>
          </div>
        ))}
      </motion.div>
    </OnboardingSlide>,
    <OnboardingSlide key="share">
      <motion.p className="font-serif-display text-2xl md:text-4xl font-bold text-foreground text-center leading-snug max-w-2xl" custom={0} variants={fadeUp} initial="hidden" animate="visible">
        {t("onboarding.lights.shareTitle")} <span className="italic text-primary">{t("onboarding.lights.shareAccent")}</span>
      </motion.p>
      <motion.div className="flex gap-5 mt-8" custom={1} variants={fadeUp} initial="hidden" animate="visible">
        {[Instagram, Music, Youtube, Linkedin].map((Icon, i) => (
          <div key={i} className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-primary"><Icon className="w-6 h-6" /></div>
        ))}
      </motion.div>
    </OnboardingSlide>,
  ];

  return <OnboardingLayout slides={slides} gameName="Yony Lights" />;
}