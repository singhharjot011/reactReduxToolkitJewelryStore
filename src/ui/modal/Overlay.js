function Overlay({ children }) {
  return (
    <div className="fixed left-0 top-0 z-50 h-dvh w-full bg-black/50 backdrop-blur-sm transition-all duration-500">
      {children}
    </div>
  );
}

export default Overlay;
