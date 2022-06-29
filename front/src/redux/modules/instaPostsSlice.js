import { createSlice } from '@reduxjs/toolkit'

const instaPostsSlice = createSlice({
    name: 'instagramPosts',
    initialState: {
        posts: [],
    },
    reducers: {
        newPosts: (state, action) => {
            state.posts = action.payload
        },
        clearPosts: state => {
            state.posts = []
        }
    },
})

export const {
    newPosts,
    clearPosts
} = instaPostsSlice.actions

export default instaPostsSlice.reducer