import Card from "./Card";

export default function BestSellers({
  allProducts,
  onLikeProduct,
  likedProductsCodes,
  onSelectProduct,
}) {
  const filterBestSellers = allProducts.filter((product) => product.bestSeller);

  return (
    <section id="featured" className="flex flex-wrap justify-evenly p-5">
      <div className="w-full text-center text-4xl my-5"> Best Sellers</div>
      {filterBestSellers.map((product) => (
        <Card
          product={product}
          key={product.productCode}
          onLikeProduct={onLikeProduct}
          likedProductsCodes={likedProductsCodes}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </section>
  );
}
