import { createSlice } from '@reduxjs/toolkit'

const instaPostsSlice = createSlice({
    name: 'instagramPosts',
    initialState: {
        posts: [],
        currentPostId: null
    },
    reducers: {
        newPosts: (state, action) => state.posts = action.payload,
        setCurrentPostId: (state,action) => void(state.currentPostId = action.payload.id)
    },
})

export const {
    newPosts,
    setCurrentPostId
} = instaPostsSlice.actions

export default instaPostsSlice.reducer