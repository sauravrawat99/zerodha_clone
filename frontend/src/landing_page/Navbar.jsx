import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-white border-bottom shadow-sm px-4">
      <div className="container-fluid">
        {/* 🔵 Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/media/images/logo.svg" alt="Zerodha" width="120" />
        </Link>

        {/* 🔽 Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 📋 Nav Items */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 fw-semibold align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/Signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Support">
                Support
              </Link>
            </li>

            {/* Icon */}
            <li className="nav-item d-flex justify-content-center align-items-center">
              <Link className="nav-link" to="#">
                <i className="fa-solid fa-bars fa-lg"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
