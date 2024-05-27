import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const hideHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {/* || condition true then hide header footer  */}
      {hideHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {/* || condition true then hide the header footer */}
      {hideHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
