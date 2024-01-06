import Card from "./Card";

export default function Products({
  allProducts,
  selectedCategory,
  onLikeProduct,
  likedProducts,
}) {
  const filteredProducts = allProducts.filter((product) => {
    if (!selectedCategory) return product;
    return product.category === selectedCategory;
  });

  return (
    <>
      <section id="products" className="flex flex-wrap justify-evenly p-5">
        <div className="w-full text-center text-4xl my-5"> Products</div>
        {filteredProducts.map((product) => (
          <Card
            product={product}
            key={product.productCode}
            onLikeProduct={onLikeProduct}
            likedProducts={likedProducts}
          />
        ))}
      </section>
    </>
  );
}
