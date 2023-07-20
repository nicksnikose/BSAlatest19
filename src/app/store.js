import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../../../Front-end/src/features/auth/authSlice"
import productReducer from "../../../Front-end/src/features/product/productSlice"
import cartReducer from "../../../Front-end/src/features/cart/cartSlice"
export const store = configureStore({
  reducer: {
    auth:authReducer,
    product:productReducer,
    cart:cartReducer,
  },
});
