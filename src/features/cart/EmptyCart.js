function EmptyCart() {
  return (
    <div className="flex flex-col space-y-6 w-full h-72 justify-center items-center">
      <span className="text-3xl font-semibold">Uhh Ohhhh Why So Empty?</span>

      <Link to="/">
        <span className="bg-black text-biege p-4">Go Shopping</span>
      </Link>
    </div>
  );
}

export default EmptyCart;
