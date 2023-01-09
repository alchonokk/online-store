import { Outlet } from "react-router-dom";
import HeaderApp from "../HeaderApp";
import FooterApp from "../FooterApp";

function LayoutApp() {
  return (
    <>
      <HeaderApp />
      <Outlet />
      <FooterApp />
    </>
  );
}

export default LayoutApp;
