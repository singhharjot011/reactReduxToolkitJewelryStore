import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";

function CommonNavbar() {
  return (
    <>
      <div className="flex items-center justify-between bg-biege p-4">
        <div className="w-1/5">
          <Link to="/" className="flex items-center text-black">
            <img
              className="me-2"
              alt="logo"
              src="https://pngimg.com/d/jewelry_PNG6770.png"
              style={{ height: "30px" }}
            ></img>
            <span className="text-2xl">React Jewels</span>
          </Link>
        </div>
        <div className="flex w-3/5 items-center justify-evenly text-sm">
          <NavbarLinks />
        </div>
      </div>
    </>
  );
}

export default CommonNavbar;
