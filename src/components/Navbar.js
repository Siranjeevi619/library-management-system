import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-black text-primary"
      data-bs-theme="dark"
    >
      <div className="container my-1">
        <NavLink className="navbar-brand text-white h4" to="/">
          EarnKnowledge
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggle">
          <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-primary"
                    : "nav-link text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Books"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-primary"
                    : "nav-link text-white"
                }
              >
                Book
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Orders"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-primary"
                    : "nav-link text-white"
                }
              >
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/NewGenres"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-primary"
                    : "nav-link text-white"
                }
              >
                New Genre
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown-center me-5">
          <button
            className="btn btn-outline-light rounded-circle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="bi bi-person-circle"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end mt-3 dropdown-menu-lg-start">
            <li>
              <NavLink to="/DashBoard" className="dropdown-item" href="/">
                DashBoard
              </NavLink>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
