// handles scoring logic
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { PointsPayload } from "../types/quizTypes"

type PointsState = {
    general: number,
    movies: number,
    sports: number,
    science: number,
}

const initialState: PointsState = {
    general: 0,
    movies: 0,
    sports: 0,
    science: 0
}

const pointsSlice = createSlice({
    name: "points",
    initialState,
    reducers: {
        updatePoints: (state, action: PayloadAction<PointsPayload>) => {
            const { category, selectedAnswer, correctAnswer } = action.payload;
            const delta = selectedAnswer === correctAnswer ? 20 : -20;

            const update = (key: keyof PointsState) => {
                state[key] = Math.max(0, state[key] + delta)
            };

            switch (category) {
                case "film_and_tv":
                    update("movies");
                    break;
                case "sport_and_leisure":
                    update("sports");
                    break;
                case "science":
                    update("science");
                    break;
                case "general_knowledge":
                    update("general");
                    break;
            }
        }
    }
})

export const { updatePoints } = pointsSlice.actions
export default pointsSlice.reducer