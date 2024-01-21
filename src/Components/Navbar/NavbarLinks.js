import { BsFillBagHeartFill, BsSearch } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

function NavbarLinks({ cartProductsCodes }) {
  return (
    <>
      <NavLink to="/" id="nav-menu-items" className="">
        Home
      </NavLink>
      <NavLink to="/" id="nav-menu-items" className="">
        Shop By Category
      </NavLink>
      <NavLink to="/our-story" id="nav-menu-items" className="">
        Our Story
      </NavLink>
      <NavLink to="/reviews" id="nav-menu-items" className="">
        Reviews
      </NavLink>
      <NavLink to="/contact" id="nav-menu-items" className="">
        Contact Us
      </NavLink>
      <NavLink to="/my-account" id="nav-menu-items" className="">
        My Account
      </NavLink>
      <Link>
        <BsSearch />
      </Link>
      <Link to="/cart" className="relative">
        <BsFillBagHeartFill />
        <span className="absolute -bottom-2 -right-3 text-xs border border-black bg-biege text-black group-hover:text-white group-hover:bg-black rounded-full px-1">
          {cartProductsCodes.length}
        </span>
      </Link>
    </>
  );
}

export default NavbarLinks;
