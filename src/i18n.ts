import HttpApi from 'i18next-http-backend'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { LANGUAGES } from 'shared/constants'

const setLanguage = () => {
  const language = localStorage.getItem('i18n')

  if (!language) i18n.changeLanguage(LANGUAGES.ENGLISH)
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: [LANGUAGES.RUSSIAN, LANGUAGES.ENGLISH, LANGUAGES.SPANISH],
    fallbackLng: LANGUAGES.ENGLISH,
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  })

setLanguage()

export default i18n
