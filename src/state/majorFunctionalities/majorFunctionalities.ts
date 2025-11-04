

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { QuestionBuilder, fetchQuestionParams, MajorFunctions } from "../../features/quiz/types/quizTypes";

// use redux for:
// Global shared state (app-wide)
// Cross-feature communication
// Derived or computed global state (selectors)
// share state across many unrelated components.
// You need server state + client state coordination (e.g., saving answers while fetching new ones).
// You want centralized logic for important features like score calculation, timers, etc.
// Maybe use hook + redux in Complex side effects or reusable logic (e.g., fetching, timers, forms).
// Combining Both (Best Practice)
// Professionals often combine both:
// Redux manages data/state.
// Hooks manage logic/behavior.


export const initialState: MajorFunctions = {
    quizData: {
        fullQuestion: null,
        status: "idle",
    },
    storedData: null,
    currentPath: '/',
    fimTvPoints: 0,
    sportsPoints: 0,
    sciencePoints: 0,
    generalPoints: 0,
}

// action payload type
type PointsPayload = { category: string, selectedAnswer: string, correctAnswer: string | undefined}


const majorFunctions = createSlice({
    name: "mainFunctions",
    initialState,
    reducers: {
        setCurrentPath: (state, action: PayloadAction<string>) => {

            state.currentPath = action.payload
        },
        handlingAnswersChoice: (state, action: PayloadAction<string>) => {

            if(state.storedData) {

                state.storedData.chosenAnswerValue = action.payload

                if(state.storedData.storedChosenAnswer.includes(state.storedData.chosenAnswerValue)) {

                    state.storedData.storedChosenAnswer = []

                } else {
                    
                    state.storedData.storedChosenAnswer = [state.storedData.chosenAnswerValue]
                }

            }
        },
        handlingPoints: (state, action: PayloadAction<PointsPayload >) => {

            const { category, selectedAnswer, correctAnswer} = action.payload

            const delta = selectedAnswer === correctAnswer ? 20 : -20;

            switch (category) {
                case "film_and_tv":
                    state.fimTvPoints = Math.max(0, state.fimTvPoints + delta);
                    break;
                case "sport_and_leisure":
                    state.sportsPoints = Math.max(0, state.sportsPoints + delta);
                    break;
                case "science":
                    state.sciencePoints = Math.max(0, state.sciencePoints + delta);
                    break;
                case "general_knowledge":
                    state.generalPoints = Math.max(0, state.generalPoints + delta);
                    break;
            }

        },
        decrementTimer: (state) => {

            if(state.storedData) {

                if(state.storedData.remaningTime > 0) {

                    state.storedData.remaningTime -= 1
    
                }

                if(state.storedData.remaningTime === 0){

                    if(state.fimTvPoints === 0) {
    
                        state.fimTvPoints === 0
    
                    } else {
    
                        state.fimTvPoints -= 20
                    }

                    if(state.sportsPoints === 0) {
    
                        state.sportsPoints === 0
    
                    } else {
    
                        state.sportsPoints -= 20
                    }

                    if(state.sciencePoints === 0) {
    
                        state.sciencePoints === 0
    
                    } else {
    
                        state.sciencePoints -= 20
                    }

                    if(state.generalPoints === 0) {
    
                        state.generalPoints === 0
    
                    } else {
    
                        state.generalPoints -= 20
                    }
                }
            }

        },
        shuffle: (state) => {

            if(state.storedData && state.storedData.allAnswers.length === 4) {

                let answersToShuffle = [...state.storedData.allAnswers]

                for(let i = answersToShuffle.length - 1; i > 0; i--) {

                    const randomIndex = Math.floor(Math.random() * (i + 1));

                    [answersToShuffle[i], answersToShuffle[randomIndex]] = [answersToShuffle[randomIndex], answersToShuffle[i]]

                }

                state.storedData.allAnswers = answersToShuffle
            }

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestion.pending, (state) => {
            state.quizData.status = "loading";

        }).addCase(fetchQuestion.fulfilled, (state, action: PayloadAction<QuestionBuilder>) => {

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
        }) 
    }
})


export const fetchQuestion = createAsyncThunk<QuestionBuilder, fetchQuestionParams>(
    "quiz/fetchTrivaQuestion",
    async ({category, difficulty}) => {

        const triviaURL = `https://the-trivia-api.com/v2/questions?difficulties=${difficulty}&categories=${category}&limit=1`;

        const response = await fetch(triviaURL);
        const data = await response.json();

        return data[0] as QuestionBuilder
    }
)

export const { shuffle, handlingAnswersChoice, handlingPoints, decrementTimer, setCurrentPath } = majorFunctions.actions

export default majorFunctions.reducer