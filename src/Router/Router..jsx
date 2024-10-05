import { createBrowserRouter, Navigate } from "react-router-dom/dist";
import Login from "../Layout/Login/Login";
import App from "../App";
import Dashboard from "../page/dashboard/Dashboard";
import Products from "../page/product/Products";
import Orders from "../page/orders/Orders";
import Coupons from "../page/coupons/Coupons";
import Reviews from "../page/Reviews/Reviews";
import Customers from "../page/customers/Customers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/coupons",
        element: <Coupons />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
]);

export default router;
