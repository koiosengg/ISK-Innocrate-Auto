import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Home/Brochure Top/Desktop Background.png";

function BrouchureTop() {
  return (
    <section className="home-brouchure-top">
      <img src={DesktopBackground} className="home-brouchure-top-background" />
      <div className="home-brouchure-top-container">
        <h2>Download Our Brouchure</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Justo tellus eu odio{" "}
          <br className="desktop" /> sem vitae egestas. Orci pharetra nisi
          fringilla cras.
        </p>
        <a href="/" className="navbar-cta ">
          <span>Download Now</span>
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
        </a>
      </div>
    </section>
  );
}

export default BrouchureTop;
