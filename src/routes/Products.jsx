import Category from "../components/Category";
import "./products.css";
import { useSelector } from "react-redux";
import { ScrollRestoration, Link } from 'react-router-dom'

export default function Products() {
  const data = useSelector((state) => state.categories.list);

  return (
    <>
      <section className="categories">
        <ScrollRestoration />
        <div className="container">
          <div className="top-bar">
          <Link className='product-item-btn back-btn' to={`/`}></Link>
          </div>
          <div className="categories-wrapper tile">
            {data.map((el) => (
              <Category key={el.type} category={el} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
