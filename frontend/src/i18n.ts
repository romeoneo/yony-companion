import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import es from "./locales/es/translation.json";
import pt from "./locales/pt/translation.json";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  pt: { translation: pt },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "es", "pt"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
    },
  });

export const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
] as const;

export const routeSlugs: Record<string, Record<string, string>> = {
  en: { "join-games": "join", "yony-fund": "yony-fund" },
  fr: { "join-games": "rejoindre", "yony-fund": "fonds-yony" },
  es: { "join-games": "unirse", "yony-fund": "fondo-yony" },
  pt: { "join-games": "juntar-se", "yony-fund": "fundo-yony" },
};

export default i18n;
