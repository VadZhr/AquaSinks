import React from 'react'
import './documentationDownload.css'
import { useSelector } from 'react-redux';

export default function DocumentationDownload({linkToFile}) {
    
  const link = useSelector((state) => state.path.pathForImagesPC);
    return (
        <a className="document" href={linkToFile} download>
            <p>Пасспорт изделия</p>
            <div className="images">
                
                <img src={`${link}/assets/images/openfile.png`} alt="" className="download" width={30} />
            </div>
        </a>
    )
}
