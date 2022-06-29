import {createSlice} from "@reduxjs/toolkit";

const facebookSlice = createSlice({
    name: 'facebookSlice',
    initialState: {
        user: {
            isLoggedIn: false,
            userID: "",
            name: "",
            email: "",
            picture: "",
            token: null,
            fbPage: null
        }
    },
    reducers: {
        createUser: (state, action) => {
            state.user.isLoggedIn = true
            state.user.name = action.payload.name
            state.user.email = action.payload.email
            state.user.picture = action.payload.picture
        },
        createTokenAndUserID: (state, action) => {
            state.user.token = action.payload.token
            state.user.userID = action.payload.userID
        },
        createFbPage: (state, action) => {
            console.log(action)
            state.user.fbPage = action.payload.fbPage
        },
        logoutFb: (state) => {
            state.user = {
                isLoggedIn: false,
                userID: "",
                name: "",
                email: "",
                picture: "",
                token: null,
                fbPage: null
            }
        },
    }
})

export const {
    createUser,
    createTokenAndUserID,
    createFbPage,
    logoutFb
} = facebookSlice.actions

export default facebookSlice.reducer