import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./slices/productsSlice";
export const rootReducer = combineReducers({
  products: ProductReducer,
});
