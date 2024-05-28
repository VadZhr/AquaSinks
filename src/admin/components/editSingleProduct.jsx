import React, { useEffect, useState } from 'react'
import './editSingleProduct.css'
import SubmitProductImagesOnEdit from './submitProductImagesOnEdit'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
    getAllProducts,
    getSingleProduct,
    setProductName,
    setProductDescription,
    setProductParams,
    setProductRealPrice,
    setProductDiscountPrice,
    setProductcategoryNameId,
    deleteProduct,
    updateProduct,
} from '../features/product/product.Slice'
import { getCategoryPage } from '../features/category/categorySlice'
import UploadedFiles from '../components/uploadedFiles'



export default function editSingleProduct() {
    const param = useParams()
    const allProducts = useSelector(state => state.productSlice.allProducts)
    const product = useSelector(state => state.productSlice)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    //ЛОКАЛЬНЫЕ ДАННЫЕ КОТОРЫЕ БУДУТ ЛЕТЕТЬ НА СЕРВРЕ В ФОРМАТЕ FORMDATA
    const [fDataMainImage, setFDataMainImgae] = useState([])
    const [fDataInteriorImage, setFDataInteriorImgae] = useState([])
    const [fDataWhiteBGImage, setFDataWhiteBGImgae] = useState([])
    const [fDataColoredImage, setFDataColoredImgae] = useState([])
    const [fDataParametersImage, setFDataParametersImage] = useState([])
    const [fDataDocuments, setFDataDocuments] = useState([])

    //ЗАПИСЬ ВСЕХ ИМЕН ФАЙЛОВ. ПО НИМ БУДЕТ ПРОИСХОДИТЬ УДАЛЕНИЕ ФАЙЛОВ С СЕРВЕРА
    const [deleteImageFromServerArray, setDeleteImageFromServerArray] = useState([])
    const [path, setPath] = useState([])


    useEffect(() => {
        dispatch(getCategoryPage()).then(data => setPath(data.payload))

        if (allProducts.length) {
            dispatch(getSingleProduct(param.singleproduct))
        } else {
            dispatch(getAllProducts()).then((data) => { dispatch(getSingleProduct(param.singleproduct)); console.log(data, 'DATA') })
        }
    }, [])


    const onDelete = (e) => {
        dispatch(deleteProduct(product.productId)).then((data) => { navigate('/admin/products'); console.log(data) })
    }

    function sendUpdatedProduct(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('mainImage', fDataMainImage[fDataMainImage.length - 1]);
        [...fDataWhiteBGImage].map(el => formData.append('whiteBG', el));
        [...fDataInteriorImage].map(el => formData.append('interior', el));
        [...fDataColoredImage].map(el => formData.append('colored', el));
        [...fDataDocuments].map(el => formData.append('files', el));
        formData.append('productParamsImage', fDataParametersImage[fDataParametersImage.length - 1]);
        formData.append('productData', JSON.stringify({
            productParams: { ...product.productParams },
            productDescription: product.productDescription,
            productName: product.productName,
            productRealPrice: product.productRealPrice,
            productDiscountPrice: product.productDiscountPrice,
            categoryNameId: product.categoryNameId
        }))
        formData.append('imagesToDelete', JSON.stringify(deleteImageFromServerArray))
        console.log(...formData)
        // dispatch(updateProduct({ formData, id: product.productId })).then(data => console.log(data))
    }

    function deleteFormDataFile(imageName) {
        if (fDataMainImage.find(el => el.name == imageName)) setFDataMainImgae(prev => prev.filter(el => el.name != imageName))
        if (fDataColoredImage.find(el => el.name == imageName)) setFDataColoredImgae(prev => prev.filter(el => el.name != imageName))
        if (fDataInteriorImage.find(el => el.name == imageName)) setFDataInteriorImgae(prev => prev.filter(el => el.name != imageName))
        if (fDataWhiteBGImage.find(el => el.name == imageName)) setFDataWhiteBGImgae(prev => prev.filter(el => el.name != imageName))
        if (fDataDocuments.find(el => el.name == imageName)) setFDataDocuments(prev => prev.filter(el => el.name != imageName))
        if (fDataParametersImage.find(el => el.name == imageName)) setFDataParametersImage(prev => prev.filter(el => el.name != imageName))
            
    }

    return (
        <>
            <form className="products-collection" onSubmit={sendUpdatedProduct}>
                <div className="row">
                    <label htmlFor="">Название продукта</label>
                    <input type="text" id='product-name' value={product.productName} onChange={(e) => dispatch(setProductName(e.target.value))} />
                </div>
                <div className="row">
                    <label htmlFor="">Описание продукта</label>
                    <textarea name="" id="" cols="30" rows="10" value={product.productDescription} onChange={(e) => dispatch(setProductDescription(e.target.value))}>{product.productDescription}</textarea>
                </div>
                <div className="product-images">
                    <SubmitProductImagesOnEdit
                        setFDataDocuments={setFDataDocuments}
                        setDeleteImageFromServerArray={setDeleteImageFromServerArray}
                        deleteFormDataFile={deleteFormDataFile}
                        setFDataMainImgae={setFDataMainImgae}
                        setFDataInteriorImgae={setFDataInteriorImgae}
                        setFDataWhiteBGImgae={setFDataWhiteBGImgae}
                        setFDataParametersImage={setFDataParametersImage}
                        setFDataColoredImgae={setFDataColoredImgae}
                        required={false}
                    />
                </div>
                <div className="row">
                    <label htmlFor="">Характеристики</label>
                    <div className="row product-charachteristics">
                        <input type="text" id='category-name' onChange={(e) => dispatch(setProductParams({ productType: e.target.value }))} value={product.productParams.productType ?? 'параметры'} placeholder='Тип' />
                        <input type="text" id='category-name' onChange={(e) => dispatch(setProductParams({ productLength: e.target.value }))} value={product.productParams.productLength ?? 'параметры'} placeholder='Длина' />
                        <input type="text" id='category-name' onChange={(e) => dispatch(setProductParams({ productWidth: e.target.value }))} value={product.productParams.productWidth ?? 'параметры'} placeholder='Ширина' />
                        <input type="text" id='category-name' onChange={(e) => dispatch(setProductParams({ productWeight: e.target.value }))} value={product.productParams.productWeight ?? 'параметры'} placeholder='Вес' />
                        <input type="text" id='category-name' onChange={(e) => dispatch(setProductParams({ productHeight: e.target.value }))} value={product.productParams.productHeight ?? 'параметры'} placeholder='Высота' />
                        <input type="text" id='category-name' onChange={(e) => dispatch(setProductParams({ productColor: e.target.value }))} value={product.productParams.productColor ?? 'параметры'} placeholder='Цвет' />
                        <input type="text" id='category-name' onChange={(e) => dispatch(setProductParams({ productCoating: e.target.value }))} value={product.productParams.productCoating ?? 'параметры'} placeholder='Покрытие' />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="">Фактическая цена</label>
                    <input type="text" id='category-name' value={product.productRealPrice} onChange={(e) => dispatch(setProductRealPrice(e.target.value))} />
                </div>
                <div className="row">
                    <label htmlFor="">Категория</label>
                    <select name="" id="" onChange={(e) => dispatch(setProductcategoryNameId(e.target.value))}>
                        <option disabled hidden>Выберите Категорию</option>
                        {path?.length && path.map(el => <option value={el.id} selected={product.categoryNameId == el.id ? true : false} key={el.id}>{el.categoryName}</option>)}
                    </select>
                </div>
                <div className="row">
                    <label htmlFor="">Цена по скидке</label>
                    <input type="text" id='category-name' value={product.productDiscountPrice} onChange={(e) => dispatch(setProductDiscountPrice(e.target.value))} />
                </div>
                <button className="admin-save-btn">Сохранить</button>
                <div className="row">
                </div>
            </form>
            <button className="admin-delete-btn" onClick={() => onDelete()}>Удалить</button>
            <UploadedFiles isLoading={product.isLoading} />
        </>
    )
}
