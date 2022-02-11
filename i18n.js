import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './src/translations/en.json'
import vi from './src/translations/vi.json'
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resource = {
    en: {
        translation: en,
    },
    vi: {
        translation: vi,
    },
}

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: resource,
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
