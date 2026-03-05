import { motion } from "framer-motion";
import { Users, Globe, Gamepad2, Rocket } from "lucide-react";

const portals = [
  {
    icon: Users,
    title: "Characters",
    description: "Meet the archetypal roles that shape the Yonyverse universe.",
    href: "#characters",
  },
  {
    icon: Globe,
    title: "Explore the World",
    description: "Journey through 16 founding territories and their cultural wisdom.",
    href: "#world",
  },
  {
    icon: Gamepad2,
    title: "The Games",
    description: "Discover the eight games that elevate dreams, cultures and wisdom.",
    href: "#games",
  },
  {
    icon: Rocket,
    title: "Join the Games",
    description: "Become part of the founding community and shape the future.",
    href: "#join",
  },
];

const PortalSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            The <span className="text-gradient-copper italic">Portals</span>
          </h2>
          <p className="text-muted-foreground text-lg">Choose your path into the Yonyverse.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal, i) => (
            <motion.a
              key={portal.title}
              href={portal.href}
              className="group relative p-8 rounded-2xl bg-card sacred-border hover:glow-soft transition-all duration-500 flex flex-col items-center text-center cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <portal.icon className="w-7 h-7 text-copper group-hover:text-golden transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-foreground">{portal.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{portal.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortalSection;
