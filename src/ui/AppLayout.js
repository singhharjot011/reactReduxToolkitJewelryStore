import HeroHeader from "./headers/HeroHeader";
import Header from "./headers/Header";
import Tagline from "../ui/Tagline";
import Footer from "../ui/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function AppLayout() {
  const curPath = useLocation().pathname;

  return (
    <>
      {curPath !== "/" ? (
        <Header bgColor={"bg-biege"} />
      ) : (
        <>
          <HeroHeader />

          <Tagline
            tagline={"Elegance in Every Piece, Crafted for You"}
            paragraph={
              "Our jewelry is designed to adorn and empower, celebrating the timeless beauty of Indian culture with every piece. Discover the perfect blend of heritage and style in our handcrafted jewelry collections."
            }
          />
        </>
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
