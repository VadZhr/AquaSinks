// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./aboutSlider.css";

// import required modules
import { Navigation } from "swiper/modules";
import { nanoid } from "@reduxjs/toolkit";

export default function AboutSlider({ aboutImages }) {
    console.log(aboutImages,'aboutImages' );
    const imagesToDisplay= aboutImages
  return (
    <Swiper
      loop={true}
      rewind={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper about"
    >
      {imagesToDisplay.map((el, index) => (
        <SwiperSlide key={nanoid()}>
          <img src={`https://fratelli.kz/uploads/${el}`} alt="#" />
          {/* {index == 0 && (
            <div className="product-item-name">
              <span className="">{item.name}</span>
            </div>
          )} */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
