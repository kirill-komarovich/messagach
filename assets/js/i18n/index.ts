import i18n from 'i18next';
import translationsEn from './translations.en.json';

i18n.init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  resources: {
    en: {
      translation: translationsEn,
    },
  },
});
