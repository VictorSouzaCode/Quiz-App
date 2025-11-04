// stores current path
import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type PathState = {
    currentPath: string
}

const initialState: PathState = {
    currentPath: "/"
}

const pathSlice = createSlice({
    name: "path",
    initialState,
    reducers: {
        setCurrentPath: (state, action: PayloadAction<string>) => {
            state.currentPath = action.payload;
        }
    }
})

export const { setCurrentPath } = pathSlice.actions;
export default pathSlice.reducer;