import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger"
import { reducer } from "./reducer";

const logger = createLogger()

export default configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})