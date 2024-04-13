function WishlistItem() {
  return (
    <>
      <div className=" flex items-center justify-center bg-yellow-500 w-full">
        <div className="p-5 w-1/3">
          <img
            src=""
            alt="Product Name"
            className="h-60 w-60 object-cover object-center"
          ></img>
        </div>
        <div className="flex flex-col space-y-5 w-1/3">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Product Name</h4>
            <span>Product Code: </span>
            <span>Price: </span>
          </div>
          <div className="flex space-x-5">
            <button
              className=" hover:text-black/70 active:text-white"
              onClick={(e) => {}}
            >
              🚮
            </button>
          </div>
          <div className="">
            <button
              id="add-to-cart-btn"
              className="bg-black text-biege w-2/3 mt-3  rounded border-black border hover:bg-biege hover:text-black active:bg-white"
              onClick={() => {}}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishlistItem;
