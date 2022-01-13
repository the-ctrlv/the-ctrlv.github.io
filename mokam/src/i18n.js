import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import EN from './shared/languages/EN/translations'
import bangla from './shared/languages/BANGLA/translations'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: EN,
    },
    bangla: {
      translation: bangla,
    },
  },
  interpolation: {
    escapeValue: false,
  },
})
