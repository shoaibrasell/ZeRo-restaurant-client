import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order.jsx";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import PrivateRoutes from './PrivateRoutes';
import Secret from "../pages/Shared/Secret/Secret.jsx";
import Dashboard from "../Layout/Dashboard.jsx";
import Cart from "../pages/Dashboard/Cart/Cart.jsx";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home/>
        },
        {
          path: 'menu',
          element: <Menu/>
        },
        {
          path:'order/:category',
          element:<Order/>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path: 'signup',
          element:<SignUp/>
        },
        {
          path:'secret',
          element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children: [
        {
          path:'cart',
          element: <Cart></Cart>
          
        }
      ]
    }
  ]);