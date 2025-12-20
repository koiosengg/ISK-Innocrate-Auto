import React, { useState } from "react";
import Img1 from "../../assets/Home/Trailer/Image 1.png";
import Img2 from "../../assets/Home/Trailer/Image 2.png";
import Img3 from "../../assets/Home/Trailer/Image 3.png";
import Img4 from "../../assets/Home/Trailer/Image 4.png";
import Img5 from "../../assets/Home/Trailer/Image 5.png";

function Trailer() {
  const [activeTab, setActiveTab] = useState("Bajaj");

  return (
    <section className="template">
      <header className="template-heading">
        <p>
          <span></span> Why Choose Us
        </p>
        <h2>Why Industry Leaders Trust SK2</h2>
      </header>

      <div className="home-trailer">
        <div className="home-trailer-tabs">
          <button
            className={activeTab === "Bajaj" ? "active-tab" : ""}
            onClick={() => setActiveTab("Bajaj")}
          >
            <p>Bajaj RE/Compact</p>
            <hr />
          </button>

          <button
            className={activeTab === "Mahindra" ? "active-tab" : ""}
            onClick={() => setActiveTab("Mahindra")}
          >
            <p>Mahindra Alfa</p>
            <hr />
          </button>

          <button
            className={activeTab === "Piaggio" ? "active-tab" : ""}
            onClick={() => setActiveTab("Piaggio")}
          >
            <p>Piaggio Ape</p>
            <hr />
          </button>

          <button
            className={activeTab === "Maxima" ? "active-tab" : ""}
            onClick={() => setActiveTab("Maxima")}
          >
            <p>Bajaj Maxima Z</p>
            <hr />
          </button>
        </div>

        {activeTab === "Bajaj" && (
          <div className="home-trailer-cards" id="Bajaj">
            <article>
              <img src={Img1} alt="Premium Trailer Arm" />
              <div className="home-services-text">
                <h3>Premium Trailer Arm</h3>
                <p>Bajaj RE/Compact</p>
              </div>
            </article>
            <article>
              <img src={Img2} alt="3rd Gen Rear Hub" />
              <div className="home-services-text">
                <h3>3rd Gen Rear Hub</h3>
                <p>Bajaj All Models | TVS | Piaggio | Mahindra | Atul</p>
              </div>
            </article>
          </div>
        )}

        {activeTab === "Mahindra" && (
          <div className="home-trailer-cards" id="Mahindra">
            <article>
              <img src={Img3} alt="3rd Gen Rear Hub" />
              <div className="home-services-text">
                <h3>3rd Gen Rear Hub</h3>
                <p>Mahindra Alfa</p>
              </div>
            </article>
            <article>
              <img src={Img2} alt="3rd Gen Rear Hub" />
              <div className="home-services-text">
                <h3>3rd Gen Rear Hub</h3>
                <p>Bajaj All Models | TVS | Piaggio | Mahindra | Atul</p>
              </div>
            </article>
          </div>
        )}

        {activeTab === "Piaggio" && (
          <div className="home-trailer-cards" id="Piaggio">
            <article>
              <img src={Img4} alt="3rd Gen Piaggio Rear" />
              <div className="home-services-text">
                <h3>3rd Gen Piaggio Rear</h3>
                <p>Piaggio Ape</p>
              </div>
            </article>
            <article>
              <img src={Img2} alt="3rd Gen Rear Hub" />
              <div className="home-services-text">
                <h3>3rd Gen Rear Hub</h3>
                <p>Bajaj All Models | TVS | Piaggio | Mahindra | Atul</p>
              </div>
            </article>
          </div>
        )}

        {activeTab === "Maxima" && (
          <div className="home-trailer-cards" id="Maxima">
            <article>
              <img src={Img5} alt="3rd Gen Rear Hub" />
              <div className="home-services-text">
                <h3>3rd Gen Rear Hub</h3>
                <p>Bajaj Maxima Z</p>
              </div>
            </article>
            <article>
              <img src={Img2} alt="3rd Gen Rear Hub" />
              <div className="home-services-text">
                <h3>3rd Gen Rear Hub</h3>
                <p>Bajaj All Models | TVS | Piaggio | Mahindra | Atul</p>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}

export default Trailer;
