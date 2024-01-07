import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";

export default function Cart({
  cartProductsCodes,
  allProducts,
  onModifyCartProduct,
}) {
  const [bill, setBill] = useState(0);
  const taxInPercent = 13;

  const filterCartProducts = allProducts.filter((product) =>
    cartProductsCodes.some((code) => code === product.productCode)
  );

  return (
    <>
      <section className="p-10">
        <h2 className="text-center text-4xl p-4">Your Shopping Bag</h2>
        <div className="flex  bg-biege shadow-lg w-full">
          {cartProductsCodes.length === 0 && (
            <div className="flex w-full h-72 justify-center items-center">
              <span className="text-3xl font-semibold">
                Uhh Ohhhh Why So Empty?
              </span>
            </div>
          )}

          {cartProductsCodes.length > 0 && (
            <>
              <div className="w-2/3 h-full p-4">
                {filterCartProducts.map((product) => (
                  <CartProduct
                    product={product}
                    onModifyCartProduct={onModifyCartProduct}
                    key={product.productCode}
                  />
                ))}
              </div>

              <div className=" w-1/3 h-full p-4 bg-white m-4">
                <OrderSummary
                  filterCartProducts={filterCartProducts}
                  bill={bill}
                  setBill={setBill}
                  taxInPercent={taxInPercent}
                />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

function CartProduct({ product, onModifyCartProduct }) {
  return (
    <div className=" flex items-center bg-white ">
      <div className="p-5">
        <img
          src={product.img}
          alt={product.productName}
          className="h-80 w-80 object-cover object-center"
        ></img>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold">{product.productName}</h4>
          <span>Product Code: {product.productCode}</span>
          <span>Price: {product.newPrice}</span>
        </div>
        <div className="flex space-x-5">
          <button
            className="text-2xl hover:text-black/70 active:text-white"
            onClick={(e) => onModifyCartProduct(product.productCode)}
          >
            <BsTrash3 />
          </button>
        </div>
      </div>
    </div>
  );
}

function OrderSummary({ filterCartProducts, bill, setBill, taxInPercent }) {
  setBill(
    filterCartProducts.reduce(
      (acc, product) => (acc += Number(product.newPrice.slice(1))),
      0
    )
  );

  return (
    <div className="flex flex-col space-y-3">
      <h3 className="font-bold text-xl">Order Summary</h3>
      <div className="flex justify-between">
        <span>Sub Total</span>
        <span>${bill}</span>
      </div>
      <div className="flex justify-between">
        <span>Tax</span>
        <span>{taxInPercent}%</span>
      </div>
      <hr />
      <div className="flex justify-between">
        <span>Total</span>
        <span>${bill + bill * (taxInPercent / 100)}</span>
      </div>
    </div>
  );
}
