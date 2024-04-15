import React from 'react'
import './documentationDownload.css'

export default function documentationDownload({linkToFile}) {
    return (
        <a className="document" href={linkToFile}>
            <p>Пасспорт изделия</p>
            <div className="images">
                <img src="/src/assets/images/openfile.png" alt="" className="download" width={30} />
            </div>
        </a>
    )
}
