
import Card from "./Card";
export default function Cards({
  filteredProducts,
  onLikeProduct,
  likedProductsCodes,
  onSelectProduct,
}) {


  return (
    <>
      {filteredProducts.map((product) => (
        <Card
          key={product.productCode}
          product={product}
          onLikeProduct={onLikeProduct}
          likedProductsCodes={likedProductsCodes}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </>
  );
}
