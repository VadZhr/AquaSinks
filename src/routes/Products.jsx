import Category from "../components/Category";
import "./products.css";
import { useSelector } from "react-redux";
import BackLink from "../components/BackLink";
import { ScrollRestoration } from 'react-router-dom'

export default function Products() {
  const data = useSelector((state) => state.categories.list);

  return (
    <>
      <section className="categories">
        <ScrollRestoration />
        <div className="container">
          <div className="top-bar">
            <BackLink />
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
