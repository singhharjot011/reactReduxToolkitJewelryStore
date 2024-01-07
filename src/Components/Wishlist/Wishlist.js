import { useState, useEffect, useRef } from "react";

import { BsTrash3 } from "react-icons/bs";

export default function Wishlist({
  likedProductsCodes,
  allProducts,
  onLikeProduct,
}) {
  const filterLikedProducts = allProducts.filter((product) =>
    likedProductsCodes.some((code) => code === product.productCode)
  );

  return (
    <>
      <section id="wishlist" className="flex flex-col p-32  ">
        <h2 className="text-center text-4xl p-4">Your Wishlist</h2>
        <div className="h-96 flex flex-col justify-center items-center bg-biege w-full">
          <p>This will have some Account login option</p>
          <hr className="w-1/2 border-black" />
        </div>
        {filterLikedProducts.map((product) => (
          <WishlistProduct
            product={product}
            key={product.productCode}
            onLikeProduct={onLikeProduct}
          />
        ))}
      </section>
    </>
  );
}

function WishlistProduct({ product, onLikeProduct }) {
  return (
    <div className=" flex items-center bg-yellow-500 w-full">
      <div className="p-5">
        <img
          src={product.img}
          alt={product.productName}
          className="h-80 w-80 object-cover object-center"
        ></img>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold">{product.productName}</h4>
          <span>Product Code: {product.productCode}</span>
          <span>Price: {product.newPrice}</span>
        </div>
        <div className="flex space-x-5">
          <button
            className="text-2xl hover:text-black/70 active:text-white"
            onClick={(e) => onLikeProduct(product.productCode)}
          >
            <BsTrash3 />
          </button>
        </div>
      </div>
    </div>
  );
}
