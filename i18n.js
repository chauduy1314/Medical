import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import en from './src/translations/en.json'
import vi from './src/translations/vi.json'
import { getLocales } from 'react-native-localize'
import moment from 'moment'

const resource = {
    en: {
        translation: en,
    },
    vi: {
        translation: vi,
    },
}

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: (language) => {
        const persistedLocale = getLocales()[0].languageCode
        language(persistedLocale)
    },
    init: () => { },
    cacheUserLanguage: () => { },
}

i18n.on('languageChanged', function (lng) {
    moment.locale(lng)
})

i18n.use(initReactI18next)
    .use(languageDetector)
    .init({
        resources: resource,
        interpolation: {
            escapeValue: true,
        },
        react: {
            useSuspense: false,
        },
        fallbackLng: 'en',
        debug: true,
    })


export default i18n;
