import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import logoHeader from "@/assets/logo-yonyverse-header.png";
import { languages, routeSlugs } from "@/i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || i18n.language || "en";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const links = [
    { label: t("nav.characters"), href: "#characters" },
    { label: t("nav.games"), href: "#games" },
    { label: t("nav.journey"), href: "#world" },
    { label: t("nav.challenge"), href: "#join" },
  ];

  const joinSlug = routeSlugs[currentLang]?.["join-games"] || "join";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
    // Navigate to the same page in the new language
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|fr|es|pt)/, "");
    navigate(`/${code}${pathWithoutLang || ""}`);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/90 backdrop-blur-xl ${
        scrolled ? "shadow-sm border-b border-white/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href={`/${currentLang}`} className="flex items-center">
          <img src={logoHeader} alt="Yonyverse" className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-sans-body text-white/70 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {l.label}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{currentLang}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute right-0 top-8 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg py-1 min-w-[140px] z-50"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => switchLanguage(l.code)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        currentLang === l.code
                          ? "text-primary font-medium"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {l.flag} {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href={`/${currentLang}/${joinSlug}`}
            className="ml-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold font-sans-body hover:bg-primary/90 transition-colors"
          >
            {t("nav.join")}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-sans-body text-white/80 py-2 border-b border-white/10"
                >
                  {l.label}
                </a>
              ))}

              {/* Mobile Language Selector */}
              <div className="flex gap-2 py-2 border-b border-white/10">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { switchLanguage(l.code); setMobileOpen(false); }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      currentLang === l.code
                        ? "bg-primary text-primary-foreground"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {l.flag} {l.code.toUpperCase()}
                  </button>
                ))}
              </div>

              <a
                href={`/${currentLang}/${joinSlug}`}
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold font-sans-body text-center"
              >
                {t("nav.join")}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
