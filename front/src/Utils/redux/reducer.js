import { combineReducers } from "@reduxjs/toolkit";
import instaPostsReducer from "./modules/instaPostsSlice";
import favoritesReducer from "./modules/favoritesSlice";
import modalReducer from "./modules/modalSlice";
import facebookReducer from "./modules/facebookSlice";
import {hashtagsApi} from "./services/hashtagsApi";



export const rootReducer = combineReducers({
    [hashtagsApi.reducerPath]: hashtagsApi.reducer,
    modalFb: modalReducer,
    instagramPosts: instaPostsReducer,
    favorites: favoritesReducer,
    facebook: facebookReducer
})