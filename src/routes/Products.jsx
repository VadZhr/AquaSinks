import { useEffect, useState } from "react";
import Category from "../components/Category";
import "./products.css";
import { useSelector } from "react-redux";
import { ScrollRestoration, Link, useOutletContext } from 'react-router-dom'
import axios from "axios";

export default function Products() {
  const data = useSelector((state) => state.categories.list);
  const [categories,setCategories]=useState([]);
  const allCategoryProducts = useOutletContext()[0]
  console.log(categories);
  return (
    <>
      <section className="categories">
        <ScrollRestoration />
        <div className="container">
          <div className="top-bar">
          <Link className='product-item-btn back-btn' to={`/`}></Link>
          </div>
          <div className="categories-wrapper tile">
            {allCategoryProducts.length && allCategoryProducts.map((el) => (
              <Category key={el.id} category={el} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
