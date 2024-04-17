import { useEffect, useState } from "react";
import Header from "./Header";

export default function HeroHeader() {
  return (
    <>
      <section
        id="header"
        className={`header-class hidden h-[500px] bg-[url('https://media1.giphy.com/media/l1ug4EI8ksrPC9YLS/giphy.gif?cid=ecf05e477yk2eblf18lvggh2a0pej11yglr91cu8ibrzd14p&ep=v1_gifs_search&rid=giphy.gif&ct=g')] bg-cover text-sm   text-biege duration-500 sm:block`}
      >
        <div className="flex h-max flex-col justify-center space-y-4 bg-gradient-to-b from-black via-transparent  duration-500 hover:bg-biege hover:from-biege hover:text-black ">
          <Header />
        </div>
      </section>
    </>
  );
}
