import { useEffect, useState } from 'react'
import './product.css'
import { Link, useLocation } from 'react-router-dom'


export default function Product({name, image, id}) {
  let location = useLocation()

  return (
    <div className="sink">
        <div className="sink-image">
            <img src={image} alt="image of a sink" />
        </div>
        <div className="sink-image_link">
            <p>-{name}</p>
            <Link preventScrollReset={false} to={location.pathname+`/${id}` }>Узнать больше</Link>
        </div>
    </div>
  )
}
