import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import isLoading from "../../components/isLoading";
import AdminService from "../../service/adminService";

const initialState = {
    isLoading: false,
    aboutPageData: [],
    aboutImages: [],
    aboutText: '',
    aboutTitle: '',
    serverImages: [],
    aboutError: '',
    aboutImagePath: [],
}

export const getAboutPage = createAsyncThunk('about/getAboutPage', async()=>{
    const response = await AdminService.getAboutPage()
    console.log(response, 'response')
    return response.data
})
export const sendAboutText = createAsyncThunk('about/sendAboutText', async(payload, thunkAPI)=>{
    const response = await AdminService.sendAboutText(payload)
    return response.data
})
export const sendAboutData = createAsyncThunk('about/sendAboutData', async(payload, thunkAPI)=>{
    const response = await AdminService.sendAboutData(payload)
    return response.data
})
export const uploadImages = createAsyncThunk('about/uploadImages', async(payload, thunkApi)=>{
    const response = await AdminService.sendAboutPhoto(payload)
    return response.data
})
export const deleteImage = createAsyncThunk('about/deleteImage', async(payload, thunkApi)=>{
    console.log(payload)
    const response = await AdminService.deleteAboutImage(payload)
    return response.data
})



const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        setAboutText: (state, action) => {
            state.aboutText = action.payload
        },
        setAboutTitle: (state, action) => {
            state.aboutTitle = action.payload
        },
        setSelectedImages: (state, action) => {
            const index = state.aboutImages.findIndex(el => el.name == action.payload.name) 
            if(index >= 0){
                state.aboutImages[index].toDisplay = !state.aboutImages[index].toDisplay
                return
            }
        },
        setImages: (state, action)=> {
            state.aboutImages.push(action.payload)
        },
        deleteImages: (state, action) => {
            state.aboutImages = state.aboutImages.filter(el => el.name ? el.name != action.payload : el != action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAboutPage.fulfilled, (state, action) => {
            state.isLoading = false
            state.aboutImages = action.payload.aboutImagePath ?? []       
            state.aboutTitle = action.payload.aboutTitle ?? ""     
            state.aboutText = action.payload.aboutText ?? ""     
            state.serverImages = action.payload.aboutImagePath ?? [] 
        }) 
        builder.addCase(getAboutPage.pending, (state, action) => {
            state.isLoading = true  
        }) 
        builder.addCase(getAboutPage.rejected, (state, action) => {
            state.aboutError = action.payload
        }) 


        builder.addCase(sendAboutText.fulfilled, (state, action) => {
            state.isLoading = false
        }) 
        builder.addCase(sendAboutText.pending, (state, action) => {
            state.isLoading = true
        }) 
        builder.addCase(sendAboutText.rejected, (state, action) => {
            state.isLoading = true
            state.aboutError = action.payload
        }) 

        
        builder.addCase(uploadImages.fulfilled, (state, action) => {
            state.isLoading = false
        }) 
        builder.addCase(uploadImages.pending, (state, action) => {
            state.isLoading = true
        }) 
        builder.addCase(uploadImages.rejected, (state, action) => {
            state.isLoading = true
            state.aboutError = action.payload
        }) 


        builder.addCase(deleteImage.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(deleteImage.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(deleteImage.rejected, (state, action) => {
            state.isLoading = false
            state.aboutError = action.payload
        })


        builder.addCase(sendAboutData.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(sendAboutData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(sendAboutData.rejected, (state, action) => {
            state.isLoading = false
            state.aboutError = action.payload
        })
    }
})

export default aboutSlice.reducer

export const {setAboutText, setAboutTitle, setSelectedImages, setImages, deleteImages} = aboutSlice.actions