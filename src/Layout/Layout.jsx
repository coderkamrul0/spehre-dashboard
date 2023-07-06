import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex px-3">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
