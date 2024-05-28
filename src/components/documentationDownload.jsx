import React from 'react'
import './documentationDownload.css'
import { useSelector } from 'react-redux';
import openfile from '../assets/images/openfile.png'
export default function DocumentationDownload({linkToFile}) {
    
  const link = useSelector((state) => state.path.pathForImagesPC);
    return (
        <a className="document" href={linkToFile}  target='_blank'>
            <p>Пасспорт изделия</p>
            <div className="images">
                
                <img src={openfile} alt="" className="download" width={30} />
            </div>
        </a>
    )
}
