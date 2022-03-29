import { api } from './api'
import axios from 'axios'
import Credentials from '../helpers/Credentials'

const getUserProfile = async () => {
    try {
        console.log('service')
        let token = await Credentials.loadToken()
        const configs = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const result = await axios.get(`http://care1.vastbit.com/api/accessTokens/${token}/user`, configs)
        return result
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default {
    getUserProfile
}