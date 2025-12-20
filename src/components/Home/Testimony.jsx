import React, { useRef, useState, useEffect } from "react";

function Testimony() {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const testimonyData = [
    {
      name: "Ramesh Patil",
      text: "We have been sourcing suspension parts from Innocrate for some time now. Quality is consistent and fitment is proper. Support team is also responsive whenever we need clarifications.",
      location: "Pune, Maharashtra",
    },
    {
      name: "Anil Kumar",
      text: "Innocrate understands three-wheeler requirements very well. Their components are reliable and have helped us reduce frequent maintenance issues.",
      location: "Hosur, Tamil Nadu",
    },
    {
      name: "Sandeep Verma",
      text: "We were looking for a dependable manufacturer for L3 vehicle parts. Innocrate delivered as promised and timelines were maintained.",
      location: "Faridabad, Haryana",
    },
    {
      name: "Mahesh Gowda",
      text: "Good manufacturing quality and practical designs. Their team explains things clearly and helps in choosing the right solution.",
      location: "Bengaluru, Karnataka",
    },
    {
      name: "Iqbal Shaikh",
      text: "Products are sturdy and performance has been good on vehicles in daily use. Overall a trustworthy company to work with.",
      location: "Nashik, Maharashtra",
    },
  ];

  const maxIndex = testimonyData.length - 3;

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    setSlideWidth(width / 3 - 16 + 24);
  }, []);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * slideWidth
      }px)`;
      sliderRef.current.style.transition = "0.4s ease";
    }
  }, [currentIndex, slideWidth]);

  return (
    <section className="template">
      <header className="template-heading">
        <p>
          <span></span> Testimonials
        </p>
        <h2>What Our Clients Say</h2>
      </header>
      <div className="home-testimony">
        <div className="home-testimony-container" ref={containerRef}>
          <div className="home-testimony-slide" ref={sliderRef}>
            {testimonyData.map((data, index) => (
              <article className="home-testimony-set" key={index}>
                <p>{data.text}</p>
                <div className="home-testimony-set-info">
                  <h3>{data.name}</h3>
                  <span>{data.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="home-testimony-arrows desktop">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{ transform: "rotate(180deg)" }}
            >
              <path
                d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                fill="#1C1B1F"
              />
            </svg>
          </button>
          <button onClick={handleNext} disabled={currentIndex === maxIndex}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                fill="#1C1B1F"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
