import { useEffect, useState } from 'react';
import './addNewCategory.css'
import { useNavigate, useLocation, useParams, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, editCategory, getCategoryPage, setCategoryName, setEmpty, setSingleCategory, setHidden } from '../features/category/categorySlice';
import loading from '../assets/loading.gif'
import UploadedFiles from './uploadedFiles';

export default function AddNewCategory({ addItem }) {
  const navigation = useNavigation()
  const location = useLocation()
  const params = useParams()
  const [image, setImage] = useState([]);
  const [photoChanged, setPhotoChanged] = useState(false)
  const [displayPhoto, setDisplayPhoto] = useState(null);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch()
  const category = useSelector(state => state.categorySlice)
  const navigate = useNavigate();

  useEffect(() => {
    if (params.path) {
      dispatch(getCategoryPage()).then(data => {
        const singleCategory = data.payload.find(el => el.categoryPath == params.path)
        dispatch(setSingleCategory(singleCategory))
        setImage(singleCategory.blob ? singleCategory.blob : singleCategory.categoryImagePath)
        setDisplayPhoto(singleCategory.blob ? singleCategory.blob : singleCategory.categoryImagePath)
      })
    } else {
      dispatch(setEmpty())
    }
  }, [])

  async function submitImage(e) {
    console.log(edit, 'МОЖНО ЛИ РЕДАКТИРОВАТЬ', photoChanged, 'ФОТО ИЗМЕНЕНО?')
    e.preventDefault();
    const formData = new FormData();

    if (edit) {
      if (photoChanged) {
        [...image].map(el => formData.append('image', el))
      }
      formData.append('categoryData', JSON.stringify({ changedImage: photoChanged, categoryName: category.categoryName, id: category.categoryId, hidden: category.hidden}))
      // console.log(...formData)
      dispatch(editCategory(formData)).then(data => { console.log(data) })
    } else {
      [...image].map(el => formData.append('image', el))
      formData.append('categoryData', JSON.stringify({ categoryName: category.categoryName, id: category.categoryId, hidden: category.hidden }))
      // console.log(...formData)
      dispatch(addCategory(formData)).then(data => { console.log(data) })
    }
    setEdit(false)
    setPhotoChanged(false)

  }

  const getPicture = (image) => {
    let fReader = new FileReader();
    fReader.readAsDataURL(image.files[0])
    fReader.onloadend = function (event) {
      setDisplayPhoto(event.target.result)
    }
  }

  const onInputChange = (e) => {
    setPhotoChanged(true)
    setImage(e.target.files);
    getPicture(e.target)
  }

  function onDeleteCategory() {
    dispatch(deleteCategory(category.categoryId)).then(() => navigate('/admin/categories'))
  }

  return (
    <>
      <form className="category-edit" onSubmit={submitImage}>

        <div className="row">
          <label htmlFor="category-name">Название категории</label>
          <input type="text" id='category-name' value={category.isLoading ? '....' : category.categoryName} onChange={(e) => dispatch(setCategoryName(e.target.value))} />
        </div>
        <div className="row">
          <label htmlFor="image">Изображение</label>
          <img src={category.isLoading ? loading : displayPhoto?.includes('data:image') ? displayPhoto : `https://fratelli.kz/uploads/${displayPhoto}`} alt="" width={150} height={150} style={{ objectFit: 'cover' }} />
          <div >
            <div className="input-file-row">
              <label className="input-file">
                <input className='add-images' type="file" accept=".jpg" id='about-image' onChange={onInputChange} />
                <span>Выберите файл</span>
              </label>
              {/* <span className='input-file-list'>{Object.values(image).map(el => el.name).join(" ") ?? 'Выберите файл'}</span> */}
            </div>
          </div>

        </div>
        {params.path && <div className="row">
          <label htmlFor="">Отображать</label>
          <div>
            <label htmlFor="radio-display1" style={{marginRight: '5px'}}>да</label>
            <input type="radio" id="radio-display1" name='display' style={{marginRight: '20px'}} checked={!category.hidden} onClick={(e) => dispatch(setHidden(!e.target.checked))}/>
            <label htmlFor="radio-display2" style={{marginRight: '5px'}}>нет</label>
            <input type="radio" id="radio-display2" name='display' checked={category.hidden} onClick={(e) => dispatch(setHidden(e.target.checked))}/>
          </div>
        </div>}
        
        <div className="row">
          {location.pathname.includes('add-new') ? 
          <button className="admin-save-btn" >Добавить</button> : 
          <>
          <button className="admin-delete-btn" onClick={onDeleteCategory}>Удалить</button>
          <button className="admin-save-btn" onClick={(e) => { setEdit(true) }}>Обновить</button>
          </>}

        </div>        
      </form>
      <UploadedFiles isLoading={category.isLoading} />
    </>
  )
}
