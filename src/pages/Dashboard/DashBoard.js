import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function DashBoard() {
  return (
    <>
      <div
        className="d-flex flex-column p-3 text-white bg-black position-fixed"
        style={{ width: "250px", height: "100vh" }}
      >
        <h4 className="text-center mb-4">User Dashboard</h4>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <NavLink to="/DashBoard/Profile" className="nav-link text-white">
              <i className="bi bi-person-fill"></i> Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/DashBoard/Purchase" className="nav-link text-white">
              <i className="bi bi-bag-fill"></i> Purchase
            </NavLink>
          </li>
          <li>
            <NavLink to="/DashBoard/Publish" className="nav-link text-white">
              <i className="bi bi-book-fill"></i> Publish
            </NavLink>
          </li>
          <li>
            <NavLink to="/DashBoard/orders" className="nav-link text-white">
              <i className="bi bi-cart-fill"></i> Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/DashBoard/Premium" className="nav-link text-white">
              <i className="bi bi-credit-card-fill"></i> Premium
            </NavLink>
          </li>
          <li>
            <NavLink to="/DashBoard/settings" className="nav-link text-white">
              <i className="bi bi-gear-fill"></i> Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="container" style={{ marginLeft: "250px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default DashBoard;
