import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishlistItem from "./WishlistItem";

export default function Wishlist() {
  const { products, likedItems } = useSelector((state) => state.products);
  const filteredLikedItems = products.filter((item) =>
    likedItems.some((code) => code === item.productCode),
  );

  return (
    <>
      <section id="wishlist" className="w-full p-4 md:p-10">
        <h2 className="p-2 text-center text-2xl md:p-4 md:text-4xl">
          My Wishlist
        </h2>
        <div className="grid grid-rows-3 items-center justify-center bg-biege p-4">
          <p className="text-center text-lg md:text-2xl">
            You want to keep all your preferred products close at hand?
          </p>
          <hr className="m-0 w-full border-black p-0" />
          <div className="flex w-full flex-col items-center justify-center space-y-4">
            <Link
              to="/"
              className=" bg-black p-2 text-center text-base  text-biege transition-colors duration-500 hover:bg-stone-50 hover:text-black md:w-1/4 md:p-4 md:text-xl"
            >
              <span>Register</span>
            </Link>
            <span>
              Already Registered?
              <Link to="/login" className="underline">
                Login
              </Link>
            </span>
          </div>
        </div>
        <div className="overflow-auto ">
          {filteredLikedItems.map((item) => (
            <WishlistItem item={item} key={item.productCode} />
          ))}
        </div>
      </section>
    </>
  );
}
