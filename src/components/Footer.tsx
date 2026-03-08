import logoText from "@/assets/logo-yonyverse-text.png";

const Footer = () => {
  const links = [
    { label: "About Yonyverse", href: "#" },
    { label: "The Yony Games", href: "#games" },
    { label: "The Egg of Yony", href: "#" },
    { label: "Join the Games", href: "#join" },
  ];

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2">
              <span className="text-foreground">Yony</span>
              <span className="text-gradient-copper italic">verse</span>
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Born To Impact
            </p>
          </div>

          <nav className="flex flex-wrap gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-muted-foreground hover:text-foreground text-sm font-sans-body transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © 2026 Yonyverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
