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

const file = localStorage.getItem('fileText')

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
        selectAllBtn: false,
        status: null,
        error: null
    },
    reducers: {
        addFavorites(state, action) {
            state.favorites.push({
                key: [uniqueId(), uniqueId()],
                id: uniqueId(),
                selected: false,
                text1: action.payload[0],
                text2: action.payload[1]
            })
        },
        getFavorites(state) {
            return state.favorites
        }
    },
    extraReducers: {
        [getFavoritesAPI.pending]: state => {
            state.status = 'loading'
            state.error = null
        },
        [getFavoritesAPI.fulfilled]: (state, action) => {
            state.status = 'resolve'
            const textToArray = action.payload.filter(x => x !== "").map(x => "#" + x)
            const size = 25; //размер подмассива
            const subarray = []; //массив в который будет выведен результат.
            for (let i = 0; i < Math.ceil(textToArray.length / size); i++) {
                subarray[i] = textToArray.slice((i * size), (i * size) + size);
            }

            return state.favorites = subarray
        },
        [getFavoritesAPI.rejected]: state => {
            state.status = 'error'
        },
    }
})

export const {addFavorites, getFavorites} = favoritesSlice.actions

export default favoritesSlice.reducer