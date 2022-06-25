import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {initializedState} from "react-slick/lib/utils/innerSliderUtils";

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

/*export const postFavoriteAPI = createAsyncThunk(
    'favorites/postFavoriteAPI',
    async function () {
        const data = favoritesSlice.getInitialState.
        axios.post('/api/hashtags/post-id', {
            data
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            }).finally(() => console.log(data))
    }
)*/

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
        error: null,
        favoritesFromApi: []
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
            console.log(state)
            state.favoritesFromApi = state.favorites.map(f => ({
                    text1: f.text1,
                    text2: f.text2.join(" "),
                }
            ))
        }
    },
    extraReducers: {
        [getFavoritesAPI.pending]: state => {
            state.status = 'loading'
            state.error = null
        },
        [getFavoritesAPI.fulfilled]: (state, action) => {
            state.status = 'resolve'
            const size = 25; //размер подмассива
            const subarray = []; //массив в который будет выведен результат.
            let newFavorite = state.favorites
            for (let i = 0; i < Math.ceil(action.payload.length / size); i++) {
                subarray[i] = action.payload.slice((i * size), (i * size) + size);
                newFavorite.push({
                    key: [uniqueId(), uniqueId()],
                    id: uniqueId(),
                    selected: false,
                    text1: `${i + 1}`,
                    text2: subarray[i]
                })
            }
            state.favorites = newFavorite
        },
        [getFavoritesAPI.rejected]: state => {
            state.status = 'error'
        },
    }
})

export const {addFavorites, getFavorites} = favoritesSlice.actions

export default favoritesSlice.reducer