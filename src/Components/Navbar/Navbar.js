import { useEffect, useRef } from "react";
import { BsFillBagHeartFill, BsSearch } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";

const Navbar = ({ cartProductsCodes }) => {
  const navbarElement = useRef(null);

  // Still need to fix as this code is not good for perfomrance
  useEffect(function () {
    const navbarClassName = navbarElement?.current.className;

    if (!navbarClassName) return;

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
          <Link to="/" className="text-black items-center flex">
            <img
              className="me-2"
              alt=""
              src="https://pngimg.com/d/jewelry_PNG6770.png"
              style={{ height: "30px" }}
            ></img>
            <span className="text-2xl">React Jewels</span>
          </Link>
        </div>
        <div className="w-3/5 flex text-sm items-center justify-evenly">
          <NavbarLinks cartProductsCodes={cartProductsCodes} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
