import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import sw from "./sw.json";

i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: "en",
    fallbackLng: "en",
    resources: {
        en: en,
        sw: sw,
    },
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});

export { i18n };
