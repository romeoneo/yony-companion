import type { Archetype } from "@/data/archetypes";
import { motion } from "framer-motion";
import logoYonyverse from "@/assets/logo-yonyverse.png";

interface Props {
  archetype: Archetype;
}

export default function HeroBanner({ archetype }: Props) {
  return (
    <div className="relative">
      {/* Cover Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[40vh] min-h-[280px] max-h-[450px] overflow-hidden"
      >
        <img
          src={archetype.coverImage}
          alt={`${archetype.role} cover`}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </motion.div>

      {/* Info Bar */}
      <div className="relative bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Role */}
          <div className="text-center md:text-left">
            <p className="text-xs font-sans-body tracking-[0.2em] uppercase text-primary font-semibold">
              Rôle
            </p>
            <p className="text-lg font-serif-display font-semibold text-white">
              {archetype.role}
            </p>
          </div>

          {/* Logo + Mission - Logo above mission */}
          <div className="flex flex-col items-center text-center max-w-md">
            <img
              src={logoYonyverse}
              alt="Yonyverse Logo"
              className="w-12 h-12 object-contain mb-2"
            />
            <p className="text-xs font-sans-body tracking-[0.2em] uppercase text-primary font-semibold">
              Mission
            </p>
            <p className="text-sm text-white/70 font-sans-body mt-1 leading-relaxed">
              {archetype.mission}
            </p>
          </div>

          {/* Element */}
          <div className="text-center md:text-right">
            <p className="text-xs font-sans-body tracking-[0.2em] uppercase text-primary font-semibold">
              Élément
            </p>
            <p className="text-lg font-serif-display font-bold text-white">
              {archetype.element}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
