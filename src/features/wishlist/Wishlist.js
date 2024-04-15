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
      <section
        id="wishlist"
        className="grid h-[100dvh] min-w-full grid-rows-[auto_1fr_2fr] gap-y-4 px-10"
      >
        <h2 className="p-4 text-center text-4xl">My Wishlist</h2>
        <div className="grid grid-rows-3 items-center justify-center bg-biege p-4">
          <p className="text-2xl">
            You want to keep all your preferred products close at hand?
          </p>
          <hr className="w-full border-black" />
          <div className="flex w-full flex-col items-center justify-center space-y-4">
            <Link
              to="/"
              className=" w-1/4 bg-black p-4 text-center text-xl text-biege transition-colors duration-500 hover:bg-stone-50 hover:text-black"
            >
              <span>Register</span>
            </Link>
            <span>
              Already Registered?{" "}
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
