import React from "react";
import DesktopBackground from "../../assets/Home/Banner/Desktop Background.svg";

function Banner() {
  return (
    <section className="home-banner">
      <img
        src={DesktopBackground}
        alt="Banner desktop background"
        className="home-banner-background"
      />
      <header>
        <h1>
          Manufacturing Excellence in <span>Vehicle Machine Parts</span>
        </h1>
        <p>
          We design and manufacture high-precision vehicle components with a
          strong focus on L3 and L5 platforms, combining engineering expertise,
          innovation, and dependable manufacturing standards.
        </p>
      </header>
    </section>
  );
}

export default Banner;
