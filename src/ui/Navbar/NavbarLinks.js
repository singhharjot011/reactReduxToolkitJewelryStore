import { useSelector } from "react-redux";
import HeartIconFilled from "../icons/HeartIconFilled";
import SearchIcon from "../icons/SearchIcon";

function NavbarLinks() {
  const likedItemsCount = useSelector(
    (state) => state.products.likedItems,
  )?.length;

  return (
    <>
      <a id="nav-menu-items" className="">
        Home
      </a>

      <a id="nav-menu-items" className="">
        Our Story
      </a>
      <a id="nav-menu-items" className="">
        Reviews
      </a>
      <a id="nav-menu-items" className="">
        Contact Us
      </a>
      <a id="nav-menu-items" className="">
        My Account
      </a>
      <div className="cursor-pointer">
        <SearchIcon height="20px" />
      </div>
      <div className="relative cursor-pointer">
        <HeartIconFilled height={"20px"} width={"20px"} color={"white"} />
        <span className="absolute -bottom-2 -right-3 rounded-full border border-black bg-biege px-1 text-xs text-black group-hover:bg-black group-hover:text-white">
          {likedItemsCount}
        </span>
      </div>
    </>
  );
}

export default NavbarLinks;
