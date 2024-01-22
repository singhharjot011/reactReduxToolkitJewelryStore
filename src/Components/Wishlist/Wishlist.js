import { useState, useEffect, useRef } from "react";

import { BsTrash3 } from "react-icons/bs";
import Footer from "../Footer/Footer";
import CommonHeader from "../Headers/CommonHeader";

export default function Wishlist({
  likedProductsCodes,
  allProducts,
  onLikeProduct,
  cartProductsCodes,
  onModifyCartProduct,
}) {
  const filterLikedProducts = allProducts.filter((product) =>
    likedProductsCodes.some((code) => code === product.productCode)
  );

  return (
    <>
      <section id="wishlist" className="flex flex-col p-32  ">
        <h2 className="text-center text-4xl p-4">Your Wishlist</h2>
        <div className="h-60 flex flex-col justify-center items-center bg-biege w-full">
          <p>This will have some Account login option</p>
          <hr className="w-1/2 border-black" />
        </div>
        {filterLikedProducts.map((product) => (
          <WishlistProduct
            product={product}
            key={product.productCode}
            onLikeProduct={onLikeProduct}
            cartProductsCodes={cartProductsCodes}
            onModifyCartProduct={onModifyCartProduct}
          />
        ))}
      </section>
    </>
  );
}

function WishlistProduct({
  product,
  onLikeProduct,
  cartProductsCodes,
  onModifyCartProduct,
}) {
  return (
    <>
      <div className=" flex items-center justify-center bg-yellow-500 w-full">
        <div className="p-5 w-1/3">
          <img
            src={product.img}
            alt={product.productName}
            className="h-60 w-60 object-cover object-center"
          ></img>
        </div>
        <div className="flex flex-col space-y-5 w-1/3">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">{product.productName}</h4>
            <span>Product Code: {product.productCode}</span>
            <span>Price: {product.newPrice}</span>
          </div>
          <div className="flex space-x-5">
            <button
              className=" hover:text-black/70 active:text-white"
              onClick={(e) => onLikeProduct(product.productCode)}
            >
              <BsTrash3 />
            </button>
          </div>
          <div className="">
            <button
              id="add-to-cart-btn"
              className="bg-black text-biege w-2/3 mt-3  rounded border-black border hover:bg-biege hover:text-black active:bg-white"
              onClick={() => onModifyCartProduct(product.productCode)}
            >
              {cartProductsCodes.includes(product.productCode)
                ? "Added To Cart"
                : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
