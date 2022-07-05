import { createSlice } from '@reduxjs/toolkit'

const instaPostsSlice = createSlice({
    name: 'instagramPosts',
    initialState: {
        posts: [],
        currentPostId: null
    },
    reducers: {
        newPosts: (state, action) => state.posts = action.payload,
        clearPosts: state => state.posts = [],
        setCurrentPostId: (state,action) => void(state.currentPostId = action.payload.id)
    },
})

export const {
    newPosts,
    clearPosts,
    setCurrentPostId
} = instaPostsSlice.actions

export default instaPostsSlice.reducer