import "./App.css";
import Header from "./Components/Headers/Header";
import Navbar from "./Components/Navbar/Navbar";
import Tagline1 from "./Components/Taglines/Tagline1";
import Category from "./Components/Category/Category";
import Featured from "./Components/Products/Featured";
import Data from "./Database/Data";
import Products from "./Components/Products/Products";
import Cards from "./Components/Cards/Cards";
import BestSellers from "./Components/Products/BestSellers";
import ProductView from "./Components/Products/ProductView";
import { useEffect, useState } from "react";
import Wishlist from "./Components/Wishlist/Wishlist";
import Cart from "./Components/Cart/Cart";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allProducts, setAllProducts] = useState(Data);
  const [likedProductsCodes, setLikedProductsCodes] = useState(() => {
    const likedCodes = localStorage.getItem("likedProductsCodes");
    return JSON.parse(likedCodes);
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartProductsCodes, setCartProductsCodes] = useState(() => {
    const cartCodes = localStorage.getItem("cartProductsCodes");
    return JSON.parse(cartCodes);
  });

  const allCategories = Array.from(
    new Set(allProducts.map((product) => product.category))
  );

  const filteredProducts = allProducts.filter((product) => {
    if (!selectedCategory) return product;
    return product.category === selectedCategory;
  });

  const filterFeaturedProducts = allProducts.filter(
    (product) => product.featured
  );

  const filterBestSellers = allProducts.filter((product) => product.bestSeller);

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

  useEffect(
    function () {
      localStorage.setItem(
        "likedProductsCodes",
        JSON.stringify(likedProductsCodes)
      );
    },
    [likedProductsCodes]
  );

  useEffect(
    function () {
      localStorage.setItem(
        "cartProductsCodes",
        JSON.stringify(cartProductsCodes)
      );
    },
    [cartProductsCodes]
  );

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
      <Products>
        <Cards
          filteredProducts={filteredProducts}
          onLikeProduct={handleLikedProductsCodes}
          likedProductsCodes={likedProductsCodes}
          onSelectProduct={handleSelectedProduct}
        />
      </Products>
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
      <Featured>
        <Cards
          filteredProducts={filterFeaturedProducts}
          selectedCategory={selectedCategory}
          onLikeProduct={handleLikedProductsCodes}
          likedProductsCodes={likedProductsCodes}
          onSelectProduct={handleSelectedProduct}
        />
      </Featured>
      <BestSellers>
        <Cards
          filteredProducts={filterBestSellers}
          selectedCategory={selectedCategory}
          onLikeProduct={handleLikedProductsCodes}
          likedProductsCodes={likedProductsCodes}
          onSelectProduct={handleSelectedProduct}
        />
      </BestSellers>
      <Cart
        cartProductsCodes={cartProductsCodes}
        allProducts={allProducts}
        onModifyCartProduct={handleCartProductsCodes}
      ></Cart>
    </>
  );
}

export default App;
