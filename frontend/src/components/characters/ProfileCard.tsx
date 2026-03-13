import type { Archetype } from "@/data/archetypes";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";

interface Props {
  archetype: Archetype;
}

export default function ProfileCard({ archetype }: Props) {
  const stats = [
    { value: archetype.followers, label: "Followers" },
    { value: archetype.community, label: "Community" },
    { value: archetype.spins, label: "Spins" },
    { value: archetype.challenges, label: "Challenges" },
    { value: archetype.streak, label: "Streak" },
  ];

  return (
    <div className="relative bg-black/95">
      {/* Profile section */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 py-6">
          {/* Avatar - overlapping */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="-mt-16 md:-mt-20 z-10"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-black overflow-hidden shadow-xl shadow-primary/20">
              <img
                src={archetype.avatarImage}
                alt={archetype.profileName}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl md:text-2xl font-serif-display font-bold text-white">
                {archetype.profileName}
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-sans-body font-semibold bg-primary text-primary-foreground">
                {archetype.role}
              </span>
            </div>
            <div className="flex items-center gap-1 mt-2 text-sm text-white/60 font-sans-body">
              <MapPin className="w-3.5 h-3.5" />
              {archetype.location}
            </div>
            <p className="text-sm italic text-white/50 font-sans-body mt-2">
              "{archetype.quote}"
            </p>
          </div>

          {/* Action Buttons - Only Follow and Send Light */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full text-sm font-sans-body font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Follow
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full text-sm font-sans-body font-semibold border border-primary text-primary hover:bg-primary/10 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Send Light
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 pb-6">
          {stats.map((s, index) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex flex-col items-center py-4 rounded-xl border border-white/10 bg-white/5 hover:border-primary/30 hover:bg-white/10 transition-all cursor-pointer"
            >
              <span className="text-xl md:text-2xl font-serif-display font-bold text-white">
                {s.value}
              </span>
              <span className="text-[10px] font-sans-body tracking-[0.15em] uppercase text-white/50 mt-1">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
