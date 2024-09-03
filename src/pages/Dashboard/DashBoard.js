import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function DashBoard() {
  return (
    <div className="container-fluid p-0">
      {/* Navbar for Mobile Screens */}
      <nav className="navbar navbar-dark bg-black d-md-none">
        <div className="container-fluid d-flex justify-content-around p-0">
          <NavLink to="/DashBoard/Profile" className="nav-link text-white">
            <i className="bi bi-person-fill"></i>
          </NavLink>
          <NavLink to="/DashBoard/Purchase" className="nav-link text-white">
            <i className="bi bi-bag-fill"></i>
          </NavLink>
          <NavLink to="/DashBoard/Publish" className="nav-link text-white">
            <i className="bi bi-book-fill"></i>
          </NavLink>
          <NavLink to="/DashBoard/orders" className="nav-link text-white">
            <i className="bi bi-cart-fill"></i>
          </NavLink>
          <NavLink to="/DashBoard/Premium" className="nav-link text-white">
            <i className="bi bi-credit-card-fill"></i>
          </NavLink>
          <NavLink to="/DashBoard/settings" className="nav-link text-white">
            <i className="bi bi-gear-fill"></i>
          </NavLink>
        </div>
      </nav>

      <div className="row gx-0">
        {/* Sidebar for Larger Screens */}
        <div className="col-12 col-md-3 col-lg-2 d-none d-md-block bg-black vh-100 p-3 text-white">
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <NavLink to="/DashBoard/Profile" className="nav-link text-white">
                <i className="bi bi-person-fill"></i>
                <span className="ms-2">Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashBoard/Purchase" className="nav-link text-white">
                <i className="bi bi-bag-fill"></i>
                <span className="ms-2">Purchase</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashBoard/Publish" className="nav-link text-white">
                <i className="bi bi-book-fill"></i>
                <span className="ms-2">Publish</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashBoard/orders" className="nav-link text-white">
                <i className="bi bi-cart-fill"></i>
                <span className="ms-2">Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashBoard/Premium" className="nav-link text-white">
                <i className="bi bi-credit-card-fill"></i>
                <span className="ms-2">Premium</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashBoard/settings" className="nav-link text-white">
                <i className="bi bi-gear-fill"></i>
                <span className="ms-2">Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Outlet Content */}
        <div className="col-12 col-md-9 col-lg-10 p-md-4 py-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
