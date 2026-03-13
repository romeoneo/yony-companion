import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Archetype, QuizQuestion } from "@/data/archetypes";

interface Props {
  archetype: Archetype;
}

function QuizCard({ q }: { q: QuizQuestion }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="border border-white/10 rounded-xl p-5 bg-white/5">
      <p className="font-sans-body font-semibold text-white mb-3">{q.question}</p>
      <div className="flex flex-col gap-2">
        {q.answers.map((a, i) => {
          const isSelected = selected === i;
          const isCorrect = i === q.correctIndex;
          let cls = "border border-white/10 rounded-lg px-4 py-3 text-sm font-sans-body cursor-pointer transition-all text-left ";
          if (selected !== null) {
            if (isCorrect) cls += "border-green-500 bg-green-500/10 text-white ";
            else if (isSelected && !isCorrect) cls += "border-red-500 bg-red-500/10 text-white ";
            else cls += "opacity-40 ";
          } else {
            cls += "hover:border-primary/50 hover:bg-white/5 text-white/80 ";
          }
          return (
            <button key={i} className={cls} onClick={() => selected === null && setSelected(i)}>
              {a}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-sm text-white/60 font-sans-body border-l-2 border-primary pl-3"
          >
            {q.explanation}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function LightWheel({ prompt }: { prompt: string }) {
  const [spinning, setSpinning] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleSpin = () => {
    setSpinning(true);
    setRevealed(false);
    setTimeout(() => {
      setSpinning(false);
      setRevealed(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <motion.div
        animate={{ rotate: spinning ? 720 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="w-40 h-40 rounded-full border-4 border-primary flex items-center justify-center cursor-pointer bg-primary/10 hover:bg-primary/20 transition-colors"
        onClick={handleSpin}
      >
        <span className="text-5xl">✨</span>
      </motion.div>
      <button
        onClick={handleSpin}
        className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-sans-body font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
      >
        Tourner la Roue de Lumière
      </button>
      <AnimatePresence>
        {revealed && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md text-center"
          >
            <p className="text-sm font-sans-body font-semibold text-primary mb-2">Votre défi :</p>
            <p className="text-sm font-sans-body text-white/70 italic">{prompt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TabsContent({ archetype }: Props) {
  const [activeTab, setActiveTab] = useState(archetype.tabs[0]);

  const renderContent = () => {
    switch (activeTab) {
      case "Philosophy":
      case "Light Moments":
        return (
          <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif-display font-bold text-white mb-2">
                Notre <span className="text-primary italic">Mission</span>
              </h3>
              {archetype.missionLong.map((p, i) => (
                <p key={i} className="text-sm font-sans-body text-white/60 mt-3 leading-relaxed">{p}</p>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-serif-display font-bold text-white mb-4">Nos Valeurs</h3>
              {archetype.values.map((v, i) => (
                <div key={i} className="mb-4 pl-4 border-l-2 border-primary/30">
                  <p className="font-sans-body font-semibold text-white text-sm">{v.title}</p>
                  <p className="font-sans-body text-white/50 text-sm">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Team":
        return (
          <div className="max-w-5xl mx-auto px-4 py-8">
            <h3 className="text-2xl font-serif-display font-bold text-white mb-4">{archetype.teamName}</h3>
            <p className="text-sm font-sans-body text-white/60 leading-relaxed max-w-2xl">{archetype.teamBio}</p>
            <p className="text-sm font-sans-body text-white/50 mt-4">
              <span className="text-primary font-semibold">Fondé en :</span> {archetype.teamFounded}
            </p>
          </div>
        );
      case "Offers":
        return (
          <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-4">
            {archetype.offers.map((o, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 rounded-xl p-5 bg-white/5 hover:border-primary/40 hover:bg-white/10 transition-all"
              >
                <h4 className="font-serif-display font-bold text-white text-base">{o.name}</h4>
                <p className="text-sm font-sans-body text-white/50 mt-2">{o.description}</p>
                {o.price && (
                  <p className="text-sm font-sans-body font-semibold text-primary mt-3">{o.price}</p>
                )}
              </motion.div>
            ))}
          </div>
        );
      case "Explorer":
        return (
          <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-4">
            <h3 className="text-2xl font-serif-display font-bold text-white">Quiz Interactif</h3>
            {archetype.explorer.map((q, i) => (
              <QuizCard key={`${archetype.key}-${i}`} q={q} />
            ))}
          </div>
        );
      case "Life":
        return (
          <div className="max-w-3xl mx-auto px-4 py-8">
            <h3 className="text-2xl font-serif-display font-bold text-white mb-6">Actualités</h3>
            {archetype.lifeNews.map((n, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-primary pl-4 mb-6"
              >
                <p className="text-xs font-sans-body text-primary font-semibold uppercase tracking-wider">{n.date}</p>
                <p className="font-serif-display font-bold text-white text-lg mt-1">{n.title}</p>
                <p className="text-sm font-sans-body text-white/50 mt-1">{n.description}</p>
              </motion.div>
            ))}
          </div>
        );
      case "Community":
        return (
          <div className="max-w-3xl mx-auto px-4 py-8">
            <h3 className="text-2xl font-serif-display font-bold text-white mb-6">Sondages</h3>
            {archetype.communityPolls.map((poll, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-5 bg-white/5 mb-4">
                <p className="font-sans-body font-semibold text-white mb-4">{poll.question}</p>
                <div className="flex flex-col gap-2">
                  {poll.options.map((opt, j) => (
                    <button
                      key={j}
                      className="border border-white/10 rounded-lg px-4 py-3 text-sm font-sans-body text-white/70 hover:border-primary/50 hover:bg-primary/10 hover:text-white transition-all text-left"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case "Challenges":
        return (
          <div className="max-w-3xl mx-auto px-4 py-8">
            <h3 className="text-2xl font-serif-display font-bold text-white mb-2">Roue de Lumière</h3>
            <p className="text-sm font-sans-body text-white/50 mb-6">
              Tournez la roue pour recevoir un défi personnalisé lié à la mission de {archetype.profileName}.
            </p>
            <LightWheel prompt={archetype.challengePrompt} />
          </div>
        );
      case "Impact":
        return (
          <div className="max-w-3xl mx-auto px-4 py-8">
            <h3 className="text-2xl font-serif-display font-bold text-white mb-4">Galerie d'Inspirations</h3>
            <p className="text-sm font-sans-body text-white/50 mb-6">
              Découvrez les profils qui nous inspirent et partagent notre vision.
            </p>
            <div className="flex flex-wrap gap-3">
              {archetype.impactLinks.map((link, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 rounded-full border border-primary text-primary text-sm font-sans-body font-semibold cursor-pointer hover:bg-primary/10 transition-colors"
                >
                  {link.label}
                </motion.span>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="max-w-3xl mx-auto px-4 py-8">
            <p className="text-sm font-sans-body text-white/50">Contenu à venir...</p>
          </div>
        );
    }
  };

  return (
    <div className="border-t border-white/10 bg-black/95">
      {/* Tab bar with centered menu */}
      <div className="w-full overflow-x-auto scrollbar-hide border-b border-white/10">
        <div className="flex justify-center min-w-max">
          {archetype.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-4 text-sm font-sans-body font-medium whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-white/50 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`${archetype.key}-${activeTab}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
