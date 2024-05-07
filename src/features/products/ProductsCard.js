import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeartIcon from "../../ui/icons/HeartIcon";
import HeartIconFilled from "../../ui/icons/HeartIconFilled";
import Modal from "../../ui/modal/Modal";
import StatusTag from "../../ui/smallComponents/StatusTag";
import Stars from "../../ui/stars/Stars";
import { likeItem } from "./productSlice";
import QuickView from "./QuickView";

export default function ProductsCard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { likedItems } = useSelector((state) => state.products);

  return (
    <div className="mt-10 w-1/2 p-2 md:w-1/4 lg:w-1/5">
      <div className=" h flex h-[350px]  flex-col rounded-xl  bg-white p-2">
        <div className="group relative flex h-4/5 w-full flex-col items-center justify-center ">
          <StatusTag statusTag={item.statusTag} />
          <span
            className="z-60 absolute left-2 top-2 cursor-pointer rounded-full bg-biege p-1 hover:text-black/70 
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
            className="h-full w-full cursor-pointer  rounded-xl object-cover"
          ></img>
          <button
            className="absolute bottom-20 w-3/4  cursor-pointer bg-black p-2  text-center text-xs text-white opacity-0 duration-500 group-hover:opacity-100 md:text-base"
            onClick={() => {
              navigate(`/product/${item.productCode}`);
            }}
          >
            Full View
          </button>
          <Modal>
            <Modal.Open opens="product-view" prod={item}>
              <div className="absolute bottom-5 w-3/4  cursor-pointer bg-black p-2  text-center text-xs text-white opacity-0 duration-500 group-hover:opacity-100 md:text-base">
                Quick View
              </div>
            </Modal.Open>
            <Modal.Window name="product-view">
              <QuickView />
            </Modal.Window>
          </Modal>
        </div>
        <div className="flex h-1/5 flex-col self-center py-1 text-center text-xs md:py-2 md:text-base lg:text-lg">
          <strong>{item.productName}</strong>
          <span className="">
            <del>{item.statusTag === "Sale" && item.prevPrice}</del>
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
