import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import AdminService from "../../service/adminService";
import pdfImage from '../../assets/pdf.png'


const initialState = {
    isLoading: false,
    productName: '',
    productMainImage: [],
    productDescription: '',
    productImagesWhiteBG: [],
    productImageInterior: [],
    productImageColored: [],
    productParams: {},
    productParamsImage: [],
    productRealPrice: '',
    productDiscountPrice: '',
    productDocuments: [],
    productId: '',
    categoryNameId: '',
    errorMessage: '',
    allProducts: [],
    productsForFitlering: [],
    productColoredImageText: '',
}

// const getAllProducts = createAsyncThunk()
export const addProducts = createAsyncThunk('products/AddProducts', async(payload, thunkAPI) => {
    console.log(payload)
    const response = await AdminService.addProducts(payload)
    return response.data
})
export const getAllProducts = createAsyncThunk('products/getAllProducts', async() => {
    const response = await AdminService.getAllProducts()
    return response.data
})
export const deleteProduct = createAsyncThunk('products/deleteProduct', async(payload, thunkAPI) => {
    const response = await AdminService.deleteProduct(payload)
    return response.data
})
export const updateProduct = createAsyncThunk('about/updateProduct', async(payload, thunkApi)=>{
    console.log(payload)
    const response = await AdminService.updateProduct(payload)
    return response.data
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getSingleProduct: (state, action) => {
            const product = state.allProducts.find(el => el._id == action.payload)
            state.productName = product.productName ?? ''
            state.productMainImage = product.productMainImage ?? []
            state.productDescription = product.productDescription ?? ''
            state.productImagesWhiteBG = product.productImagesWhiteBG ?? []
            state.productImageInterior = product.productImageInterior ?? []
            state.productImageColored = product.productImageColored ?? []
            state.productParams = product.productParams ?? {}
            state.productParamsImage = product.productParamsImage ?? []
            state.productRealPrice = product.productRealPrice ?? ''
            state.productDiscountPrice = product.productDiscountPrice ?? ''
            state.productDocuments = product.productDocuments ?? []
            state.productId = product._id ?? ''
            state.categoryNameId = product.categoryNameId ?? ''
            state.productColoredImageText = product.coloredSliderText ?? ''
        },
        setProductName: (state, action) => {
            state.productName = action.payload
        },
        setProductDescription: (state, action) => {
            state.productDescription = action.payload
        },
        setProductMainImage: (state, action) => {
            state.productMainImage = [action.payload]
        },
        setProductImagesWhiteBG: (state, action) => {
            state.productImagesWhiteBG.push(action.payload)
        },
        setProductImageInterior: (state, action) => {
            state.productImageInterior.push(action.payload)
        },
        setProductImageColored: (state, action) => {
            state.productImageColored.push(action.payload)
        },
        setProductParams: (state, action) => {
            state.productParams = Object.assign(state.productParams, action.payload)
        },
        setProductRealPrice: (state, action) => {
            state.productRealPrice = action.payload
        },
        setProductDiscountPrice: (state, action) => {
            state.productDiscountPrice = action.payload
        },
        setProductDocuments: (state, action) => {
            state.productDocuments.push(action.payload)
        },
        setProductcategoryNameId: (state, action) => {
            state.categoryNameId = action.payload
        },
        setProductParamsImage: (state, action) => {
            state.productParamsImage = [action.payload]
        },
        setProductColoredImageText: (state, action) => {
            state.productColoredImageText = action.payload
        },

        deleteDocuments: (state, action) => {
            console.log(action.payload, 'action')
            state.productDocuments = state.productDocuments.filter(el => el.blob != action.payload)
        },
        deleteMainImage: (state, action) => {
            state.productMainImage = state.productMainImage.filter(el => el.name ? el.name != action.payload : el != action.payload)
        },
        deleteWhiteBGImage: (state, action) => {
            state.productImagesWhiteBG = state.productImagesWhiteBG.filter(el => el.name ? el.name != action.payload : el != action.payload)
        },
        deleteInteriorImage: (state, action) => {
            state.productImageInterior = state.productImageInterior.filter(el => el.name ? el.name != action.payload : el != action.payload)
        },
        deleteColoredImage: (state, action) => {
            state.productImageColored = state.productImageColored.filter(el => el.name ? el.name != action.payload : el != action.payload)
        },
        deleteProductParamsImage: (state, action) => {
            state.productParamsImage = state.productParamsImage.filter(el => el.name ? el.name != action.payload : el != action.payload)
        },
        productsFiltering: (state, action) => {
            let filteredProducts = []
            if(action.payload == ""){
                filteredProducts = state.productsForFitlering
            } else {
                filteredProducts = state.productsForFitlering.filter(el => el.categoryNameId == action.payload)
            }
            state.allProducts = filteredProducts
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addProducts.fulfilled, (state, action) => {
            console.log('загрузил')
            state.isLoading = false

        })
        builder.addCase(addProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(addProducts.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
            console.log(state.errorMessage)
        })


        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.allProducts = action.payload
            state.productsForFitlering = action.payload
        })
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.isLoading = true

        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
            console.log(state.errorMessage)
        })


        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(deleteProduct.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })

        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(updateProduct.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.isLoading = false
            state.aboutError = action.payload
        })
        
    }
})

export default productSlice.reducer

export const {
    getSingleProduct,
    setProductName,
    setProductMainImage,
    setProductDescription,
    setProductImagesWhiteBG,
    setProductImageInterior,
    setProductImageColored,
    setProductParams,
    setProductParamsImage,
    setProductRealPrice,
    setProductDiscountPrice,
    setProductDocuments,
    setProductcategoryNameId,
    deleteMainImage,
    deleteWhiteBGImage,
    deleteInteriorImage,
    deleteColoredImage,
    deleteDocuments,
    deleteProductParamsImage,
    productsFiltering,
    setProductColoredImageText} = productSlice.actions
