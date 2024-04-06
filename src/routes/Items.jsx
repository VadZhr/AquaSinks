import Item from '../components/Product'
import './items.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Category from '../components/Category'
import BackLink from '../components/BackLink'

export default function Sinks() {
  const { productName } = useParams()
  const data = useSelector((state) => state.categories.list).filter(el => el.path == productName);

  //нужно сделать глобальной, чтобы при возвращении на страницу сохранялся вид плитки 
  const [tile, setTile] = useState(false)

  return (
    <section className="sinks">
      <div className="container">
        <div className="top-bar">
          <div className="category-buttons">
            <button className='tile-pic' style={tile ? { opacity: 1 } : { opacity: 0.3 }} onClick={() => setTile(true)}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </button>
            <button className='wall-pic' style={!tile ? { opacity: 1 } : { opacity: 0.3 }} onClick={() => setTile(false)}>
              <div></div>
              <div></div>
            </button>
          </div>
          <BackLink />
        </div>

        {/* ПЛИТКА */}
        {tile && <div className="sinks-wrapper tile">
          {data[0].products.map(el => <Category key={el.id} category={el} productName={productName} />)}
        </div>}

        {/* СТЕНА */}
        {tile == false && <div className="sinks-wrapper wall">

          <div className="sinks-wrapper">
            {data[0].products.map(el => <Item key={el.id} image={el.mainImage} name={el.name} id={el.id} />)}</div>
        </div>}
      </div>

    </section>
  )
}
