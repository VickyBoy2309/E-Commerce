import { Outlet } from "react-router-dom";

import Header from "./Header";

function NammaCartLayout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default NammaCartLayout;