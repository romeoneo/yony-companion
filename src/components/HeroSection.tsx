import { motion } from "framer-motion";
import logoYonyverseFull from "@/assets/logo-yonyverse-full.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-golden/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="z-10"
      >
        <motion.img
          src={logoYonyverseFull}
          alt="Yonyverse Logo"
          className="w-80 h-auto md:w-[28rem] lg:w-[34rem] mx-auto"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>


      {/* Narrative */}
      <motion.div
        className="max-w-2xl text-center mt-16 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="text-muted-foreground text-base md:text-lg leading-loose mb-4 italic">
          In ancient times, Yony, the First Queen of the world, saw humanity divided by endless competition. She envisioned new games where people would unite in harmony to uplift dreams, cultures, and wisdom.
        </p>
        <p className="text-copper font-serif text-xl font-semibold italic mb-8">
          These became the Yony Games.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-loose">
          Through 16 activated countries and 8 visibility and engagement games, Yonyverse creates a shared ground where cultures, ideas, and talents from around the world can meet. Like a great global and participatory space, Yonyverse allows individuals and communities to participate, gain visibility, inspire one another, and grow together.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;