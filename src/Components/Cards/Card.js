import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import Stars from "../Stars/Stars";

const soldOutClass = "bg-white text-black text-sm p-1 absolute top-0 right-0";
const saleClass = "bg-black text-white text-sm p-1 absolute top-0 right-0";

export default function Card({
  product,
  onLikeProduct,
  likedProductsCodes,
  onSelectProduct,
}) {
  return (
    <Link to="/products">
      <div className="flex flex-col p-2  w-60 h-[350px] cursor-pointer shadow-lg shadow-biege  rounded-xl">
        <div className="w-full h-4/5 group flex flex-col items-center justify-center relative ">
          <span
            className={`${
              product?.statusTag === "Hot"
                ? " bg-yellow-400 "
                : product?.statusTag === "New"
                ? "bg-green-500 "
                : product?.statusTag === "Sale"
                ? "bg-black text-white"
                : product?.statusTag === "Sold"
                ? "bg-red-500 text-white"
                : "bg-white"
            }  text-sm p-1 absolute top-0 right-0`}
          >
            {product?.statusTag}
          </span>
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
            className="h-full w-full object-cover  rounded-xl"
            onClick={(e) => onSelectProduct(product)}
          ></img>
          <span className="bg-black text-white  p-2 absolute bottom-10  w-3/4 text-center opacity-0 group-hover:opacity-100 duration-500">
            Quick View
          </span>
        </div>
        <div className="self-center p-2 h-1/5  flex flex-col text-center">
          <span>{product?.productName}</span>
          <span className="text-sm">
            <del>{product?.statusTag === "Sale" && product?.prevPrice}</del>{" "}
            {product?.newPrice}
          </span>
          <span className="flex self-center text-yellow-400 ">
            <Stars rating={product.rating} />
          </span>
        </div>
      </div>
    </Link>
  );
}
