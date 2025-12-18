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
          Lorem ipsum dolor sit amet consectetur. Pellentesque proin vulputate
          at scelerisque. Dui ullamcorper risus lobortis donec risus et ac
          vulputate. Scelerisque nunc consequat diam pellentesque.
        </p>
      </header>
    </section>
  );
}

export default Banner;
