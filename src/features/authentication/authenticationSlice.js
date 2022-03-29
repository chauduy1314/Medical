import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false
}

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        loggingSuccess: (state) => {
            state.isAuthenticated = true
        },
    },
})

export const { loggingSuccess } = authenticationSlice.actions

export default authenticationSlice.reducer