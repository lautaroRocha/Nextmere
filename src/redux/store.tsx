import { configureStore } from "@reduxjs/toolkit";
import readReducer from "./features/readSlice";
import searchReducer from "./features/searchSlice";

export const store = configureStore({
  reducer: {readReducer, searchReducer},
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
