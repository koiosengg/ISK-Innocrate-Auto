import React from "react";
import Img1 from "../../assets/Home/Services/Mechanical 160 mm Braking System.png";
import Img2 from "../../assets/Home/Services/Hydraulic 170 mm Braking System.png";
import Img3 from "../../assets/Home/Services/Hydraulic 180 mm Braking System.png";

function Services() {
  return (
    <section className="template home-services">
      <header className="template-heading">
        <p>
          <span></span> Our Products
        </p>
        <h2>
          Independent Drivetrain & <br className="desktop" /> Brake Solutions
        </h2>
      </header>

      <div className="home-services-container">
        <article>
          <img src={Img1} alt="Mechanical 160 mm Braking System" />
          <div className="home-services-text">
            <h3>Mechanical 160 mm Braking System</h3>
            <p>L3 Independent Drivetrain – 35” Frame</p>
          </div>
        </article>

        <article>
          <img src={Img2} alt="Hydraulic 170 mm Braking System" />
          <div className="home-services-text">
            <h3>Hydraulic 170 mm Braking System</h3>
            <p>L3 Independent Drivetrain – 35” Frame</p>
          </div>
        </article>

        <article>
          <img src={Img3} alt="Hydraulic 180 mm Braking System" />
          <div className="home-services-text">
            <h3>Hydraulic 180 mm Braking System</h3>
            <p>L5 Independent Drivetrain – 42” Frame</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;
