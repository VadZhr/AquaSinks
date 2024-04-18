import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
    name:'contacts',
    initialState:{
        numbers:[`+77009369999`,`+77000799998`,`+77007737000`],
        linksToSocialMedia:[],
        emails:['info@salini-srl.com'],
        address:'Офис: г. Караганда, улица Лободы 31/3, офис 307'
    }
})

export default contactsSlice.reducer;