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
  const [likedProducts, setLikedProducts] = useState([]);

  const allCategories = Array.from(
    new Set(allProducts.map((product) => product.category))
  );

  function handleSelectedCategory(category) {
    setSelectedCategory(selectedCategory === category ? null : category);
  }

  function handleLikedProducts(likedProductCode) {
    // console.log(likedProducts.includes(likedProductCode));
    if (likedProducts.includes(likedProductCode)) {
      setLikedProducts(
        likedProducts.filter((productCode) => productCode !== likedProductCode)
      );
    } else
      setLikedProducts((likedProducts) =>
        Array.from(new Set([...likedProducts, likedProductCode]))
      );
  }

  return (
    <>
      <Header />
      <Navbar />
      <Tagline1 />
      <Category
        allCategories={allCategories}
        onSelectCategory={handleSelectedCategory}
      />
      <Products
        allProducts={allProducts}
        selectedCategory={selectedCategory}
        onLikeProduct={handleLikedProducts}
        likedProducts={likedProducts}
      />
      <Wishlist
        likedProducts={likedProducts}
        allProducts={allProducts}
        onLikeProduct={handleLikedProducts}
      />

      <ProductView />
      <Featured />
      <BestSellers />
      <Cart></Cart>
    </>
  );
}

export default App;
