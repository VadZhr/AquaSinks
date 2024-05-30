import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.jsx";
import Items from "./routes/Items.jsx";
import AboutUs from "./routes/AboutUs.jsx";
import "./index.css";

//СТИЛИ АДМИНКИ
import './admin/index.css'
// import './admin/components/addNewCategory.css'
// import './admin/components/displayImagesContainer.css'
// import './admin/components/editSingleProduct.css'
// import './admin/components/sidebar.css'
// import './admin/components/skeletonLoading.css'




import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./routes/Products.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import ProductItem from "./routes/ProductItem.jsx";
import Slider1 from "./components/Slider1.jsx";
import AdminHome from './admin/AdminApp.jsx'
import AboutPage from "./admin/routes/AboutPage.jsx";
import Categories from './admin/routes/categories.jsx'
import AddNew from "./admin/components/addNewCategory.jsx";
import ProductsCollections from "./admin/routes/ProductsCollections.jsx";
import SingleProduct from './admin/routes/SingleProduct.jsx'
import AddSingleProduct from "./admin/routes/addSingleProduct.jsx";
import Footer from './admin/routes/Footer.jsx'
import Headerfooter from "./admin/routes/headerfooter.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <AboutUs/>
      },
      {
        path: "/",
        element: <AboutUs />,
      },
      { 
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:categoryName",
        element: <Items />,
      },
      {
        path: "/products/:productName/:id",
        element: <ProductItem />,
      },
      {
        path:"/swiper",
        element:<Slider1/>
      }

    ],
  },
  {
    path: '/admin',
    element: <AdminHome/>,
    children: [
      {
        index: <AboutPage/>,
      },
      {
      path: '/admin/about',
      element: <AboutPage/>,
      },
      {
      path: '/admin/categories',
      element: <Categories/>,
      },
      {
        path: '/admin/categories/add-new',
        element: <AddNew/>
      },
      {
        path: '/admin/categories/:path',
        element: <AddNew/>
      },
      {
        path: '/admin/products',
        element: <ProductsCollections/>,
      },
      {
        path: '/admin/products/:singleproduct',
        element: <SingleProduct/>
      },
      {
        path: '/admin/products/add-new',
        element: <AddSingleProduct/>
      },
      {
        //это контакты
        path: '/admin/footer',
        element: <Footer/>
      },
      {
        path: '/admin/headerfooter',
        element: <Headerfooter/>
      }

  ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

);
