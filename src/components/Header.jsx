import React from "react";
import { Link } from 'react-router-dom'
import './header.css'
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-left">
              <div className="logo">
               <Link to={'/Fratelli'}><h3>Fratelli</h3></Link>
              </div>
            </div>
            <div className="header-right">
            <Link to={'/Fratelli/products/'}>Products</Link>
            <Link to={'/Fratelli/'}>Contact</Link>
            <Link to={'/Fratelli/'}>About Us</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
