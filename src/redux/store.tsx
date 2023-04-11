import { configureStore } from "@reduxjs/toolkit";
import readReducer from "./features/readSlice";

export const store = configureStore({
  reducer: {readReducer},
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
