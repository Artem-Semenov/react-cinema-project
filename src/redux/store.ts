import { configureStore } from "@reduxjs/toolkit";
import windowReducer from './windowSize'

export const store = configureStore({
  reducer: {
    windowSize: windowReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
