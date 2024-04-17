import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slider3.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function Slider3({ item, link }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiperFirst, setThumbsSwiperFirst] = useState(null);
  console.log(thumbsSwiper);
  const images = [1, 2, 4, 5, 6];
  images.length = 5;
  images.fill(link + "/assets/images/sink2x3.jpg");

  return (
    <>
      <div  className="inner-container">
        <div className="slider-3">
        <Swiper
          onSwiper={(swiper) => setThumbsSwiperFirst(swiper)}
          onSlideChange={(index) => {
            thumbsSwiper.slideTo(thumbsSwiperFirst.realIndex);
          }}
          navigation={false}
          modules={[Navigation]}
          rewind={true}
          className="mySwiper"
        >
          {images.map((el, index) => (
            <>
              <SwiperSlide key={el.id}>
                <img src={el} alt="#" />
                {index == 0 && (
                  <div className="product-item-name">
                    <span className="">{item.name}</span>
                  </div>
                )}
              </SwiperSlide>
            </>
          ))}
        </Swiper>

        <Swiper
          onSwiper={(swiper) => {
            console.log(swiper);
            setThumbsSwiper(swiper);
          }}
          onSlideChange={(index, el) => {
            thumbsSwiperFirst.slideTo(thumbsSwiper.realIndex);
          }}
          
          rewind={true}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
      
        >
          {images.map((el, index) => (
            <>
              <SwiperSlide key={el.id}>
                <div className="text-slider-3">Like a classic element, it conveys an ideal of absolute beauty.</div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
        </div>
      </div>
    </>
  );
}
