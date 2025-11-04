// handles countdown
import { createSlice } from "@reduxjs/toolkit";

type TimerState = {
    remainingTime: number,
};

const initialState: TimerState = {
    remainingTime: 60,
}

const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        decrementTimer: (state) => {
            if(state.remainingTime > 0) {
                state.remainingTime -= 1;
            }
        },
        resetTimer: (state) => {
            state.remainingTime = 60;
        }
    }
})

export const { decrementTimer, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;