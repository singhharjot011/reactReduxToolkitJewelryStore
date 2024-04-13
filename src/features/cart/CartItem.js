import { useDispatch } from "react-redux";
import TrashIcon from "../../ui/icons/TrashIcon";
import { addToCart } from "../products/productSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className=" flex items-center bg-white ">
      <div className="p-5">
        <img
          src={item.img}
          alt={item.productName}
          className="h-80 w-80 object-cover object-center"
        ></img>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold">{item.productName}</h4>
          <span>Product Code: {item.productCode}</span>
          <span>Price: {item.newPrice}</span>
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
