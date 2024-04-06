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
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
