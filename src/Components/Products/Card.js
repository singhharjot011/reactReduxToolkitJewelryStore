import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

export default function Card({
  product,
  onLikeProduct,
  likedProductsCodes,
  onSelectProduct,
}) {
  const soldOutClass = "bg-white text-black text-sm p-1 absolute top-0 right-0";
  const saleClass = "bg-black text-white text-sm p-1 absolute top-0 right-0";
  const ratingStars = product?.rating
    ? new Array(Math.round(product.rating))
    : [];
  ratingStars.fill(1);

  return (
    <>
      <div className="flex flex-col p-2 w-72 cursor-pointer shadow-lg shadow-biege">
        <div className="w-full h-full group flex flex-col items-center justify-center relative ">
          <span className={soldOutClass}>{product?.statusTag}</span>
          <span
            className=" absolute top-2 left-2 hover:text-black/70 bg-biege rounded-full p-1 
            active:bg-biege/60"
            onClick={(e) => onLikeProduct(product.productCode)}
          >
            {likedProductsCodes?.includes(product.productCode) ? (
              <AiFillHeart />
            ) : (
              <AiOutlineHeart />
            )}
          </span>
          <img
            src={product?.img}
            className="h-full"
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
            {/* <AiFillStar /> */}
            {ratingStars.length > 0
              ? ratingStars.map((e, i) => <AiFillStar key={i} />)
              : ""}
            <span className="text-sm ms-2 text-black">{product?.rating}</span>
          </span>
        </div>
      </div>
    </>
  );
}
