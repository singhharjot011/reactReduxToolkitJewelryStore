import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const { products, cartItems } = useSelector((state) => state.products);
  const filteredCartItems = products.filter((item) =>
    cartItems.includes(item.productCode),
  );


  if (!cartItems.length) return <EmptyCart />;
  return (
    <>
      <section className="w-full p-10">
        <h2 className="p-4 text-center text-4xl">Your Shopping Bag</h2>
        <div className="flex w-full  justify-evenly space-y-4 bg-biege p-4 shadow-lg">
          <div className="w-1/2">
            {filteredCartItems.map((item) => (
              <CartItem item={item} key={item.productCode} />
            ))}
          </div>

          <div className="w-1/3">
            <CartSummary filteredCartItems={filteredCartItems} />
          </div>
        </div>
      </section>
    </>
  );
}
