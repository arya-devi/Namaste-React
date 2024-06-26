import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //mutating the state overhere mean directly modify the state
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    removeitem: (state, action) => {
      state.items.pop(action.payload);
    },
    clearcart: (state) => {
      state.items.length = 0;
    },
  },
});
export const { additem, removeitem, clearcart } = cartSlice.actions;
export default cartSlice.reducer;
