import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { ProfileService } from '../../services/ProfileService'
import axios from "axios"
import Credentials from "../../helpers/Credentials"
import { useSelector } from "react-redux"

export const getProfile = createAsyncThunk('profile/getProfile', async () => {
    let token = await Credentials.loadToken()
    const res = await axios.get(`http://care1.vastbit.com/api/accessTokens/${token}/user`)
    return res.data
})

export const updateProfile = createAsyncThunk('profile/updateProfile', async (data) => {
    const userProfile = useSelector((state) => state.profile)
    const userProfileID = userProfile.profile.id
    const res = await axios.put(`http://care1.vastbit.com/api/users/${userProfileID}`, data)
    console.log('res', res)
    return res.data
})

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: {},
        status: null,
    },
    extraReducers: {
        [getProfile.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getProfile.fulfilled]: (state, action) => {
            state.profile = action.payload
            state.status = 'success'
        },
        [getProfile.rejected]: (state, action) => {
            state.status = 'failed'
        },
        [updateProfile.pending]: (state, action) => {
            state.status = 'loading'
        },
        [updateProfile.fulfilled]: (state, action) => {
            state.profile = action.payload
            state.status = 'success'
        },
        [updateProfile.rejected]: (state, action) => {
            state.status = 'failed'
        },
    }
})

export default profileSlice.reducer