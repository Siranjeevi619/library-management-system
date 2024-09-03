import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  // Function to handle the collapse of the Navbar
  const handleNavLinkClick = () => {
    const navbarToggle = document.getElementById("navbarToggle");
    const navbarCollapse = new window.bootstrap.Collapse(navbarToggle);
    navbarCollapse.hide();
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-black text-primary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand mx-auto text-center mx-md-0 text-white h4"
          to="/"
        >
          EarnKnowledge
        </NavLink>
        <button
          className="navbar-toggler p-1 ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            width: "30px",
            height: "30px",
            outline: "none",
            boxShadow: "none",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggle">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-primary"
                    : "nav-link text-white"
                }
                onClick={handleNavLinkClick}
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
                onClick={handleNavLinkClick}
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
                onClick={handleNavLinkClick}
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
                onClick={handleNavLinkClick}
              >
                New Genre
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-center ms-lg-4 mt-3 mt-lg-0">
            <div className="dropdown-center">
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
              <ul className="dropdown-menu dropdown-menu-end mt-2">
                <li>
                  <NavLink
                    to="/DashBoard"
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
