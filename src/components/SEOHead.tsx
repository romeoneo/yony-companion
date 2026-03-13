import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

interface SEOHeadProps {
  titleKey: string;
  descriptionKey: string;
}

export default function SEOHead({ titleKey, descriptionKey }: SEOHeadProps) {
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || i18n.language || "en";

  useEffect(() => {
    document.title = t(titleKey);
    document.documentElement.lang = currentLang;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t(descriptionKey));

    // OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t(titleKey));
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t(descriptionKey));

    // Twitter tags
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", t(titleKey));
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", t(descriptionKey));

    // Hreflang tags
    const langs = ["en", "fr", "es", "pt"];
    // Remove old hreflang
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    const base = window.location.origin;
    const path = window.location.pathname.replace(/^\/(en|fr|es|pt)/, "");
    langs.forEach(l => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = l;
      link.href = `${base}/${l}${path}`;
      document.head.appendChild(link);
    });
    // x-default
    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.setAttribute("hreflang", "x-default");
    xDefault.href = `${base}/en${path}`;
    document.head.appendChild(xDefault);
  }, [t, titleKey, descriptionKey, currentLang]);

  return null;
}
