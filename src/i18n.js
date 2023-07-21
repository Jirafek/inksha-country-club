import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru.json';
import en from './locales/en.json';
import id from './locales/id.json';
import vi from './locales/vi.json';
import ml from './locales/ml.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
  vi: {
    translation: vi,
  },
  ml: {
    translation: ml,
  }
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  lng: "en",
  load: 'languageOnly',
});

i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

export default i18n;
