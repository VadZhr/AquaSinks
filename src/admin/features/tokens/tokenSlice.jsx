import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    accessToken: ""
}






const tokenSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        getToken: (state, action) => {
            state.accessToken = action.payload           
            console.log(action.payload) 
        },
        removeToken: (state) => {
            state.accessToken = ""
        }
    },
}) 

export default tokenSlice.reducer
export const {getToken} = tokenSlice.actions
