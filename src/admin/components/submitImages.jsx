import React, { useRef } from 'react'
import './subnitImage.css'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function submitImages({ multiple, submitTo, dataName, data, setImages, setFDataImages }) {
    const location = useLocation()
    const sendButton = useRef(null)
    const dispatch = useDispatch()
    const SUFFIX = Date.now() + 'aboutImage'

    async function addImages(e, stateOfImages, forFormDataArray, suffix) {
        e.preventDefault();
        Object.keys(e.target.files,).forEach(i => {
            const file = e.target.files[i]
            const date = Date.now()
            const formDataFile = new File([file], date + file.name)
            forFormDataArray(prev => [...prev, formDataFile])
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                dispatch(stateOfImages({ blob: e.currentTarget.result, name: date + file.name }))
            }
        })
    }

    return (
        <div>
            <div className="input-file-row">
                <label className="input-file">
                    <input className='add-images' type="file" accept=".jpg" id='about-image' onChange={(e) => addImages(e, setImages, setFDataImages, SUFFIX)} multiple={multiple} />
                    <span>Выберите файл</span>
                </label>
            </div>
        </div>
    )
}
