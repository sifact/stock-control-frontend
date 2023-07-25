import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="fixed h-screen top-0 left-0 w-1/6 bg-gray-800">
        {/* Adjust the "w-1/5" class to set the width of the sidebar */}
        <Sidebar />
      </div>
      <div className="flex-grow ml-[15rem]">
        {/* Use "flex-grow" to make the Outlet fill the remaining space */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
