export default function ProductView() {
  // const [curDispImg, setCurDispImg] = useState(selectedProduct.img);
  // function handleImgClick(i) {
  //   setCurDispImg(i);
  // }

  // function getColorClass(c) {
  //   if (c === "gold") return "bg-[#FFD700]";
  //   if (c === "silver") return "bg-gray-200";
  //   if (c === "blue") return "bg-blue-700";

  //   if (c === "white") return "bg-white border border-1";
  //   if (c.startsWith("rose")) return "bg-[#b76e79]/50 border border-1";
  //   else return "bg-gray-200";
  // }

  return (
    <>
      <section
        id="product-view"
        className="product-view-class border-8 border-white  flex py-8 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-xl shadow-lg bg-babyPink w-[calc(80%-2rem)] h-[calc(100%-4rem)]"
        key={new Date()}
      >
        <button className="absolute right-5 top-5 text-4xl" onClick={(e) => {}}>
          ✖
        </button>
        <div
          id="product-image-slides"
          className="flex flex-col flex-wrap p-5 gap-5 w-1/4 "
        >
          <img
            src=""
            alt="random"
            className="object-cover h-32 w-1/2 cursor-pointer"
            onClick={() => {}}
            key={crypto.randomUUID()}
          ></img>
        </div>
        <div
          id="product-image"
          className="flex flex-wrap justify-center w-1/2 mt-5"
        >
          <img
            src=""
            alt="Product Name"
            className="object-cover w-[350px] h-[450px] rounded-xl"
          ></img>
        </div>
        <div id="product-details" className="flex flex-col w-1/4 mt-5  px-5">
          <div>
            <h2 className="text-2xl font-semibold">Product Name</h2>
            <p>Product Description</p>
            <span className="text-lg font-semibold">
              <del>Old Price</del> New Price
            </span>
          </div>
          <hr />
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="w-full text-xl font-semibold ">Color </span>
            <span className=" rounded-full h-8 w-8 bg-pink-500 "></span>
          </div>
          <hr />
          <div className="w-full flex justify-center items-center">
            <button
              id="add-to-cart-btn"
              className="bg-black text-biege w-2/3 mt-3  rounded border-black border hover:bg-biege hover:text-black active:bg-white"
              onClick={() => {}}
            >
              Add To Cart
            </button>
          </div>
          <div className="flex justify-center items-center gap-x-2 mt-5">
            🚚
            <p className="text-black/60 text-sm">
              Free standard shipping over $120.00
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
