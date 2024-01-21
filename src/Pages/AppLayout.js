import { Outlet } from "react-router-dom";
import Cards from "../Components/Cards/Cards";
import Footer from "../Components/Footer/Footer";
import BestSellers from "../Components/Products/BestSellers";
import Featured from "../Components/Products/Featured";

function AppLayout({
  children,
  filteredProducts,
  selectedCategory,
  onLikeProduct,
  likedProductsCodes,
  onSelectProduct,

}) {
  return (
    <>
      {children}
      <Outlet />
      <Featured>
        <Cards
          filteredProducts={filteredProducts}
          selectedCategory={selectedCategory}
          onLikeProduct={onLikeProduct}
          likedProductsCodes={likedProductsCodes}
          onSelectProduct={onSelectProduct}

        />
      </Featured>
      <BestSellers>
        <Cards
          filteredProducts={filteredProducts}
          selectedCategory={selectedCategory}
          onLikeProduct={onLikeProduct}
          likedProductsCodes={likedProductsCodes}
          onSelectProduct={onSelectProduct}

        />
      </BestSellers>
      <Footer />
    </>
  );
}

export default AppLayout;
