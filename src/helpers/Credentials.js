import AsyncStorage from '@react-native-community/async-storage'

const ASYNC_EMAIL_STORAGE_KEY = 'ASYNC_EMAIL_STORAGE_KEY'
const ASYNC_PASSWORD_STORAGE_KEY = 'ASYNC_PASSWORD_STORAGE_KEY'
const TOKEN = 'ASYNC_TOKEN'
const PROFILE = 'ASYNC_PROFILE'

async function saveToken(token) {
    try {
        await AsyncStorage.setItem(TOKEN, token)
    } catch (e) {
        console.error('Save token: Failed to save token')
    }
}

async function loadToken() {
    try {
        const token = await AsyncStorage.getItem(TOKEN)
        return token
    } catch (e) {
        return ''
    }
}

async function deletePassword() {
    try {
        await AsyncStorage.removeItem(ASYNC_EMAIL_STORAGE_KEY)
        await AsyncStorage.removeItem(ASYNC_PASSWORD_STORAGE_KEY)
        await AsyncStorage.removeItem(TOKEN)
        await AsyncStorage.removeItem(PROFILE)
    } catch (e) {
        console.error('Failed to save credentials.')
    }
}

async function saveProfile(profile) {
    try {
        await AsyncStorage.setItem(PROFILE, JSON.stringify(profile))
    } catch (e) {
        console.error('Failed to save profile.', e)
    }
}

async function loadProfile() {
    try {
        const token = await AsyncStorage.getItem(PROFILE)
        return JSON.parse(token)
    } catch (e) {
        return {}
    }
}

export default {
    saveToken,
    loadToken,
    deletePassword,
    saveProfile,
    loadProfile
}