import React, { useState } from "react";
import "../component/Carsouel.css";

const ServiceCarsoul = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const goToPreviousSlide = () => {
    setActiveSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
  };

  const goToNextSlide = () => {
    setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
  };
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
