import Item from '../components/Product'
import './items.css'
import { useOutletContext, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Category from '../components/Category'
import BackLink from '../components/BackLink'
import { ScrollRestoration } from 'react-router-dom'
import axios from 'axios'

export default function Sinks({categories}) {
  const { categoryName} = useParams();

  console.log(useOutletContext(),'useOutletContext()');
  // const data = useSelector((state) => state.categories.list).filter(el => el.path == productName);
  // const [allCategoryProducts, setAllCategoryProducts]=useState([])
  const categoryId= useOutletContext()[0].find(el=>el.categoryPath===categoryName)?.id
  const allCategoryProducts = useOutletContext()[1].filter(el=>el.categoryNameId===categoryId)
  console.log(allCategoryProducts);
  //нужно сделать глобальной, чтобы при возвращении на страницу сохранялся вид плитки
  console.log(categories,'from props'); 
  const [tile, setTile] = useState(false)

  return (
    <section className="sinks">
      <ScrollRestoration />
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
          {allCategoryProducts?.map(el => <Category key={el._id} category={el} product={el}/>)}
        </div>}

        {/* СТЕНА */}
        {tile == false && <div className="sinks-wrapper wall">

          <div className="sinks-wrapper">
            {allCategoryProducts?.map(el => <Item key={el._id} image={el.productMainImage[0].blob} name={el.productName} id={el._id} />)}</div>
        </div>}
      </div>

    </section>
  )
}
