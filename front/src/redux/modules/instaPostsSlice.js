import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const getPost = createAsyncThunk(
    'instagramPosts/getPost',
    async function () {
        let data
        await axios.get(`/api/hashtags/all-instagram-posts`)
            .then(res => {
                return data = res.data
            })
            .catch(e => {
                console.log(e)
            })
        return data
    }
)

const instaPostsSlice = createSlice({
    name: 'instagramPosts',
    initialState: {
        posts: [],
        status: null,
        error: null,
    },
    reducers: {
        GET_POSTS(state, action) {
            state.posts = action.payload
        },
    },
    extraReducers: {
        [getPost.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getPost.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.posts = action.payload
        },
        [getPost.rejected]: (state) => {
            state.status = 'error'
        },
    }
})

export const {GET_POSTS} = instaPostsSlice.actions

export default instaPostsSlice.reducer