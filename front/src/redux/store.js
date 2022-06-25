// import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
//
// import rootReducers from './modules/reducer'

// const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) => createStore(
//     combineReducers({
//         ...rootReducers,
//         ...reducers
//     }
//     ),
//     preloadedState,
//     compose(
//         applyMiddleware(
//             ...middlewares,
//             thunk,
//             logger
//         ),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// )
//
// export default configureStore()

import { configureStore } from "@reduxjs/toolkit";
import instaPostsReducer from "./modules/instaPostsSlice";

export default configureStore({
    reducer: {
        instagramPosts: instaPostsReducer
    }
})