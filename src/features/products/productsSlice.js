import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    { id: 1, name: "Bread", price: 110, image: "/Bread.jpg" },
    { id: 2, name: "Milk", price: 50, image: "/milk.jpg" },
    { id: 3, name: "Cheese", price: 90, image: "/cheese.jpg" },
    { id: 4, name: "Soup", price: 60, image: "/soup.jpg" },
    { id: 5, name: "Butter", price: 120, image: "/butter.jpeg" },
  ],
  reducers: {},
});

export default productsSlice.reducer;
