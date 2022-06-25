import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getFavoritesAPI = createAsyncThunk(
    'favorites/getFavoritesAPI',
    async function () {
        let data
        await axios.get('')
            .then(res => {
                return data = res.data
            })
            .catch(e => {
                console.log(e)
            })
        return data
    }
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
            state.posts = action.payload
        }
    },
    extraReducers: {
        [getFavoritesAPI.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getFavoritesAPI.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.posts = action.payload
        },
        [getFavoritesAPI.rejected]: (state) => {
            state.status = 'error'
        },
    }
})

export const {addFavorites} = favoritesSlice.actions

export default favoritesSlice.reducer