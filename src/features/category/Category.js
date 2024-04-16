import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";

export default function Category() {
  const allCategories = useSelector((state) => state.products.categories);

  return (
    <section
      id="category"
      className="flex flex-wrap justify-evenly p-2 md:p-5 lg:p-10"
    >
      <div className="my-5 w-full text-center text-xl md:text-4xl">
        Shop By Category
      </div>
      {allCategories.map((cat) => (
        <CategoryCard category={cat} key={cat} />
      ))}
    </section>
  );
}
