import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";

export default function Category() {
  const allCategories = useSelector((state) => state.products.categories);


  return (
    <section id="category" className="flex flex-wrap justify-evenly p-10">
      <div className="my-5 w-full text-center text-4xl"> Shop By Category</div>
      {allCategories.map((cat) => (
        <CategoryCard category={cat} key={cat} />
      ))}
    </section>
  );
}
