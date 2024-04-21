import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TrashIcon from "../../ui/icons/TrashIcon";
import { addToCart, likeItem } from "../products/productSlice";

function WishlistItem({ item }) {
  const { cartItems } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  return (
    <>
      <div className=" flex items-center bg-yellow-500 p-2 md:p-4">
        <div className="p-2  md:p-5">
          <Link to={`/product/${item.productCode}`}>
            <img
              src={item.img}
              alt={item.productName}
              className="h-32 w-32 object-cover object-center md:h-64 md:w-64"
            />
          </Link>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col">
            <Link
              to={`/product/${item.productCode}`}
              className="text-sm font-semibold md:text-2xl"
            >
              {item.productName}
            </Link>
            <span className="text-xs md:text-base">
              Product Code:{item.productCode}{" "}
            </span>
            <span className="text-xs md:text-base">
              Price: {item.newPrice}{" "}
            </span>
          </div>
          <div className="flex space-x-5">
            <button
              className="w-max text-2xl hover:text-black/70 active:text-white"
              onClick={(e) => {
                e.preventDefault();
                dispatch(likeItem(item.productCode));
              }}
            >
              <TrashIcon height="20px" />
            </button>
          </div>
          <div className="">
            <button
              id="add-to-cart-btn"
              className="mt-3 w-full rounded border border-black bg-black  px-1 text-biege hover:bg-biege hover:text-black active:bg-white md:w-2/3"
              onClick={(e) => {
                e.preventDefault();
                dispatch(addToCart(item.productCode));
              }}
            >
              {cartItems.includes(item.productCode)
                ? "Remove from Cart"
                : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishlistItem;
