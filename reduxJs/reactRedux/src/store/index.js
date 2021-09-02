import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

import counterReducer from './counter';
import authReducer from './auth';



//Traditional way to create reducers using plain redux
//We need to change the whole state in
//Risk of mutation is there
//Redux toolkit simplifies the things
// const counterReducer = (state = initialCounterState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer); //without toolkit
// const store = createStore(counterSlice.reducers); //with toolkit
// const store = configureStore({
//     reducer: counterSlice.reducer       //alternate way
// });

const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer},
});

export default store;
