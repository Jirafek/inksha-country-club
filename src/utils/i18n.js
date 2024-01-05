import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import ru from "./../locales/ru.json"
import en from "./../locales/en.json"

// Load the saved language from localStorage or use a default language
const savedLanguage = localStorage.getItem("selectedLanguage")
const defaultLanguage = "ru"
const initialLanguage = savedLanguage || defaultLanguage

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage, // Use the initialLanguage instead of "en"

    interpolation: {
      escapeValue: false,
    },
  })

// Export a function to change the language and save it to localStorage
export const changeLanguage = (newLanguage) => {
  i18n.changeLanguage(newLanguage)
  localStorage.setItem("selectedLanguage", newLanguage)
}

export default i18n
