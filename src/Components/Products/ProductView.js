import { useEffect, useState } from "react";
import { MdOutlineLocalShipping, MdClose } from "react-icons/md";

import { useNavigate } from "react-router-dom";

export default function ProductView({
  selectedProduct,
  onModifyCartProduct,
  cartProductsCodes,
}) {
  const navigate = useNavigate();

  const [curDispImg, setCurDispImg] = useState(selectedProduct.img);
  function handleImgClick(i) {
    setCurDispImg(i);
  }

  useEffect(() => {
    const body = document.querySelectorAll("#root > :not(.product-view-class)");
    [...body].map((a) => a.classList.remove("opacity-20", "blur-sm"));
  }, []);

  function getColorClass(c) {
    if (c === "gold") return "bg-[#FFD700]";
    if (c === "silver") return "bg-gray-200";
    if (c === "blue") return "bg-blue-700";

    if (c === "white") return "bg-white border border-1";
    if (c.startsWith("rose")) return "bg-[#b76e79]/50 border border-1";
    else return "bg-gray-200";
  }

  if (!selectedProduct) return;
  return (
    <>
      <section
        id="product-view"
        className="product-view-class border-8 border-white  flex py-8 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-xl shadow-lg bg-babyPink w-[calc(80%-2rem)] h-[calc(100%-4rem)]"
        key={selectedProduct.productCode}
      >
        <button
          className="absolute right-5 top-5 text-4xl"
          onClick={(e) => {
            // [...body].map((a) => a.classList.remove("opacity-20", "blur-sm"));
            navigate(-1);
          }}
        >
          <MdClose />
        </button>
        <div
          id="product-image-slides"
          className="flex flex-col flex-wrap p-5 gap-5 w-1/4 "
        >
          {selectedProduct.imgArr?.map((i) => (
            <img
              src={i}
              alt="random"
              className={`object-cover h-32 w-1/2 cursor-pointer ${
                curDispImg === i ? "opacity-40" : ""
              }`}
              onClick={() => handleImgClick(i)}
              key={crypto.randomUUID()}
            ></img>
          ))}
        </div>
        <div
          id="product-image"
          className="flex flex-wrap justify-center w-1/2 mt-5"
        >
          <img
            src={curDispImg}
            alt={selectedProduct.productName}
            className="object-cover w-[350px] h-[450px] rounded-xl"
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
            <span
              className={`${getColorClass(
                selectedProduct.color
              )} rounded-full h-8 w-8 `}
            ></span>
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
