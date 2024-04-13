import Header from "./Header";

export default function HeroHeader() {
  return (
    <>
      <section
        id="header"
        className="header-class duration-500 h-[500px] text-biege   bg-[url('https://media1.giphy.com/media/l1ug4EI8ksrPC9YLS/giphy.gif?cid=ecf05e477yk2eblf18lvggh2a0pej11yglr91cu8ibrzd14p&ep=v1_gifs_search&rid=giphy.gif&ct=g')] bg-cover text-sm"
      >
        <div className="flex flex-col justify-center space-y-4 h-max bg-gradient-to-b from-black via-transparent  hover:text-black hover:from-biege hover:bg-biege duration-500 ">
          <Header />
        </div>
      </section>
    </>
  );
}
