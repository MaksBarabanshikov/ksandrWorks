import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getFavoritesAPI = createAsyncThunk(
    'favorites/getFavoritesAPI',
    async function () {
        let data
        await axios.get('/api/hashtags/sorted-hashtags')
            .then(res => {
                return data = res.data
            })
            .catch(e => {
                console.log(e)
            })
        return data
    }
)
export const uniqueId = () => (
    Math.random().toString(16).slice(2)
)

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
        status: null,
        error: null
    },
    reducers: {
        addFavorites(state, action) {
            state.favorites.push({
                key: [uniqueId(), uniqueId()],
                id: uniqueId(),
                selected: false,
                text1: action.payload.favorit,
                text2: action.payload.favorit
            })
        }
    },
    extraReducers: {
        [getFavoritesAPI.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getFavoritesAPI.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.favorites = action.payload
        },
        [getFavoritesAPI.rejected]: (state) => {
            state.status = 'error'
        },
    }
})

export const {addFavorites} = favoritesSlice.actions

export default favoritesSlice.reducer