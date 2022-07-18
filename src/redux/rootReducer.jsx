import { combineReducers } from "@reduxjs/toolkit";
import HomeSlice from "./slices/HomeSlice";

export const combineReducer = combineReducers({
    // shopValue: ShopSlices,
    homeValue: HomeSlice

});