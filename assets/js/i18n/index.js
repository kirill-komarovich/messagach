import i18n from "i18next";

import translationsEn from './translations.en';

i18n
  .init({
    resources: {
      en: {
        translation: translationsEn
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
