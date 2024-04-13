function CartSummary() {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="font-bold text-xl">Order Summary</h3>
      <div className="flex justify-between">
        <span>Sub Total</span>
        <span>$</span>
      </div>
      <div className="flex justify-between">
        <span>Tax</span>
        <span>%</span>
      </div>
      <hr />
      <div className="flex justify-between">
        <span>Total</span>
        <span>$</span>
      </div>
    </div>
  );
}

export default CartSummary;
