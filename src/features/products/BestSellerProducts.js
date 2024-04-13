import { useSelector } from "react-redux";
import Tagline from "../../ui/Tagline";
import ProductsCard from "./ProductsCard";

export default function BestSellersProducts() {
  const bestSellersProducts = useSelector(
    (state) => state.products.products,
  ).filter((item) => item.bestSeller);

  return (
    <>
      <Tagline
        tagline={"Love at First Sight"}
        paragraph={
          "Explore our top sellers and find your favorites. Discover the pieces that steal hearts ♥"
        }
      />
      <section
        id="products"
        className="relative flex flex-wrap justify-evenly p-5 "
      >
        <div className="my-5 w-full text-center text-4xl ">
          Best Sellers of this Week
        </div>
        {bestSellersProducts.map((item) => (
          <ProductsCard item={item} key={item.productCode} />
        ))}
      </section>
    </>
  );
}
