import React from "react";
import Img1 from "../../assets/Home/Services/Mechanical 160 mm Braking System.png";
import Img2 from "../../assets/Home/Services/Hydraulic 170 mm Braking System.png";
import Img3 from "../../assets/Home/Services/Hydraulic 180 mm Braking System.png";
import Img4 from "../../assets/Home/Services/L3 (3-wheeler) Hydraulic 170 mm Braking System.png";
import Img5 from "../../assets/Home/Services/L5 PAX (4-wheeler) Hydraulic 180 mm Braking System.png";
import Img6 from "../../assets/Home/Services/Mechanical 160 mm Brake Plate.png";
import Img7 from "../../assets/Home/Services/Hydraulic Caliper Brake System.png";

function Services() {
  return (
    <section className="template home-services">
      <header className="template-heading">
        <p>
          <span></span> Why Choose Us
        </p>
        <h2>Why Industry Leaders Trust SK2</h2>
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

        <article>
          <img
            src={Img4}
            alt="L3 (3-wheeler) Hydraulic 170 mm Braking System"
          />
          <div className="home-services-text">
            <h3>L3 (3-wheeler) Hydraulic 170 mm Braking System</h3>
            <p>Trailing Arm Independent Drivetrain</p>
          </div>
        </article>

        <article>
          <img
            src={Img5}
            alt="L5 PAX (4-wheeler) Hydraulic 180 mm Braking System"
          />
          <div className="home-services-text">
            <h3>L5 PAX (4-wheeler) Hydraulic 180 mm Braking System</h3>
            <p>Trailing Arm Independent Drivetrain</p>
          </div>
        </article>

        <article>
          <img src={Img6} alt="Mechanical 160 mm Brake Plate" />
          <div className="home-services-text">
            <h3>Mechanical 160 mm Brake Plate</h3>
            <p>Front Solution</p>
          </div>
        </article>

        <article>
          <img src={Img7} alt="Hydraulic Caliper Brake System" />
          <div className="home-services-text">
            <h3>Hydraulic Caliper Brake System</h3>
            <p>Front Solution</p>
          </div>
        </article>

        <div className="home-services-content">
          <div className="home-services-content-container">
            <h2>
              Our R&D Team is Working on
              <br /> Next-Generation Technologies,
            </h2>
            <p>
              Lightweight suspension systems for improved efficiency
              <br />
              <br />
              Smart modular designs for easier maintenance
              <br />
              <br />
              Lightweight suspension systems for improved efficiency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
