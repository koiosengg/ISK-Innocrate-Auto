import React from "react";
import Settings from "../../assets/Home/Why/Settings.svg";

function Why() {
  return (
    <section className="template">
      <header className="template-heading">
        <p>
          <span></span> Why Choose Us
        </p>
        <h2>Why Industry Leaders Trust SK2</h2>
      </header>
      <div className="home-why">
        <article>
          <img src={Settings} alt="Settings Icon" />
          <div className="home-why-content">
            <h3>Engineering-First Approach</h3>
            <p>
              Every product is designed with real vehicle conditions in mind,
              not just drawings and simulations.
            </p>
          </div>
        </article>
        <article>
          <img src={Settings} alt="Settings Icon" />
          <div className="home-why-content">
            <h3>Specialized in L3 & L5 Platforms</h3>
            <p>
              Deep understanding of three-wheeler and light mobility systems
              helps us deliver better-matched solutions.
            </p>
          </div>
        </article>
        <article>
          <img src={Settings} alt="Settings Icon" />
          <div className="home-why-content">
            <h3>Continuous R&D & Innovation</h3>
            <p>
              We actively develop next-generation designs that improve
              efficiency, sustainability, and ease of maintenance.
            </p>
          </div>
        </article>
        <article>
          <img src={Settings} alt="Settings Icon" />
          <div className="home-why-content">
            <h3>Reliable Manufacturing Standards</h3>
            <p>
              Consistent quality, controlled processes, and dependable output
              across every production batch.
            </p>
          </div>
        </article>
        <article>
          <img src={Settings} alt="Settings Icon" />
          <div className="home-why-content">
            <h3>Focused on Durability & Performance</h3>
            <p>
              Our components are built to improve ride comfort, reduce wear, and
              perform reliably over time.
            </p>
          </div>
        </article>
        <article>
          <img src={Settings} alt="Settings Icon" />
          <div className="home-why-content">
            <h3>Responsive & Practical Support</h3>
            <p>
              Clear communication, quick responses, and hands-on support
              throughout development and supply.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Why;
