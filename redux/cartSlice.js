import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartValue: 0,
  },
  reducers: {
    // Add to cart
    addToCart: (state, action) => {
      const findIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (findIndex == -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items[findIndex].quantity = state.items[findIndex].quantity + 1;
      }
    },
    // Remove to cart
    removeFromCart: (state, action) => {
      const findIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (state.items[findIndex].quantity > 1) {
        state.items[findIndex].quantity -= 1;
      } else {
        state.items.splice(findIndex, 1);
      }
    },
    //remove specific item from cart
    removeSpecificItemFromCart: (state, action) => {
      const findIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      state.items.splice(findIndex, 1);
    },
    clearCart: (state, action) => {},
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  removeSpecificItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
