import {configureStore} from '@reduxjs/toolkit';
import categoriesReducer  from '../features/categories/categoriesSlice';
import pathReducer from '../features/categories/pathSlice';
import iconReducer from '../features/iconSlice';
import contactsReducer from '../features/categories/contactsSlice';
import authSlice from '../admin/features/authorization/authSlice';
import aboutSlice from '../admin/features/about/aboutSlice';
import categorySlice from '../admin/features/category/categorySlice';
import productSlice from '../admin/features/product/product.Slice';
import footerSlice from '../admin/features/footer/footerSlice';


export default configureStore({
    reducer:{
        path:pathReducer,
        categories:categoriesReducer,
        icons:iconReducer,
        contacts:contactsReducer,
        authSlice,
        aboutSlice,
        categorySlice,
        productSlice,
        footerSlice
    }
})