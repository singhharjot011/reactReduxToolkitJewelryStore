import Tagline3 from "../Taglines/Tagline3";

export default function BestSellers({ children }) {
  return (
    <>
      <Tagline3 />
      <section id="best-seller" className="p-10 bg-babyPink  my-10">
        <div className="w-full text-center text-4xl my-5"> Best Sellers</div>
        {children}
      </section>
    </>
  );
}
