import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0, showCounter: true };

//creates a slice of whole state, so we can only update that part
//We don't need to worry about mutation as toolkit takes care of it with immur library
//Lets keep the state and reducers of counter separately
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; //we can use mutation, toolkit takes care of it
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
//Exports reducer, NOTE reducer not reducers
export default counterSlice.reducer;