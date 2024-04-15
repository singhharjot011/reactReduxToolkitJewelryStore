import { useDispatch, useSelector } from "react-redux";
import TrashIcon from "../../ui/icons/TrashIcon";
import { addToCart, likeItem } from "../products/productSlice";

function WishlistItem({ item }) {
  const { cartItems } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  return (
    <>
      <div className=" flex w-full items-center justify-center bg-yellow-500">
        <div className="w-1/3 p-5">
          <img
            src={item.img}
            alt={item.productName}
            className="h-60 w-60 object-cover object-center"
          ></img>
        </div>
        <div className="flex w-1/3 flex-col space-y-5">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">{item.productName}</h4>
            <span>Product Code:{item.productCode} </span>
            <span>Price: {item.newPrice} </span>
          </div>
          <div className="flex space-x-5">
            <button
              className=" hover:text-black/70 active:text-white"
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
              className="mt-3 w-2/3 rounded border  border-black bg-black text-biege hover:bg-biege hover:text-black active:bg-white"
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
