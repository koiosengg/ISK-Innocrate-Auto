import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.svg";
import Menu from "/menu.svg";
import MenuCancel from "/menu cancel.svg";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src={Logo} alt="Company logo" />
        </Link>

        <ul className="navbar-links desktop">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>

        <Link to="/contact" className="navbar-cta desktop">
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
        <div className="mobile-navbar-button mobile" onClick={toggleMobileNav}>
          <img
            src={Menu}
            alt="Mobile navbar open"
            style={{
              display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
            }}
          />
          <img
            src={MenuCancel}
            alt="Mobile navbar close"
            style={{
              display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
            }}
          />
        </div>
        <div
          className={`mobileNavbar mobile ${
            isMobileNavOpen
              ? "activeMobileNavbar"
              : hasToggled
              ? "nonactiveMobileNavbar"
              : ""
          }`}
        >
          <nav>
            <ul className="navbar-links desktop">
              <li>
                <Link to="/about" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={handleLinkClick}>
                  Product
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleLinkClick}>
                  Services
                </Link>
              </li>
            </ul>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="navbar-cta "
            >
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
          <div className="mobileNavbar-bottom">
            <span>©All copyrights reserved 2025.</span>
            <p>
              Crafted by{" "}
              <a
                href="https://www.koiostudio.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Koiostudio
              </a>
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
