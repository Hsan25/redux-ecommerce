import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPriceCart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let isDuplicate = false;

      const carts = state.cartItems.map((cart) => {
        if (cart.id == action.payload.id) {
          cart.qty += action.payload.qty;
          cart.totalPrice += cart.totalPrice;
          isDuplicate = true;
        }
        return cart;
      });

      const totalPriceCart = carts.length
        ? carts.reduce((a, c) => a + c.totalPrice, 0).toFixed(2)
        : 0;

      state.totalPriceCart = totalPriceCart || action.payload.totalPrice;
      isDuplicate
        ? (state.cartItems = carts)
        : state.cartItems.push({ ...action.payload });
    },
    deleteToCart: (state, action) => {
      const { id } = action.payload;
      const index = state.cartItems.findIndex((cart) => cart.id == id);
      state.cartItems.splice(index, 1);
      const totalPriceCart = state.cartItems
        .reduce((a, c) => a + c.totalPrice, 0)
        .toFixed(2);
      state.totalPriceCart = totalPriceCart || action.payload.totalPrice;
    },
    addQuantityProduct: (state, action) => {
      const { qty, productId } = action.payload;
      const carts = state.cartItems.map((cart) => {
        if (cart.id == productId) {
          cart.qty += qty;
          cart.totalPrice += cart.price;
        }
        return cart;
      });
      state.cartItems = carts;
      const totalPriceCart = carts
        .reduce((a, c) => a + c.totalPrice, 0)
        .toFixed(2);
      state.totalPriceCart = totalPriceCart;
    },

    deleteQuantityProduct: (state, action) => {
      const { qty, productId } = action.payload;
      const carts = state.cartItems.map((cart) => {
        if (cart.id == productId) {
          if (cart.qty == 1) return cart;
          cart.qty -= qty;
          cart.totalPrice -= cart.price;
        }
        return cart;
      });
      state.cartItems = carts;
      const totalPriceCart = carts
        .reduce((a, c) => a + c.totalPrice, 0)
        .toFixed(2);
      state.totalPriceCart = totalPriceCart;
    },
  },
});

export const {
  addToCart,
  deleteToCart,
  addQuantityProduct,
  deleteQuantityProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
