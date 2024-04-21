import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <section
      id="contact-us"
      className="flex w-full flex-col justify-center bg-biege"
    >
      <div className="relative z-0 h-32 bg-[url('https://plus.unsplash.com/premium_photo-1674748385595-ce01df44ee34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black/30 md:h-72">
        <div className="absolute z-50 flex h-full w-full items-center justify-center text-xl text-white sm:text-4xl md:text-6xl">
          Welcome to Customer Service
        </div>
      </div>
      <div className="flex flex-col items-center space-y-10 p-10 text-center md:p-20">
        <p className="w-4/5 sm:text-lg md:text-xl lg:w-full">
          If you are looking for helpful answers, then you are at the right
          spot.​ You can browse through the options below and have your
          questions clarified in a matter of a few clicks.
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <div className="lg:w-9/10 flex w-full flex-col justify-evenly p-4 md:flex-row md:p-24 md:pt-12">
          <div className="mb-8 space-y-5 self-center text-center sm:w-1/2 md:mb-0 md:w-1/3 md:self-auto md:p-4">
            <h4 className="text-2xl">React Products</h4>
            <div className="flex flex-col  tracking-wide ">
              <Link className="hover:underline">Link 1</Link>
              <Link className="hover:underline">Link 2</Link>
              <Link className="hover:underline">Link 3</Link>
              <Link className="hover:underline">Link 4</Link>
              <Link className="hover:underline">Link 5</Link>
            </div>
          </div>
          <div className="mb-8 space-y-5 self-center text-center sm:w-1/2 md:mb-0 md:w-1/3 md:self-auto md:p-4">
            <h4 className="text-2xl">Your Online Purchases</h4>
            <div className="flex flex-col  tracking-wide ">
              <Link className="hover:underline">Link 1</Link>
              <Link className="hover:underline">Link 2</Link>
              <Link className="hover:underline">Link 3</Link>
              <Link className="hover:underline">Link 4</Link>
              <Link className="hover:underline">Link 5</Link>
              <Link className="hover:underline">Link 6</Link>
            </div>
          </div>
          <div className="mb-8 space-y-5 self-center text-center sm:w-1/2 md:mb-0 md:w-1/3 md:self-auto md:p-4">
            <h4 className="text-2xl">Membership</h4>
            <div className="flex flex-col  tracking-wide ">
              <Link className="hover:underline">Link 1</Link>
              <Link className="hover:underline">Link 2</Link>
              <Link className="hover:underline">Link 3</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
