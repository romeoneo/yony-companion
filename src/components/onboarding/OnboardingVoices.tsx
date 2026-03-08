import { motion } from "framer-motion";
import OnboardingLayout, { OnboardingSlide, fadeUp } from "./OnboardingLayout";

import portrait1 from "@/assets/voices/seed-portrait-1.jpg";
import portrait2 from "@/assets/voices/seed-portrait-2.jpg";
import portrait3 from "@/assets/voices/seed-portrait-3.jpg";

const seeds = [
  { portrait: portrait1, name: "Amara Diallo", project: "Roots of Ubuntu", theme: "A Childhood Memory", excerpt: "My grandmother's garden taught me that every seed carries a story waiting to be told." },
  { portrait: portrait2, name: "Carlos Mendoza", project: "Voces del Río", theme: "A Turning Point", excerpt: "The day the river dried up, I knew I had to build something that could give back." },
  { portrait: portrait3, name: "Linh Tran", project: "Silk & Stories", theme: "A Teacher's Words", excerpt: "She said: your hands carry centuries of craft. Don't let the thread break." },
];

function SeedCard({ portrait, name, project, theme, excerpt, delay = 0 }: typeof seeds[0] & { delay?: number }) {
  return (
    <motion.div
      className="flex flex-col items-center rounded-xl bg-card border border-border p-3 max-w-[160px] text-center shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <img src={portrait} alt={name} className="w-10 h-10 rounded-full object-cover border-2 border-primary/30 mb-1.5" />
      <h4 className="font-serif-display text-sm font-semibold text-foreground">{name}</h4>
      <p className="text-xs text-primary font-sans-body mt-0.5 font-semibold">{project}</p>
      <span className="mt-1.5 text-[10px] uppercase tracking-widest text-muted-foreground font-sans-body">{theme}</span>
      <p className="mt-1.5 text-xs text-muted-foreground font-sans-body italic leading-relaxed">"{excerpt}"</p>
    </motion.div>
  );
}

const SocialIcons = () => (
  <motion.div className="flex gap-6 mt-8" custom={2} variants={fadeUp} initial="hidden" animate="visible">
    {[
      <svg key="ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>,
      <svg key="tt" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M16.6 5.82A4.28 4.28 0 0113.5 3h-3v12.4a2.6 2.6 0 01-2.6 2.6 2.6 2.6 0 01-2.6-2.6A2.6 2.6 0 017.9 12.8v-3.1a5.7 5.7 0 00-5.7 5.7 5.7 5.7 0 005.7 5.7 5.7 5.7 0 005.7-5.7V9.4a7.3 7.3 0 004.3 1.4V7.7a4.28 4.28 0 01-1.3-1.88z" /></svg>,
      <svg key="yt" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>,
      <svg key="li" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" /></svg>,
    ].map((icon, i) => (
      <div key={i} className="w-14 h-14 rounded-full border border-border bg-card/50 flex items-center justify-center text-primary">
        {icon}
      </div>
    ))}
  </motion.div>
);

const slides = [
  <OnboardingSlide key="s0">
    <motion.h1 className="font-serif-display text-5xl md:text-7xl font-black text-foreground leading-none tracking-tight text-center" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Yony <span className="text-primary italic">Voices</span>
    </motion.h1>
    <motion.p className="mt-4 font-serif-display text-lg md:text-xl text-muted-foreground font-light italic text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      A space where stories give life to projects.
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="s1">
    <motion.p className="font-serif-display text-2xl md:text-4xl font-light text-foreground italic leading-snug text-center max-w-2xl" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Every meaningful project begins with a story.
    </motion.p>
    <motion.p className="mt-6 font-sans-body text-base text-muted-foreground max-w-lg text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Yony Voices invites Yony Seeds to share the personal moment, memory, or inspiration that gave birth to their vision.
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="s2">
    <motion.p className="font-serif-display text-2xl md:text-4xl font-light text-foreground leading-snug text-center max-w-2xl" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Choose one of <span className="text-primary font-semibold">16 storytelling themes</span>.
    </motion.p>
    <motion.p className="mt-6 font-sans-body text-base text-muted-foreground max-w-lg text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Tell your story through a short video, text, or audio.
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="s3">
    <motion.h2 className="font-serif-display text-3xl md:text-5xl font-black text-foreground leading-tight text-center" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Share your story on<br /><span className="text-primary italic">social media.</span>
    </motion.h2>
    <motion.p className="mt-4 font-serif-display text-lg text-muted-foreground font-light italic text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Post it and connect it to your project.
    </motion.p>
    <SocialIcons />
  </OnboardingSlide>,

  <OnboardingSlide key="s4">
    <motion.p className="font-serif-display text-xl md:text-2xl font-light text-foreground leading-snug text-center" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Each voice helps a project <span className="text-primary">grow</span>.
    </motion.p>
    <motion.p className="mt-2 font-serif-display text-base md:text-lg font-light text-muted-foreground text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      And each story helps a Flower bloom in the <span className="text-primary font-semibold">Yonyverse</span>.
    </motion.p>
    <motion.div className="flex flex-wrap justify-center gap-2 mt-4" custom={2} variants={fadeUp} initial="hidden" animate="visible">
      {seeds.map((s, i) => <SeedCard key={s.name} {...s} delay={0.8 + i * 0.15} />)}
    </motion.div>
  </OnboardingSlide>,
];

export default function OnboardingVoices() {
  return <OnboardingLayout slides={slides} gameName="Yony Voices" />;
}
