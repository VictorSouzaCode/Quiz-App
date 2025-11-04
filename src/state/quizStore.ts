
import { configureStore } from "@reduxjs/toolkit";
import majorFunctionalities from "./majorFunctionalities/majorFunctionalities"
import { quizReducers } from "../features/quiz";

export const quizStore = configureStore({
    reducer: {
        majorFunctions: majorFunctionalities,
        ...quizReducers,

    }
})


export type RootState = ReturnType<typeof quizStore.getState>
export type AppDispatch = typeof quizStore.dispatch

