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
    setProductColoredImageText,
    setProductHidden
} from '../features/product/product.Slice'
import { getCategoryPage } from '../features/category/categorySlice'
import UploadedFiles from '../components/uploadedFiles'



export default function editSingleProduct() {
    const param = useParams()
    const allProducts = useSelector(state => state.productSlice.allProducts)
    const product = useSelector(state => state.productSlice)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const params = useParams()

    console.log(params)

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
            categoryNameId: product.categoryNameId,
            coloredSliderText: product.productColoredImageText,
            hidden: product.productHidden
        }))
        formData.append('imagesToDelete', JSON.stringify(deleteImageFromServerArray))
        // console.log(...formData)
        dispatch(updateProduct({ formData, id: product.productId })).then(data => console.log(data))
    }


    console.log(path, 'path')
    console.log(product.categoryNameId.toString(), 'categoryNameId')

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
                    <label htmlFor="">Текст для слайдера продуктов в цвете</label>
                    <textarea name="" id="" cols={40} onChange={(e) => dispatch(setProductColoredImageText(e.target.value))} value={product.productColoredImageText}></textarea>
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
                <div className="row" >
                    <label htmlFor="" style={!path.every(el => el.id != product.categoryNameId) ? {color: 'black'} : {color: 'red'}}  >Категория</label>
                    <select name="" id="" onChange={(e) => dispatch(setProductcategoryNameId(e.target.value))}>
                        <option selected={path.includes(product.categoryNameId) ? false : true}>Выберите Категорию</option>
                        {path?.length && path.map(el => <option value={el.id} selected={product.categoryNameId == el.id ? true : false} key={el.id}>{el.categoryName}</option>)}
                    </select>
                    {path.every(el => el.id != product.categoryNameId) && <span style={{color: 'red', marginLeft: '30px'}}>добавьте категорию</span>}
                </div>
                <div className="row">
                    <label htmlFor="">Цена по скидке</label>
                    <input type="text" id='category-name' value={product.productDiscountPrice} onChange={(e) => dispatch(setProductDiscountPrice(e.target.value))} />
                </div>
                {params.singleproduct && <div className="row">
                <label htmlFor="">Отображать</label>
                <div>
                    <label htmlFor="radio-display1" style={{marginRight: '5px'}}>да</label>
                    <input type="radio" id="radio-display1" name='display' style={{marginRight: '20px'}} checked={!product.productHidden} onClick={(e) => dispatch(setProductHidden(!e.target.checked))}/>
                    <label htmlFor="radio-display2" style={{marginRight: '5px'}}>нет</label>
                    <input type="radio" id="radio-display2" name='display' checked={product.productHidden} onClick={(e) => dispatch(setProductHidden(e.target.checked))}/>
                </div>
                </div>}
                <button className="admin-save-btn">Сохранить</button>
                <div className="row">
                </div>
            </form>
            <button className="admin-delete-btn" onClick={() => onDelete()}>Удалить</button>
            <UploadedFiles isLoading={product.isLoading} />
        </>
    )
}
