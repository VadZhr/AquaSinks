import { createSlice } from "@reduxjs/toolkit";

export const pathSlice = createSlice({
    name:'path',
    initialState:{
        pathForImagesPC:'',
        pathForImagesGIT:'/Fratelli'
    }
})

export default pathSlice.reducer;