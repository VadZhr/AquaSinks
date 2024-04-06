
import { useEffect, useState } from 'react'
import './product.css'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Product({name, image, id}) {
  let location = useLocation()
<<<<<<< HEAD
  let [loc, setLoc] = useState()
  const link = useSelector(state=>state.path.pathForImagesPC)
  console.log(link);
  useEffect(() => {
    setLoc(location)
  }, [])
  console.log(location)
=======

>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
  return (
    <div className="sink">
        <div className="sink-image">
            <img src={link+image} alt="image of a sink" />
        </div>
        <div className="sink-image_link">
            <p>-{name}</p>
            <Link preventScrollReset={false} to={location.pathname+`/${id}` }>Узнать больше</Link>
        </div>
    </div>
  )
}
