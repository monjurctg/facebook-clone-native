import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    activeTabNow: "home"
};


export const homeSlice = createSlice({
    name: "home", initialState,
    reducers: {
        getActiveTab: (state, { payload }) => {
            state.activeTabNow = payload;
        },
    }
})


export const { getActiveTab } = homeSlice.actions;
export default homeSlice.reducer;