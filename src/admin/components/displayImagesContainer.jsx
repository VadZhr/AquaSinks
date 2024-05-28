import { useRef, useState } from 'react'
import './displayImagesContainer.css'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import pdfImage from '../assets/pdf.png'

export default function sendImageContainer({ setDeleteAboutServerImages, aboutServerImages, setImages, removeDeleteButton, allProducts, setDeleteImageFromServerArray, deleteDisplayedImages, deleteFormDataFile, deleteFDataImages, deleteImage, setSelectedImages, images }) {
    const dispatch = useDispatch()
    const location = useLocation()
    const imageContainer = useRef(null)
    const [open, setOpen] = useState(false)
    const params = useParams()
    const removeButton = removeDeleteButton ?? false


    //РАСКРЫВАЕТ ФОРМУ ОТОБРАЖЕНИЯ ИЗОБРАЖЕНИЙ ПО НАЖАТИЮ КНОПКИ "..."
    function openContainer(e) {
        if (location.pathname.includes('products')) {
            const rowContainer = document.querySelectorAll('.upload-image')
            rowContainer.forEach(el => {
                el.style.zIndex = 0
            })
            e.target.closest('.upload-image').style.zIndex = 1
        }

        setOpen(prev => !prev)

        if (open) {
            imageContainer.current.style.height = '120px'
            return
        }
        imageContainer.current.style.height = '300px'
    }

    async function deleteAboutImage(el) {
        const imageName = el.name ?? el

        if (setImages) {
            setImages(prev => prev.filter(el => el.name != imageName))
        }

        //ПЕРЕДАЁТ СПИСОК ФОТОГРАФИЙ ДЛЯ УДАЛЕНЯ ИЗ СЕРЕВЕРА ВО ВКЛАДКЕ ABOUT
        if (aboutServerImages) {
            aboutServerImages.forEach(el => { if (el == imageName) setDeleteAboutServerImages(prev => [...prev, imageName]) })
            dispatch(deleteDisplayedImages(imageName))
        }


        //ДЛЯ editSingleProduct
        //ПРОВЕРЯТ МАССИВЫ ФОТОГРАФИЙ С СЕРВЕРА, ЕСЛИ ИМЕНА УДАЛЯЕМОГО С СЕРВЕРОМ СХОЖИ, ТО ДОБАВЛЯЕМ
        //В МАССИВ ДЛЯ УДАЛЕНИЯ (ЗАПРОС НА СЕРВЕР В ВИДЕ МАССИВА НА УДАЛЕНИЕ)
        if (allProducts) {
            [allProducts.find(el => el._id == params.singleproduct).productMainImage].forEach(el => {
                if (el == imageName) setDeleteImageFromServerArray(prev => [...prev, imageName])
            })
            allProducts.find(el => el._id == params.singleproduct).productImagesWhiteBG.forEach(el => {
                if (el == imageName) setDeleteImageFromServerArray(prev => [...prev, imageName])
            })
            allProducts.find(el => el._id == params.singleproduct).productImageInterior.forEach(el => {
                if (el == imageName) setDeleteImageFromServerArray(prev => [...prev, imageName])
            })
            allProducts.find(el => el._id == params.singleproduct).productImageColored.forEach(el => {
                if (el == imageName) setDeleteImageFromServerArray(prev => [...prev, imageName])
            })
            allProducts.find(el => el._id == params.singleproduct).productDocuments.forEach(el => {
                if (el.blob == imageName.blob) setDeleteImageFromServerArray(prev => [...prev, imageName.blob])
            })
            allProducts.find(el => el._id == params.singleproduct).productParamsImage.forEach(el => {
                if (el == imageName) setDeleteImageFromServerArray(prev => [...prev, imageName])
            })
        }

        if (deleteDisplayedImages) deleteDisplayedImages(imageName)
        if (deleteFDataImages) deleteFDataImages(imageName)

        //УДАЛЯТЬ ЛОКАЛЬНЫЕ ИЗОБРАЖЕНИЯ (ДОБАВЛЕННЫЕ НА СТРАНИЦУ)
        //УДАЛЯЕТ ИЗОБРАЖЕНИЯ ИЗ МАССИВА КОТОРЫЕ БУДУТ ПЕРЕДОАВТЬСЯ НА СЕРВЕР
        if (deleteFormDataFile) deleteFormDataFile(imageName)

        // if(setDeleteAboutServerImages) setDeleteAboutServerImages(imageName)
        //УДАЛЯЕТ ОТОБРАЖАЕМЫЕ ИЗОБРАЖЕНИЯ НА АДМИНКЕ (ИЗОБРАЖЕНИЯ ДЛЯ ОТОБРАЖЕНИЯ, НЕ ПЕРЕДАЮТСЯ НА СЕРВЕР)
        //УДАЛЯЕТ ИЗОБРАЖЕНИЯ КОТОРЫЕ ДОБАВИЛИСЬ С СЕРВЕРА И ДОБАВИЛИСЬ АДМИНОМ (ИЗОБРАЖЕНИЯ ДЛЯ ОТОБРАЖЕНИЯ, НЕ ПЕРЕДАЮТСЯ НА СЕРВЕР)
        if (deleteImage) dispatch(deleteImage(imageName.blob ? imageName.blob : imageName))
    }

    const openItem = (el) => {
        
    }

    function imageItem(el, i) {
        // console.log(el, 'eellllll')
        return (<div key={i} className={el.toDisplay ? "image-item selected" : 'image-item'}>
            {/* <img src={`https://fratelli.kz/uploads/${el}`} alt="" draggable="false" width={100} /> */}
            {el?.blob?.includes('.pdf')  ?
            <img src={pdfImage} alt="" draggable="false" width={100} /> 
            : <img src={el.blob ? el.blob : `https://fratelli.kz/uploads/${el}`} alt="" onClick={(e) => openItem(el)} draggable="false" width={100} />
            }
                            
            {!removeButton && <span type='' className="image_close-btn" onClick={(e) => deleteAboutImage(el)}></span>}
        </div>)
    }

    return (
        <div className="image-container" >
            {!removeButton && <span className="image-container_open-btn" onClick={(e) => openContainer(e)}></span>}
            <div className="image-container-form" ref={imageContainer}>
                {images.map((el, i) => imageItem(el, i))}
            </div>
        </div>
    )
}

