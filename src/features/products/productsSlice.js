import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    { id: 1, name: "Pro1", price: 100 },
    { id: 2, name: "Pro2", price: 200 },
  ],
  reducers: {},
});

export default productsSlice.reducer;
