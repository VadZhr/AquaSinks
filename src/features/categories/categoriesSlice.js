import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [
      {
        type: "Bath",
        path:'bath',
        desc: "Read more",
        mainImage: "/Fratelli/assets/images/bath/главное фото.jpg",
        products: [
          {
            product: "/Fratelli/assets/images/bath/1.jpg",
            name: "Акриловая ванна",
            desc: "",
            id: 1,
          },
          {
            product: "/Fratelli/assets/images/bath/2.jpg",
            name: "Акриловая ванна",
            desc: "",
            id: 2,
          },
          {
            product: "/Fratelli/assets/images/bath/3.jpg",
            name: "Акриловая ванна",
            desc: "",
            id: 3,
          },
          {
            product: "/Fratelli/assets/images/bath/4.jpg",
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
        mainImage: "/Fratelli/assets/images/sinks/главное фото.jpg",
        products: [
          {
            product: "/Fratelli/assets/images/sinks/1.jpg",
            name: "Керамическая раковина",
            desc: "",
            id: 5,
          },
          {
            product: "/Fratelli/assets/images/sinks/2.jpg",
            name: "Керамическая раковина",
            desc: "",
            id: 6,
          },
          {
            product: "/Fratelli/assets/images/sinks/3.jpeg",
            name: "Керамическая раковина",
            desc: "",
            id: 7,
          },
          {
            product: "/Fratelli/assets/images/sinks/4.jpg",
            name: "Керамическая раковина",
            desc: "",
            id: 8,
          },
          {
            product: "/Fratelli/assets/images/sinks/5.jpg",
            name: "Керамическая раковина",
            desc: "",
            id: 9,
          },
          {
            product: "/Fratelli/assets/images/sinks/6.jpg",
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
        mainImage: "/Fratelli/assets/images/shower/главное фото.jpg",
        products: [
          {
            product: "/Fratelli/assets/images/shower/1.jpg",
            name: "Душевые",
            desc: "",
            id: 14,
          },
          {
            product: "/Fratelli/assets/images/shower/2.jpg",
            name: "Душевые",
            desc: "",
            id: 15,
          },
          {
            product: "/Fratelli/assets/images/shower/3.jpg",
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
        mainImage: "/Fratelli/assets/images/floar sink/главное фото.jpg",
        products: [
          {
            product: "/Fratelli/assets/images/floar sink/1.jpg",
            name: "Напольные раковины",
            desc: "",
            id: 17,
          },
          {
            product: "/Fratelli/assets/images/floar sink/2.jpg",
            name: "Напольные раковины",
            desc: "",
            id: 18,
          },
          {
            product: "/Fratelli/assets/images/floar sink/3.jpg",
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
        mainImage: "/Fratelli/assets/images/wall sink/главное фото.jpg",
        products: [
          {
            product: "/Fratelli/assets/images/wall sink/1.jpg",
            name: "Пристенные раковины",
            desc: "",
            id: 20,
          },
          {
            product: "/Fratelli/assets/images/wall sink/2.jpg",
            name: "Пристенные раковины",
            desc: "",
            id: 21,
          },
          {
            product: "/Fratelli/assets/images/wall sink/3.jpg",
            name: "Пристенные раковины",
            desc: "",
            id: 22,
          },
          {
            product: "/Fratelli/assets/images/wall sink/4.jpg",
            name: "Пристенные раковины",
            desc: "",
            id: 23,
          },
          {
            product: "/Fratelli/assets/images/wall sink/5.jpg",
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
        mainImage: "/Fratelli/assets/images/counter/главное фото.jpg",
        products: [
          {
            product: "/Fratelli/assets/images/counter/1.jpg",
            name: "Столешницы",
            desc: "",
            id: 25,
          },
          {
            product: "/Fratelli/assets/images/counter/2.jpg",
            name: "Столешницы",
            desc: "",
            id: 26,
          },
          {
            product: "/Fratelli/assets/images/counter/3.jpg",
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
