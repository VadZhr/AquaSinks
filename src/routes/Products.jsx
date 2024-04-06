import { useState } from "react";
import Category from "../components/Category";
import "./products.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeLink from "../components/HomeLink";

export default function Products() {
  const data = useSelector((state) => state.categories.list);

  return (
    <>
      <section className="categories">
        <div className="container">

          <HomeLink/>
          <div className="categories-wrapper tile">

          
          <div className="categories-wrapper">

            {data.map((el) => (
              <Category key={el.type} category={el} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
