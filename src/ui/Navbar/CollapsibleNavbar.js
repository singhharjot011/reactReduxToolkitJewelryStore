import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";

function CollapsibleNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const curPath = useLocation().pathname;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="relative border-gray-200 bg-biege">
      <div className=" mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center text-black">
          <img
            className="me-2"
            alt="logo"
            src="https://pngimg.com/d/jewelry_PNG6770.png"
            style={{ height: "30px" }}
          ></img>
          <span className="text-2xl">React Jewels</span>
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-biege md:hidden"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={` ${isDropdownOpen ? "block" : "hidden"} absolute left-0 top-[70%] z-50 w-full md:block`}
          id="navbar-solid-bg"
        >
          <ul className="mt-4 flex flex-col rounded-lg bg-gray-50 font-medium rtl:space-x-reverse ">
            <Link
              id="nav-menu-items"
              to="/"
              className={`block rounded  px-3 py-2 text-black ${curPath === "/" ? "bg-biege" : ""}`}
              aria-current="page"
            >
              Home
            </Link>
            <Link
              id="nav-menu-items"
              to="/our-story"
              className={`block rounded  px-3 py-2 text-black ${curPath === "/our-story" ? "bg-biege" : ""}`}
            >
              Our Story
            </Link>
            <Link
              to="/reviews"
              id="nav-menu-items"
              className={`block rounded  px-3 py-2 text-black ${curPath === "/reviews" ? "bg-biege" : ""}`}
            >
              Reviews
            </Link>
            <Link
              to="/contact"
              id="nav-menu-items"
              className={`block rounded  px-3 py-2 text-black ${curPath === "/contact" ? "bg-biege" : ""}`}
            >
              Contact Us
            </Link>
            <Link
              to="/myaccount"
              id="nav-menu-items"
              className={`block rounded  px-3 py-2 text-black ${curPath === "/myaccount" ? "bg-biege" : ""}`}
            >
              My Account
            </Link>
            <Link
              to="/wishlist"
              id="nav-menu-items"
              className={`block rounded  px-3 py-2 text-black ${curPath === "/wishlist" ? "bg-biege" : ""}`}
            >
              Wishlist
            </Link>
            <Link
              to="/cart"
              id="nav-menu-items"
              className={`block rounded  px-3 py-2 text-black ${curPath === "/cart" ? "bg-biege" : ""}`}
            >
              Cart
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CollapsibleNavbar;
