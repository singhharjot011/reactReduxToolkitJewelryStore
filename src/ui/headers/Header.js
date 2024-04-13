import NavbarLinks from "../Navbar/NavbarLinks";

// const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Header({ likedProductsCodes, cartProductsCodes, bgClass }) {
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
      <div className="w-full flex justify-between p-2 ">
        <div className="flex items-center gap-2">
          <span> 🌐</span>
          CA | en_CA
        </div>
        <span>Free Standard Shipping over $100</span>
        <span className="flex items-center gap-2">
          <div>🧑</div>
          <div to="/login">Login </div> |<div to="register">Register </div>
          <div to="/wishlist" className="relative">
            <span className="absolute bottom-0 -right-2 text-xs  bg-biege text-black group-hover:text-white group-hover:bg-black rounded-full px-1">
              1
            </span>
          </div>
        </span>
      </div>
      <div className="w-full flex  justify-center ">
        <div to="/">
          <h1 className="text-6xl" id="brand-name">
            React Jewels
          </h1>
        </div>
      </div>
      <div
        className="w-full flex  items-center justify-center space-x-4 p-3"
        id="header-menu"
      >
        <NavbarLinks />
      </div>
    </section>
  );
}
export default Header;
