import { createSlice } from "@reduxjs/toolkit";

import products from "../../products.json";

const initialState = {
  products,
  sortBy: "default",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setDefaultProducts: (state) => {

      state.products =  products;
    },
  },
});

export const { setProducts, setDefaultProducts } = productSlice.actions;
export default productSlice.reducer;
