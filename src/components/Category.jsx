import { Link , ScrollRestoration, useLocation, useOutletContext } from "react-router-dom";
import "./category.css";
import { useSelector } from "react-redux";

export default function Product({ category, productName, product }) {
  const location = useLocation()
  const link = useSelector(state=>state.path.pathForImagesPC)
  const fratelli=useSelector(state=>state.path.pathForImagesGIT)
  const allCategoryProducts = useOutletContext()[1].filter(el=>el.categoryNameId===category._id);
      console.log(allCategoryProducts);
  return (
    // <div className="category" style={{backgroundImage:`url('${link}${category.mainImage}')`}}>
    //   <div className="category-filter"></div>
    //   <div className="category-content">
    //     <div className="link">
    //       <p className="category-text">{category?.type ?? category?.name}</p>
    //       <ScrollRestoration/>
    //       {category.name && <Link to={`${location.pathname}/${category.id}`} className=''>{"Узнать больше"}</Link>}         
    //       {category.path && <Link to={`${fratelli}products/${category.path}`} className=''>{category.desc}</Link>}    
    //     </div>
    //   </div>
    // </div>
    <div className="category" style={{background:`url('https://fratelli.kz/uploads/${category?.categoryImagePath ?? product?.productMainImage[0]}') center/cover no-repeat`}}>
    <div className="category-filter"></div>
    <div className="category-content">
      <div className="link">
        <p className="category-text">{category?.categoryName ?? product?.productName}</p>
        <ScrollRestoration/>
        {product?.productName && <Link to={`${location.pathname}/${product._id}`} className=''>{"Узнать больше"}</Link>}         
        {category?.categoryName && <Link to={`/products/${category?.categoryPath}`} className=''>{'Узнать больше'}</Link>}    
      </div>
    </div>
  </div>
  );
}
