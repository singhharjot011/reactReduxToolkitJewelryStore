import CommonNavbar from "./CommonNavbar";

const HeroNavbar = ({ cartProductsCodes }) => {
  return (
    <section
      id="hero-navbar"
      className="hidden fixed top-0 w-full z-10"
    >
      <CommonNavbar cartProductsCodes={cartProductsCodes} />
    </section>
  );
};

export default HeroNavbar;
