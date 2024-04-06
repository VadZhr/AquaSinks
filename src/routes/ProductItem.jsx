import React from 'react'
import {useSelector} from 'react-redux'
import {useParams, useNavigate, Link, ScrollRestoration } from 'react-router-dom'
import './productItem.css'


export default function ProductItem() {
    const {productName, id} = useParams()
    const navigate = useNavigate()
    const item = useSelector(state => state.categories.list).filter(el => el.path == productName)[0].products.filter(product => product.id == id)[0]


    //Нжуно сделать глобальной перемеонной, чтобы можно было менять телефон
    const phoneNumber = "77714604710"
    const text = "Мы бы хотели купить у вас это"
    const watsAppText = text.replaceAll(" ", '%20')//если не заменить пробелы на %20 то рабоать не будет
    console.log(watsAppText)

  return (
    <section className='product-item'>
      <ScrollRestoration />
        <div className="product-item-img">
          <img src={item.product} alt="" />
          <div className="product-item-name">
            <span className=''>{item.name}</span>
          </div>

        </div>
        <div className="container">
            <div className="product-item-wrapper">
                <button className='product-item-btn back-btn' onClick={() => navigate(-1)}></button>

                <div className="product-item-decription">
                  <h3 className='product-item-decription-title'>{item.name}</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere laboriosam dignissimos nemo quod explicabo repudiandae, praesentium aperiam labore, nulla a architecto. Assumenda molestias dolor facilis, explicabo laudantium illum, culpa repellendus repellat aliquam enim, aut quae voluptatibus tempore. Quia est, reiciendis repellendus numquam iste ab rerum ratione corporis inventore exercitationem incidunt ullam tempora, provident, pariatur eius et voluptas quae eaque magni ad officiis error maiores mollitia. Officia id ipsum quibusdam, illum atque ab, minima sed magnam quod distinctio sapiente velit cum, tempora quasi molestiae eveniet repellendus necessitatibus assumenda nostrum? Adipisci deleniti earum nesciunt eius quaerat temporibus voluptatibus est consequuntur voluptatem illo?</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere laboriosam dignissimos nemo quod explicabo repudiandae, praesentium aperiam labore, nulla a architecto. Assumenda molestias dolor facilis, explicabo laudantium illum, culpa repellendus repellat aliquam enim, aut quae voluptatibus tempore. Quia est, reiciendis repellendus numquam iste ab rerum ratione corporis inventore exercitationem incidunt ullam tempora, provident, pariatur eius et voluptas quae eaque magni ad officiis error maiores mollitia. Officia id ipsum quibusdam, illum atque ab, minima sed magnam quod distinctio sapiente velit cum, tempora quasi molestiae eveniet repellendus necessitatibus assumenda nostrum? Adipisci deleniti earum nesciunt eius quaerat temporibus voluptatibus est consequuntur voluptatem illo?</p>
                </div>
                <a className="whatsapp-link" target='_blank' href={`https://wa.me/${phoneNumber}?text=${watsAppText}`}>
                  <img src="/src/assets/images/WhatsAppButtonGreenSmall.png" alt="" />
                </a>
            </div>
        </div>
    </section>
  )
}
