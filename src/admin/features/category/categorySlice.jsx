import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AdminService from "../../service/adminService";

const initialState = {
    isLoading: false,
    categoryPath: '',
    categoryImagePath: '',
    categoryName: '',
    categoryError: '',
    categoryBlob: '',
    categoryId: '',
    allCategories: []
}


export const addCategory = createAsyncThunk('category/addCategory', async(payload, thunkAPI)=>{
    const response = await AdminService.addCatrgory(payload)
    
    console.log(response)
    return response.data
})

export const getCategoryPage = createAsyncThunk('category/getCategoryPage', async()=>{
    const response = await AdminService.getAllCategories()
    return response.data
})
export const deleteCategory = createAsyncThunk('category/deleteCategory', async(payload)=>{
    const response = await AdminService.deleteCategory(payload)
    return response.data
})
export const editCategory = createAsyncThunk('category/editcategory', async(payload)=>{
    const response = await AdminService.editCategory(payload)
    return response.data
})





const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategoryName: (state, action) => {
            state.categoryName = action.payload
        },
        setSingleCategory: (state, action) => {
            state.categoryPath = action.payload.categoryPath
            state.categoryImagePath = action.payload.categoryImagePath
            state.categoryName = action.payload.categoryName
            state.categoryBlob = action.payload.blob
            state.categoryId = action.payload.id
        },
        setEmpty: (state) => {
            state.isLoading = false
            state.categoryPath = ''
            state.categoryImagePath = ''
            state.categoryName = ''
            state.categoryError = ''
            state.categoryBlob = ''
            state.categoryId = ''
            state.allCategories = []
        }
      
    },
    extraReducers: (builder) => {
        builder.addCase(getCategoryPage.fulfilled, (state, action) => {
            state.isLoading = false           
            state.allCategories = action.payload ?? []
        }) 
        builder.addCase(getCategoryPage.pending, (state, action) => {
            state.isLoading = true
        }) 
        builder.addCase(getCategoryPage.rejected, (state, action) => {
            state.isLoading = false           
        }) 
   

        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.isLoading = false
        }) 
        builder.addCase(addCategory.pending, (state, action) => {
            state.isLoading = true
        }) 
        builder.addCase(addCategory.rejected, (state, action) => {
            state.isLoading = false
            state.categoryError = action.payload
        }) 


        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.isLoading = false
        }) 
        builder.addCase(deleteCategory.pending, (state, action) => {
            state.isLoading = true
        }) 
        builder.addCase(deleteCategory.rejected, (state, action) => {
            state.isLoading = false
            state.categoryError = action.payload
        }) 

        builder.addCase(editCategory.fulfilled, (state, action) => {
            state.isLoading = false
        }) 
        builder.addCase(editCategory.pending, (state, action) => {
            state.isLoading = true
        }) 
        builder.addCase(editCategory.rejected, (state, action) => {
            state.isLoading = false
            state.categoryError = action.payload
        }) 
    }
})

export default categorySlice.reducer

export const {setCategoryName, setSingleCategory, setEmpty} = categorySlice.actions