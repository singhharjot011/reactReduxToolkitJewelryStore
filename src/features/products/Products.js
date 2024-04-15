import { useSelector } from "react-redux";
import { Outlet, useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiStore";
import BestSellersProducts from "./BestSellerProducts";
import FeaturedProducts from "./FeaturedProducts";
import ProductsCard from "./ProductsCard";
import Category from "../category/Category";

export default function Products() {
  const allProducts = useLoaderData();

  const { selectedCategory } = useSelector((state) => state.products);
  const filteredProducts = selectedCategory
    ? allProducts.filter((item) => item.category === selectedCategory)
    : allProducts;

  return (
    <>
      <Category />
      <section
        id="products"
        className="relative flex flex-wrap justify-evenly p-5 "
      >
        <div className="my-5 w-full text-center text-4xl ">
          {selectedCategory ? selectedCategory : "All Products"}
        </div>
        {filteredProducts.map((item) => (
          <ProductsCard item={item} key={item.productCode} />
        ))}
      </section>
      <FeaturedProducts />
      <BestSellersProducts />
    </>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}
