import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const handleNavLinkClick = () => {
    // Add functionality here if needed in the future
  };

  return (
    <nav
      className="navbar navbar-expand-lg  bg-black text-primary sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        {/* Brand */}
        <NavLink className="navbar-brand text-white h4" to="/">
          LearnKnowledge
        </NavLink>

        {/* Toggler for mobile screens */}
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

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarToggle">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {/* NavLink items */}
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-primary" : "text-white"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Books"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-primary" : "text-white"}`
                }
              >
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Orders"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-primary" : "text-white"}`
                }
              >
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/NewGenres"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-primary" : "text-white"}`
                }
              >
                New Genre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/PublishBook"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-primary" : "text-white"}`
                }
              >
                Publish
              </NavLink>
            </li>
          </ul>

          {/* Profile and Dropdown menu */}
          <div className="d-flex ms-lg-4">
            <div className="dropdown">
              <button
                className="btn btn-outline-light rounded-circle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <NavLink
                    to="/DashBoard/Profile"
                    className="dropdown-item"
                    onClick={handleNavLinkClick}
                  >
                    Dashboard
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
