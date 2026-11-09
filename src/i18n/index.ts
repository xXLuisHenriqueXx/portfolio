import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBR from "./pt-BR.json";
import enUS from "./en-US.json";

const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("lang") : null;
const initialLng = savedLang || "pt-BR";

if (typeof document !== "undefined") {
  document.documentElement.lang = initialLng;
}

i18n.use(initReactI18next).init({
  resources: {
    "pt-BR": { translation: ptBR },
    "en-US": { translation: enUS },
  },
  lng: initialLng,
  fallbackLng: "pt-BR",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
});

export default i18n;
