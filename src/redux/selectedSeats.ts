import { createSlice } from "@reduxjs/toolkit";

type SelectedSeats = {
  ["row"]?: number;
  ["seat"]?: number;
};

const initialSelectedSeats: SelectedSeats[] = [];

export const selectedSeatsSlice = createSlice({
  name: "selectedSeats",
  initialState: initialSelectedSeats,
  reducers: {
    addSelectedSeats: (state, action) => {
      let stateCopy = [...state];
      if (action.payload.length === 0) return [];
      let existingEl = state.find(
        (el) => el.row === action.payload.row && el.seat === action.payload.seat
      );
      let indexOfExistingEl;
      if (existingEl) {
        indexOfExistingEl = state.indexOf(existingEl);
        stateCopy.splice(indexOfExistingEl, 1);
        return stateCopy;
      }

      let result = [
        ...state,
        {
          row: action.payload.row,
          seat: action.payload.seat,
        },
      ];
      return result;
    },
  },
});

export const { addSelectedSeats } = selectedSeatsSlice.actions;
export default selectedSeatsSlice.reducer;
