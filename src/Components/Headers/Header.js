import { useEffect, useState } from "react";
import { BsGlobe, BsFillPersonFill, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import NavbarLinks from "../Navbar/NavbarLinks";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Header({ likedProductsCodes, cartProductsCodes, bgClass }) {
  const [countryName, setCountryName] = useState("Canada");

  useEffect(function () {
    async function fetchCountry() {
      try {
        if (!navigator.geolocation) return;
        const res = await fetch(`${BASE_URL}`);

        const data = await res.json();
        setCountryName(data.countryName);
      } catch (err) {
        console.error(err.message);
      } finally {
      }
    }
    fetchCountry();
  }, []);

  return (
    <section className={bgClass}>
      <div className="w-full flex justify-between p-2 ">
        <Link to="/" className="flex items-center gap-2">
          <BsGlobe />
          {countryName} | {navigator.language}
        </Link>
        <span>Free Standard Shipping over $100</span>
        <span className="flex items-center gap-2">
          <Link>
            <BsFillPersonFill />
          </Link>
          <Link to="/login">Login </Link> |<Link to="register">Register </Link>
          <Link to="/wishlist" className="relative">
            <BsHeart className="h-10" />
            <span className="absolute bottom-0 -right-2 text-xs  bg-biege text-black group-hover:text-white group-hover:bg-black rounded-full px-1">
              {likedProductsCodes.length}
            </span>
          </Link>
        </span>
      </div>
      <div className="w-full flex  justify-center ">
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
    </section>
  );
}

export default Header;
