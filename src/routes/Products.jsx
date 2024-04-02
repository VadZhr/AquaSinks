import { useState } from "react";
import sink from "../assets/images/sink_1.jpg";
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
          <Link to={"/"}>Home</Link>
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
