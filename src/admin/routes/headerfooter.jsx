import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addHeaderFooterData, getHeaderFooterData, setHeaderFooterImage, setHeaderFooterTextColor, setMediaColoe } from '../features/headerfooter/headerfooter'
import UploadFiles from '../components/uploadedFiles'


export default function headerfooter() {
    const headerFooter = useSelector(state => state.headerfooter)
    const imageForServer = useRef("")
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.headerfooter.isLoading)
    const mediaColor = useSelector(state => state.headerfooter.mediaColor)


    useEffect(() => {
        dispatch(getHeaderFooterData()).then(data => console.log(data))
    }, [])


    console.log(mediaColor)
    async function addImages(e, stateOfImages, forFormDataArray) {
        e.preventDefault();
        Object.keys(e.target.files,).forEach(i => {
            const file = e.target.files[i]
            forFormDataArray.current = new File([file], file.name)
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                dispatch(stateOfImages(e.currentTarget.result))
            }
        })
    }

    const submitHeaderFooter = (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(imageForServer.current)
        formData.append('headerFooterImage', imageForServer.current)
        formData.append('mediaColor', mediaColor)
        formData.append('headerFooterTextColor', JSON.stringify(headerFooter.headerFooterTextColor))    
        console.log(...formData)        
        dispatch(addHeaderFooterData(formData)).then(data => console.log(data))
    }


    return (
        <>
        <form onSubmit={submitHeaderFooter}>
            <div className="row">
                <label>Изображение в меню и футере</label>
                <div className="image-container" >
                    <div className="image-container-form">
                        {headerFooter.headerFooterImage &&  <img className='image-item' src={headerFooter.headerFooterImage.includes('data:image/') ? headerFooter.headerFooterImage : `https://fratelli.kz/uploads/${headerFooter.headerFooterImage}`} alt="" width={100} />}
                    </div>
                </div>
                <div className="input-file-row">
                    <label className="input-file">
                        <input className='add-images' type="file" accept=".jpg" id='about-image' onChange={(e) => addImages(e, setHeaderFooterImage, imageForServer)} multiple={false} />
                        <span>Выберите файл</span>
                    </label>
                </div>
            </div>
            <div className="row">
                <label htmlFor="">Цвет текста в меню и футере</label>
                <input type="color" value={headerFooter.headerFooterTextColor} onChange={(e) => dispatch(setHeaderFooterTextColor(e.target.value))} />
            </div>
            <div className="row">
                <label htmlFor="">Цвет картинок в футере (на медиа)</label>
                <div>
                    <label htmlFor="black" style={{marginRight: '5px'}}>черный</label>
                    <input type="radio" style={{marginRight: '20px'}} id="black" name='media-color' value="black" checked={mediaColor == "black"} onChange={(e) => dispatch(setMediaColoe(e.target.value))}/>
                    <label htmlFor="white" style={{marginRight: '5px'}}>белый</label>
                    <input type="radio" id="white" name='media-color' value="white" checked={mediaColor == "white"} onChange={(e) => dispatch(setMediaColoe(e.target.value))}/>
                </div>
            </div>
            <button className='admin-save-btn'>Отправить</button>
        </form>
        <UploadFiles isLoading={isLoading} />
        </>
    )
}
