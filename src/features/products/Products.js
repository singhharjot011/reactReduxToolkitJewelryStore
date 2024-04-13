import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiStore";
import ProductsCard from "./ProductsCard";

export default function Products() {
  const allProducts = useSelector((state) => state.products.products);
  const { selectedCategory } = useSelector((state) => state.products);
  const filteredProducts = selectedCategory
    ? allProducts.filter((item) => item.category === selectedCategory)
    : allProducts;

  return (
    <>
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
    </>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}
