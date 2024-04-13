import { useDispatch, useSelector } from "react-redux";
import HeartIcon from "../../ui/icons/HeartIcon";
import HeartIconFilled from "../../ui/icons/HeartIconFilled";
import StatusTag from "../../ui/smallComponents/StatusTag";
import Stars from "../../ui/stars/Stars";
import { likeItem } from "./productSlice";

export default function ProductsCard({ item }) {
  const dispatch = useDispatch();
  const { likedItems } = useSelector((state) => state.products);

  return (
    <div className="mt-10">
      <div className="flex h-[350px] w-60  flex-col rounded-xl  bg-white p-2">
        <div className="group relative flex h-4/5 w-full flex-col items-center justify-center ">
          <StatusTag statusTag={item.statusTag} />
          <span
            className="absolute left-2 top-2 cursor-pointer rounded-full bg-biege p-1 hover:text-black/70 
  active:bg-biege/60"
            onClick={(e) => {
              e.preventDefault();
              dispatch(likeItem(item.productCode));
            }}
          >
            {likedItems.includes(item.productCode) ? (
              <HeartIconFilled height={"18px"} width={"18px"} />
            ) : (
              <HeartIcon height={"18px"} width={"18px"} />
            )}
          </span>
          <img
            src={item.img}
            alt={item.productName}
            className="h-full w-full rounded-xl  object-cover"
          ></img>
          <div
            className="absolute bottom-10 w-3/4  cursor-pointer bg-black p-2  text-center text-white opacity-0 duration-500 group-hover:opacity-100"
            onClick={(e) => {}}
          >
            View Product
          </div>
        </div>
        <div className="flex h-1/5 flex-col  self-center p-2 text-center">
          <strong>{item.productName}</strong>
          <span className="text-sm">
            <del>{item.prevPrice}</del>
            {item.newPrice}
          </span>
          <span className="flex self-center text-yellow-400 ">
            <Stars rating={item.rating} />
          </span>
        </div>
      </div>
    </div>
  );
}
