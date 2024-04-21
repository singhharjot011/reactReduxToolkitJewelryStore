import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router";
import { getProductDetails } from "../../services/apiStore";
import ShippingIcon from "../../ui/icons/ShippingIcon";
import { addToCart } from "./productSlice";

export default function ProductView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useLoaderData()[0];
  const [curDispImg, setCurDispImg] = useState(product.img);
  function handleImgClick(i) {
    setCurDispImg(i);
  }
  const cartItems = useSelector((state) => state.products.cartItems);

  function getColorClass(c) {
    if (c === "gold") return "bg-[#FFD700]";
    if (c === "silver") return "bg-gray-200";
    if (c === "blue") return "bg-blue-700";

    if (c === "white") return "bg-white border border-1";
    if (c.startsWith("rose")) return "bg-[#b76e79]/50 border border-1";
    else return "bg-gray-200";
  }

  return (
    <>
      <section
        id="product-view"
        className="fixed  h-screen w-screen  bg-black/40 backdrop-blur-md"
        key={product.productCode}
      >
        <div className="fixed left-1/2  top-1/2 z-50 flex h-[calc(100dvh-4rem)] w-[calc(100dvw-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col items-center overflow-auto rounded-xl  border-8 border-white bg-biege py-8 shadow-lg md:w-[calc(80%-2rem)] md:flex-row">
          <button
            className="absolute right-5 top-5 text-xl md:text-4xl"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            ✖
          </button>
          <div
            id="product-image-slides"
            className="flex  h-1/6 gap-1 overflow-y-auto p-5 md:h-auto md:flex-col md:flex-wrap md:gap-5"
          >
            {product.imgArr?.map((i) => (
              <img
                src={i}
                alt={product.productName}
                className={` h-20 cursor-pointer  rounded-lg object-cover md:h-32 ${
                  curDispImg === i ? "opacity-40" : ""
                }`}
                onClick={() => handleImgClick(i)}
                key={i}
              ></img>
            ))}
          </div>
          <div
            id="product-image"
            className="mt-5 flex h-1/3 flex-wrap items-center justify-center overflow-hidden object-cover md:mt-0 md:h-full md:w-3/4 lg:w-1/2"
          >
            <img
              src={curDispImg}
              alt="Product Name"
              className=" h-72 rounded-xl  sm:h-96 md:h-4/5 "
            ></img>
          </div>
          <div
            id="product-details"
            className="mt-5 flex h-1/6 flex-col items-center px-5 text-xs sm:text-lg  md:mt-0 md:h-auto lg:w-1/4 lg:items-start"
          >
            <div className="text-center lg:text-start">
              <h2 className="text-xs font-semibold sm:text-xl">
                {product.productName}
              </h2>
              <p>{product.productDescription}</p>
              <span className=" font-semibold">
                <del>{product.statusTag === "Sale" && product.prevPrice}</del>
                {product.newPrice}
              </span>
            </div>
            <hr />
            <div className="flex items-center justify-center space-y-2 text-center md:mb-5 md:flex-wrap lg:text-start">
              <span className="font-semibold  md:w-full ">Color </span>
              <span
                className={` h-4 w-4 rounded-full md:h-8 md:w-8 ${getColorClass(product.color)}`}
              ></span>
            </div>
            <hr />
            <div className="flex w-full flex-col items-center justify-center">
              <button
                id="add-to-cart-btn"
                className="mt-3 w-1/2 rounded border border-black bg-black text-xs  text-biege hover:bg-biege hover:text-black active:bg-white md:w-full md:text-base"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToCart(product.productCode));
                }}
              >
                {cartItems.includes(product.productCode)
                  ? "Remove from Cart"
                  : "Add To Cart"}
              </button>
              <Link
                to="/cart"
                id="go-to-cart-btn"
                className="mt-3 w-1/2 rounded border border-black bg-black text-center  text-xs text-biege hover:bg-biege hover:text-black active:bg-white md:w-full md:text-base"
              >
                Go To Cart
              </Link>
            </div>
            <div className="mt-5 flex items-center justify-center gap-x-2">
              <ShippingIcon height={"24px"} />
              <p className="text-sm text-black/60">
                Free standard shipping over $120.00
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function loader({ params }) {
  const product = await getProductDetails(params.productCode);
  return product;
}
