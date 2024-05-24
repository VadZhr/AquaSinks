import { useSelector } from "react-redux";
import "./home.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const link = useSelector((state) => state.path.pathForImagesPC);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios
      .get("http://195.49.212.105/api/categories/getallcategories")
      .then((data) => {
        setCategories(data.data);
      });
    axios
      .get("http://195.49.212.105/api/products/getallproducts")
      .then((data) => {
        setProducts(data.data);
      });
    axios
      .get("http://195.49.212.105/api/contacts/getcontacts")
      .then((data) => {
        setContacts(data.data);
      });
  }, []);
  //   /products/getallproducts
  // /categories/getallcategories
  return (
    <section className="home">
      <ScrollRestoration />
      <Header categories={categories} contacts={contacts}></Header>
      <main className="main">
        <Outlet context={[categories, products]}></Outlet>
      </main>
      <Footer contacts={contacts}></Footer>
    </section>
  );
}
