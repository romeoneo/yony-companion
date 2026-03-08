import { motion } from "framer-motion";
import OnboardingLayout, { OnboardingSlide, fadeUp } from "./OnboardingLayout";

import reseauDesSecrets from "@/assets/keys/reseau-des-secrets.png";
import machineDesPossibles from "@/assets/keys/machine-des-possibles.png";
import ombresDuPasse from "@/assets/keys/ombres-du-passe.png";
import jardinDesIllusions from "@/assets/keys/jardin-des-illusions.png";
import projetHorizon from "@/assets/keys/projet-horizon.png";
import echoDesVoix from "@/assets/keys/echo-des-voix.png";
import bibliothequeDesAmes from "@/assets/keys/bibliotheque-des-ames.png";
import pontDesSilences from "@/assets/keys/pont-des-silences.png";
import veriteCachee from "@/assets/keys/verite-cachee.png";
import spiraleDesEmotions from "@/assets/keys/spirale-des-emotions.png";
import tambourMagique from "@/assets/keys/tambour-magique.png";
import lacDesReflets from "@/assets/keys/lac-des-reflets.png";
import marcheDesIdentites from "@/assets/keys/marche-des-identites.png";
import horlogeBrisee from "@/assets/keys/horloge-brisee.png";
import villeQuiChuchote from "@/assets/keys/ville-qui-chuchote.png";
import theatreAbandonne from "@/assets/keys/theatre-abandonne.png";

const dilemmas = [
  { title: "The Network of Secrets", image: reseauDesSecrets },
  { title: "The Machine of Possibilities", image: machineDesPossibles },
  { title: "Shadows of the Past", image: ombresDuPasse },
  { title: "The Garden of Illusions", image: jardinDesIllusions },
  { title: "The Horizon Project", image: projetHorizon },
  { title: "The Echo of Voices", image: echoDesVoix },
  { title: "The Library of Souls", image: bibliothequeDesAmes },
  { title: "The Bridge of Silences", image: pontDesSilences },
  { title: "Hidden Truths", image: veriteCachee },
  { title: "The Spiral of Emotions", image: spiraleDesEmotions },
  { title: "The Magic Drum", image: tambourMagique },
  { title: "The Lake of Reflections", image: lacDesReflets },
  { title: "The Market of Identities", image: marcheDesIdentites },
  { title: "The Broken Clock", image: horlogeBrisee },
  { title: "The Whispering City", image: villeQuiChuchote },
  { title: "Abandoned Theater", image: theatreAbandonne },
];

const values = [
  "Benevolence", "Transmission", "Creativity", "Gratitude",
  "Cohesion", "Empathy", "Authenticity", "Resilience",
  "Tolerance", "Equity", "Connection", "Intuition",
  "Lucidity", "Perseverance", "Humility", "Patience",
];

const SocialIcons = () => (
  <motion.div className="flex gap-5 mt-8" custom={2} variants={fadeUp} initial="hidden" animate="visible">
    {[
      <svg key="ig" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>,
      <svg key="tt" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      <svg key="yt" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="3" /><polygon points="10,8.5 16,12 10,15.5" fill="currentColor" stroke="none" /></svg>,
      <svg key="li" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M8 11v5M8 8v.01M12 16v-5c0-1 .5-2 2-2s2 1 2 2v5" /></svg>,
    ].map((icon, i) => (
      <div key={i} className="w-14 h-14 rounded-full border border-border bg-card flex items-center justify-center text-primary">{icon}</div>
    ))}
  </motion.div>
);

const slides = [
  <OnboardingSlide key="welcome">
    <motion.h1 className="font-serif-display text-5xl md:text-7xl font-black tracking-tight text-foreground text-center" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Yony <span className="text-primary italic">Keys</span>
    </motion.h1>
    <motion.p className="font-sans-body text-base md:text-lg text-muted-foreground mt-4 max-w-md text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Find the values that open the path
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="dilemma">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-foreground leading-tight max-w-2xl text-center" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Every project faces moments of <span className="text-primary italic">uncertainty.</span>
    </motion.h2>
    <motion.p className="font-sans-body text-base text-muted-foreground mt-4 max-w-lg text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      A dilemma appears… and a decision must be made.
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="keys">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-foreground leading-tight max-w-2xl text-center" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Choose two values to guide your <span className="text-primary italic">response.</span>
    </motion.h2>
    <motion.p className="font-sans-body text-base text-muted-foreground mt-4 max-w-lg text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      These values become the keys that help you open a path.
    </motion.p>
  </OnboardingSlide>,

  <OnboardingSlide key="dilemmas">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-foreground text-center mb-2" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Explore the <span className="text-primary italic">16 dilemmas.</span>
    </motion.h2>
    <motion.p className="font-sans-body text-sm text-muted-foreground text-center mb-5" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Each dilemma invites you to reflect and choose your guiding values.
    </motion.p>
    <motion.div className="grid grid-cols-4 gap-x-3 gap-y-2 max-w-sm w-full" custom={2} variants={fadeUp} initial="hidden" animate="visible">
      {dilemmas.map((d, i) => (
        <div key={d.title} className="flex flex-col items-center gap-0.5">
          <div className="relative overflow-hidden rounded-lg w-10 h-10 hover:scale-105 transition-transform cursor-pointer">
            <img src={d.image} alt={d.title} className="w-full h-full object-cover rounded-lg" loading={i < 8 ? "eager" : "lazy"} />
          </div>
          <span className="font-sans-body text-[8px] text-foreground text-center leading-tight">{d.title}</span>
        </div>
      ))}
    </motion.div>
  </OnboardingSlide>,

  <OnboardingSlide key="values">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-foreground text-center mb-2" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Choose your <span className="text-primary italic">guiding values.</span>
    </motion.h2>
    <motion.p className="font-sans-body text-sm text-muted-foreground text-center mb-6" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Select two values that resonate with your reflection.
    </motion.p>
    <motion.div className="grid grid-cols-4 gap-2 max-w-md w-full" custom={2} variants={fadeUp} initial="hidden" animate="visible">
      {values.map((v) => (
        <button key={v} className="px-3 py-2 rounded-full border border-border font-serif-display text-xs tracking-wider transition-all duration-300 cursor-pointer bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary">
          {v}
        </button>
      ))}
    </motion.div>
  </OnboardingSlide>,

  <OnboardingSlide key="share">
    <motion.h2 className="font-serif-display text-2xl md:text-4xl font-bold text-foreground leading-tight max-w-2xl text-center" custom={0} variants={fadeUp} initial="hidden" animate="visible">
      Share your creation on <span className="text-primary italic">social media.</span>
    </motion.h2>
    <motion.p className="font-sans-body text-base text-muted-foreground mt-4 max-w-lg text-center" custom={1} variants={fadeUp} initial="hidden" animate="visible">
      Post it and connect it to your project.
    </motion.p>
    <SocialIcons />
  </OnboardingSlide>,
];

export default function OnboardingKeys() {
  return <OnboardingLayout slides={slides} gameName="Yony Keys" />;
}
