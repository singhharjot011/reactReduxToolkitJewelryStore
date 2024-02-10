import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Stars from "../Stars/Stars";

export default function Card({
  product,
  onLikeProduct,
  likedProductsCodes,
  onSelectProduct,
}) {
  const body = document.querySelectorAll("#root > :not(.product-view-class)");
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  return (
    <div className="mt-10">
      <div className="flex flex-col p-2  w-60 h-[350px]  rounded-xl bg-white">
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
            className=" absolute top-2 left-2 hover:text-black/70 cursor-pointer bg-biege rounded-full p-1 
  active:bg-biege/60"
            onClick={(e) => {
              e.preventDefault();
              onLikeProduct(product.productCode);
            }}
          >
            {likedProductsCodes?.includes(product.productCode) ? (
              <AiFillHeart key={crypto.randomUUID()} />
            ) : (
              <AiOutlineHeart key={crypto.randomUUID()} />
            )}
          </span>
          <img
            src={product?.img}
            alt={product?.productName}
            className="h-full w-full object-cover  rounded-xl"
          ></img>
          <Link
            to={`/products/${product.productCode}?name=${product.productName}&color=${product.color}`}
            className="bg-black text-white cursor-pointer  p-2 absolute bottom-10  w-3/4 text-center opacity-0 group-hover:opacity-100 duration-500"
            onClick={
              (e) => {
                onSelectProduct(product);
                [...body].map((a) => a.classList.add("opacity-20", "blur-sm"));
              }
              //
            }
          >
            View Product
          </Link>
        </div>
        <div className="self-center p-2 h-1/5  flex flex-col text-center">
          <strong>{product?.productName}</strong>
          <span className="text-sm">
            <del>{product?.statusTag === "Sale" && product?.prevPrice}</del>{" "}
            {product?.newPrice}
          </span>
          <span className="flex self-center text-yellow-400 ">
            <Stars rating={product.rating} />
          </span>
        </div>
      </div>
    </div>
  );
}
