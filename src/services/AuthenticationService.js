import { api } from './api'
import axios from 'axios'
import Credentials from '../helpers/Credentials'
import { API_LOGIN } from '../configs'

const login = async (phoneNumberOrEmail, password) => {
    try {
        const requestData = {
            email: `${phoneNumberOrEmail}`,
            password: `${password}`
        }
        const configs = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await axios.post(`${API_LOGIN}`, requestData, configs)
        await Credentials.saveToken(response.data.id)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

const registerAccount = async (phoneNumberOrEmail, password) => {
    try {
        const isEmail = phoneNumberOrEmail.indexOf('@') > -1
        const requestData = {
            data: `${phoneNumberOrEmail}`,
            isEmail: isEmail,
            password: `${password}`,
        }

        const configs = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const result = await api.post(`${API_REGISTER}`, requestData, configs)
        const data = result.data
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

const resetPassword = async (password, confirmPassword, phoneNumberOrEmail) => {
    try {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const requestData = {
            email: `${phoneNumberOrEmail}`,
            password,
            confirmPassword
        }

        const result = await api.post(`${API_RESET_PASSWORD}`, requestData, configs)
        const data = result.data
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default {
    login,
    registerAccount,
    resetPassword
}