import React from "react";
import "./font.css";
import BloodBankRepo from "./bank/BloodBankRepo";
import Loading from "./Loading";
import ServiceCarsoul from "./ServiceCarsoul";

const Index = () => {
  const slides = [
    {
      image: "./image/image2.jpg",
      caption: "Together, we can make a world full of life.",
    },
    {
      image: ".//image/image3.jpg",
      caption: "Safety first, for you and for them – donate blood responsibly",
    },
    {
      image: "./image/image4.jpg",
      caption: "A drop of kindness can create an ocean of difference",
    },
    {
      image: "./image/image5.jpg",
      caption: "Your blood is their lifeline; donate generously",
    },
    {
      image: "./image/image6.jpg",
      caption: "Your blood has the power to heal",
    },
    {
      image: "./image/image7.jpg",
      caption: "A safe donation is a compassionate donation",
    },
    {
      image: "./image/image8.jpg",
      caption: "Don't just give blood; give safe blood",
    },
  ];
  return (
    <div>
      <div>
        <ServiceCarsoul slides={slides} />
      </div>
      
      <div>
        <div>
          <img src="./image/donationFact" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Index;
