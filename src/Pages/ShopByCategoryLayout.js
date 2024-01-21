import { Outlet } from "react-router-dom";

function ShopByCategoryLayout({ children }) {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
}

export default ShopByCategoryLayout;
