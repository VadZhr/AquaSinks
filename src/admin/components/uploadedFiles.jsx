import React from 'react'
import './uploadedFiles.css'
import Finished from '../assets/images.png'
import Loading from '../assets/Loader.gif'

export default function uploadedFiles({isLoading}) {
  return (
    <div className='uploaded'>
        <div className={`uploaded-container ${isLoading ? 'loading' : 'done'}` }>
            {isLoading ? <img src={Loading} alt="" /> : <img src={Finished} alt="" /> }
            <span style={{color: isLoading ? 'white' : 'green'}}>{isLoading ? 'Обновляется' : 'Обновляено'}</span>
        </div>
    </div>
  )
}
