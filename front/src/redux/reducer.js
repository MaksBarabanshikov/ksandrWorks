import { combineReducers } from "@reduxjs/toolkit";
import instaPostsReducer from "./modules/instaPostsSlice";
import favoritesReducer from "./modules/favoritesSlice";
import { postsApi } from "./services/postsApi";



export const rootReducer = combineReducers({
    [postsApi.reducerPath]: postsApi.reducer,
    instagramPosts: instaPostsReducer,
    favorites: favoritesReducer
})