import {useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slider3.css";

// import required modules
import { Navigation} from "swiper/modules";
import { nanoid } from "@reduxjs/toolkit";
export default function Slider3({ item, link,images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiperFirst, setThumbsSwiperFirst] = useState(null);

 

  return (
    <div className="inner-container">
      <div className="slider-3">
        <Swiper
          onSwiper={(swiper) => setThumbsSwiperFirst(swiper)}
          onSlideChange={() => {
            thumbsSwiper.slideTo(thumbsSwiperFirst.realIndex);
          }}
          navigation={false}
          modules={[Navigation]}
          rewind={true}
          className="mySwiper"
        >
          {images.map((el) => (
            <SwiperSlide key={nanoid()}>
              <img src={el.blob} alt="#" />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
          }}
          onSlideChange={() => {
            thumbsSwiperFirst.slideTo(thumbsSwiper.realIndex);
          }}
          rewind={true}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
        >
          {images.map(() => (
            <SwiperSlide key={nanoid()}>
              <div className="text-slider-3">
                Like a classic element, it conveys an ideal of absolute beauty.
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
