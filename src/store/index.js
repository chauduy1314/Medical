import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from '../features/authentication/authenticationSlice'
import profileReducer from '../features/profile/profileSlice'

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        profile: profileReducer
    }
})