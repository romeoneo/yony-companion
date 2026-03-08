import { motion } from "framer-motion";
import { Compass, Users, Sparkles, Globe } from "lucide-react";

const JoinSection = () => {
  const roles = [
    { role: "Yony Flowers", current: 6, target: 256 },
    { role: "Yony Brands", current: 4, target: 256 },
    { role: "Yony Lights", current: 13, target: 256 },
    { role: "Yony Places", current: 6, target: 256 },
    { role: "Yony Angels", current: 4, target: 256 },
    { role: "Yony Magics", current: 11, target: 256 },
    { role: "Yony Stars", current: 22, target: 88 },
    { role: "Yony Guards", current: 6, target: 40 },
  ];

  const pillars = [
    { icon: Compass, title: "Exploration and travel", desc: "Transportation and explorations across the territories activated in the journey." },
    { icon: Users, title: "Collective operations", desc: "Organization, coordination, and facilitation of the collective adventure." },
    { icon: Sparkles, title: "Story and visibility", desc: "Content creation and global visibility of the journey." },
    { icon: Globe, title: "Digital platform", desc: "Development and operation of the Yonyverse platform." },
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
            The <span className="text-foreground">Yony</span>{" "}
            <span style={{ color: "#e76830" }} className="italic">Challenge</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Before the games can begin, two steps must be completed. Once they are achieved, the official dates of the nine-month Yonyverse games will be announced.
          </p>
        </motion.div>

        {/* Step 1 */}
        <motion.div
          className="mb-16 p-8 rounded-3xl bg-card sacred-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-2xl font-bold mb-2">Build the founding community</h3>
          <div className="text-primary font-sans-body text-sm font-semibold uppercase tracking-wider mb-4">Step 1</div>
          <p className="text-muted-foreground mb-2">
            The games need participants to embody the characters of the adventure.
          </p>
          <p className="text-muted-foreground mb-2">
            Each category of characters has a minimum number that must be reached.
          </p>
          <p className="text-muted-foreground mb-6">
            🎯 Goal: gather all the characters required for the game.
          </p>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
            {roles.map((r) => {
              const pct = Math.round((r.current / r.target) * 100);
              return (
                <div key={r.role} className="flex-shrink-0 flex-1 min-w-[120px] p-3 rounded-xl bg-secondary">
                  <div className="text-xs font-medium text-foreground mb-1">{r.role}</div>
                  <div className="flex items-baseline gap-1 text-xs text-muted-foreground mb-2">
                    <span className="text-sm font-serif font-bold text-foreground">{r.current}</span>
                    <span>/ {r.target}</span>
                    <span>· {pct}%</span>
                  </div>
                  <div className="w-full h-[3px] rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="p-8 rounded-3xl bg-card sacred-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-2xl font-bold mb-2">Raise the funds to organize the games</h3>
          <div className="text-primary font-sans-body text-sm font-semibold uppercase tracking-wider mb-4">Step 2</div>
          <p className="text-muted-foreground mb-6">
            To make the games possible across multiple countries, the necessary resources must be secured.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {budgetCategories.map((cat) => (
              <div key={cat.title} className="p-4 rounded-xl bg-secondary">
                <div className="text-lg mb-1">{cat.emoji}</div>
                <div className="text-sm font-medium text-foreground mb-1">{cat.title}</div>
                <div className="text-xs text-muted-foreground">{cat.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            🎯 Goal: secure the resources needed to launch the games.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
