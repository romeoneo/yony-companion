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
        <p className="text-muted-foreground text-base md:text-lg mb-8 italic" style={{ lineHeight: '2.2' }}>
          Yonyverse is a symbolic garden where dreams, cultures, and projects with positive impact can take root and grow. Inspired by the ancient vision of Yony, the First Queen of the world, who saw humanity divided by endless competition, Yonyverse was imagined as a space where people could come together to nurture wisdom, creativity, and collaboration.
        </p>
        <p className="text-muted-foreground text-base md:text-lg" style={{ lineHeight: '2.2' }}>
          Within this garden, the Yony Games bring the vision to life. Across 16 activated countries and 8 games of visibility and engagement, they create a shared ground where cultures, ideas, and talents from around the world can meet. Through participation, individuals and communities can gain visibility, inspire one another, and help meaningful dreams flourish.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;