import logoFooter from "@/assets/logo-yonyverse-footer.png";

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
          <div className="flex flex-col items-start">
            <img src={logoFooter} alt="Yonyverse" className="h-8 w-auto mb-1" />
            <p className="text-muted-foreground text-sm">
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
