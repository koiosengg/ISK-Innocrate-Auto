import React, { useRef, useState, useEffect } from "react";

function Testimony() {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const testimonyData = [
    {
      name: "Rohit Mehta",
      text: "Working with the team has been a great experience. The quality of the product and attention to detail exceeded our expectations. Support was responsive and always helpful throughout the process.",
      location: "Pune, India",
    },
    {
      name: "Priya Nair",
      text: "Their solutions are reliable and well engineered. We noticed a clear improvement in performance and durability after switching to their systems.",
      location: "Kochi, India",
    },
    {
      name: "Sandeep Verma",
      text: "From consultation to delivery, everything was handled professionally. The team understands industry requirements very well and delivers consistently.",
      location: "Delhi, India",
    },
    {
      name: "Amit Kulkarni",
      text: "We have been using their products for over a year now, and the results have been excellent. Minimal maintenance and great build quality.",
      location: "Nagpur, India",
    },
    {
      name: "Karthik R",
      text: "Highly dependable products backed by a knowledgeable team. They were quick to customize solutions based on our operational needs.",
      location: "Bengaluru, India",
    },
    {
      name: "Neha Singh",
      text: "What stood out the most was their commitment to timelines and quality. It’s rare to find a team that balances both so effectively.",
      location: "Indore, India",
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
        <div className="home-testimony-arrows">
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
