import WishlistItem from "./WishlistItem";

export default function Wishlist() {
  return (
    <>
      <section id="wishlist" className="flex flex-col p-32  ">
        <h2 className="text-center text-4xl p-4">Your Wishlist</h2>
        <div className="h-60 flex flex-col justify-center items-center bg-biege w-full">
          <p>This will have some Account login option</p>
          <hr className="w-1/2 border-black" />
        </div>

        <WishlistItem/>
      </section>
    </>
  );
}

