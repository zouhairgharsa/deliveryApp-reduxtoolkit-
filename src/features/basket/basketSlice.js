import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const indexX = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      if(indexX <0) return ;
      state.items = state.items.filter((_, index) => index !== indexX);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
