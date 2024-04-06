import {configureStore} from '@reduxjs/toolkit'
import categoriesReducer  from '../features/categories/categoriesSlice'
import pathReducer from '../features/categories/pathSlice'
import iconReducer from '../features/iconSlice'
export default configureStore({
    reducer:{
        path:pathReducer,
        categories:categoriesReducer,
        icons:iconReducer
    }
})