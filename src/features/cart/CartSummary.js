import { Link } from "react-router-dom";

function CartSummary({ filteredCartItems }) {
  const subtotal = filteredCartItems.reduce(
    (sum, item) => (sum += Number(item.newPrice.slice(1))),
    0,
  );
  const tax = 13;

  return (
    <div className="flex  flex-col space-y-3  bg-white p-4">
      <h3 className="text-base font-bold md:text-xl">Order Summary</h3>
      <div className="flex justify-between text-sm md:text-base">
        <span>Sub Total</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between text-sm md:text-base">
        <span>Tax</span>
        <span>{tax}%</span>
      </div>
      <hr />
      <div className="flex justify-between text-sm md:text-base">
        <span>Total</span>
        <span>${subtotal + (subtotal * tax) / 100}</span>
      </div>
      <div className="flex w-full justify-center">
        <Link
          to="/checkout"
          className="w-full bg-black px-4 py-2 text-center text-sm text-biege transition-colors duration-500 hover:bg-stone-50 hover:text-black md:text-base"
        >
          <span>Checkout</span>
        </Link>
      </div>
      <div className="text-center">
        <span className="text-xs font-thin text-stone-400">
          By clicking the button you accept the{" "}
          <Link to="/" className="underline">
            Terms and Conditions
          </Link>{" "}
          of React Jewels Canada Ltd. and you agree that you have read and
          accept our{" "}
          <Link to="/" className="underline">
            Privacy Policy
          </Link>
          .
        </span>
      </div>
    </div>
  );
}

export default CartSummary;
