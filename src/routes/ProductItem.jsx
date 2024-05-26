import { useSelector } from "react-redux";
import { useParams, ScrollRestoration, useOutlet, useOutletContext } from "react-router-dom";
import "./productItem.css";
import BackLink from "../components/BackLink";
import Slider1 from "../components/Slider1";
import ProducProperites from "../components/producProperites";
import Slider3 from "../components/Slider3";
import DocumentationDownload from '../components/documentationDownload'
import whatsapp from '../assets/images/WhatsAppButtonWhiteMedium.svg'
import { nanoid } from "@reduxjs/toolkit";
export default function ProductItem() {
  const { productName, id } = useParams();
  const product=useOutletContext()[1].find(el=>el._id===id)
  
  console.log(product,'product');
  // const item = useSelector((state) => state.categories.list)
  //   .filter((el) => el.path == productName)[0]
  //   .products.filter((product) => product.id == id)[0];
  const link = useSelector((state) => state.path.pathForImagesPC);
  const phoneNumber = "77714604710";
  const watsAppText = "как сделать у вас заказ".replaceAll(" ", "%20");
  const centerPositionDot =product?.productDescription.indexOf('.',product?.productDescription.length/2|0)+1
  console.log(centerPositionDot);
  console.log(product);
// Сделать, чтобы работало при перезагрузке
  return (
    <>
    {product?.productName &&
      <section className="product-item">
        <ScrollRestoration />
        <div className="product-item-img">
        {/* Основное фото товара */}
          <img src={product?.productMainImage[0].blob} alt="" />
          <div className="product-item-name">
            <span className="">{product.productName}</span>
          </div>
        </div>
        <div className="container">
          <div className="product-item-wrapper">
            <BackLink prevPage={productName}/>
            <div className="inner-container">
              <div className="product-item-decription">
                <h3 className="product-item-decription-title">{product.productName}</h3>
                <p>
                  {/* Нужно правильно разбить, чтобы первая колонка заканчивалась точкой, а вторая колонка начиналась с нового предложения */}
                  {/* str.includes(searchString[, position]) */}
                  {}
                  {product.productDescription.substring(0,centerPositionDot)}
                </p>
                <p>
                {product.productDescription.substring(centerPositionDot)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-item-img slider">
         {/* 1 набор фото на белом фоне */}
          <Slider1 item={product} link={link} images={product.productImagesWhiteBG}
          ></Slider1>
        </div>
        <div className="product-item-img slider">
            {/* 2 набор фото в интерьере */}
          <Slider1 item={product} link={link} images={product.productImageInterior}></Slider1>
        </div>
        <div className="container">
          <div className="product-item-img slider small">
            {/* 3 набор фото в цвете */}
            <Slider3 item={product} link={link}  images={product.productImageColored} ></Slider3>
          </div>
        </div>

        {/* ВОТ СЮДА НУЖНО ВСТАВИТЬ СВАЙПЕР */}

        <div className="container">
          <ProducProperites productParamsImage={product.productParamsImage[0]} params={product.productParams} />
          <div className="inner-container">
            <div className="documets-download">
              <div className="documets-download-description">
                <p>Материалы для скачивания</p>
              </div>
              <div className="documentation">
                {product.productDocuments.map(el=> <DocumentationDownload key={nanoid()} linkToFile={el.blob} />)}
              {/* <DocumentationDownload /> */}

              </div>
            </div>
          </div>
          <a className="whatsapp-link" target='_blank' href={`https://wa.me/${phoneNumber}?text=${watsAppText}`}>
            <img src={whatsapp}alt="" />
          </a>
        </div>
      </section>
      }
    </>
  );
}
