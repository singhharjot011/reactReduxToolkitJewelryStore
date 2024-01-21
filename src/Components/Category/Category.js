import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

export default function Category({
  allCategories,
  onSelectCategory,
  selectedCategory,
}) {
  const { cat } = useParams();
  console.log(cat);
  return (
    <section id="category" className="flex flex-wrap justify-evenly p-10">
      <div className="w-full text-center text-4xl my-5"> Shop By Category</div>
      {allCategories.map((cat) => (
        <CategoryCard
          category={cat}
          key={cat}
          onSelectCategory={onSelectCategory}
          selectedCategory={selectedCategory}
        />
      ))}
    </section>
  );
}
