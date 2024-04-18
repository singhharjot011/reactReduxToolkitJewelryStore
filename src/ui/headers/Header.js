import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../icons/CartIcon";
import PersonIcon from "../icons/PersonIcon";
import WorldIcon from "../icons/WorldIcon";
import CollapsibleNavbar from "../Navbar/CollapsibleNavbar";
import NavbarLinks from "../Navbar/NavbarLinks";

// const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Header({ bgColor }) {
  const cartItemsCount = useSelector(
    (state) => state.products.cartItems,
  )?.length;

  //   const [countryName, setCountryName] = useState("Canada");

  //   useEffect(function () {
  //     async function fetchCountry() {
  //       try {
  //         if (!navigator.geolocation) return;
  //         const res = await fetch(`${BASE_URL}`);

  //         const data = await res.json();
  //         setCountryName(data.countryName);
  //       } catch (err) {
  //         console.error(err.message);
  //       } finally {
  //       }
  //     }
  //     fetchCountry();
  //   }, []);

  return (
    <>
      <section className={`${bgColor} hidden sm:block`}>
        <div className="flex w-full  justify-between p-2">
          <div className="flex items-center gap-2 text-xs md:text-base">
            <WorldIcon height={"20px"} width={"20px"} />
            CA | en_CA
          </div>
          <span className="text-xs md:text-base">
            Free Standard Shipping over $100
          </span>
          <span className="flex items-center gap-2 text-xs md:text-base">
            <PersonIcon height={"20px"} width={"20px"} />
            <div>Login </div> |<div to="register">Register </div>
            <Link to="/cart" className="relative cursor-pointer">
              <CartIcon height={"20px"} />
              <span className="absolute -bottom-2 -right-2 rounded-full border border-black bg-biege px-1 text-xs text-black group-hover:bg-black group-hover:text-white">
                {cartItemsCount}
              </span>
            </Link>
          </span>
        </div>
        <div className="flex w-full  justify-center ">
          <div to="/">
            <h1 className="text-2xl md:text-4xl lg:text-6xl" id="brand-name">
              React Jewels
            </h1>
          </div>
        </div>
        <div
          className="flex w-full  items-center justify-center space-x-4 p-3"
          id="header-menu"
        >
          <NavbarLinks />
        </div>
      </section>
      <section
        id="header"
        className={`header-class text-sm text-biege   duration-500 sm:hidden `}
      >
        <div className="flex h-max flex-col justify-center space-y-4 bg-biege text-black ">
          <CollapsibleNavbar />
        </div>
      </section>
    </>
  );
}
export default Header;
