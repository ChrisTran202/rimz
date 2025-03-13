import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      // (Optional) Check for duplicates here and increase quantity if needed.
      state.items.push(newItem);
      state.totalQuantity += 1;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.totalQuantity = Math.max(0, state.totalQuantity - 1);
    },
    
  },
},);



export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
