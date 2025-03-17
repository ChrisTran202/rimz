import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  items: [],
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      state.data.push(newItem);
      state.totalQuantity += 1;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.data = state.items.filter(data => data.id !== id);
      state.totalQuantity = Math.max(0, state.totalQuantity - 1);
    },
    
  },
},);



export const { addItem, removeItem, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
