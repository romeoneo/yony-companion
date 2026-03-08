import { motion } from "framer-motion";
import OnboardingLayout, { OnboardingSlide, fadeUp } from "./OnboardingLayout";

import treeOfForgetting from "@/assets/legends/tree-of-forgetting.png";
import countingVolcano from "@/assets/legends/counting-volcano.png";
import forestThatErases from "@/assets/legends/forest-that-erases.png";
import lakesPulse from "@/assets/legends/lakes-pulse.png";
import turnedMoai from "@/assets/legends/turned-moai.png";
import obsidianMirror from "@/assets/legends/obsidian-mirror.png";
import dayWithoutCalls from "@/assets/legends/day-without-calls.png";
import whereWaterBegins from "@/assets/legends/where-water-begins.png";
import langouéClearing from "@/assets/legends/langoue-clearing.png";
import islandThatRemembers from "@/assets/legends/island-that-remembers.png";
import silenceOfAncestors from "@/assets/legends/silence-of-ancestors.png";
import tribunalOfAnimals from "@/assets/legends/tribunal-of-animals.png";
import twoDimensionalCity from "@/assets/legends/two-dimensional-city.png";
import suspendedBaths from "@/assets/legends/suspended-baths.png";
import shiftingVillage from "@/assets/legends/shifting-village.png";
import breathingLibrary from "@/assets/legends/breathing-library.png";

const legends = [
  { title: "The Tree of Forgetting", image: treeOfForgetting },
  { title: "The Counting Volcano", image: countingVolcano },
  { title: "The Forest That Erases", image: forestThatErases },
  { title: "The Lake's Pulse", image: lakesPulse },
  { title: "The Turned Moai", image: turnedMoai },
  { title: "The Obsidian Mirror", image: obsidianMirror },
  { title: "The Day Without Calls", image: dayWithoutCalls },
  { title: "Where the Water Begins", image: whereWaterBegins },
  { title: "The Langoué Clearing", image: langouéClearing },
  { title: "The Island That Remembers", image: islandThatRemembers },
  { title: "The Silence of the Ancestors", image: silenceOfAncestors },
  { title: "The Tribunal of Animals", image: tribunalOfAnimals },
  { title: "The Two-Dimensional City", image: twoDimensionalCity },
  { title: "The Suspended Baths", image: suspendedBaths },
  { title: "The Shifting Village", image: shiftingVillage },
  { title: "The Breathing Library", image: breathingLibrary },
];

const SocialIcons = () => (
  <motion.div className="flex gap-5 mt-8" custom={2} variants={fadeUp} initial="hidden" animate="visible">
    {[
      <svg key="ig" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>,
      <svg key="tt" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      <svg key="yt" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="3" /><polygon points="10,8.5 16,12 10,15.5" fill="currentColor" stroke="none" /></svg>,
      <svg key="li" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M8 11v5M8 8v.01M12 16v-5c0-1 .5-2 2-2s2 1 2 2v5" /></svg>,
    ].map((icon, i) => (
      <div key={i} className="w-14 h-14 rounded-full border border-border bg-card flex items-center justify-center text-primary">{icon}</div>
    ))}
  </motion.div>
);

const slides = [
  <OnboardingSlide key="welcome">
    {[...Array(6)].map((_, i) => (
      <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-primary/30 pointer-events-none"
        style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
        animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }} />
    ))}
    <motion.h1 className="font-serif-display text-5xl md:text-7xl font-bold tracking-tight text-center relative z-10" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Yony <span className="text-gradient-copper italic font-medium">Legends</span>
    </motion.h1>
    <motion.p className="mt-4 text-base md:text-lg text-muted-foreground font-sans-body italic tracking-wide relative z-10" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Turn mystery into imagination
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="mystery">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-center max-w-2xl leading-tight" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Every legend begins with a <span className="text-gradient-copper italic">mysterious situation.</span>
    </motion.h2>
    <motion.p className="mt-6 text-base text-muted-foreground font-sans-body italic text-center max-w-lg" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      A moment appears… but its origin remains unknown.
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="imagination">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-center max-w-2xl leading-tight" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Imagine what caused this <span className="text-gradient-copper italic">moment.</span>
    </motion.h2>
    <motion.p className="mt-6 text-base text-muted-foreground font-sans-body italic text-center max-w-lg" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      And imagine what might happen next.
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="legends">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-center mb-2" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Choisis une des <span className="text-gradient-copper italic">16 figures.</span>
    </motion.h2>
    <motion.p className="text-sm text-muted-foreground font-sans-body italic text-center mb-6" custom={0.5} variants={fadeUp} initial="hidden" animate="visible">
      Each figure represents a source of inspiration.
    </motion.p>
    <motion.div className="grid grid-cols-4 gap-x-3 gap-y-1.5 max-w-sm w-full" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      {legends.map((legend) => (
        <div key={legend.title} className="flex flex-col items-center gap-0.5">
          <div className="w-10 h-10 overflow-hidden rounded-lg">
            <img src={legend.image} alt={legend.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <span className="font-sans-body text-[8px] text-muted-foreground text-center leading-tight">{legend.title}</span>
        </div>
      ))}
    </motion.div>
  </OnboardingSlide>,

  <OnboardingSlide key="share">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-center max-w-2xl leading-tight" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Share your story on <span className="text-gradient-copper italic">social media.</span>
    </motion.h2>
    <motion.p className="mt-4 text-base text-muted-foreground font-sans-body italic text-center max-w-lg" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Post it and connect it to your project.
    </motion.p>
    <SocialIcons />
  </OnboardingSlide>,
];

export default function OnboardingLegends() {
  return <OnboardingLayout slides={slides} />;
}
