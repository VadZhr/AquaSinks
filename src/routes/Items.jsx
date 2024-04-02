import { Link } from 'react-router-dom'
import Item from '../components/Product'
import './items.css'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
export default function Sinks() {
  const {productName} =useParams()
  const data = useSelector((state)=>state.categories.list).filter(el=>el.path==productName);
 
  console.log(data);
  return (
    <section className="sinks">
        <div className="container">
            <Link to={"/"}>Home</Link>
            <div className="sinks-wrapper">
                {data[0].products.map(el=><Item key={el.id}  image={el.product} name={el.name}/>)}

            </div>
        </div>
    </section>
  )
}
