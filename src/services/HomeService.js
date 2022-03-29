import { api } from './api'
import { NotificationArticle, NewsArticle, PromotionArticle } from '../models'

const getImportantNotification = async () => {
    try {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await api.get(`${API_GET_IMPORTANT_NOTIFICATION}`, configs)
        let notification = new NotificationArticle(response.data)
        return notification
    } catch (error) {
        console.log(error)
        throw error
    }
}

const getListPromotion = async () => {
    try {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await api.get(`${API_GET_LIST_PROMOTION}`, configs)
        let promotion = new PromotionArticle(response.data)
        return promotion
    } catch (error) {
        console.log(error)
        throw error
    }
}

const getListNews = async () => {
    try {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await api.get(`${API_GET_LIST_NEWS}`, configs)
        let news = new NewsArticle(response.data)
        return news
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default {
    getImportantNotification,
    getListPromotion,
    getListNews
}