import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";

function CommonNavbar({ cartProductsCodes }) {
  return (
    <>
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
    </>
  );
}

export default CommonNavbar;
