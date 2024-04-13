import { useSelector } from "react-redux";
import CartIcon from "../icons/CartIcon";
import PersonIcon from "../icons/PersonIcon";
import WorldIcon from "../icons/WorldIcon";
import NavbarLinks from "../Navbar/NavbarLinks";

// const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Header() {
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
    <section>
      <div className="flex w-full justify-between p-2 ">
        <div className="flex items-center gap-2">
          <WorldIcon height={"20px"} width={"20px"} />
          CA | en_CA
        </div>
        <span>Free Standard Shipping over $100</span>
        <span className="flex items-center gap-2">
          <PersonIcon height={"20px"} width={"20px"} />
          <div>Login </div> |<div to="register">Register </div>
          <div className="relative cursor-pointer">
            <CartIcon height={"20px"} />
            <span className="absolute -bottom-2 -right-2 rounded-full border border-black bg-biege px-1 text-xs text-black group-hover:bg-black group-hover:text-white">
              {cartItemsCount}
            </span>
          </div>
        </span>
      </div>
      <div className="flex w-full  justify-center ">
        <div to="/">
          <h1 className="text-6xl" id="brand-name">
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
  );
}
export default Header;
