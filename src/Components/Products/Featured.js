import Tagline2 from "../Taglines/Tagline2";

export default function Featured({ children }) {
  return (
    <>
      <Tagline2 />
      <section id="featured" className=" p-10 bg-biege my-10">
        <div className="w-full text-center text-4xl my-5 textfont">
          Featured
        </div>

        {children}
      </section>
    </>
  );
}
