import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.jsx";
import Items from "./routes/Items.jsx";
import AboutUs from "./routes/AboutUs.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./routes/Products.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import ProductItem from "./routes/ProductItem.jsx";
import Slider1 from "./components/Slider1.jsx";

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
        path: "/products/:productName",
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
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
