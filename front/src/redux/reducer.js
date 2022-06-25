import instaPostsReducer from "./modules/instaPostsSlice";
import favoritesReducer from "./modules/favoritesSlice";

export const reducer = {
    instagramPosts: instaPostsReducer,
    favorites: favoritesReducer
}