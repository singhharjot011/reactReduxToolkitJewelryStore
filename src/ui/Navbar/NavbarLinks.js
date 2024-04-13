import { useSelector } from "react-redux";
import HeartIconFilled from "../icons/HeartIconFilled";

function NavbarLinks() {
  const likedItemsCount = useSelector(
    (state) => state.products.likedItems,
  )?.length;

  return (
    <>
      <a to="/" id="nav-menu-items" className="">
        Home
      </a>

      <a to="/our-story" id="nav-menu-items" className="">
        Our Story
      </a>
      <a to="/reviews" id="nav-menu-items" className="">
        Reviews
      </a>
      <a to="/contact" id="nav-menu-items" className="">
        Contact Us
      </a>
      <a to="/my-account" id="nav-menu-items" className="">
        My Account
      </a>
      <div>🔍</div>
      <div to="/cart" className="relative">
        <HeartIconFilled height={"20px"} width={"20px"} color={"white"} />
        <span className="absolute -bottom-2 -right-3 rounded-full border border-black bg-biege px-1 text-xs text-black group-hover:bg-black group-hover:text-white">
          {likedItemsCount}
        </span>
      </div>
    </>
  );
}

export default NavbarLinks;
