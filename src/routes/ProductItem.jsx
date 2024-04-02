import React from 'react'
import {useSelector} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
import './productItem.css'

export default function ProductItem() {
    const {productName, id} = useParams()
    const navigate = useNavigate()
    const item = useSelector(state => state.categories.list).filter(el => el.path == productName)[0].products.filter(product => product.id == id)[0]
    console.log(item)
  return (
    <section className='product-item'>
        <div className="product-item-img">
          <img src={item.product} alt="" />
          <span className='product-item-name'>{item.name}</span>

        </div>
        <div className="container">
            <div className="product-item-wrapper">
                <button className='product-item-btn' onClick={() => navigate(-1)}>back</button>
            </div>
        </div>
    </section>
  )
}
