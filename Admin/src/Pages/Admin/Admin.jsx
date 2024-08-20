import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Outlet } from "react-router";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Admin;
