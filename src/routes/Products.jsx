import { useState } from "react";
import Category from "../components/Category";
import "./products.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BackLink from "../components/BackLink";

export default function Products() {
  const data = useSelector((state) => state.categories.list);

  return (
    <>
      <section className="categories">
        <div className="container">
          <div className="categories-back-button">
            <BackLink/>
          </div>
          <div className="categories-wrapper tile">
            {data.map((el) => (
              <Category key={el.type} category={el} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
