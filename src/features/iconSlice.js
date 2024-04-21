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
        path:"/assets/white-icons/ozon.png",
        href:'https://t.me/tsukishima_228',
        name:'Ozon'
    },
    {
        path:"/assets/white-icons/kaspi-logo2.png",
        href:'https://wa.me/77478024847',
        name:'Kaspi'
    },
    {
        path:"/assets/white-icons/satu.png",
        href:'https://www.instagram.com/tsukishima_2/',
        name:'Satu'
    }, {
        path:"/assets/white-icons/wildberries.svg",
        href:'https://www.instagram.com/tsukishima_2/',
        name:'WildBerries'
    },]
}
})

export default iconsSlice.reducer