import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  name: "HELLO WORLD",
};

// const fetchData = createAsyncThunk('/ 

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
      state.name = action.payload.name;
      console.log(action);
    },
    decrement: (state,action) => {
      state.count -= 1; 
      state.name = action.payload.name;
    },
    reset: (state) => {
      state.count = 0;
      state.name = 'HELLO WORLD';
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
