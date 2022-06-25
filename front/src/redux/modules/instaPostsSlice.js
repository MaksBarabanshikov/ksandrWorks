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

// export const postIdInstagram = createAsyncThunk(
//     'instagramPosts/postIdInstagram',
//     async function (id) {
//         console.log(id)
//         await axios.post('/api/hashtags/post-id', {
//                 id
//             },
//             {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             .then(res => {
//                 console.log(res)
//             })
//             .catch(e => {
//                 console.log(e)
//             })
//     }
// )

const instaPostsSlice = createSlice({
    name: 'instagramPosts',
    initialState: {
        posts: [],
        status: null,
        error: null,
        id: null
    },
    reducers: {},
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

export const {} = instaPostsSlice.actions

export default instaPostsSlice.reducer