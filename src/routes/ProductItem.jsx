import { useSelector } from "react-redux";
import { useParams, ScrollRestoration } from "react-router-dom";
import "./productItem.css";
import BackLink from "../components/BackLink";
import Slider1 from "../components/Slider1";
import ProducProperites from "../components/producProperites";
import Slider3 from "../components/Slider3";
import DocumentationDownload from '../components/documentationDownload'
export default function ProductItem() {
  const { productName, id } = useParams();
  const item = useSelector((state) => state.categories.list)
    .filter((el) => el.path == productName)[0]
    .products.filter((product) => product.id == id)[0];
  const link = useSelector((state) => state.path.pathForImagesPC);
  const phoneNumber = "77714604710";
  const watsAppText = "как сделать у вас заказ".replaceAll(" ", "20%");

  return (
    <>
      <section className="product-item">
        <ScrollRestoration />
        <div className="product-item-img">
        {/* Основное фото товара */}
          <img src={link + item.mainImage} alt="" />
          <div className="product-item-name">
            <span className="">{item.name}</span>
          </div>
        </div>
        <div className="container">
          <div className="product-item-wrapper">
            <BackLink prevPage={productName}/>
            <div className="inner-container">
              <div className="product-item-decription">
                <h3 className="product-item-decription-title">{item.name}</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere laboriosam dignissimos nemo quod explicabo repudiandae,
                  praesentium aperiam labore, nulla a architecto. Assumenda
                  molestias dolor facilis, explicabo laudantium illum, culpa
                  repellendus repellat aliquam enim, aut quae voluptatibus
                  tempore. Quia est, reiciendis repellendus numquam iste ab
                  rerum ratione corporis inventore exercitationem incidunt ullam
                  tempora, provident, pariatur eius et voluptas quae eaque magni
                  ad officiis error maiores mollitia. Officia id ipsum
                  quibusdam, illum atque ab, minima sed magnam quod distinctio
                  sapiente velit cum, tempora quasi molestiae eveniet
                  repellendus necessitatibus assumenda nostrum? Adipisci
                  deleniti earum nesciunt eius quaerat temporibus voluptatibus
                  est consequuntur voluptatem illo?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere laboriosam dignissimos nemo quod explicabo repudiandae,
                  praesentium aperiam labore, nulla a architecto. Assumenda
                  molestias dolor facilis, explicabo laudantium illum, culpa
                  repellendus repellat aliquam enim, aut quae voluptatibus
                  tempore. Quia est, reiciendis repellendus numquam iste ab
                  rerum ratione corporis inventore exercitationem incidunt ullam
                  tempora, provident, pariatur eius et voluptas quae eaque magni
                  ad officiis error maiores mollitia. Officia id ipsum
                  quibusdam, illum atque ab, minima sed magnam quod distinctio
                  sapiente velit cum, tempora quasi molestiae eveniet
                  repellendus necessitatibus assumenda nostrum? Adipisci
                  deleniti earum nesciunt eius quaerat temporibus voluptatibus
                  est consequuntur voluptatem illo?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-item-img slider">
         {/* 1 набор фото на белом фоне */}
          <Slider1 item={item} link={link}></Slider1>
        </div>
        <div className="product-item-img slider">
            {/* 2 набор фото в интерьере */}
          <Slider1 item={item} link={link}></Slider1>
        </div>
        <div className="container">
          <div className="product-item-img slider small">
            {/* 3 набор фото в цвете */}
            <Slider3 item={item} link={link}></Slider3>
          </div>
        </div>

        {/* ВОТ СЮДА НУЖНО ВСТАВИТЬ СВАЙПЕР */}

        <div className="container">
          <ProducProperites />
          <div className="inner-container">
            <div className="documets-download">
              <div className="documets-download-description">
                <p>Материалы для скачивания</p>
              </div>
              <div className="documentation">
              <DocumentationDownload linkToFile={'/'}/>
              <DocumentationDownload linkToFile={'/'}/>
              <DocumentationDownload linkToFile={'/'}/>
              {/* <DocumentationDownload /> */}

              </div>
            </div>
          </div>
          <a className="whatsapp-link" target='_blank' href={`https://wa.me/${phoneNumber}?text=${watsAppText}`}>
            <img src={`${link}/assets/images/WhatsAppButtonWhiteMedium.svg`}alt="" />
          </a>
        </div>
      </section>
      
    </>
  );
}
