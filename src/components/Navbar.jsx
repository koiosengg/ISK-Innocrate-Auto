import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.svg";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Company logo" />
        </Link>

        <ul className="navbar-links">
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>

        <Link to="/contact" className="navbar-cta">
          <span>Contact Us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
              fill="#fff"
            />
          </svg>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
