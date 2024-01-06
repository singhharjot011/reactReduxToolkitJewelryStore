

import { MdOutlineLocalShipping } from "react-icons/md";
import { useState } from "react";

export const ProductView = () => {
  return (
    <>
      <section
        id="product-view"
        className="flex py-5 h-[1000px]"
        key={Math.random()}
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
          <img src="" className="object-cover w-[550px] h-[750px]"></img>
        </div>
        <div id="product-details" className="flex flex-col w-1/4 mt-5  px-5">
          <div>
            <h2 className="text-2xl font-semibold">Product Name</h2>
            <p>Very Sohna Tikka looking like wow description</p>
            <span className="text-lg font-semibold">
              <del>50</del> 10
            </span>
          </div>
          <hr />
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="w-full text-xl font-semibold ">Colors</span>
            <img src="" className="object-cover h-10 w-10 "></img>
            <img src="" className="object-cover h-10 w-10 "></img>
            <img src="" className="object-cover h-10 w-10 "></img>
          </div>
          <hr />
          <div className="w-full">
            <button
              id="add-to-cart-btn"
              className="bg-black text-biege w-full border-black border hover:bg-biege hover:text-black active:bg-white"
            >
              Btn
            </button>
          </div>
          <div className="flex items-center gap-x-2 mt-5">
            <MdOutlineLocalShipping />
            <p className="text-black/60 text-sm">
              Free standard shipping over $120.00
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductView;
