import React, { useRef, useState } from 'react'
import './subnitImage.css'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DisplayImageContainer from './displayImagesContainer'
import './submitProductImages.css'
import pdfImage from '../assets/pdf.png'


export default function submitProductImages({ productPropertiesImage, setProductPropertiesImage, productDocuments, productDocumentsToDisplay, setProductDocumentsToDisplay, setProductDocuments, productMainImage, productImageWhiteBG, productImageInterior, productImageColored, setProductMainImage, setProductImageWhiteBG, setProductImageInterior, setProductImageColored, required }) {

    const location = useLocation()
    const [images, setImage] = useState([]);
    const [displayMainImages, setDisplayMainImages] = useState([]);
    const [displayWhiteImages, setDisplayWhiteImages] = useState([]);
    const [displayInteriorImages, setDisplayInteriorImages] = useState([]);
    const [displayColoredImages, setDisplayColoredImages] = useState([]);
    const [displayProductProperyImage, setDisplayProductProperyImage] = useState([]);
    const sendButton = useRef(null)
    const dispatch = useDispatch()

    const addProductImages = (e, stateAddImages, forFormDataArray) => {
        Object.keys(e.target.files,).forEach(i => {
            const file = e.target.files[i]
            const currentDate = Date.now()
            const formDataFile = new File([file], currentDate + file.name)
            forFormDataArray(prev=> [...prev, formDataFile])
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                let blob = e.currentTarget.result
                if(blob.includes('pdf;base64')) blob = pdfImage
                stateAddImages(prev => [...prev, {blob, name: currentDate + file.name }])
            }
        })
    }

    const addSingleProductImage = (e, stateAddImages, forFormDataArray) => {
        Object.keys(e.target.files,).forEach(i => {
            const file = e.target.files[i]
            const currentDate = Date.now()
            const formDataFile = new File([file], currentDate + file.name)
            forFormDataArray([formDataFile])
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                let blob = e.currentTarget.result
                if(blob.includes('pdf;base64')) blob = pdfImage
                stateAddImages([{blob, name: currentDate + file.name }])
            }
        })
    }

    function deleteFDataImages(imageName) {
        if(productMainImage.find(el => el.name == imageName)) setProductMainImage(prev => prev.filter(el => el.name != imageName))
        if(productImageColored.find(el => el.name == imageName)) setProductImageColored(prev => prev.filter(el => el.name != imageName))
        if(productImageInterior.find(el => el.name == imageName)) setProductImageInterior(prev => prev.filter(el => el.name != imageName))
        if(productImageWhiteBG.find(el => el.name == imageName)) setProductImageWhiteBG(prev => prev.filter(el => el.name != imageName))
        if(productDocuments.find(el => el.name == imageName)) setProductDocuments(prev => prev.filter(el => el.name != imageName))     
        if(productPropertiesImage.find(el => el.name == imageName)) setProductPropertiesImage(prev => prev.filter(el => el.name != imageName))     
    }

    return (
        <div className='product-upload-image-form'>
            <div className="upload-image">
                <label htmlFor="">Главное изображение</label>
                <div className="row-sub-container">
                    <DisplayImageContainer removeDeleteButton={true} deleteFDataImages={deleteFDataImages} images={displayMainImages} setImages={setDisplayMainImages} />
                    <div className="input-file-row">
                        <label className="input-file">
                            <input className='add-images' type="file" accept=".jpg" onChange={(e) => {  addSingleProductImage(e, setDisplayMainImages, setProductMainImage) }} required={required} />
                            <span>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="upload-image">
                <label htmlFor="">Изображение продукта на белом фоне</label>
                <div className="row-sub-container">
                    <DisplayImageContainer deleteFDataImages={deleteFDataImages} images={displayWhiteImages} setImages={setDisplayWhiteImages} />
                    <div className="input-file-row">
                        <label className="input-file">
                            <input className='add-images' type="file" accept=".jpg" onChange={(e) => { addProductImages(e, setDisplayWhiteImages, setProductImageWhiteBG) }} multiple required={required} />
                            <span>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="upload-image">
                <label htmlFor="">Изображение продукта в интерьере</label>
                <div className="row-sub-container">
                    <DisplayImageContainer deleteFDataImages={deleteFDataImages} images={displayInteriorImages} setImages={setDisplayInteriorImages} />
                    <div className="input-file-row">
                        <label className="input-file">
                            <input className='add-images' type="file" accept=".jpg" id='about-image' onChange={(e) => { addProductImages(e, setDisplayInteriorImages, setProductImageInterior) }} multiple required={required} />
                            <span>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="upload-image">
                <label htmlFor="">Изображение продукта в цвете</label>
                <div className="row-sub-container">
                    <DisplayImageContainer deleteFDataImages={deleteFDataImages} images={displayColoredImages} setImages={setDisplayColoredImages} />
                    <div className="input-file-row">
                        <label className="input-file">
                            <input className='add-images' type="file" accept=".jpg" id='about-image' onChange={(e) => { addProductImages(e, setDisplayColoredImages, setProductImageColored) }} multiple required={required} />
                            <span>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="upload-image">
                <label htmlFor="">Изображение продукта для Характеристик</label>
                <div className="row-sub-container">
                    <DisplayImageContainer removeDeleteButton={true} deleteFDataImages={deleteFDataImages} images={displayProductProperyImage} setImages={setDisplayProductProperyImage} />
                    <div className="input-file-row">
                        <label className="input-file">
                            <input className='add-images' type="file" accept=".jpg" id='about-image' onChange={(e) => { addSingleProductImage(e, setDisplayProductProperyImage, setProductPropertiesImage) }} required={required} />
                            <span>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="upload-image">
                <label htmlFor="">Документы</label>
                <div className="row-sub-container">
                    <DisplayImageContainer deleteFDataImages={deleteFDataImages} images={productDocumentsToDisplay} setImages={setProductDocumentsToDisplay} />
                    <div className="input-file-row">
                        <label className="input-file">
                            <input className='add-images' type="file" accept=".pdf" id='about-image' onChange={(e) => {addProductImages(e, setProductDocumentsToDisplay, setProductDocuments) }} multiple required={required} />
                            <span>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
