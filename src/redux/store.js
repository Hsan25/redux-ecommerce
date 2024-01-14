import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import viewReducer from "./slices/viewSlice";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    view: viewReducer,
    product: productReducer,
  },
});
