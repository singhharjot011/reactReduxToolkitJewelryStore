import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function Card({
  filteredProducts,
  onLikeProduct,
  likedProductsCodes,
  onSelectProduct,
}) {
  const soldOutClass = "bg-white text-black text-sm p-1 absolute top-0 right-0";
  const saleClass = "bg-black text-white text-sm p-1 absolute top-0 right-0";

  return (
    <>
      {filteredProducts.map((product) => (
        <div
          className="flex flex-col p-2 w-72 max-h-max cursor-pointer shadow-lg shadow-biege"
          key={product.productCode}
        >
          <div className="w-full h-full group flex flex-col items-center justify-center relative ">
            <span className={soldOutClass}>{product?.statusTag}</span>
            <span
              className=" absolute top-2 left-2 hover:text-black/70 bg-biege rounded-full p-1 
            active:bg-biege/60"
              onClick={(e) => onLikeProduct(product.productCode)}
            >
              {likedProductsCodes?.includes(product.productCode) ? (
                <AiFillHeart key={crypto.randomUUID()} />
              ) : (
                <AiOutlineHeart key={crypto.randomUUID()} />
              )}
            </span>
            <img
              src={product?.img}
              className="h-full object-cover"
              onClick={(e) => onSelectProduct(product)}
            ></img>
            <span className="bg-black text-white  p-2 absolute bottom-10  w-3/4 text-center opacity-0 group-hover:opacity-100 duration-500">
              Quick View
            </span>
          </div>
          <div className="self-center p-2 text-xl flex flex-col text-center">
            <span>{product?.productName}</span>
            <span className="text-sm">
              <del>{product?.prevPrice}</del> {product?.newPrice}
            </span>
            <span className="flex self-center text-yellow-400 ">
              {new Array(Math.round(product.rating)).fill(1).map((e) => (
                <AiFillStar key={crypto.randomUUID()} />
              ))}

              <span className="text-sm ms-2 text-black">{product?.rating}</span>
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
