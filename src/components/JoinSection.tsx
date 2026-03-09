import { motion, useInView } from "framer-motion";
import { Compass, Users, Sparkles, Globe, Flame } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration * 60));
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

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

  const totalCurrent = roles.reduce((s, r) => s + r.current, 0);
  const totalTarget = roles.reduce((s, r) => s + r.target, 0);
  const totalPct = Math.round((totalCurrent / totalTarget) * 100);

  const pillars = [
    { icon: Compass, title: "Exploration and travel", desc: "Transportation and explorations across the territories activated in the journey." },
    { icon: Users, title: "Collective operations", desc: "Organization, coordination, and facilitation of the collective adventure." },
    { icon: Sparkles, title: "Story and visibility", desc: "Content creation and global visibility of the journey." },
    { icon: Globe, title: "Digital platform", desc: "Development and operation of the Yonyverse platform." },
  ];

  return (
    <section id="join" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 0%, hsl(var(--copper) / 0.04), transparent 70%)"
      }} />

      <div className="max-w-6xl mx-auto relative">
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
          <h3 className="font-serif text-2xl font-bold mb-2">Yony Family - Build the founding community</h3>
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
            {roles.map((r, i) => {
              const pct = Math.round((r.current / r.target) * 100);
              const spotsLeft = r.target - r.current;
              return (
                <motion.div
                  key={r.role}
                  className="flex-shrink-0 flex-1 min-w-[130px] p-3 rounded-xl bg-secondary relative"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  {/* Urgency badge */}
                  {spotsLeft < 40 && (
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                      {spotsLeft} left
                    </span>
                  )}
                  <div className="text-xs font-medium text-foreground mb-1">{r.role}</div>
                  <div className="flex items-baseline gap-1 text-xs text-muted-foreground mb-2">
                    <span className="text-sm font-serif font-bold text-foreground">
                      <AnimatedCounter target={r.current} duration={1} />
                    </span>
                    <span>/ {r.target}</span>
                    <span>· {pct}%</span>
                  </div>
                  <div className="w-full h-[3px] rounded-full bg-border">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.08 }}
                    />
                  </div>
                </motion.div>
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
          <div className="text-primary font-sans-body text-sm font-semibold uppercase tracking-wider mb-2">Step 2</div>
          <h3 className="font-serif text-2xl font-bold mb-4">Power the Collective Journey</h3>
          <p className="text-muted-foreground mb-2">
            To bring the games to life across multiple territories, the essential foundations of the journey must be powered by collective support.
          </p>
          <p className="text-muted-foreground mb-8">
            These resources enable the adventure to unfold, connect participants, and share the story with the world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-secondary flex gap-4 items-start"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">{pillar.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{pillar.desc}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="text-muted-foreground">
            🎯 Goal: raise the resources needed to launch the collective journey.
          </p>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="/join-games"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold font-sans-body text-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            <Flame className="w-5 h-5" />
            Join the Founding Community
          </a>
          <p className="text-muted-foreground text-sm mt-4">
            Be among the first — limited spots available for each character role.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
