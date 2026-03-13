import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import OnboardingLayout, { OnboardingSlide, fadeUp } from "./OnboardingLayout";

const CITIES = [
  { x: 30, y: 35, label: "Paris" }, { x: 18, y: 48, label: "Lima" },
  { x: 55, y: 30, label: "Cairo" }, { x: 75, y: 42, label: "Delhi" },
  { x: 85, y: 55, label: "Jakarta" }, { x: 42, y: 28, label: "Berlin" },
  { x: 12, y: 32, label: "New York" }, { x: 62, y: 60, label: "Nairobi" },
  { x: 90, y: 25, label: "Tokyo" }, { x: 25, y: 65, label: "Buenos Aires" },
  { x: 48, y: 55, label: "Lagos" }, { x: 70, y: 20, label: "Beijing" },
];

function WorldMap({ highlighted }: { highlighted?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
      <svg viewBox="0 0 100 80" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {CITIES.map((city, i) => (
          <motion.g key={city.label}>
            {highlighted && (
              <motion.circle cx={city.x} cy={city.y} r={2.5} fill="none" stroke="hsl(var(--primary))" strokeWidth={0.15}
                animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.5, 2] }} transition={{ duration: 3, delay: i * 0.25, repeat: Infinity, repeatDelay: 2 }} />
            )}
            <motion.circle cx={city.x} cy={city.y} r={highlighted ? 0.7 : 0.5} fill="hsl(var(--primary))"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15, duration: 0.5 }} />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

function QRVisual() {
  const cells: { r: number; c: number }[] = [];
  const grid = 9;
  for (let r = 0; r < grid; r++) for (let c = 0; c < grid; c++) {
    if ((r < 3 && c < 3) || (r < 3 && c >= grid - 3) || (r >= grid - 3 && c < 3) || Math.random() > 0.5) cells.push({ r, c });
  }
  return (
    <svg viewBox={`0 0 ${grid} ${grid}`} style={{ width: 80, height: 80 }}>
      {cells.map(({ r, c }, i) => (
        <motion.rect key={`${r}-${c}`} x={c} y={r} width={0.85} height={0.85} rx={0.1} fill="hsl(var(--primary))"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.01, duration: 0.3 }} />
      ))}
    </svg>
  );
}

export default function OnboardingPlaces() {
  const { t } = useTranslation();

  const slides = [
    <OnboardingSlide key="s1">
      <WorldMap />
      <motion.h1 className="font-serif-display text-5xl md:text-7xl font-black tracking-tight text-foreground text-center relative z-10" custom={0} variants={fadeUp} initial="hidden" animate="visible">
        {t("onboarding.places.title")} <span className="italic text-primary">{t("onboarding.places.titleAccent")}</span>
      </motion.h1>
      <motion.p className="mt-4 text-base text-muted-foreground font-light text-center relative z-10" custom={1} variants={fadeUp} initial="hidden" animate="visible">{t("onboarding.places.intro")}</motion.p>
      <motion.p className="mt-2 text-sm text-muted-foreground/80 font-light max-w-lg text-center relative z-10" custom={2} variants={fadeUp} initial="hidden" animate="visible">{t("onboarding.places.introDesc")}</motion.p>
    </OnboardingSlide>,
    <OnboardingSlide key="s2">
      <WorldMap highlighted />
      <motion.h1 className="font-serif-display text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center relative z-10" custom={0} variants={fadeUp} initial="hidden" animate="visible">
        {t("onboarding.places.goTo")} <span className="italic text-primary font-normal">{t("onboarding.places.goToAccent")}</span>
      </motion.h1>
      <motion.p className="mt-4 text-base text-muted-foreground font-light max-w-lg text-center relative z-10" custom={1} variants={fadeUp} initial="hidden" animate="visible">{t("onboarding.places.goToDesc")}</motion.p>
    </OnboardingSlide>,
    <OnboardingSlide key="s3">
      <motion.div className="mb-4" custom={0} variants={fadeUp} initial="hidden" animate="visible"><QRVisual /></motion.div>
      <motion.h1 className="font-serif-display text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">
        {t("onboarding.places.scan")} <span className="italic text-primary font-normal">{t("onboarding.places.scanAccent")}</span>
      </motion.h1>
      <motion.p className="mt-4 text-base text-muted-foreground font-light text-center" custom={2} variants={fadeUp} initial="hidden" animate="visible">{t("onboarding.places.scanDesc")}</motion.p>
    </OnboardingSlide>,
    <OnboardingSlide key="s4">
      <motion.h1 className="font-serif-display text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center" custom={0} variants={fadeUp} initial="hidden" animate="visible">
        {t("onboarding.places.discover")} <span className="italic text-primary font-normal">{t("onboarding.places.discoverAccent")}</span>
      </motion.h1>
      <motion.p className="mt-4 text-base text-muted-foreground font-light text-center max-w-lg" custom={1} variants={fadeUp} initial="hidden" animate="visible">{t("onboarding.places.discoverDesc")}</motion.p>
    </OnboardingSlide>,
    <OnboardingSlide key="s5">
      <motion.div className="mb-4" custom={0} variants={fadeUp} initial="hidden" animate="visible"><Gift className="w-10 h-10 text-primary" strokeWidth={1.5} /></motion.div>
      <motion.h1 className="font-serif-display text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">
        {t("onboarding.places.gift")} <span className="italic text-primary font-normal">{t("onboarding.places.giftAccent")}</span>
      </motion.h1>
      <motion.p className="mt-4 text-base text-muted-foreground font-light max-w-lg text-center" custom={2} variants={fadeUp} initial="hidden" animate="visible">
        {t("onboarding.places.giftDesc")} <span className="font-bold text-foreground">{t("onboarding.places.noLosers")}</span>{t("onboarding.places.giftEnd")}
      </motion.p>
    </OnboardingSlide>,
    <OnboardingSlide key="s6">
      <motion.h1 className="font-serif-display text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center" custom={0} variants={fadeUp} initial="hidden" animate="visible">
        {t("onboarding.places.redistribute")} <span className="italic text-primary font-normal">{t("onboarding.places.redistributeAccent")}</span>
      </motion.h1>
      <motion.p className="mt-4 text-base text-muted-foreground font-light text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">{t("onboarding.places.redistributeDesc1")}</motion.p>
      <motion.p className="mt-2 text-sm text-muted-foreground/80 font-light max-w-lg text-center" custom={2} variants={fadeUp} initial="hidden" animate="visible">{t("onboarding.places.redistributeDesc2")}</motion.p>
    </OnboardingSlide>,
  ];

  return <OnboardingLayout slides={slides} gameName="Yony Places" />;
}
