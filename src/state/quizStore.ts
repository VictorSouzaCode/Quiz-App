
import { configureStore } from "@reduxjs/toolkit";
import majorFunctionalities from "./majorFunctionalities/majorFunctionalities"

export const quizStore = configureStore({
    reducer: {
        majorFunctions: majorFunctionalities,

    }
})


export type RootState = ReturnType<typeof quizStore.getState>
export type AppDispatch = typeof quizStore.dispatch

