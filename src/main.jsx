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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
   
  },
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
