import { homeSlice } from "../slices/HomeSlice";

const { actions: slice } = homeSlice;

export const setActiveTab = (name) => (dispatch) => {
    dispatch(slice.getActiveTab(name))


};