import { createSlice } from "@reduxjs/toolkit";


export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [
      {
        type: "Bath",
        path:'bath',
        desc: "Read more",
<<<<<<< HEAD
        mainImage: "/assets/images/bath/главное фото.jpg",
        products: [
          {
            product: "/assets/images/bath/1.jpg",
=======
        mainImage: "/src/assets/images/bath/главное фото.jpg",
        products: [
          {
            product: "/src/assets/images/bath/1.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Акриловая ванна",
            desc: "",
            id: 1,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/bath/2.jpg",
=======
            product: "/src/assets/images/bath/2.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Акриловая ванна",
            desc: "",
            id: 2,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/bath/3.jpg",
=======
            product: "/src/assets/images/bath/3.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Акриловая ванна",
            desc: "",
            id: 3,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/bath/4.jpg",
=======
            product: "/src/assets/images/bath/4.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Акриловая ванна",
            desc: "",
            id: 4,
          },
        ],
      },
      {
        type: "Sinks",
        desc: "Read more",
        path:'sinks',
<<<<<<< HEAD
        mainImage: "/assets/images/sinks/главное фото.jpg",
        products: [
          {
            product: "/assets/images/sinks/1.jpg",
=======
        mainImage: "/src/assets/images/sinks/главное фото.jpg",
        products: [
          {
            product: "/src/assets/images/sinks/1.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Керамическая раковина",
            desc: "",
            id: 5,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/sinks/2.jpg",
=======
            product: "/src/assets/images/sinks/2.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Керамическая раковина",
            desc: "",
            id: 6,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/sinks/3.jpeg",
=======
            product: "/src/assets/images/sinks/3.jpeg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Керамическая раковина",
            desc: "",
            id: 7,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/sinks/4.jpg",
=======
            product: "/src/assets/images/sinks/4.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Керамическая раковина",
            desc: "",
            id: 8,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/sinks/5.jpg",
=======
            product: "/src/assets/images/sinks/5.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Керамическая раковина",
            desc: "",
            id: 9,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/sinks/6.jpg",
=======
            product: "/src/assets/images/sinks/6.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Керамическая раковина",
            desc: "",
            id: 10,
          },
        ],
      },
      {
        type: "Shower",
        desc: "Read more",
        path:'shower',
<<<<<<< HEAD
        mainImage: "/assets/images/shower/главное фото.jpg",
        products: [
          {
            product: "/assets/images/shower/1.jpg",
=======
        mainImage: "/src/assets/images/shower/главное фото.jpg",
        products: [
          {
            product: "/src/assets/images/shower/1.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Душевые",
            desc: "",
            id: 14,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/shower/2.jpg",
=======
            product: "/src/assets/images/shower/2.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Душевые",
            desc: "",
            id: 15,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/shower/3.jpg",
=======
            product: "/src/assets/images/shower/3.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Душевые",
            desc: "",
            id: 16,
          }
        ],
      },
      {
        type: "Floar sink",
        desc: "Read more",
        path:'floar sink',
<<<<<<< HEAD
        mainImage: "/assets/images/floar sink/главное фото.jpg",
        products: [
          {
            product: "/assets/images/floar sink/1.jpg",
=======
        mainImage: "/src/assets/images/floar sink/главное фото.jpg",
        products: [
          {
            product: "/src/assets/images/floar sink/1.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Напольные раковины",
            desc: "",
            id: 17,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/floar sink/2.jpg",
=======
            product: "/src/assets/images/floar sink/2.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Напольные раковины",
            desc: "",
            id: 18,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/floar sink/3.jpg",
=======
            product: "/src/assets/images/floar sink/3.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Напольные раковины",
            desc: "",
            id: 19,
          }
        ],
      },
      {
        type: "Wall sink",
        desc: "Read more",
        path:'wall sink',
<<<<<<< HEAD
        mainImage: "/assets/images/wall sink/главное фото.jpg",
        products: [
          {
            product: "/assets/images/wall sink/1.jpg",
=======
        mainImage: "/src/assets/images/wall sink/главное фото.jpg",
        products: [
          {
            product: "/src/assets/images/wall sink/1.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Пристенные раковины",
            desc: "",
            id: 20,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/wall sink/2.jpg",
=======
            product: "/src/assets/images/wall sink/2.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Пристенные раковины",
            desc: "",
            id: 21,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/wall sink/3.jpg",
=======
            product: "/src/assets/images/wall sink/3.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Пристенные раковины",
            desc: "",
            id: 22,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/wall sink/4.jpg",
=======
            product: "/src/assets/images/wall sink/4.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Пристенные раковины",
            desc: "",
            id: 23,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/wall sink/5.jpg",
=======
            product: "/src/assets/images/wall sink/5.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Пристенные раковины",
            desc: "",
            id: 24,
          },
         
        ],
      },
      {
        type: "Counter",
        desc: "Read more",
        path:'counter',
<<<<<<< HEAD
        mainImage: "/assets/images/counter/главное фото.jpg",
        products: [
          {
            product: "/assets/images/counter/1.jpg",
=======
        mainImage: "/src/assets/images/counter/главное фото.jpg",
        products: [
          {
            product: "/src/assets/images/counter/1.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Столешницы",
            desc: "",
            id: 25,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/counter/2.jpg",
=======
            product: "/src/assets/images/counter/2.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Столешницы",
            desc: "",
            id: 26,
          },
          {
<<<<<<< HEAD
            product: "/assets/images/counter/3.jpg",
=======
            product: "/src/assets/images/counter/3.jpg",
>>>>>>> eabb619ea69664f9d5aeb48555e6759d5de61cff
            name: "Столешницы",
            desc: "",
            id: 27,
          }
        ],
      },
      
     
    ],
  },
});

export default categoriesSlice.reducer;
