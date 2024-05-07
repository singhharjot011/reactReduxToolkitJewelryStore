function StyledModal({ children }) {
  return (
    <div className="relative left-1/2 top-1/2 flex h-[calc(80%-4rem)] w-[calc(80%-2rem)] -translate-x-1/2  -translate-y-1/2 flex-col  items-center overflow-auto rounded-xl border-8 border-white  bg-biege py-8 shadow-lg md:flex-row">
      <div className=" h-full w-full">{children}</div>
    </div>
  );
}



export default StyledModal;
