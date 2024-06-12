import Item from '../components/Product'
import './items.css'
import { useOutletContext, useParams } from 'react-router-dom'
import { useState } from 'react'
import Category from '../components/Category'
import BackLink from '../components/BackLink'
import { ScrollRestoration } from 'react-router-dom'

export default function Sinks({categories}) {
  const { categoryName} = useParams();
  const categoryId= useOutletContext()[0].find(el=>el.categoryPath===categoryName&& !el.hidden)?.id;

  const allCategoryProducts = useOutletContext()[1].filter(el=>el.categoryNameId===categoryId && el.hidden == false)
  const [tile, setTile] = useState(false)
  if (!categoryId ) {
    // style={{position:'relative', transform:'translate(-50%,-50%)'}}
    return <div style={{width:'100%',minHeight:'100%', position:'absolute',top:'0',left:'0',bottom:'0', display:'flex', alignItems:'center',justifyContent:'center' }}><p style={{fontSize:26, fontWeight:'bold'}} >Не найдено</p></div>
  }
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
        {categoryId && tile == false && <div className="sinks-wrapper wall">

          <div className="sinks-wrapper">
            {allCategoryProducts?.map(el => <Item key={el._id} image={`https://fratelli.kz/uploads/${el.productMainImage[0]}`} name={el.productName} id={el._id} />)}</div>
        </div>}
      </div>

    </section>
  )
}
