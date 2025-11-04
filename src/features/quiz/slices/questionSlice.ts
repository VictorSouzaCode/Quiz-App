// handles question fetching state
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { QuestionBuilder } from "../types/quizTypes";
import { fetchQuestion } from "../api/fetchQuestion";

type QuestionState = {
    fullQuestion: QuestionBuilder | null,
    status: "idle" | "loading" | "succeeded" | "failed",
};

const initialState:QuestionState = {
    fullQuestion: null,
    status: "idle"
}

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchQuestion.pending, (state) => {
            state.status = "loading";

        }).addCase(fetchQuestion.fulfilled, (state, action: PayloadAction<QuestionBuilder>) => {
            state.status = "succeeded";
            state.fullQuestion = action.payload;

        }).addCase(fetchQuestion.rejected, (state) => {
            state.status = "failed";
        })
    }
})

export default questionSlice.reducer;

/* old code maybe i will need to use it later */
/*
state.quizData.status = "succeeded"
            state.quizData.fullQuestion = action.payload

            const wrong = action.payload.incorrectAnswers
            const correct = action.payload.correctAnswer;

            // adding initial values to storedData, when the api request is fullfield
            state.storedData = {
                chosenAnswerValue: '',
                storedChosenAnswer: [],
                remaningTime: 60,
                allAnswers: [...wrong, correct],
            }
*/