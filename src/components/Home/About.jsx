import React from "react";
import Image1 from "../../assets/Home/About/Image 1.png";
import Image2 from "../../assets/Home/About/Image 2.png";
import Image3 from "../../assets/Home/About/Image 3.png";
import Image4 from "../../assets/Home/About/Image 4.png";
import Image5 from "../../assets/Home/About/Image 5.png";

function aBOUT() {
  return (
    <section className="template" id="about">
      <header className="template-heading">
        <p>
          <span></span> About Us
        </p>
        <h2>Who We Are & What We Build</h2>
      </header>
      <div className="home-about">
        <div className="home-about-gallery">
          <img src={Image1} alt="About company image" />
          <img src={Image2} alt="About company image" />
          <img src={Image3} alt="About company image" />
          <img src={Image4} alt="About company image" />
          <img src={Image5} alt="About company image" />
        </div>
        <p>
          We specialize in the development of three-wheeler suspension systems
          for L3 and L5 category vehicles. Additionally, we manufacture a wide
          range of components for various 3 wheeler vehicles. We are constantly
          innovating to create new designs and products that are more reliable,
          sustainable and efficient than those offered by other manufacturers.
          <br />
          <br />
          We are continuously working on cutting edge designs and next
          generation technologies that enhance durability, performance, and
          sustainability across all our products.
          <br />
          <br />
          Our vision is to become a leading supplier in the mobility solutions
          sector by focusing on innovation, customer satisfaction, and global
          quality standards. Our mission is to bridge the gap between today’s
          mobility challenges and tomorrow’s sustainable, tech-driven
          transportation solution.
          <br />
          <br />
          We are actively engaged in solving the real world challenges of
          current generation vehicles – focusing on improving ride comfort, fuel
          efficiency, and reducing maintenance costs.
        </p>
      </div>
    </section>
  );
}

export default aBOUT;
