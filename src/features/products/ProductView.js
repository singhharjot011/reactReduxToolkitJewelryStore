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
        <div className="fixed left-1/2  top-1/2 z-50 flex h-[calc(100%-4rem)] w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col items-center overflow-auto rounded-xl  border-8 border-white bg-biege py-8 shadow-lg lg:w-[calc(80%-2rem)] lg:flex-row">
          <button
            className="absolute right-5 top-5 text-4xl"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            ✖
          </button>
          <div
            id="product-image-slides"
            className="flex  gap-1 overflow-auto p-5 lg:w-1/4 lg:flex-col lg:flex-wrap lg:gap-5 "
          >
            {product.imgArr?.map((i) => (
              <img
                src={i}
                alt={product.productName}
                className={`h-32 w-1/5 cursor-pointer rounded-lg object-cover ${
                  curDispImg === i ? "opacity-40" : ""
                }`}
                onClick={() => handleImgClick(i)}
                key={i}
              ></img>
            ))}
          </div>
          <div
            id="product-image"
            className="h-76 mt-5 flex w-3/4 flex-wrap items-center justify-center object-cover  lg:w-1/2 "
          >
            <img
              src={curDispImg}
              alt="Product Name"
              className=" rounded-xl"
            ></img>
          </div>
          <div
            id="product-details"
            className="mt-5 flex flex-col items-center px-5  text-xs md:text-base lg:w-1/4 lg:items-start"
          >
            <div className="text-center lg:text-start">
              <h2 className="font-semibold">{product.productName}</h2>
              <p>{product.productDescription}</p>
              <span className=" font-semibold">
                <del>{product.statusTag === "Sale" && product.prevPrice}</del>
                {product.newPrice}
              </span>
            </div>
            <hr />
            <div className="mb-10 flex flex-wrap gap-2 text-center lg:text-start">
              <span className="w-full  font-semibold ">Color </span>
              <span
                className={` h-8 w-8 rounded-full ${getColorClass(product.color)}`}
              ></span>
            </div>
            <hr />
            <div className="flex w-full flex-col items-center justify-center">
              <button
                id="add-to-cart-btn"
                className="mt-3 w-1/2 rounded border border-black bg-black text-xs  text-biege hover:bg-biege hover:text-black active:bg-white lg:w-full lg:text-base"
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
                className="mt-3 w-1/2 rounded border border-black bg-black text-center  text-xs text-biege hover:bg-biege hover:text-black active:bg-white lg:w-full lg:text-base"
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
