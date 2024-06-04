// Import Swiper React components
import { Swiper, SwiperSlide,  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./aboutSlider.css";
// import "swiper/css/bundle";
import 'swiper/css/pagination'
// import required modules
import { Navigation,Autoplay,Pagination } from "swiper/modules";
import { nanoid } from "@reduxjs/toolkit";


export default function 
AboutSlider({ aboutImages }) {
    console.log(aboutImages,'aboutImages' );
    const imagesToDisplay= aboutImages
  

  return (
    <Swiper
      loop={true}
      rewind={true}
      autoplay={{
        delay: 2500 ,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicMainBullets:true
            }}
      // navigation={true}
      
      modules={[Autoplay,Pagination]}
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
