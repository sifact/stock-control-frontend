import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await newRequest.post("auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className=" text-gray-100 w-full flex justify-center mt-8">
      {/* Sidebar content */}
      <div className=" relative w-full">
        <h2 className="text-2xl text-center pb-4 font-bold">Stock Control</h2>
        {/* Add your sidebar items here */}
        <ul
          className="mt-4 relative w-full"
          style={{ height: "Calc(100vh - 100px)" }}
        >
          <li className=" hover:text-gray-200 w-full">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending w-full inline-block pl-12 py-[10px]"
                  : isActive
                  ? "active w-full inline-block pl-12"
                  : "w-full inline-block pl-12 py-[10px]"
              }
              to="/dashboard"
            >
              products
            </NavLink>
          </li>
          <li className=" hover:text-gray-200">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending w-full inline-block pl-12 py-[10px]"
                  : isActive
                  ? "active w-full inline-block pl-12"
                  : "w-full inline-block pl-12 py-[10px]"
              }
              to="/createProduct"
            >
              Add product
            </NavLink>
          </li>
          <li className=" hover:text-gray-200 mb-6">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending w-full inline-block pl-12 py-[10px]"
                  : isActive
                  ? "active w-full inline-block pl-12"
                  : "w-full inline-block pl-12 py-[10px]"
              }
              to="/soldProducts"
            >
              Sold products
            </NavLink>
          </li>
          <li className=" hover:text-gray-200">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending w-full inline-block pl-12 py-[10px]"
                  : isActive
                  ? "active w-full inline-block pl-12"
                  : "w-full inline-block pl-12 py-[10px]"
              }
              to="/overview"
            >
              Overview
            </NavLink>
          </li>
          <li className=" hover:text-gray-200 mb-6">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending w-full inline-block pl-12 py-[10px]"
                  : isActive
                  ? "active w-full inline-block pl-12"
                  : "w-full inline-block pl-12 py-[10px]"
              }
              to="/breakdown"
            >
              Breakdown
            </NavLink>
          </li>
          <li className=" hover:text-gray-200">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending w-full inline-block pl-12 py-[10px]"
                  : isActive
                  ? "active w-full inline-block pl-12"
                  : "w-full inline-block pl-12 py-[10px]"
              }
              to="/monthly"
            >
              Monthly
            </NavLink>
          </li>
          <li className=" hover:text-gray-200 mb-6">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending w-full inline-block pl-12 py-[10px]"
                  : isActive
                  ? "active w-full inline-block pl-12"
                  : "w-full inline-block pl-12 py-[10px]"
              }
              to="/daily"
            >
              Daily
            </NavLink>
          </li>
          {currentUser.role === "admin" && (
            <li className=" hover:text-gray-200">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending w-full inline-block pl-12 py-[10px]"
                    : isActive
                    ? "active w-full inline-block pl-12"
                    : "w-full inline-block pl-12 py-[10px]"
                }
                to="/users"
              >
                Users
              </NavLink>
            </li>
          )}
          {currentUser.role === "admin" && (
            <li className=" hover:text-gray-200">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending w-full inline-block pl-12 py-[10px]"
                    : isActive
                    ? "active w-full inline-block pl-12"
                    : "w-full inline-block pl-12 py-[10px]"
                }
                to="/createUser"
              >
                Create User
              </NavLink>
            </li>
          )}

          <li
            className="ml-12 mt-12 hover:text-gray-200"
            onClick={handleLogout}
          >
            <button className="px-3 py-2 bg-white text-gray-950 rounded-sm ">
              Logout
            </button>
          </li>
          {/* ... */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
