import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    subtotal: 0,
    totalSavings: 0,
    finalTotal: 0,
  },
  reducers: {},
});

export default cartSlice.reducer;
