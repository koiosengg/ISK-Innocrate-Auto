import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Home/Contact/Desktop Background.svg";

function Contact() {
  return (
    <section className="home-contact">
      <div className="footer-contact">
        <img src={DesktopBackground} alt="Contact desktop background" />

        <div className="footer-contact-content">
          <header className="footer-contact-header">
            <h2>Let’s Build Something Reliable</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Justo tellus eu odio sem
              vitae egestas. Orci pharetra nisi fringilla cras vestibulum dolor.
            </p>
          </header>

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
        </div>
      </div>
    </section>
  );
}

export default Contact;
