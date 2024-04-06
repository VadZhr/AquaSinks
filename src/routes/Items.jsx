import { Link } from 'react-router-dom'
import Item from '../components/Product'
import './items.css'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useState } from 'react'
import Category from '../components/Category'
import HomeLink from '../components/HomeLink'


export default function Sinks() {
  const {productName} =useParams()
  const data = useSelector((state)=>state.categories.list).filter(el=>el.path==productName);

  //нужно сделать глобальной, чтобы при возвращении на страницу сохранялся вид плитки 
  const [tile, setTile] = useState(false)
 
  console.log(data[0]);
  return (
    <section className="sinks">
        <div className="container">
            <HomeLink/>
            <div className="category-buttons">
            <button className='tile-pic' style={tile ? {opacity: 1} : {opacity: 0.3}} onClick={() => setTile(true)}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </button>
            <button className='wall-pic' style={!tile ? {opacity: 1} : {opacity: 0.3}} onClick={() => setTile(false)}>
              <div></div>
              <div></div>
            </button>
            </div>
           

            {/* ПЛИТКА */}
            {tile && <div className="sinks-wrapper tile">
                {data[0].products.map(el=><Category key={el.id} category={el}/>)}
            </div>}

            {/* СТЕНА */}
            {tile == false && <div className="sinks-wrapper wall">
                {data[0].products.map(el=><Item key={el.id}  image={el.product} name={el.name} id={el.id}/>)}
            </div>}
        </div>
    </section>
  )
}
