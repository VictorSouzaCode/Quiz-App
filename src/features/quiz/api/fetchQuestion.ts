// all async thunks for fetching
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { QuestionBuilder, fetchQuestionParams } from "../types/quizTypes";


export const fetchQuestion = createAsyncThunk<QuestionBuilder, fetchQuestionParams>(
    "quiz/fetchTrivaQuestion",
    async ({category, difficulty}) => {

        const triviaURL = `https://the-trivia-api.com/v2/questions?difficulties=${difficulty}&categories=${category}&limit=1`;

        const response = await fetch(triviaURL);
        const data = await response.json();

        return data[0] as QuestionBuilder
    }
)