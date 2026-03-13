import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import logoFooter from "@/assets/logo-yonyverse-footer.png";

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  const links = [
    { label: t("footer.aboutYonyverse"), href: "#" },
    { label: t("footer.theYonyGames"), href: "#games" },
    { label: t("footer.theEggOfYony"), href: "#" },
    { label: t("footer.joinTheGames"), href: "#join" },
  ];

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <img src={logoFooter} alt="Yonyverse" className="h-8 w-auto" />
          </div>
          <nav className="flex flex-wrap gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-muted-foreground hover:text-foreground text-sm font-sans-body transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
