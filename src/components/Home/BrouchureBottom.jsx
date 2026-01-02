import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/Home/Brochure Bottom/Image.png";

function BrouchureBottom() {
  return (
    <section className="home-brouchure-bottom">
      <div className="home-brouchure-bottom-heading">
        <h2>Explore Our Brouchure</h2>
        <p>
          Discover our full range of vehicle components with clear technical and
          application details.
        </p>
        <a href="/" className="navbar-cta ">
          <span>Download Brochure</span>
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
      <div className="home-brouchure-bottom-img">
        <img src={Image} alt="Image" />
      </div>
    </section>
  );
}

export default BrouchureBottom;
