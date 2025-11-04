// handles selected/stored answers
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { HandlingData } from "../types/quizTypes"
import { fetchQuestion } from "../api/fetchQuestion"

export const initialHandlingData: HandlingData = {
    chosenAnswerValue: "",
    storedChosenAnswer: [],
    remaningTime: 60,
    allAnswers: [],
}

const answerSlice = createSlice({
    name: "answer",
    initialState: initialHandlingData,
    reducers: {
        chooseAnswer: (state, action: PayloadAction<string>) => {
            state.chosenAnswerValue = action.payload;
            if(state.storedChosenAnswer.includes(action.payload)) {
                state.storedChosenAnswer = [];
            } else {
                state.storedChosenAnswer = [action.payload];
            }
        },
        shuffle: (state) => {
            if(state.allAnswers.length === 4) {
                const shuffled = [...state.allAnswers];
                for(let i = shuffled.length -1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
                }
                state.allAnswers = shuffled
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestion.fulfilled, (state, action) => {
            const { incorrectAnswers, correctAnswer } = action.payload;
            state.allAnswers = [...incorrectAnswers, correctAnswer];
            state.chosenAnswerValue = "";
            state.storedChosenAnswer = [];
            state.remaningTime = 60;

        })
    }
})

export const {chooseAnswer, shuffle} = answerSlice.actions;
export default answerSlice.reducer;