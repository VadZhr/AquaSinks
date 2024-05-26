import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from "../../service/authService";
import $api, { API_URL } from "../../api/axiosApi";

const initialState = {
    user: {},
    isAuth: false,
    isLoading: false,
    errorMessage: "",
    aboutLoading: false,
    aboutPageData: [],
    clickedToLog: false
}


export const login = createAsyncThunk('auth/login', async(login, thunkApi) => {
    // const response = await AuthService.login(login.email, login.password)
    //     return response.data  
    try {
        const response = await AuthService.login(login.email, login.password)
        return response.data      
    } catch (error) {
        console.log(error, 'error')
        return thunkApi.rejectWithValue(error.response.data.message)
    }

})

export const registration = createAsyncThunk('auth/registration', async(login, thunkApi) => {
    try {
        const response = await AuthService.registration(login.email, login.password)
        return response.data      
    } catch (error) {
        console.log(error, 'error')
        return thunkApi.rejectWithValue(error.response.data.message)
    }
})



export const checkAuth = createAsyncThunk('auth/checkAuth', async()=>{
    const response = await $api.get(`/refresh`)
    return response.data
})

export const logout = createAsyncThunk('auth/logout', async()=>{
    const response = await AuthService.logout()
    return response.data
})



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setClicked: (state, action) => {
            state.clickedToLog = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isAuth = true
            console.log(action, 'action')
            state.user = action.payload.user        
            state.clickedToLog = false    
        }) 
        builder.addCase(login.pending, (state, action) => {
            state.isAuth = false
            state.errorMessage = ''
        }) 
        builder.addCase(login.rejected, (state, action) => {
            state.isAuth = false
            console.log(action, 'errorrmaeas')
            state.errorMessage = action.payload
            state.clickedToLog = false    

        }) 


        builder.addCase(registration.fulfilled, (state, action) => {
            state.isAuth = true
            state.user = action.payload.user        
        }) 
        builder.addCase(registration.pending, (state, action) => {
            state.isAuth = false
            state.errorMessage = ''
        }) 
        builder.addCase(registration.rejected, (state, action) => {
            state.isAuth = false
            state.errorMessage = action.payload

        }) 
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuth = true
            localStorage.setItem('token', action.payload.accessToken)
            
            // ПРИ ДЕПЛОЕ УДАЛИТЬ РЕФРЕШ
            localStorage.setItem('refreshToken', action.payload.refreshToken)
    
            state.user = (action.payload.user)
        })
        builder.addCase(checkAuth.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(checkAuth.rejected, (state, action)=>{
            state.errorMessage = action.payload
            state.isAuth = false
            state.isLoading = false
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            localStorage.removeItem('token')
            state.isAuth = false
            state.user = {}
        })
        builder.addCase(logout.rejected, (state, action) => {
            state.errorMessage = action.payload
        })
    }
})

export default authSlice.reducer

export const {setClicked} = authSlice.actions

