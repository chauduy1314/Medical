import { Alert } from 'react-native'
import { useTranslation } from 'react-i18next';

const { t } = useTranslation()

export default {
    showNoInternetConnectionAlert() {
        Alert.alert(t('noInternet'))
    },
}