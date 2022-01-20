import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import EN from './shared/languages/EN/translations'
import bn from './shared/languages/BANGLA/translations'

if (window.location.pathname.includes('/bn')) {
  var startLanguage = 'bn'
} else {
  // eslint-disable-next-line no-redeclare
  var startLanguage = 'en'
}

i18n.use(initReactI18next).init({
  fallbackLng: startLanguage,
  resources: {
    en: {
      translation: EN,
    },
    bn: {
      translation: bn,
    },
  },
  interpolation: {
    escapeValue: false,
  },
})
