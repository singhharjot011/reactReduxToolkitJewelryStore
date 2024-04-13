import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

export default function Cart() {
  const { products, cartItems } = useSelector((state) => state.products);
  const filteredCartItems = products.filter((item) =>
    cartItems.includes(item.productCode),
  );

  return (
    <>
      <section className="p-10">
        <h2 className="p-4 text-center text-4xl">Your Shopping Bag</h2>
        <div className="flex  w-full bg-biege shadow-lg">
          <>
            <div className="h-full w-2/3 p-4">
              {filteredCartItems.map((item) => (
                <CartItem item={item} key={item.productCode} />
              ))}
            </div>

            <div className=" m-4 h-full w-1/3 bg-white p-4">
              <CartSummary />
            </div>
          </>
        </div>
      </section>
    </>
  );
}
