import { useEffect, useRef } from "react";
import { BsFillBagHeartFill, BsSearch } from "react-icons/bs";

const Navbar = ({ cartProductsCodes }) => {
  const navbarElement = useRef(null);

  // Still need to fix as this code is not good for perfomrance
  useEffect(function () {
    const navbarClassName = navbarElement.current.className;

    document.addEventListener("scroll", callback);

    function callback() {
      if (Math.floor(window.scrollY) >= 5) {
        navbarElement.current.className = navbarClassName.slice(6);
        window.removeEventListener("scroll", callback);
      } else {
        navbarElement.current.className = navbarClassName;
        window.removeEventListener("scroll", callback);
      }
      window.removeEventListener("scroll", callback);
    }
  }, []);

  return (
    <section
      id="navbar"
      ref={navbarElement}
      className="hidden fixed top-0 w-full z-10"
    >
      <div className="flex items-center justify-between p-4 bg-biege">
        <div className="w-1/5">
          <a href="#Home" className="text-black items-center flex">
            <img
              className="me-2"
              src="https://pngimg.com/d/jewelry_PNG6770.png"
              style={{ height: "30px" }}
            ></img>
            <span className="text-2xl">React Jewels</span>
          </a>
        </div>
        <div className="w-3/5 flex text-sm items-center justify-evenly">
          <a href="/home" id="nav-menu-items" className="">
            Home
          </a>
          <a href="" id="nav-menu-items" className="">
            Shop By Category
          </a>
          <a id="nav-menu-items" className="" href="#">
            Our Story
          </a>
          <a id="nav-menu-items" className="" href="#">
            Reviews
          </a>
          <a id="nav-menu-items" className="" href="#">
            Home
          </a>
          <a id="nav-menu-items" className="" href="#">
            Contact Us
          </a>
          <a id="nav-menu-items" className="" href="#">
            My Account
          </a>
          <a href="#">
            <BsSearch />
          </a>
          <a className="relative" href="#">
            <BsFillBagHeartFill />
            <span className="absolute -bottom-2 -right-3 text-xs border border-black bg-biege text-black group-hover:text-white group-hover:bg-black rounded-full px-1">
              {cartProductsCodes.length}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
