import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Import translations
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/fr.json';

// Configure i18next
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  resources: {
    en: {translation: en},
    fr: {translation: fr},
    es: {translation: es},
  },
});

export default i18n;
