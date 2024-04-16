import PlayButton from "../icons/PlayButton";

function OurStory() {
  return (
    <section
      id="our-story"
      className="flex w-full flex-col justify-center bg-biege"
    >
      <div className="relative z-0 h-32 bg-[url('https://images.unsplash.com/photo-1613191662774-5f61eddf8360?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black/30 md:h-72">
        <div className="absolute z-50 flex h-full w-full items-center justify-center text-xl text-white sm:text-4xl md:text-6xl">
          About React Jewels
        </div>
      </div>
      <div className="flex flex-col items-center space-y-10 p-10 text-center md:p-20">
        <span className="text-2xl md:text-4xl">Our Story</span>
        <p className="w-4/5 sm:text-lg md:text-xl lg:w-full">
          This is a demo page where you can tell story about your store. Quick
          introduction of the founders, some values of your brand. Tell clients
          what is your vision and believes.
        </p>
      </div>
      <div className="relative flex w-[calc(90%-10dvw)] items-center justify-center self-center bg-white object-contain p-5 md:p-12 lg:w-[calc(70%-10dvw)]">
        <img
          src="https://images.unsplash.com/photo-1518370265276-f22b706aeac8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-56  w-full object-cover md:h-96"
        ></img>
        <PlayButton
          height="100px"
          twClass="absolute text-biege top-20 left-20 cursor-pointer"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <h3 className="w-full p-5  text-center text-4xl md:pt-20">Legacy</h3>
        <div className="lg:w-9/10 flex w-full flex-col justify-evenly p-4 md:flex-row md:p-24 md:pt-12">
          <div className="mb-8 space-y-5 self-center text-center sm:w-1/2 md:mb-0 md:w-1/3 md:self-auto md:p-4">
            <img
              className="h-96 w-full object-cover"
              src="https://images.unsplash.com/photo-1514179974491-a7885781ed87?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            <h4 className="md:text-xl">Design Culture</h4>
            <p className="md:text-medium text-xs tracking-wide md:text-sm">
              In 1875, Alexandera Stone envisioned a world where elegance knew
              no bounds. He devised a revolutionary technique to craft exquisite
              gemstones, igniting a renaissance in jewelry craftsmanship. By the
              turn of the century, Stone's creations adorned the most
              illustrious soirées from New York to London, captivating hearts
              with their unparalleled radiance.
            </p>
          </div>
          <div className="mb-8 space-y-5 self-center text-center sm:w-1/2 md:mb-0 md:w-1/3 md:self-auto md:p-4">
            <img
              className="h-96 w-full object-cover"
              src="https://images.unsplash.com/photo-1528406745358-6c3112259eb9?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            <h4 className="md:text-xl">Artistic Interaction</h4>
            <p className="text-xs tracking-wide md:text-base md:text-sm">
              In the late 1960s, artisans in Auroravale crafted exquisite pieces
              blending tradition with modernity. Their creations gained global
              acclaim, with an annual masterpiece captivating collectors. Thus
              began a tradition of enchanting elegance and artisanal excellence.
            </p>
          </div>
          <div className="mb-8 space-y-5 self-center text-center sm:w-1/2 md:mb-0 md:w-1/3 md:self-auto md:p-4">
            <img
              className="h-96 w-full object-cover"
              src="https://images.unsplash.com/photo-1555362310-ad5ca88ac73a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            <h4 className="md:text-xl">Modern Era</h4>
            <p className="md:text text-xs tracking-wide md:text-sm ">
              Alexandera Stone envisioned a boundless realm of elegance. With a
              groundbreaking technique, he crafted gemstones, sparking a
              renaissance in jewelry artistry. By the century's turn, Stone's
              creations graced illustrious soirées worldwide, captivating all
              with their unmatched radiance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
