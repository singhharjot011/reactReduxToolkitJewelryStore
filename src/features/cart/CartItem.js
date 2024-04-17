import { useDispatch } from "react-redux";
import TrashIcon from "../../ui/icons/TrashIcon";
import { addToCart } from "../products/productSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className=" flex items-center bg-white p-2 md:p-4">
      <div className="p-2 md:p-5">
        <img
          src={item.img}
          alt={item.productName}
          className="h-32 w-32 object-cover object-center md:h-64 md:w-64"
        ></img>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold md:text-2xl">
            {item.productName}
          </h4>
          <span className="text-xs md:text-base">
            Product Code: {item.productCode}
          </span>
          <span className="text-xs md:text-base">Price: {item.newPrice}</span>
        </div>
        <div className="flex space-x-5">
          <button
            className="text-2xl hover:text-black/70 active:text-white"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addToCart(item.productCode));
            }}
          >
            <TrashIcon height="20px" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
