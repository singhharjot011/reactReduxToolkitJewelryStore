import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getProductDetails } from "../../services/apiStore";
import ArrowBack from "../../ui/icons/ArrowBack";
import ShippingIcon from "../../ui/icons/ShippingIcon";
import { addToCart } from "./productSlice";

function FullView() {
  const dispatch = useDispatch();

  function handleImgClick(i) {
    setCurDispImg(i);
  }
  const cartItems = useSelector((state) => state.products.cartItems);
  //   const product = useSelector((state) => state.products.selectedProduct);
  const product = useLoaderData()[0];

  function getColorClass(c) {
    if (c === "gold") return "bg-[#FFD700]";
    if (c === "silver") return "bg-gray-200";
    if (c === "blue") return "bg-blue-700";

    if (c === "white") return "bg-white border border-1";
    if (c.startsWith("rose")) return "bg-[#b76e79]/50 border border-1";
    else return "bg-gray-200";
  }

  const [curDispImg, setCurDispImg] = useState(product.img);
  const navigate = useNavigate();

  return (
    <section
      id="product-view"
      className="relative h-full w-full bg-babyPink/20 p-10"
      key={product.productCode}
    >
      <button onClick={() => navigate(-1)}>
        <ArrowBack height="35px" />
      </button>
      <div className="flex h-full w-full flex-col items-center md:flex-row">
        <div
          id="product-image-slides"
          className="flex   gap-1  p-5  md:flex-col md:flex-wrap md:gap-5"
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
          className=" flex  h-64 flex-grow justify-center md:h-96 "
        >
          <img
            src={curDispImg}
            alt="Product Name"
            className=" rounded-xl object-contain  "
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
            <button
              id="add-to-cart-btn"
              className="mt-3 w-1/2 rounded border border-black bg-black text-xs  text-biege hover:bg-biege hover:text-black active:bg-white md:w-full md:text-base"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Close
            </button>
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
  );
}

export async function loader({ params }) {
  const product = await getProductDetails(params.productCode);
  return product;
}

export default FullView;
