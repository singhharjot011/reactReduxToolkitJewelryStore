import { useSelector } from "react-redux";
import WishlistItem from "./WishlistItem";

export default function Wishlist() {
  const { products, likedItems } = useSelector((state) => state.products);
  const filteredLikedItems = products.filter((item) =>
    likedItems.includes(item.productCode),
  );

  return (
    <>
      <section id="wishlist" className="flex flex-col p-32  ">
        <h2 className="p-4 text-center text-4xl">Your Wishlist</h2>
        <div className="flex h-60 w-full flex-col items-center justify-center bg-biege">
          <p>This will have some Account login option</p>
          <hr className="w-1/2 border-black" />
        </div>

        {filteredLikedItems.map((item) => (
          <WishlistItem item={item} key={item.productCode} />
        ))}
      </section>
    </>
  );
}
