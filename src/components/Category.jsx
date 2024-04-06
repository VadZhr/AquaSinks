import { Link , ScrollRestoration, useLocation } from "react-router-dom";
import "./category.css";
import { useSelector } from "react-redux";

export default function Product({ category }) {
<<<<<<< HEAD
        const link = useSelector(state=>state.path.pathForImagesPC)
        const fratelli=useSelector(state=>state.path.pathForImagesGIT)
  return (
    <div className="category" style={{backgroundImage:`url('${link}${category.mainImage}')`}}>
=======
  const location = useLocation()
  console.log(category)
  return (
    <div className="category" style={{backgroundImage:`url('${category?.mainImage ?? category?.product}')`}}>
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
      <div className="category-filter"></div>
      <div className="category-content">
        <div className="link">
          <p className="category-text">{category?.type ?? category?.name}</p>
          <ScrollRestoration/>
<<<<<<< HEAD
          <Link to={`${fratelli}/products/${category.path}`} className=''>{category.desc}</Link>          
=======
          
          {/* Данный компонент используется в разных местах и передаёт разные данные, ниже логика чтобы давать разыне пути */}
          {category.name && <Link to={`${location.pathname}/${category.id}`} className=''>{"READ MORE"}</Link>}         
          {category.path && <Link to={`/products/${category.path}`} className=''>{category.desc}</Link>}          
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
        </div>
      </div>
    </div>
  );
}
