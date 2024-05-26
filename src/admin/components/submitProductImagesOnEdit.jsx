import React, { useRef, useState } from 'react'
import './subnitImage.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAboutPage } from '../features/about/aboutSlice';
import { useLocation } from 'react-router-dom';
import DisplayImageContainer from './displayImagesContainer'
import './submitProductImages.css'
import { deleteColoredImage, deleteWhiteBGImage, deleteProductParamsImage, setProductImageColored, setProductImagesWhiteBG, setProductImageInterior, setProductParamsImage, setProductMainImage, deleteMainImage, deleteDocuments, deleteInteriorImage, setProductDocuments } from '../features/product/product.Slice';
import pdfImage from '../assets/pdf.png'

export default function submitProductImages({
    setFDataDocuments,
    setDeleteImageFromServerArray,
    deleteFormDataFile,
    setFDataMainImgae,
    setFDataInteriorImgae,
    setFDataWhiteBGImgae,
    setFDataColoredImgae,
    setFDataParametersImage,
    required }) {

    const MAINSUFFIX = 'mainImage'
    const INETRIORSUFFIX = 'interiorImage'
    const WHITESUFFIX = 'whiteImage'
    const COLOREDSUFFIX = 'coloredImage'
    const allProducts = useSelector(state => state.productSlice.allProducts)
    const product = useSelector(state => state.productSlice)
    const dispatch = useDispatch()

    async function addImages(e, stateOfImages, forFormDataArray) {
        e.preventDefault();

        Object.keys(e.target.files,).forEach(i => {
            const file = e.target.files[i]
            const uniqueString = Date.now()
            const formDataFile = new File([file], uniqueString + file.name)
            forFormDataArray(prev => [...prev, formDataFile])
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                let blob = e.currentTarget.result
                if (blob.includes('pdf;base64')) blob = pdfImage
                dispatch(stateOfImages({ blob, name: uniqueString + file.name }))
            }
        })
    }

    return (
        <div className='product-upload-image-form'>
            <div className="upload-image">
                <label>Главное изображение</label>
                <div className="row-sub-container">
                    <DisplayImageContainer removeDeleteButton={true} allProducts={allProducts} setDeleteImageFromServerArray={setDeleteImageFromServerArray} deleteFormDataFile={deleteFormDataFile} deleteImage={deleteMainImage} images={product.productMainImage} />
                    <div className="input-file-row">
                        <label className="input-file">
                            <input id={'productMainImage'} className='add-images' type="file" accept=".jpg" onChange={(e) => addImages(e, setProductMainImage, setFDataMainImgae, MAINSUFFIX)} required={required} />
                            <span>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="upload-image">
                <label>Изображение продукта на белом фоне</label>
                <div className="row-sub-container">
                    <DisplayImageContainer removeDeleteButton={false} allProducts={allProducts} setDeleteImageFromServerArray={setDeleteImageFromServerArray} deleteFormDataFile={deleteFormDataFile} deleteImage={deleteWhiteBGImage} images={product.productImagesWhiteBG} />
                    <div className="input-file-row">
                        <label className="input-file">
                            <input className='add-images' type="file" accept=".jpg" onChange={(e) => { addImages(e, setProductImagesWhiteBG, setFDataWhiteBGImgae, WHITESUFFIX) }} multiple required={required} />
                            <span>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="upload-image">
                <label>Изображение продукта в интерьере</label>
                <div className="row-sub-container">
                    <DisplayImageContainer removeDeleteButton={false} allProducts={allProducts} setDeleteImageFromServerArray={setDeleteImageFromServerArray} deleteFormDataFile={deleteFormDataFile} deleteImage={deleteInteriorImage} images={product.productImageInterior} />
                    <div className="input-file-row">
                        <label className="input-file">
                            <input className='add-images' type="file" accept=".jpg" id='input-file' onChange={(e) => { addImages(e, setProductImageInterior, setFDataInteriorImgae, INETRIORSUFFIX) }} multiple required={required} />
                            <span>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="upload-image">
                <label>Изображение продукта в цвете</label>
                <div className="row-sub-container">
                    <DisplayImageContainer removeDeleteButton={false} allProducts={allProducts} setDeleteImageFromServerArray={setDeleteImageFromServerArray} deleteFormDataFile={deleteFormDataFile} deleteImage={deleteColoredImage} images={product.productImageColored} />
                    <div className="input-file-row">
                        <label className="input-file">
                            <input className='add-images' type="file" accept=".jpg" id='about-image' onChange={(e) => { addImages(e, setProductImageColored, setFDataColoredImgae, COLOREDSUFFIX) }} multiple required={required} />
                            <span>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="upload-image">
                <label>Изображение продукта для Характеристик</label>
                <div className="row-sub-container">
                    <DisplayImageContainer removeDeleteButton={true} allProducts={allProducts} setDeleteImageFromServerArray={setDeleteImageFromServerArray} deleteFormDataFile={deleteFormDataFile} deleteImage={deleteProductParamsImage} images={product.productParamsImage} />
                    <div className="input-file-row">
                        <label className="input-file">
                            <input className='add-images' type="file" accept=".jpg" id='about-image' onChange={(e) => { addImages(e, setProductParamsImage, setFDataParametersImage, 'ProductparamsImage') }} required={required} />
                            <span>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="upload-image">
                <label>Документы</label>
                <div className="row-sub-container">
                    <DisplayImageContainer removeDeleteButton={false} allProducts={allProducts} setDeleteImageFromServerArray={setDeleteImageFromServerArray} deleteFormDataFile={deleteFormDataFile} deleteImage={deleteDocuments} images={product.productDocuments} />
                    <div className="input-file-row">
                        <label className="input-file">
                            <input className='add-images' type="file" accept=".pdf" id='about-image' onChange={(e) => { addImages(e, setProductDocuments, setFDataDocuments) }} multiple required={required} />
                            <span>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
