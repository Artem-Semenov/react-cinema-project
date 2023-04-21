import { configureStore } from "@reduxjs/toolkit";
import windowReducer from './windowSize'
import selectedSeatsReducer from './selectedSeats'

export const store = configureStore({
  reducer: {
    windowSize: windowReducer,
    addSelectedSeats: selectedSeatsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
