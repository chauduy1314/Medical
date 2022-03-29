import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { API_END_POINT } from '../configs'

export const api = axios.create({
    baseURL: API_END_POINT,
    timeout: 15000,
    headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use(
    async (config) => {
        // apply Authorization if the Authorization undefined
        if (config && config.headers && config.headers['Authorization']) {
            return config
        }
        const token = await AsyncStorage.getItem('token') ?? ''
        const currentLanguage = await AsyncStorage.getItem('language')

        config.headers['Authorization'] = token ? `Bearer ${token}` : ''
        config.headers['X-languageId'] = currentLanguage === 'en' ? 1 : 2
        return config
    },
    (error) => {
        console.log(error)
    }
)