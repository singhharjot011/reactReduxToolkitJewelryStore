import CategoryCard from "./CategoryCard";

export default function Category({
  allCategories,
  onSelectCategory,
  selectedCategory,
}) {
  return (
    <section id="category" className="flex flex-wrap justify-evenly">
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
