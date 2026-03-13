import logoFooter from "@/assets/logo-yonyverse-footer.png";

const Footer = () => {

  const links = [
    { label: t("footer.aboutYonyverse"), href: "#" },
    { label: t("footer.theYonyGames"), href: "#games" },
    { label: t("footer.theEggOfYony"), href: "#" },
    { label: t("footer.joinTheGames"), href: "#join" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <img src={logoFooter} alt="Yonyverse" className="h-8 w-auto mx-auto mb-6" />
        <p className="text-muted-foreground text-xs">© 2026 Yonyverse. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
