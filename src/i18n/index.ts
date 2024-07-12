import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./locales";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "pt_br",
    fallbackLng: "pt_br",
    interpolation: {
      escapeValue: false,
    },
    defaultNS: "translations",
    resources: translations,
  });

export default i18n;
