import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark text-primary"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand text-white h4" href="/">
          earnKnowledge
        </a>
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
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Book
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                New Genre
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
