

export default function Products({ children }) {
  return (
    <>
      <section id="products" className="flex flex-wrap justify-evenly p-5">
        <div className="w-full text-center text-4xl my-5"> Products</div>
        {children}
      </section>
    </>
  );
}
