import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AdminService from "../../service/adminService";

const initialState = {
    isLoading: false,
    headerFooterTextColor: "#ffffff",
    headerFooterImage: ""
}

export const getHeaderFooterData= createAsyncThunk('headerfooter/getHeaderFooterData', async()=>{
    const response = await AdminService.getHeaderFooterData()
    console.log(response, 'response')
    return response.data
})
export const addHeaderFooterData = createAsyncThunk('headerfooter/addHeaderFooterData', async(payload, thunkAPI)=>{
    const response = await AdminService.addHeaderFooterData(payload)
    return response.data
})




const headerFooter = createSlice({
    name: 'about',
    initialState,
    reducers: {
        setHeaderFooterTextColor: (state, action) => {
            state.headerFooterTextColor = action.payload
        },
        setHeaderFooterImage: (state, action) => {
            state.headerFooterImage = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getHeaderFooterData.fulfilled, (state, action) => {
            state.isLoading = false
            state.headerFooterTextColor = action.payload.headerFooterTextColor ?? '#ffffff'      
            state.headerFooterImage = action.payload.headerFooterImage ?? ""

        }) 
        builder.addCase(getHeaderFooterData.pending, (state, action) => {
            state.isLoading = true  
        }) 
        builder.addCase(getHeaderFooterData.rejected, (state, action) => {
            state.aboutError = action.payload
            state.isLoading = false  
        }) 

        builder.addCase(addHeaderFooterData.fulfilled, (state, action) => {
            state.isLoading = false
            console.log('Отправлено')
        }) 
        builder.addCase(addHeaderFooterData.pending, (state, action) => {
            state.isLoading = true  
        }) 
        builder.addCase(addHeaderFooterData.rejected, (state, action) => {
            state.aboutError = action.payload
            state.isLoading = true  
        }) 
    }
})

export default headerFooter.reducer

export const {setHeaderFooterTextColor, setHeaderFooterImage} = headerFooter.actions