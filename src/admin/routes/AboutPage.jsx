import React, { useEffect, useRef, useState } from 'react'
import AdminService from '../service/adminService'
import DisplayImagesContainer from '../components/displayImagesContainer'
import { getAboutPage, setAboutText, setAboutTitle, uploadImages, deleteImages, setAboutSliderText, sendAboutText, setImages, sendAboutData } from '../features/about/aboutSlice';
import { useDispatch, useSelector } from 'react-redux';
import './aboutPage.css'
import SubmitImages from '../components/submitImages';
import UploadFiles from '../components/uploadedFiles'


export default function AboutPage() {
  const [displayImages, setDisplayImages] = useState([]);
  const [fDataImages, setFDataImages] = useState([]);
  const [deleteAboutServerImages, setDeleteAboutServerImages] = useState([]);
  const aboutTitle = useSelector(state => state.aboutSlice.aboutTitle)
  const aboutText = useSelector(state => state.aboutSlice.aboutText)
  const aboutSliderText = useSelector(state => state.aboutSlice.aboutSliderText)
  const aboutImages = useSelector(state => state.aboutSlice.aboutImages)
  const serverImages = useSelector(state => state.aboutSlice.serverImages)
  const isLoading = useSelector(state => state.aboutSlice.isLoading)

//  console.log(fDataImages)
//  console.log(aboutImagePath)

  const [photoArray, setPhotoArray] = useState([])
  const dispatch = useDispatch()

  const [aboutPage, setAboutPage] = useState([])
  const sendButton = useRef(null)

  useEffect(() => {
    dispatch(getAboutPage())
  }, [])

  async function submitImage(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('aboutTitle', aboutTitle);
    formData.append('aboutText', aboutText);
    formData.append('aboutImagesToDelete', JSON.stringify(deleteAboutServerImages));
    formData.append('aboutSliderText', aboutSliderText)
    fDataImages.map(el => formData.append('image', el))
    // console.log(...formData)
    dispatch(sendAboutData(formData)).then(data => console.log(data))
  };


  function deleteFdataImages(imageName) {
    setFDataImages(prev => prev.filter(el => el.name != imageName))
  }

  return (
    <>
      <form onSubmit={submitImage}>
        <div className='about-rows'>
          <div className="row">
            <label htmlFor="about-title">Заголовок:</label>
            <input name="" id="about-title" value={aboutTitle} onChange={(e) => dispatch(setAboutTitle(e.target.value))} />
          </div>
          <div className="row">
            <label htmlFor="about-description">Текст "О нас"</label>
            <textarea name="" id="about-description" cols="40" rows="15" onChange={(e) => dispatch(setAboutText(e.target.value))} value={aboutText}></textarea>
          </div>
          <div className="row send-image">
            <label>Изображение</label>
            <div className="row-sub-container">
              <DisplayImagesContainer aboutServerImages={serverImages} setDeleteAboutServerImages={setDeleteAboutServerImages} deleteFDataImages={deleteFdataImages} deleteDisplayedImages={deleteImages} setSelectedImages={deleteAboutServerImages} images={aboutImages} multiple={true} />
              <SubmitImages multiple={true} submitTo={uploadImages} setImages={setImages} setFDataImages={setFDataImages} />
            </div>
          </div>
          <div className="row">
            <label htmlFor="">Текст для изображений</label>
            <textarea name="" cols="40" rows="5" onChange={(e) => dispatch(setAboutSliderText(e.target.value))} value={aboutSliderText}></textarea>
          </div>
          <button className='admin-save-btn' type="submit">Сохранить</button>
        </div>
      </form>
      <UploadFiles isLoading={isLoading} />
    </>
  );
}

// export default observer(AboutPage)
