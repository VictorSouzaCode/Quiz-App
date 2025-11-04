// exports all actions/reducers for store setup
import questionReducer from "./slices/questionSlice";
import answerReducer from "./slices/answerSlice";
import pointsReducer from "./slices/pointSlice";
import timerReducer from "./slices/timerSlice";
import pathReducer from "./slices/pathSlice";

export const quizReducers = {
    question: questionReducer,
    answer: answerReducer,
    points: pointsReducer,
    timer: timerReducer,
    path: pathReducer,
};

export * from "./api/fetchQuestion";
export * from "./slices/answerSlice";
export * from "./slices/pointSlice";
export * from "./slices/timerSlice";
export * from "./slices/pathSlice";