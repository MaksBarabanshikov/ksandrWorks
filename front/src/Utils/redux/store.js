import {configureStore} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {createLogger} from "redux-logger"
import {rootReducer} from "./reducer";
import {postsApi} from "./services/postsApi";
import {hashtagsApi} from "./services/hashtagsApi";

const logger = createLogger()

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorites','facebook']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(hashtagsApi.middleware, logger),
})

export const persistor = persistStore(store)
export default store