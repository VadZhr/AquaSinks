import React, { useEffect, useState } from 'react'
import DisplayImagesContainer from '../components/displayImagesContainer'
import SubmitImages from '../components/submitImages'
import '../components/editSingleProduct.css'
import SubmitProductImages from '../components/submitProductImages'
import { addProducts } from '../features/product/product.Slice'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryPage } from '../features/category/categorySlice'
import UploadedFiles from '../components/uploadedFiles'


export default function addSingleProduct() {
    const dispatch = useDispatch()
    const [path, setPath] = useState([])
    const [categoryNameId, setCategoryNameId] = useState([])
    const isLoading = useSelector(state => state.productSlice.isLoading)

    useEffect(() => {
        dispatch(getCategoryPage()).then(data => setPath(data.payload))
    }, [])

    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productMainImage, setProductMainImage] = useState([])
    const [productImageWhiteBG, setProductImageWhiteBG] = useState([])
    const [productImageInterior, setProductImageInterior] = useState([])
    const [productImageColored, setProductImageColored] = useState([])


    const [productPropertiesImage, setProductPropertiesImage] = useState('')
    const [productType, setProductType] = useState('')
    const [productLength, setProductLength] = useState('')
    const [productWidth, setProductWidth] = useState('')
    const [productWeight, setProductWeight] = useState('')
    const [productHeight, setProductHeight] = useState('')
    const [productColor, setProductColor] = useState('')
    const [productCoating, setProductCoating] = useState('')

    const [productRealPrice, setProductActualPrice] = useState('')
    const [productDiscountPrice, setProductDiscountPrice] = useState('')

    const [productDocuments, setProductDocuments] = useState([])
    const [productDocumentsToDisplay, setProductDocumentsToDisplay] = useState([])


    async function submitImage(e) {
        e.preventDefault();
        const formData = new FormData();
        [...productMainImage].map(el => formData.append('mainImage', el));
        [...productImageWhiteBG].map(el => formData.append('whiteBG', el));
        [...productImageInterior].map(el => formData.append('interior', el));
        [...productImageColored].map(el => formData.append('colored', el));
        [...productPropertiesImage].map(el => formData.append('productParamsImage', el));
        [...productDocuments].map(el => formData.append('files', el));

        formData.append('productData', JSON.stringify(
            {
                productName,
                productDescription,
                productParams: {
                    productType,
                    productLength,
                    productWidth,
                    productWeight,
                    productHeight,
                    productColor,
                    productCoating,
                },
                productRealPrice,
                productDiscountPrice,
                categoryNameId
            }))
        console.log(...formData)
        dispatch(addProducts(formData)).then(data => { console.log(data) })
    }

    return (
        <>
        <form className="products-collection" onSubmit={submitImage}>
            <div className="row">
                <label htmlFor="product-name">Название продукта</label>
                <input type="text" id='product-name' value={productName} onChange={(e) => setProductName(e.target.value)} required/>
            </div>
            <div className="row">
                <label htmlFor="productDescription">Описание продукта</label>
                <textarea name="" id="productDescription" cols="30" rows="10" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required></textarea>
            </div>
            <div className="product-images">
                <SubmitProductImages productPropertiesImage={productPropertiesImage} setProductPropertiesImage={setProductPropertiesImage} productDocuments={productDocuments} productDocumentsToDisplay={productDocumentsToDisplay} setProductDocumentsToDisplay={setProductDocumentsToDisplay} setProductDocuments={setProductDocuments} required={true} productMainImage={productMainImage} setProductMainImage={setProductMainImage} productImageWhiteBG={productImageWhiteBG} setProductImageWhiteBG={setProductImageWhiteBG} productImageInterior={productImageInterior} setProductImageInterior={setProductImageInterior} productImageColored={productImageColored} setProductImageColored={setProductImageColored} />
            </div>
            <div className="row">
                <label>Характеристики</label>
                <div className="row product-charachteristics">
                    <input type="text" onChange={(e) => setProductType(e.target.value)} placeholder='Тип' required/>
                    <input type="text" onChange={(e) => setProductLength(e.target.value)} placeholder='Длина' required/>
                    <input type="text" onChange={(e) => setProductWidth(e.target.value)} placeholder='Ширина' required/>
                    <input type="text" onChange={(e) => setProductWeight(e.target.value)} placeholder='Вес' required/>
                    <input type="text" onChange={(e) => setProductHeight(e.target.value)} placeholder='Высота' required/>
                    <input type="text" onChange={(e) => setProductColor(e.target.value)} placeholder='Цвет' required/>
                    <input type="text" onChange={(e) => setProductCoating(e.target.value)} placeholder='Покрытие' required/>
                </div>
            </div>
            <div className="row">
                <label htmlFor="categoryName">Категория</label>
                <select name="" id="categoryName" onChange={(e) => setCategoryNameId(e.target.value)} required>
                    <option selected disabled hidden>Выберите Категорию</option>
                    {path?.length && path.map(el => <option value={el.id} key={el.id}>{el.categoryName}</option>)}
                </select>
            </div>
            <div className="row">
                <label htmlFor="actualPrice">Фактическая цена</label>
                <input type="text" id='actualPrice' onChange={(e) => setProductActualPrice(e.target.value)} required/>
            </div>
            <div className="row">
                <label htmlFor="discountPrice">Цена по скидке</label>
                <input type="text" id='discountPrice' onChange={(e) => setProductDiscountPrice(e.target.value)} required/>
            </div>           

            <button className="admin-save-btn">добавить</button>
        </form>
        <UploadedFiles isLoading={isLoading}/>
        </>
    )
}
