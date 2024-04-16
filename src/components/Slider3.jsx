// import { useEffect, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "./slider1.css";

// // import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// export default function Slider3({ item, link }) {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const [thumbsSwiperFirst, setThumbsSwiperFirst] = useState(null);
//   console.log(thumbsSwiper);
//   const images = [1, 2, 4, 5, 6];
//   images.length = 5;
//   images.fill(link + "/assets/images/sink2x3.jpg");
//   const [firstSwiper, setFirstSwiper]=useState(false)
//   const [secSwiper, setSecSwiper]=useState(false)
//   useEffect(()=>{
//     if(firstSwiper && !secSwiper){
//       console.log(1);
//       thumbsSwiper.slideTo(thumbsSwiperFirst.realIndex);
//       console.log(thumbsSwiperFirst.realIndex);
//       // thumbsSwiper.slideNext()
//     }
//     if(!firstSwiper && secSwiper){
//       console.log(2);
//       // thumbsSwiper.slideTo(index.realIndex);
//       thumbsSwiperFirst.slideNext()
//     }
//   },[firstSwiper,secSwiper])
  
  
  
//   return (
//     <>
//       <div style={{ display: "flex" }}>
//         <Swiper
//           onSwiper={(swiper) => setThumbsSwiperFirst(swiper)}
//           onTouchStart={()=>{
//             console.log('fitst');
//             if(!firstSwiper && !secSwiper){
//               setFirstSwiper(pre=>{
//                 return true
//               })
//               setSecSwiper(pre=>{
//                 return false
//               })  
//             }
//             if(!firstSwiper && secSwiper){
//             setFirstSwiper(pre=>{
//               return true
//             })
//             setSecSwiper(pre=>{
//               return false
//             })
//           }
//           }}
//           onSlideChange={(index, el) => {
          

//             if(firstSwiper && !secSwiper){
//               console.log(1);
//               thumbsSwiper.slideTo(index.realIndex);
//               // thumbsSwiper.slideNext()
//             }
        
//             // thumbsSwiper.slideNext()
//           }}
//           // onReachEnd={() => {
         
//           //   thumbsSwiper.slideTo(0);
//           //   thumbsSwiperFirst.slideTo(0);
//           //   console.log(thumbsSwiper.activeIndex,thumbsSwiper.realIndex);
//           // }}
//           style={{
//             "--swiper-navigation-color": "#fff",
//             "--swiper-pagination-color": "#fff",
//           }}
//           spaceBetween={10}
//           navigation={true}
//           // thumbs={{swiper:thumbsSwiper}}
//           modules={[FreeMode, Navigation, Thumbs]}
//           loop={true}
//           className="mySwiper2"
//         >
//           {images.map((el, index) => (
//             <>
//               <SwiperSlide key={el.id}>
//                 <img src={el} alt="#" />
//                 {index == 0 && (
//                   <div className="product-item-name">
//                     <span className="">{item.name}</span>
//                   </div>
//                 )}
//               </SwiperSlide>
//             </>
//           ))}
//         </Swiper>

//         <Swiper
//           onSwiper={(swiper) => {
//             console.log(swiper);
//             setThumbsSwiper(swiper);
//           }}
//           onTouchStart={()=>{
//             if(!firstSwiper && !secSwiper){
//               setFirstSwiper(pre=>{
//                 return false
//               })
//               setSecSwiper(pre=>{
//                 return true
//               })  
//             }
//             if(firstSwiper && !secSwiper){
//             setFirstSwiper(pre=>{
//               return false
//             })
//             setSecSwiper(pre=>{
//               return true
//             })
//           }
//           }}
//           onSlideChange={(index, el) => {
//             console.log('second');
           
//                // thumbsSwiperFirst.slideTo(index.realIndex);
//                if(!firstSwiper && secSwiper){
//                 console.log(1);
//                 thumbsSwiperFirst.slideTo(index.realIndex);
//                 // thumbsSwiperFirst.slideNext()
//               }
            
           
         
//           }}
//           // onReachEnd={() => {
//           //   thumbsSwiper.slideTo(0);
//           //   thumbsSwiperFirst.slideTo(0);
//           // }}
//           // thumbsSwiperFirst.slideTo(index)
//           spaceBetween={10}
//           slidesPerView={1}
//           watchSlidesProgress={true}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className="mySwiper"
//           loop={true}
//         >
//           {images.map((el, index) => (
//             <>
//               <SwiperSlide key={el.id}>
//                 <img src={el} alt="#" />
//                 {index == 0 && (
//                   <div className="product-item-name">
//                     <span className="">{item.name}</span>
//                   </div>
//                 )}
//               </SwiperSlide>
//             </>
//           ))}
//         </Swiper>
//         <button onClick={() => thumbsSwiperFirst.slideNext()}>
//           swipe next
//         </button>
//       </div>
//     </>
//   );
// }
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./slider3.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function Slider3({ item, link }) {
  const images = [1, 2, 4, 5, 6]
  images.length=5
  images.fill(link + "/assets/images/sink2x3.jpg");
  return (
    <>
      <Swiper
        loop={true}
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        
      >
        {images.map((el,index) => (
          <>
            <SwiperSlide key={el.id}>
              <img src={el} alt="#" />
              {index==0 && <div className="product-item-name">
              <span className="">{item.name}</span>
            </div>}
              
            </SwiperSlide>
            
          </>
        ))}
       
         
      </Swiper>
    </>
  );
}

