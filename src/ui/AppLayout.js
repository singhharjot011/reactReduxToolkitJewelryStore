import HeroHeader from "./headers/HeroHeader";
import Category from "../features/category/Category";
import FeaturedProducts from "../features/products/FeaturedProducts";
import Tagline from "../ui/Tagline";
import BestSellersProducts from "../features/products/BestSellerProducts";
import Products from "../features/products/Products";
import Wishlist from "../features/wishlist/Wishlist";
import Cart from "../features/cart/Cart";

function AppLayout() {
  return (
    <>
      <HeroHeader />
      <Tagline
        tagline={"Elegance in Every Piece, Crafted for You"}
        paragraph={
          "Our jewelry is designed to adorn and empower, celebrating the timeless beauty of Indian culture with every piece. Discover the perfect blend of heritage and style in our handcrafted jewelry collections."
        }
      />
      <Category />
      <Products />
      <FeaturedProducts />
      <BestSellersProducts />
      <Wishlist />
      <Cart />
    </>
  );
}

export default AppLayout;
