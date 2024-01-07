
import Card from "./Card";


export default function Featured({ allProducts,onLikeProduct,likedProductsCodes,onSelectProduct }) {
  const filterFeaturedProducts = allProducts.filter(
    (product) => product.featured
  );

  return (
    <section id="featured" className="flex flex-wrap justify-evenly p-5">
      <div className="w-full text-center text-4xl my-5"> Featured</div>
      {filterFeaturedProducts.map((product) => (
        <Card product={product}
        key={product.productCode}
        onLikeProduct={onLikeProduct}
        likedProductsCodes={likedProductsCodes}
        onSelectProduct={onSelectProduct} />
      ))}
    </section>
  );
}
