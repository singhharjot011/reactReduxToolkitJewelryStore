import "./App.css";
import Header from "./Components/Headers/Header";
import Navbar from "./Components/Navbar/Navbar";
import Tagline1 from "./Components/Taglines/Tagline1";
import Category from "./Components/Category/Category";
import Featured from "./Components/Products/Featured";
import Data from "./Database/Data";
import Products from "./Components/Products/Products";
import BestSellers from "./Components/Products/BestSellers";
import ProductView from "./Components/Products/ProductView";
import { useState } from "react";
import Wishlist from "./Components/Wishlist/Wishlist";
import Cart from "./Components/Cart/Cart";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allProducts, setAllProducts] = useState(Data);
  const [likedProductsCodes, setLikedProductsCodes] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartProductsCodes, setCartProductsCodes] = useState([]);

  const allCategories = Array.from(
    new Set(allProducts.map((product) => product.category))
  );

  function handleSelectedCategory(category) {
    setSelectedCategory(selectedCategory === category ? null : category);
  }

  function handleSelectedProduct(product) {
    setSelectedProduct((selectedProduct) => (selectedProduct = product));
  }

  function handleCartProductsCodes(cartProductCode) {
    if (cartProductsCodes.includes(cartProductCode)) {
      setCartProductsCodes(
        cartProductsCodes.filter(
          (productCode) => productCode !== cartProductCode
        )
      );
    } else
      setCartProductsCodes((cartProductsCodes) =>
        Array.from(new Set([...cartProductsCodes, cartProductCode]))
      );
  }

  function handleLikedProductsCodes(likedProductCode) {
    if (likedProductsCodes.includes(likedProductCode)) {
      setLikedProductsCodes(
        likedProductsCodes.filter(
          (productCode) => productCode !== likedProductCode
        )
      );
    } else
      setLikedProductsCodes((likedProductsCodes) =>
        Array.from(new Set([...likedProductsCodes, likedProductCode]))
      );
  }

  return (
    <>
      <Header
        likedProductsCodes={likedProductsCodes}
        cartProductsCodes={cartProductsCodes}
      />
      <Navbar />
      <Tagline1 />
      <Category
        allCategories={allCategories}
        onSelectCategory={handleSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Products
        allProducts={allProducts}
        selectedCategory={selectedCategory}
        onLikeProduct={handleLikedProductsCodes}
        likedProductsCodes={likedProductsCodes}
        onSelectProduct={handleSelectedProduct}
        onModifyCartProduct={handleCartProductsCodes}
      />
      <Wishlist
        likedProductsCodes={likedProductsCodes}
        allProducts={allProducts}
        onLikeProduct={handleLikedProductsCodes}
      />

      {selectedProduct && (
        <ProductView
          selectedProduct={selectedProduct}
          onModifyCartProduct={handleCartProductsCodes}
          cartProductsCodes={cartProductsCodes}
        />
      )}
      <Featured
        allProducts={allProducts}
        selectedCategory={selectedCategory}
        onLikeProduct={handleLikedProductsCodes}
        likedProductsCodes={likedProductsCodes}
        onSelectProduct={handleSelectedProduct}
      />
      <BestSellers
        allProducts={allProducts}
        selectedCategory={selectedCategory}
        onLikeProduct={handleLikedProductsCodes}
        likedProductsCodes={likedProductsCodes}
        onSelectProduct={handleSelectedProduct}
      />
      <Cart
        cartProductsCodes={cartProductsCodes}
        allProducts={allProducts}
        onModifyCartProduct={handleCartProductsCodes}
      ></Cart>
    </>
  );
}

export default App;
