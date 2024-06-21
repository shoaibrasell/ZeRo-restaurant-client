import React from "react";
import { FaAd, FaCalendar, FaFileContract, FaHome, FaList, FaPaypal, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import Cart from "../pages/Dashboard/Cart/Cart";
import useCart from "../Hook/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      {/*dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
        <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <FaPaypal></FaPaypal>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList>
              My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>
            HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaShop></FaShop>
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaFileContract></FaFileContract>
              CONTACTS
            </NavLink>
          </li>
        </ul>
      </div>
      {/*dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
