import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex h-[calc(70dvh-4rem)] w-full flex-col items-center justify-evenly space-y-6">
      <span className="text-3xl font-semibold">Uhh Ohhhh Why So Empty?</span>

      <Link to="/">
        <span className="bg-black p-4 text-biege">Go Shopping</span>
      </Link>
    </div>
  );
}

export default EmptyCart;
