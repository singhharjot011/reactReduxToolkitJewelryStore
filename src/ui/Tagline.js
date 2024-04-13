{
  /* <span></span>
</div>
<div className="lg:w-3/4 self-center text-center mt-8">
  <p>
  
  </p> */
}

const Tagline = ({ tagline, paragraph }) => {
  return (
    <section
      id="tagline"
      className="mt-5 w-[calc(90%-2rem)] self-center bg-biege p-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
    >
      <div className="flex flex-col justify-center p-5">
        <div className="w-full text-center text-4xl">
          <span>{tagline}</span>
        </div>
        <div className="mt-8 self-center text-center lg:w-3/4">
          <p>{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default Tagline;
