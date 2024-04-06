import { useState } from "react";
import Category from "../components/Category";
import "./products.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Products() {
  const data = useSelector((state) => state.categories.list);

  return (
    <>
      <section className="categories">
        <div className="container">
<<<<<<< HEAD
          
          <div className="categories-wrapper">
=======
          <Link to={"/"}>Home</Link>
          <div className="categories-wrapper tile">
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            {data.map((el) => (
              <Category key={el.type} category={el} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
