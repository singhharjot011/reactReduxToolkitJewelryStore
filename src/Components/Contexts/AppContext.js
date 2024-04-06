import { createContext, useContext, useEffect, useReducer } from "react";
import Data from "../../Database/Data";

const AppContext = createContext();

const initialState = {
  selectedCategory: null,
  allProducts: Data,
  likedProductsCodes: () => {
    const cartCodes = localStorage.getItem("likedProductsCodes");
    return cartCodes ? JSON.parse(cartCodes) : [];
  },
  selectedProduct: null,
  cartProductsCodes: () => {
    const cartCodes = localStorage.getItem("cartProductsCodes");
    return cartCodes ? JSON.parse(cartCodes) : [];
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "one":
      return null;
    default:
      throw new Error("Unknown Action");
  }
}

function AppProvider({ children }) {
  const [
    {
      selectedCategory,
      allProducts,
      selectedProduct,
      cartProductsCodes,
      likedProductsCodes,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        allProducts,
        likedProductsCodes,
        selectedProduct,
        cartProductsCodes,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { AppProvider, useApp };
