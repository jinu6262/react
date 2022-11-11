import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer";
import logger from "redux-logger";

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === "development",
    //개발자 상태에서만 사용
    middleware: process.env.NODE_ENV === "development" && [logger],
    //개발자 상태에서만 사용
});
