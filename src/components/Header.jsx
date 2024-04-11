import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './header.css'
import dropdown from '../assets/images/dropdown-removebg-preview.png'

export default function Header() {
  const [active, setActive] = useState(false)
  const phoneNumber = '+77777777'
  const phoneNumberText = `+${phoneNumber[1]} ${phoneNumber.substring(1,4)} ${phoneNumber.substring(4,7)} ${phoneNumber.substring(7,9)} ${phoneNumber.substring(9,11)}`
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            {/* <div className="header-left">
              <div className="logo">
                <Link to={'/Fratelli'}><h3>Fratelli</h3></Link>
              </div>
            </div>
            <div className="header-right">
              <Link className="link-products" to={'/Fratelli/products/'}>Products</Link>
              <Link className="link-contact" to={'/Fratelli/'}>Contact</Link>
              <Link className="link-about" to={'/Fratelli/'}>About Us</Link>
            </div> */}


            <div className="header-dropdown">

              <div className={`header-dropdown-lower ${active ? "active" : ""}`}>
                <div className="dropdown-left">
                  <div className="left-contacts">
                    <a className="contacts-phone-number" href={`tel:${phoneNumber}`}>{phoneNumberText}</a>
                    <a className="contacts-email" href="mailto: fratelli@gmail.com">fratelli@gmail.com</a>
                  </div>                  
                  <img src={dropdown} alt="" />
                </div>
                <div className="dropdown-right">
                  <div className="right-links">
                    <p className="right-nav-title">Категории</p>
                    <Link className="link-about" to={'/Fratelli/products/sinks'} onClick={() => setActive(prev => !prev)}>Sinks</Link>
                    <Link className="link-about" to={'/Fratelli/products/bath'} onClick={() => setActive(prev => !prev)}>Baths</Link>
                    <Link className="link-about" to={'/Fratelli/products/shower'} onClick={() => setActive(prev => !prev)}>Showers</Link>
                    <Link className="link-about" to={'/Fratelli/products/counter'} onClick={() => setActive(prev => !prev)}>Counters</Link>
                    <Link className="link-about" to={'/Fratelli/products/floor-sink'} onClick={() => setActive(prev => !prev)}>Floor sinks</Link>
                    <Link className="link-about" to={'/Fratelli/products/wall-sink'} onClick={() => setActive(prev => !prev)}>Wall sinks</Link>
                  </div>

                  <div className="right-navigation">
                    <p className="right-nav-title">Навигация</p>
                    <Link className="link-products" to={'/Fratelli/products/'} onClick={() => setActive(prev => !prev)}>Products</Link>
                    <Link className="link-contact" to={'/Fratelli/'} onClick={() => setActive(prev => !prev)}>Contact</Link>
                    <Link className="link-about" to={'/Fratelli/'} onClick={() => setActive(prev => !prev)}>About Us</Link>
                    <div className="right-contacts">
                    <a className="contacts-phone-number" href={`tel:${phoneNumber}`}>{phoneNumberText}</a>
                    <a className="contacts-email" href="mailto: fratelli@gmail.com">fratelli@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* header-dropdown-upper Необходимо сделать ниже в иерархии чем header-dropdown-lower чтобы кнопку не перекрывал dropdown */}
              <div className="header-dropdown-upper">
                <div className="logo">
                  <Link style={active ? { visibility: "hidden" } : { visibility: "visible" }} to={'/Fratelli'}><h3>Fratelli</h3></Link>
                </div>
                  <button className={`dropdown-menu-btn ${active ? "active" : ""}`} onClick={() => setActive(prev => !prev)}>Меню</button>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  )
}
