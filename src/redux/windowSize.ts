import { createSlice } from "@reduxjs/toolkit";



export const windowSizeSlice = createSlice({
  name: 'windowSize',
  initialState: 1,
  reducers: {
    windowSize: (state, action) => {
      return  action.payload;
    
    }
  }
})

export const {windowSize} = windowSizeSlice.actions
export default windowSizeSlice.reducer