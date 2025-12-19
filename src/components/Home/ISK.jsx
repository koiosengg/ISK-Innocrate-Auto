import React from "react";
import Logo from "/Logo.svg";

function ISK() {
  return (
    <section className="home-isk">
      <img src={Logo} alt="Company logo" />
      <header>
        <h2>
          Powered by <br /> <span>ISK Auto Industries</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Pellentesque proin vulputate
          at scelerisque. Dui ullamcorper risus lobortis donec risus et ac
          vulputate.
        </p>
      </header>
      <a
        href="https://iskauto.in/index.php"
        target="_blank"
        className="navbar-cta"
      >
        <span>Let’s Explore</span>
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
    </section>
  );
}

export default ISK;
