import { createSlice } from "@reduxjs/toolkit";

//Initial state
const initialAuthState = {
    isAuthenticated: false
};

//Create slice
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;