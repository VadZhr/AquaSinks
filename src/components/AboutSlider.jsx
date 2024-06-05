import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./aboutSlider.css";
import 'swiper/css/pagination'
import { Autoplay, Pagination } from "swiper/modules";
import { nanoid } from "@reduxjs/toolkit";


export default function
  AboutSlider({ aboutImages }) {
  const imagesToDisplay = aboutImages
  return (
    <Swiper
      loop={true}
      rewind={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      pagination={{
        clickable: true,
        dynamicMainBullets: true
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper about"
    >
      {imagesToDisplay.map((el, index) => (
        <SwiperSlide key={nanoid()}>
          <img src={`https://fratelli.kz/uploads/${el}`} alt="#" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
