import { useEffect, useRef } from "react";

import Header from "./Header";

export default function HeroHeader({ likedProductsCodes, cartProductsCodes }) {
  const heroElement = useRef(null);
  const headerElement = useRef(null);

  useEffect(function () {
    const headerClassName = headerElement?.current.className;
    if (!headerClassName) return;

    document.addEventListener("scroll", callback);

    function callback() {
      if (Math.floor(window.scrollY) >= 5) {
        headerElement.current.className = "hidden";
        window.removeEventListener("scroll", callback);
      } else {
        headerElement.current.className = headerClassName;
        window.removeEventListener("scroll", callback);
      }
      window.removeEventListener("scroll", callback);
    }
  }, []);
  return (
    <>
      <section
        id="header"
        className="header-class duration-500 h-[500px] text-biege   bg-[url('https://media1.giphy.com/media/l1ug4EI8ksrPC9YLS/giphy.gif?cid=ecf05e477yk2eblf18lvggh2a0pej11yglr91cu8ibrzd14p&ep=v1_gifs_search&rid=giphy.gif&ct=g')] bg-cover text-sm"
        ref={heroElement}
      >
        <div
          className="flex flex-col justify-center space-y-4 h-max bg-gradient-to-b from-black via-transparent  hover:text-black hover:from-biege hover:bg-biege duration-500 "
          ref={headerElement}
        >
          <Header
            likedProductsCodes={likedProductsCodes}
            cartProductsCodes={cartProductsCodes}
          />
        </div>
      </section>
    </>
  );
}
