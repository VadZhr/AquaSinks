import { createSlice } from "@reduxjs/toolkit";

export const pathSlice = createSlice({
    name:'path',
    initialState:{
        pathForImagesPC:'/',
        pathForImagesGIT:'/'
    }
})

export default pathSlice.reducer;

