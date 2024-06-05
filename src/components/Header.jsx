import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import './header.css'
import { nanoid } from "@reduxjs/toolkit";

export default function Header({ categories, contacts, headerFooterImage, headerFooterTextColor }) {
  const [active, setActive] = useState(false)
  const phoneNumber = '+77777777777'
  const navigate = useNavigate()

  const phoneNumberText = `+${phoneNumber[1]} ${phoneNumber.substring(2, 5)} ${phoneNumber.substring(5, 8)} ${phoneNumber.substring(8, 10)} ${phoneNumber.substring(10)}`
  const scrollToContact = () => {
    setActive(prev => !prev)
    window.scrollTo(0, document.querySelector('footer').offsetTop)
  }

  const allElements = document.querySelectorAll('.header *')

  allElements.forEach(el => {
    el.style.color = headerFooterTextColor
  })


  const menuBtn = () => {
    setActive(prev => !prev)
    const dropDown = document.querySelector('.header-dropdown-lower')
    if (!dropDown.classList.contains('active')) {
      dropDown.scrollTo(0, 0)
    }
  }


  return (
    <header className="header" style={{ background: `#000 url(https://fratelli.kz/uploads/${headerFooterImage}) center/cover no-repeat` }}>
      <div className="container">
        <div className="header-wrapper">
          <div className="header-dropdown">
            <div className={`header-dropdown-lower ${active ? "active" : ""}`} style={{ background: `#000 url(https://fratelli.kz/uploads/${headerFooterImage}) center/cover no-repeat` }}>
              <div className="dropdown-left">
                <div className="left-contacts">
                  <a className="contacts-phone-number" href={`tel:${contacts?.phoneOne}`}>+{contacts?.phoneOne}</a>
                  <a className="contacts-email" href={`mailto: ${contacts?.email}`}>{contacts?.email}</a>
                </div>
              </div>
              <div className="dropdown-right">
                <div className="right-links">
                  <Link key={nanoid()} className="right-nav-title" style={{ color: headerFooterTextColor }} to={'products'} onClick={() => setActive(prev => !prev)}>Продукты</Link>
                  {categories?.length && categories.map(el => <Link key={nanoid()} style={{ color: headerFooterTextColor }} className="link-about" to={`products/${el.categoryPath}`} onClick={() => setActive(prev => !prev)}>{el.categoryName}</Link>)}
                </div>

                <div className="right-navigation">
                  <p className="right-nav-title">Навигация</p>
                  <a className="link-contact" onClick={() => scrollToContact()}>Контакты</a>
                  <Link className="link-about" to={'/'} onClick={() => setActive(prev => !prev)}>О Компании</Link>
                </div>
              </div>
            </div>
            {/* header-dropdown-upper Необходимо сделать ниже в иерархии чем header-dropdown-lower чтобы кнопку не перекрывал dropdown */}
            <div className="header-dropdown-upper">
              <div className="logo">
                <Link to={'/'} onClick={() => document.querySelector('.header-dropdown-lower').className.includes('active') ? setActive(prev => !prev) : ''}><h3>Fratelli</h3></Link>
              </div>
              <button className={`dropdown-menu-btn ${active ? "active" : ""}`} onClick={() => menuBtn()}>Меню</button>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}
