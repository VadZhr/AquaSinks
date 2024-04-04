import './product.css'
import { Link } from 'react-router-dom'


export default function Product({name, image}) {
  return (
    <div className="sink">
        <div className="sink-image">
            <img src={image} alt="image of a sink" />
        </div>
        <div className="sink-image_link">
            <p>-{name}</p>
            <Link to={"/Fratelli/sinks/ceramic"}>Узнать больше</Link>
        </div>
    </div>
  )
}
