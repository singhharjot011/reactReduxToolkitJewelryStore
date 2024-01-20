import { MdOutlineLocalShipping } from "react-icons/md";
import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function ProductView({
  selectedProduct,
  onModifyCartProduct,
  cartProductsCodes,
}) {


  if (!selectedProduct) return;
  return (
    <>
      <section
        id="product-view"
        className="flex py-5 h-[1000px]"
        key={selectedProduct.productCode}
      >
        <div
          id="product-image-slides"
          className="flex flex-col flex-wrap p-5 gap-5 w-1/4 h-1/2"
        >
          <img src="" className="object-cover h-32 w-32 "></img>
          <img src="" className="object-cover h-32 w-32 "></img>
          <img src="" className="object-cover h-32 w-32 "></img>
          <img src="" className="object-cover h-32 w-32 "></img>
          <img src="" className="object-cover h-32 w-32 "></img>
        </div>
        <div
          id="product-image"
          className="flex flex-wrap justify-center w-1/2 mt-5"
        >
          <img
            src={selectedProduct.img}
            className="object-cover w-[550px] h-[750px]"
          ></img>
        </div>
        <div id="product-details" className="flex flex-col w-1/4 mt-5  px-5">
          <div>
            <h2 className="text-2xl font-semibold">
              {selectedProduct.productName}
            </h2>
            <p>
              {selectedProduct.description ? selectedProduct.description : ""}
            </p>
            <span className="text-lg font-semibold">
              <del>{selectedProduct.prevPrice}</del> {selectedProduct.newPrice}
            </span>
          </div>
          <hr />
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="w-full text-xl font-semibold ">
              {selectedProduct.color}
            </span>
            <img src="" className="object-cover h-10 w-10 "></img>
            <img src="" className="object-cover h-10 w-10 "></img>
            <img src="" className="object-cover h-10 w-10 "></img>
          </div>
          <hr />
          <div className="w-full flex justify-center items-center">
            <button
              id="add-to-cart-btn"
              className="bg-black text-biege w-2/3 mt-3  rounded border-black border hover:bg-biege hover:text-black active:bg-white"
              onClick={() => onModifyCartProduct(selectedProduct.productCode)}
            >
              {cartProductsCodes.includes(selectedProduct.productCode)
                ? "Added To Cart"
                : "Add To Cart"}
            </button>
          </div>
          <div className="flex justify-center items-center gap-x-2 mt-5">
            <MdOutlineLocalShipping />
            <p className="text-black/60 text-sm">
              Free standard shipping over $120.00
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
