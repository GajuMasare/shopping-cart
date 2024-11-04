import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    { id: 1, name: "Bread", price: 110, image: "/Bread.jpg", offer: "" },
    { id: 2, name: "Milk", price: 50, image: "/milk.jpg", offer: "" },
    {
      id: 3,
      name: "Cheese",
      price: 90,
      image: "/cheese.jpg",
      offer: "Buy 1 Get 1 Free!",
    },
    {
      id: 4,
      name: "Soup",
      price: 60,
      image: "/soup.jpg",
      offer: "Buy 1 and get Bread for half the price!",
    },
    {
      id: 5,
      name: "Butter",
      price: 120,
      image: "/butter.jpeg",
      offer: "Buy 2 and get 1 free!",
    },
  ],
  reducers: {},
});

export default productsSlice.reducer;
