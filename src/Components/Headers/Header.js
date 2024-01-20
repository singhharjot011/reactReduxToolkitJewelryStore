import { useEffect, useRef } from "react";

import {
  BsGlobe,
  BsFillPersonFill,
  BsHeart,
  BsFillBagHeartFill,
  BsSearch,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import NavbarLinks from "../Navbar/NavbarLinks";

export default function Header({ likedProductsCodes, cartProductsCodes }) {
  const heroElement = useRef(null);
  const headerElement = useRef(null);

  useEffect(function () {
    const headerClassName = headerElement.current.className;

    document.addEventListener("scroll", callback);

    function callback() {
      if (Math.floor(window.scrollY) >= 5) {
        headerElement.current.className = "hidden";
        window.removeEventListener("scroll", callback);
      } else {
        headerElement.current.className = headerClassName;
        window.removeEventListener("scroll", callback);
      }
      window.removeEventListener("scroll", callback);
    }
  }, []);
  return (
    <>
      <section
        id="header"
        className="header-class duration-500 h-[500px] text-biege   bg-[url('https://media1.giphy.com/media/l1ug4EI8ksrPC9YLS/giphy.gif?cid=ecf05e477yk2eblf18lvggh2a0pej11yglr91cu8ibrzd14p&ep=v1_gifs_search&rid=giphy.gif&ct=g')] bg-cover text-sm"
        ref={heroElement}
      >
        <div
          className="flex flex-col justify-center space-y-4 h-max bg-gradient-to-b from-black via-transparent  hover:text-black hover:from-biege hover:bg-biege duration-500 "
          ref={headerElement}
        >
          <div className="w-full flex justify-between p-2">
            <Link to="/" className="flex items-center gap-2">
              <BsGlobe />
              Canada | en_US
            </Link>
            <span>Free Standard Shipping over $100</span>
            <span className="flex items-center gap-2">
              <Link>
                <BsFillPersonFill />
              </Link>
              <Link to="login">Login </Link> |
              <Link to="register">Register </Link>
              <Link to="wishlist" className="relative">
                <BsHeart className="h-10" />
                <span className="absolute bottom-0 -right-2 text-xs  bg-biege text-black group-hover:text-white group-hover:bg-black rounded-full px-1">
                  {likedProductsCodes.length}
                </span>
              </Link>
            </span>
          </div>
          <div className="w-full flex  justify-center">
            <Link to="/">
              <h1 className="text-6xl" id="brand-name">
                React Jewels
              </h1>
            </Link>
          </div>
          <div
            className="w-full flex  items-center justify-center space-x-4 p-3"
            id="header-menu"
          >
            <NavbarLinks cartProductsCodes={cartProductsCodes} />
          </div>
        </div>
      </section>
    </>
  );
}
