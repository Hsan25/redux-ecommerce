import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  showDetailProduct: {
    status: false,
    product: {},
  },
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    showCart: (state, action) => {
      state.showCart = action.payload.showCart;
    },
    showDetailProduct: (state, action) => {
      state.showDetailProduct = action.payload;
    },
  },
});

export const { showCart, showDetailProduct } = viewSlice.actions;
export default viewSlice.reducer;
