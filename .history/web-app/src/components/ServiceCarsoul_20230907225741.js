import React, { useState, useEffect } from "react";
import "./Carsouel.css";

const ServiceCarsoul = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setActiveSlide((activeSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const goToPreviousSlide = () => {
    setActiveSlide((activeSlide - 1 + slides.length) % slides.length);
  };

  // Function to automatically advance the slide every 10 seconds
  const autoAdvanceSlide = () => {
    goToNextSlide();
  };

  // Set up an interval to auto-advance the slide every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(autoAdvanceSlide, 10000); // 10 seconds
    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);

  return (
    <div className="carousel">
      <div className="slide-container">
        <div
          className="slides"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.image} alt={slide.caption} />
              <div className="slide-caption">{slide.caption}</div>
              <div className="controls slide-captionbtn">
                <button className="btn" onClick={goToPreviousSlide}>
                  Previous
                </button>
                <button className="btn" onClick={goToNextSlide}>
                  Next
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCarsoul;
