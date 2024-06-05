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
  const [headerFooterImage, setHeaderFooterImage] = useState([])
  const [headerFooterTextColor, setHeaderFooterTextColor] = useState('#fff')
  const [headerFooterMediaColor, setHeaderFooterMediaColor] = useState('white')

  useEffect(() => {
    axios
      .get('https://fratelli.kz/api/headerfooter/getdata')
      .then(data => {
        setHeaderFooterImage(data.data.headerFooterImage)
        setHeaderFooterTextColor(data.data.headerFooterTextColor)
        setHeaderFooterMediaColor(data.data.mediaColor)
      });
    axios
      .get("https://fratelli.kz/api/categories/getallcategories")
      .then((data) => {
        setCategories(data.data);
      });
    axios
      .get("https://fratelli.kz/api/products/getallproducts")
      .then((data) => {
        setProducts(data.data);
      });
    axios
      .get("https://fratelli.kz/api/contacts/getcontacts")
      .then((data) => {
        setContacts(data.data);
      });
  }, []);

  return (
    <section className="home">
      <ScrollRestoration />
      <Header categories={categories} contacts={contacts} headerFooterImage={headerFooterImage} headerFooterTextColor={headerFooterTextColor}></Header>
      <main className="main">
        <Outlet context={[categories, products]}></Outlet>
      </main>
      <Footer contacts={contacts} headerFooterImage={headerFooterImage} headerFooterTextColor={headerFooterTextColor} headerFooterMediaColor={headerFooterMediaColor}></Footer>
    </section>
  );
}
