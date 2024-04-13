import CartItem from "./CartItem";

export default function Cart() {
  return (
    <>
      <section className="p-10">
        <h2 className="text-center text-4xl p-4">Your Shopping Bag</h2>
        <div className="flex  bg-biege shadow-lg w-full">
          <>
            <div className="w-2/3 h-full p-4">
              <CartItem />
            </div>

            <div className=" w-1/3 h-full p-4 bg-white m-4">
              <OrderSummary />
            </div>
          </>
        </div>
      </section>
    </>
  );
}



