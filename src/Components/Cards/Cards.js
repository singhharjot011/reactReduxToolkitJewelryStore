import Card from "./Card";
export default function Cards({
  filteredProducts,
  onLikeProduct,
  likedProductsCodes,
  onSelectProduct,
}) {
  
  return (
    <div className="w-full h-full flex flex-wrap justify-evenly space-y-10 space-x-5 ">
      {filteredProducts.map((product) => (
        <Card
          key={product.productCode}
          product={product}
          onLikeProduct={onLikeProduct}
          likedProductsCodes={likedProductsCodes}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </div>
  );
}
