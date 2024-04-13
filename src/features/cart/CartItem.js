function CartItem() {
  return (
    <div className=" flex items-center bg-white ">
      <div className="p-5">
        <img
          src=""
          alt="product name"
          className="h-80 w-80 object-cover object-center"
        ></img>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold">product name</h4>
          <span>Product Code: </span>
          <span>Price: </span>
        </div>
        <div className="flex space-x-5">
          <button
            className="text-2xl hover:text-black/70 active:text-white"
            onClick={(e) => {}}
          >
            🚮
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
