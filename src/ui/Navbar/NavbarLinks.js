import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeartIconFilled from "../icons/HeartIconFilled";
import SearchIcon from "../icons/SearchIcon";

function NavbarLinks() {
  const likedItemsCount = useSelector(
    (state) => state.products.likedItems,
  )?.length;

  return (
    <>
      <Link to="/" id="nav-menu-items" className="">
        Home
      </Link>

      <Link to="/our-story" id="nav-menu-items" className="">
        Our Story
      </Link>
      <Link to="/reviews" id="nav-menu-items" className="">
        Reviews
      </Link>
      <Link to="/contact" id="nav-menu-items" className="">
        Contact Us
      </Link>
      <Link to="/myaccount" id="nav-menu-items" className="">
        My Account
      </Link>
      <div className="cursor-pointer">
        <SearchIcon height="20px" />
      </div>
      <Link to="/wishlist" className="relative cursor-pointer">
        <HeartIconFilled height={"20px"} width={"20px"} color={"white"} />
        <span className="absolute -bottom-2 -right-3 rounded-full border border-black bg-biege px-1 text-xs text-black group-hover:bg-black group-hover:text-white">
          {likedItemsCount}
        </span>
      </Link>
    </>
  );
}

export default NavbarLinks;
