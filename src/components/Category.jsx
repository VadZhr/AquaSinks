import { Link , ScrollRestoration } from "react-router-dom";
import "./category.css";

export default function Product({ category }) {
  return (
    <div className="category" style={{backgroundImage:`url('${category.mainImage}')`}}>
      <div className="category-filter"></div>
      <div className="category-content">
        <div className="link">
          <p className="category-text">{category.type}</p>
          <ScrollRestoration/>
          <Link to={`/products/${category.path}`} className=''>{category.desc}</Link>          
        </div>
      </div>
    </div>
  );
}
