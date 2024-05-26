import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import AdminService from "../../service/adminService";


const initialState = {
    isLoading: 'false',
    aNumber: '',
    phoneOne: '',
    phoneTwo: '',
    phoneThree: '',
    phoneNumbers: [],
    email: '',
    address: '',
    instagramLink: '',
    ozonLink: '',
    kaspiLink: '',
    satuLink: '',
    wildBerriesLink: '',
    mainPhoneNumber: ''
}

export const getContacts = createAsyncThunk('footer/getContacts', async(payload, thunkAPI) => {
    const response = await AdminService.getContacts()
    return response.data
})
export const editContacts = createAsyncThunk('footer/editContacts', async(payload, thunkAPI) => {
    const response = await AdminService.editContacts(payload)
    return response.data
})

const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        setNumber: (state, action) => {
            state.aNumber = action.payload
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumbers.push(action.payload)
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setAddress: (state, action) => {
            state.address = action.payload
        },
        setInstagramLinki: (state, action) => {
            state.instagramLink = action.payload
        },
        setOzonLink: (state, action) => {
            state.ozonLink = action.payload
        },
        setKaspiLink: (state, action) => {
            state.kaspiLink = action.payload
        },
        setSatuLink: (state, action) => {
            state.satuLink = action.payload
        },
        setWildBerriesLink: (state, action) => {
            state.wildBerriesLink = action.payload
        },
        setMainPhoneNumber: (state, action) => {
            state.mainPhoneNumber = action.payload
        },
        setPhoneOne: (state, action) => {
            state.phoneOne = action.payload
        },
        setPhoneTwo: (state, action) => {
            state.phoneTwo = action.payload
        },
        setPhoneThree: (state, action) => {
            state.phoneThree = action.payload
        },
        deleteNumber: (state, action) => {
            state.phoneNumbers = state.phoneNumbers.filter(el => el.id != action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getContacts.fulfilled, (state, action) => {
            state.isLoading = false
            state.phoneNumbers = action.payload.phoneNumber ?? []
            state.email = action.payload.email ?? ""
            state.address = action.payload.address ?? ""
            state.instagramLink = action.payload.instagramLink ?? ""
            state.ozonLink = action.payload.ozonLink ?? ""
            state.kaspiLink = action.payload.kaspiLink ?? ""
            state.satuLink = action.payload.satuLink ?? ""
            state.wildBerriesLink = action.payload.wildBerriesLink ?? ""
            state.mainPhoneNumber = action.payload.mainPhoneNumber ?? ""
            state.phoneOne = action.payload.phoneOne  ?? "" 
            state.phoneTwo = action.payload.phoneTwo  ?? ""
            state.phoneThree = action.payload.phoneThree  ?? ""
        })
        builder.addCase(getContacts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getContacts.rejected, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(editContacts.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(editContacts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(editContacts.rejected, (state, action) => {
            state.isLoading = false
        })
    }
})

export default footerSlice.reducer

export const {setPhoneNumber,
    setEmail,
    setAddress,
    setInstagramLinki,
    setOzonLink,
    setKaspiLink,
    setSatuLink,
    setWildBerriesLink,
    setNumber,
    deleteNumber,
    setMainPhoneNumber,
    setPhoneOne,
    setPhoneTwo,
    setPhoneThree} = footerSlice.actions