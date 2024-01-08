export default function Featured({ children }) {
  return (
    <section id="featured" className="flex flex-wrap justify-evenly p-5">
      <div className="w-full text-center text-4xl my-5"> Featured</div>
      {children}
    </section>
  );
}
