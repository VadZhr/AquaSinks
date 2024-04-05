import { Link , ScrollRestoration, useLocation } from "react-router-dom";
import "./category.css";

export default function Product({ category }) {
  const location = useLocation()
  console.log(category)
  return (
    <div className="category" style={{backgroundImage:`url('${category?.mainImage ?? category?.product}')`}}>
      <div className="category-filter"></div>
      <div className="category-content">
        <div className="link">
          <p className="category-text">{category?.type ?? category?.name}</p>
          <ScrollRestoration/>
          
          {/* Данный компонент используется в разных местах и передаёт разные данные, ниже логика чтобы давать разыне пути */}
          {category.name && <Link to={`${location.pathname}/${category.id}`} className=''>{"READ MORE"}</Link>}         
          {category.path && <Link to={`/products/${category.path}`} className=''>{category.desc}</Link>}          
        </div>
      </div>
    </div>
  );
}
