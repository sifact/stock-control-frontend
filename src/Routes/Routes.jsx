import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Main";

import Login from "../pages/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import Products from "../pages/Products";
import Users from "../pages/Users";
import CreateUser from "../pages/CreateUser";
import CreateProduct from "../pages/CreateProduct";
import UpdateProduct from "../pages/UpdateProduct";
import Breakdown from "../pages/BreakDown";
import Overview from "../pages/Overview";
import Monthly from "../pages/Monthly";
import Daily from "../pages/Daily";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Products />,
      },

      {
        path: "/breakdown",
        element: <Breakdown />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/monthly",
        element: <Monthly />,
      },
      {
        path: "/daily",
        element: <Daily />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/createProduct",
        element: <CreateProduct />,
      },
      {
        path: "/createUser",
        element: <CreateUser />,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct />,
      },
    ],
  },
]);

export default router;
