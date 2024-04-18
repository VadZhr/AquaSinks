import { createSlice } from "@reduxjs/toolkit";

export const iconsSlice=createSlice({
    name:'icons',
    initialState:{
       iconsPath: [{
            path:"/assets/icons/icons8-facebook-48.png",
            href:'https://www.instagram.com/tsukishima_2/'
        },
        {
            path:"/assets/icons/icons8-instagram-48.png",
            href:'https://www.instagram.com/tsukishima_2/'
        },
        {
            path:"/assets/icons/icons8-telegram-app-48.png",
            href:'https://t.me/tsukishima_228'
        },
        {
            path:"/assets/icons/icons8-whatsapp-48.png",
            href:'https://wa.me/77478024847'
        },
        {
            path:"/assets/icons/icons8-youtube-48.png"
        }
    ],
    whiteIcons:[
    {
        path:"/assets/white-icons/icons8-instagram-48.png",
        href:'https://www.instagram.com/tsukishima_2/',
        name:'Instagram'
    },
    {
        path:"/assets/white-icons/icons8-telegram-app-48.png",
        href:'https://t.me/tsukishima_228',
        name:'Telegram'
    },
    {
        path:"/assets/white-icons/icons8-whatsapp-48.png",
        href:'https://wa.me/77478024847',
        name:'Whatsapp'
    },
    {
        path:"/assets/white-icons/icons8-youtube-48.png",
        href:'https://www.instagram.com/tsukishima_2/',
        name:'Youtube'
    },]
}
})

export default iconsSlice.reducer