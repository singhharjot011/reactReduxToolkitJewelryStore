import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/apiStore";

const products = await getProducts();
const categories = Array.from(new Set(products.map((item) => item.category)));

const initialState = {
  products,
  categories,
  selectedProduct: {},
  selectedCategory: "",
  likedItems: (() => {
    const items = JSON.parse(localStorage.getItem("likedItems"));
    return items || [];
  })(),
  cartItems: (() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    return items || [];
  })(),
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
    selectProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    likeItem(state, action) {
      if (state.likedItems.includes(action.payload)) {
        state.likedItems.splice(state.likedItems.indexOf(action.payload), 1);
        const newLikedItems = JSON.stringify(state.likedItems);
        localStorage.setItem("likedItems", newLikedItems);
      } else {
        state.likedItems.push(action.payload);
        const newLikedItems = JSON.stringify(state.likedItems);
        localStorage.setItem("likedItems", newLikedItems);
      }
    },
    addToCart(state, action) {
      if (state.cartItems.includes(action.payload)) {
        state.cartItems.splice(state.cartItems.indexOf(action.payload), 1);
        const newCartItems = JSON.stringify(state.cartItems);
        localStorage.setItem("cartItems", newCartItems);
      } else {
        state.cartItems.push(action.payload);
        const newCartItems = JSON.stringify(state.cartItems);
        localStorage.setItem("cartItems", newCartItems);
      }
    },
  },
});

export const {
  selectCategory,
  likeItem,
  unlikeItem,
  addToCart,
  selectProduct,
  selectedProduct,
} = productSlice.actions;
export default productSlice.reducer;
