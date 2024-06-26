import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/apiStore";

const products = await getProducts();
const categories = Array.from(new Set(products.map((item) => item.category)));

const initialState = {
  products,
  categories,
  selectedCategory: "",
  likedItems: [],
  cartItems: [],
  status: "idle",
  error: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    likeItem(state, action) {
      if (state.likedItems.includes(action.payload)) {
        state.likedItems.splice(state.likedItems.indexOf(action.payload), 1);
      } else state.likedItems.push(action.payload);
    },
    addToCart(state, action) {
      if (state.cartItems.includes(action.payload)) {
        state.cartItems.splice(state.cartItems.indexOf(action.payload), 1);
      } else state.cartItems.push(action.payload);
    },
  },
});

export const { selectCategory, likeItem, addToCart } = productSlice.actions;
export default productSlice.reducer;
