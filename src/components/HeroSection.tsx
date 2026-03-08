import { motion } from "framer-motion";
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

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Floating light particles — CSS driven */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            "--drift-y": `${p.driftY}px`,
            "--drift-x": `${p.driftX}px`,
            "--duration": `${p.duration}s`,
            "--delay": `${p.delay}s`,
            "--particle-opacity": p.opacity,
          } as React.CSSProperties}
        />
      ))}

      {/* Logo with living glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 relative"
      >
        {/* Inner radial glow behind egg area */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "40%",
            height: "50%",
            left: "50%",
            top: "30%",
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

      {/* Narrative */}
      <motion.div
        className="max-w-2xl text-center mt-16 z-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-muted-foreground text-base md:text-lg mb-8 italic" style={{ lineHeight: "2.2" }}>
          Yonyverse is a symbolic garden where dreams, cultures, and projects<br />with positive impact can take root and grow.
        </p>
        <p className="text-muted-foreground text-base md:text-lg mb-8" style={{ lineHeight: "2.2" }}>
          Within this space, the Yony Games bring visions to life.<br />Across 16 activated lands and 8 games, they create a shared ground where cultures, ideas, and talents from around the world meet.
        </p>
        <p className="text-muted-foreground text-base md:text-lg mb-8" style={{ lineHeight: "2.2" }}>
          Through participation, individuals and communities gain visibility,<br />inspire one another, and help meaningful dreams flourish.
        </p>
        <p className="text-foreground text-lg md:text-xl italic font-medium" style={{ lineHeight: "2.2" }}>
          From the Egg springs the world Earth desires.<br />
          We Are Born To Impact.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
