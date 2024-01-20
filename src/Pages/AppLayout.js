import { Outlet } from "react-router-dom";

function AppLayout({ children }) {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
}

export default AppLayout;
