

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="flex items-center justify-between p-4 bg-biege">
        <div className="w-1/5">
          <a href="#Home" className="text-black items-center flex">
            <img
              className="me-2"
              src="https://pngimg.com/d/jewelry_PNG6770.png"
              style={{ height: "30px" }}
            ></img>
            <span className="text-2xl">React Jewels</span>
          </a>
        </div>
        <div className="w-3/5 flex  items-center justify-evenly">
          <a href="/home" id="nav-menu-items" className="">
            Home
          </a>
          <a href="" id="nav-menu-items" className="">
            Shop By Category
          </a>
          <a id="nav-menu-items" className="" href="#">
            Our Story
          </a>
          <a id="nav-menu-items" className="" href="#">
            Reviews
          </a>
          <a id="nav-menu-items" className="" href="#">
            Home
          </a>
          <a id="nav-menu-items" className="" href="#">
            Contact Us
          </a>
          <a id="nav-menu-items" className="" href="#">
            My Account
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
