import { motion } from "framer-motion";

const JoinSection = () => {
  const roles = [
    { role: "Yony Flowers", count: "256", desc: "Yony Seeds" },
    { role: "Yony Brands", count: "256", desc: "Visionary partners" },
    { role: "Yony Lights", count: "256", desc: "Creative luminaries" },
    { role: "Yony Places", count: "256", desc: "Sacred spaces" },
    { role: "Yony Angels", count: "256", desc: "Generous guardians" },
    { role: "Yony Magics", count: "256", desc: "Digital artists" },
    { role: "Yony Stars", count: "88", desc: "Renowned figures" },
    { role: "Yony Guards", count: "40", desc: "Value protectors" },
  ];

  return (
    <section id="join" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Join the <span className="text-gradient-copper italic">Yony Games</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two founding challenges must be completed before the games begin.
          </p>
        </motion.div>

        {/* Challenge 1 */}
        <motion.div
          className="mb-16 p-8 rounded-3xl bg-card sacred-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-copper font-sans-body text-sm font-semibold uppercase tracking-wider mb-2">Challenge 1</div>
          <h3 className="font-serif text-2xl font-bold mb-6">Build the founding community</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {roles.map((r) => (
              <div key={r.role} className="p-4 rounded-xl bg-secondary text-center">
                <div className="text-2xl font-serif font-bold text-foreground">{r.count}</div>
                <div className="text-sm font-medium text-foreground mt-1">{r.role}</div>
                <div className="text-xs text-muted-foreground">{r.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Challenge 2 */}
        <motion.div
          className="p-8 rounded-3xl bg-card sacred-border text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-copper font-sans-body text-sm font-semibold uppercase tracking-wider mb-2">Challenge 2</div>
          <h3 className="font-serif text-2xl font-bold mb-4">Raise the funds to organize the games</h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Once both challenges are completed, the Yony Games begin — 256 days of cultural celebration across the world.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-sans-body font-medium text-lg hover:scale-105 transition-transform">
            Join the Yony Games
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
