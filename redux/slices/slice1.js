import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    auth: null,
    alan: null,
    count: null,
    userData: null
}
export const Slice1 = createSlice({
    name: 'global',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        signIn: (state, action) => {
            state.auth = action.payload
        },
        signOut: (state, action) => {
            state.auth = null;
        },
        handleAlan: (state, action) => {
            state.alan = action.payload;
        },
        handleCount: (state, action) => {
            state.count = action.payload;
        },
        handleUserData: (state, action) => {
            state.userData = action.payload;
        },
    },

})
export const { increment, decrement, incrementByAmount, signIn, signOut, handleAlan, handleCount, handleUserData } = Slice1.actions

export default Slice1.reducer