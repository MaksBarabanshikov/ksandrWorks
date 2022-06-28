import { combineReducers } from "@reduxjs/toolkit";
import instaPostsReducer from "./modules/instaPostsSlice";
import favoritesReducer from "./modules/favoritesSlice";
import modalReducer from "./modules/modalSlice";
import facebookReducer from "./modules/facebookSlice";
import {postsApi} from "./services/postsApi";
import {hashtagsApi} from "./services/hashtagsApi";



export const rootReducer = combineReducers({
    [hashtagsApi.reducerPath]: hashtagsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    modalFb: modalReducer,
    instagramPosts: instaPostsReducer,
    favorites: favoritesReducer,
    facebook: facebookReducer
})