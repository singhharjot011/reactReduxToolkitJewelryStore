import "./App.css";
import HeroHeader from "./Components/Headers/HeroHeader";
import Navbar from "./Components/Navbar/HeroNavbar";
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
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import AppLayout from "./Pages/AppLayout";
import CommonHeader from "./Components/Headers/CommonHeader";
import Footer from "./Components/Footer/Footer";
import PageNotFound from "./Pages/PageNotFound";
import CommonNavbar from "./Components/Navbar/CommonNavbar";
import ShopByCategoryLayout from "./Pages/ShopByCategoryLayout";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allProducts, setAllProducts] = useState(Data);
  const [likedProductsCodes, setLikedProductsCodes] = useState(() => {
    const likedCodes = localStorage.getItem("likedProductsCodes");
    return likedCodes ? JSON.parse(likedCodes) : [];
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartProductsCodes, setCartProductsCodes] = useState(() => {
    const cartCodes = localStorage.getItem("cartProductsCodes");
    return cartCodes ? JSON.parse(cartCodes) : [];
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
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="products" />} />
          <Route
            path="/"
            element={
              <AppLayout>
                <HeroHeader
                  likedProductsCodes={likedProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                />
                <Navbar cartProductsCodes={cartProductsCodes} />
                <Tagline1 />
                <Category
                  allCategories={allCategories}
                  onSelectCategory={handleSelectedCategory}
                  selectedCategory={selectedCategory}
                />
              </AppLayout>
            }
          >
            <Route
              path="products"
              element={
                <Products selectedCategory={selectedCategory}>
                  <Cards
                    filteredProducts={filteredProducts}
                    onLikeProduct={handleLikedProductsCodes}
                    likedProductsCodes={likedProductsCodes}
                    onSelectProduct={handleSelectedProduct}
                  />
                </Products>
              }
            />
            <Route
              path="products/:id"
              element={
                <ProductView
                  selectedProduct={selectedProduct}
                  onModifyCartProduct={handleCartProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                />
              }
            />
          </Route>
          <Route
            path="cart"
            element={
              <>
                <CommonHeader
                  likedProductsCodes={likedProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                />
                <Cart
                  cartProductsCodes={cartProductsCodes}
                  allProducts={allProducts}
                  onModifyCartProduct={handleCartProductsCodes}
                ></Cart>
              </>
            }
          />
          <Route
            path="wishlist"
            element={
              <>
                <CommonHeader
                  likedProductsCodes={likedProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                />
                <Wishlist
                  likedProductsCodes={likedProductsCodes}
                  allProducts={allProducts}
                  onLikeProduct={handleLikedProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                  onModifyCartProduct={handleCartProductsCodes}
                />
              </>
            }
          />
          {/* <Route
            path="shop-by-category"
            element={
              <ShopByCategoryLayout>
                <CommonHeader
                  likedProductsCodes={likedProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                />
                <Category
                  allCategories={allCategories}
                  onSelectCategory={handleSelectedCategory}
                  selectedCategory={selectedCategory}
                />
              </ShopByCategoryLayout>
            }
          >
            <Route
              path="category/:cat"
              element={
                <Products selectedCategory={selectedCategory}>
                  <Cards
                    filteredProducts={filteredProducts}
                    onLikeProduct={handleLikedProductsCodes}
                    likedProductsCodes={likedProductsCodes}
                    onSelectProduct={handleSelectedProduct}
                  />
                </Products>
              }
            />
            <Route
              path="category/:cat/:pid"
              element={
                <ProductView
                  selectedProduct={selectedProduct}
                  onModifyCartProduct={handleCartProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                />
              }
            />
          </Route> */}

          <Route
            path="*"
            element={
              <>
                <CommonHeader
                  likedProductsCodes={likedProductsCodes}
                  cartProductsCodes={cartProductsCodes}
                />
                <PageNotFound />
              </>
            }
          />
        </Routes>
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
        <Footer />
        {/* {selectedProduct && (
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
        </BestSellers> */}
      </BrowserRouter>
    </>
  );
}

export default App;
