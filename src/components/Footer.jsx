import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.svg";

function Footer() {
  return (
 <footer className="site-footer">
  <section className="footer-container">

    <div className="footer-container-top">
      <address className="footer-brand">
        <img src={Logo} alt="Company logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur Justo tellus eu odio sem
          vitae egestas
        </p>
      </address>

      <nav aria-label="Footer navigation">
        <ul className="footer-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>

    <hr />

    <div className="footer-container-bottom">
      <p>© All copyrights reserved 2025.</p>

      <nav aria-label="Social links">
        <ul>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">Youtube</a>
          </li>
        </ul>
      </nav>

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

  </section>
</footer>

  );
}

export default Footer;
