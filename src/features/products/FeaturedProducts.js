import { useSelector } from "react-redux";
import Tagline from "../../ui/Tagline";
import ProductsCard from "./ProductsCard";

export default function FeaturedProducts() {
  const featuredProducts = useSelector(
    (state) => state.products.products,
  ).filter((item) => item.featured);

  return (
    <>
      <Tagline
        tagline={"World Of React Jewels"}
        paragraph={
          "Explore our Featured multifaceted products, from legacy to lifestyle and beyond."
        }
      />
      <section
        id="products"
        className="relative flex flex-wrap justify-evenly p-5 "
      >
        <div className="my-5 w-full text-center text-4xl ">Featured Items</div>
        {featuredProducts.map((item) => (
          <ProductsCard item={item} key={item.productCode} />
        ))}
      </section>
    </>
  );
}
