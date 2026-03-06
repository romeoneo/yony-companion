import { motion } from "framer-motion";

const ExperienceSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Experience the <span className="text-gradient-copper italic">Yonyverse</span>
        </h2>
        <p className="text-muted-foreground text-lg">Explore the prototype and begin your journey.</p>
      </motion.div>

      <motion.div
        className="rounded-3xl overflow-hidden sacred-border glow-soft"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          src="https://yonygarden.lovable.app"
          className="w-full h-[500px] md:h-[600px] border-0"
          title="Yony Garden Prototype"
          loading="lazy"
        />
      </motion.div>

    </div>
  </section>
);

export default ExperienceSection;
