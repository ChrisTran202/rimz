// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice.js'; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;