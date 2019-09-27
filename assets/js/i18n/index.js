import i18n from "i18next";

import translationsEn from './translations.en';
import capitalize from '../utils/capitalize';
import { I18N_FORMAT_TYPES } from '../constants';

i18n.init({
  resources: {
    en: {
      translation: translationsEn,
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: true,
  interpolation: {
    escapeValue: false,
    format: (value, format) => {
      if (format === I18N_FORMAT_TYPES.capitalize) return capitalize(value);
      return value;
    },
  },
});
