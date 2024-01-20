import { Outlet } from "react-router-dom";

export default function Products({ children, selectedCategory }) {
  return (
    <>
      <section id="products" className="flex flex-wrap justify-evenly p-5 ">
        <div className="w-full text-center text-4xl my-5 ">
          {selectedCategory ? selectedCategory : "All Products"}
        </div>
        {children}
      </section>
    </>
  );
}
