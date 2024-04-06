import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Items from "./routes/Items.jsx";
import AboutUs from "./routes/AboutUs.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./routes/Products.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import ProductItem from "./routes/ProductItem.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/Fratelli/",
        element: <AboutUs />,
      },
      { 
        path: "/Fratelli/products",
        element: <Products />,
      },
      {
        path: "/Fratelli/products/:productName",
        element: <Items />,
      },
      {
        path: "/Fratelli/products/:productName/:id",
        element: <ProductItem />,
      },

    ],
  },
<<<<<<< HEAD
  // {
  //   path: "/Fratelli/about",
  //   element: <AboutUs />,
  // },
  // {
  //   path: "/Fratelli/products/:productName",
  //   element: <Items />,
  // },
  // {
  //   path: "/Fratelli/products/:productName/:id",
  //   element: <ProductItem />,
  // },
]);
=======
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/products/:productName",
    element: <Items />,
  },
  {
    path:'/products/:productName/:id',
    element:<ProductItem/>
  }
])
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
