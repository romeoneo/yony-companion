import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Sprout, Handshake, Sparkles } from "lucide-react";
import logoYonyverseFull from "@/assets/logo-yonyverse-full.png";

const particles = [
  { x: "12%", y: "25%", size: 3, driftY: -50, driftX: 8, duration: 7, delay: 0, opacity: 0.25 },
  { x: "28%", y: "60%", size: 2, driftY: -40, driftX: -6, duration: 8, delay: 1.2, opacity: 0.3 },
  { x: "45%", y: "35%", size: 2.5, driftY: -55, driftX: 12, duration: 9, delay: 0.5, opacity: 0.2 },
  { x: "62%", y: "70%", size: 2, driftY: -45, driftX: -10, duration: 6.5, delay: 2, opacity: 0.35 },
  { x: "78%", y: "40%", size: 3, driftY: -60, driftX: 5, duration: 8.5, delay: 0.8, opacity: 0.2 },
  { x: "88%", y: "55%", size: 2, driftY: -35, driftX: -8, duration: 7.5, delay: 1.8, opacity: 0.28 },
  { x: "35%", y: "80%", size: 1.5, driftY: -70, driftX: 6, duration: 10, delay: 3, opacity: 0.18 },
  { x: "55%", y: "20%", size: 2, driftY: -30, driftX: -4, duration: 6, delay: 2.5, opacity: 0.22 },
  { x: "20%", y: "45%", size: 1.5, driftY: -50, driftX: 10, duration: 9.5, delay: 1, opacity: 0.2 },
  { x: "72%", y: "75%", size: 2.5, driftY: -55, driftX: -7, duration: 7, delay: 3.5, opacity: 0.25 },
];

const listItems = [
  { icon: Sprout, key: "hero.listDreams" },
  { icon: Handshake, key: "hero.listCultures" },
  { icon: Sparkles, key: "hero.listTalents" },
] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24">
      {particles.map((p, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            left: p.x, top: p.y, width: p.size, height: p.size,
            "--drift-y": `${p.driftY}px`, "--drift-x": `${p.driftX}px`,
            "--duration": `${p.duration}s`, "--delay": `${p.delay}s`,
            "--particle-opacity": p.opacity,
          } as React.CSSProperties}
        />
      ))}

      {/* Logo with glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 relative"
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "40%", height: "50%", left: "50%", top: "30%",
            background: "radial-gradient(ellipse, hsl(40 80% 55% / 0.2), transparent 70%)",
            animation: "hero-egg-inner-glow 4s ease-in-out infinite",
          }}
        />
        <motion.img
          src={logoYonyverseFull}
          alt="Yonyverse Logo"
          className="w-80 h-auto md:w-[28rem] lg:w-[34rem] mx-auto relative z-10"
          style={{ animation: "hero-egg-glow 4s ease-in-out infinite" }}
          initial={{ y: 10 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="max-w-xl text-center mt-16 z-10 flex flex-col items-center gap-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-muted-foreground text-base md:text-lg italic"
          style={{ lineHeight: "2.2" }}
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Intro */}
        <motion.p
          variants={fadeUp}
          className="text-muted-foreground text-base md:text-lg"
          style={{ lineHeight: "2.2" }}
        >
          {t("hero.intro")}
        </motion.p>

        {/* Icon list */}
        <motion.ul variants={fadeUp} className="flex flex-col items-center gap-4">
          {listItems.map(({ icon: Icon, key }) => (
            <li key={key} className="flex items-center gap-3 text-foreground text-base md:text-lg font-medium">
              <Icon className="w-5 h-5 shrink-0" style={{ color: "#e4592f" }} />
              {t(key)}
            </li>
          ))}
        </motion.ul>

        {/* Signature */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-2 mt-2">
          <p className="text-muted-foreground text-base md:text-lg italic" style={{ lineHeight: "2.2" }}>
            {t("hero.signature")}
          </p>
          <p className="text-foreground text-xl md:text-2xl font-bold font-serif-display" style={{ lineHeight: "1.6" }}>
            {t("hero.slogan")}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp}>
          <a
            href="#games"
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold font-sans-body text-base hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            {t("hero.exploreGames")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
