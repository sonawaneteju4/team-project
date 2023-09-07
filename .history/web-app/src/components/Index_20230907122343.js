import React from "react";
import "./font.css";
import BloodBankRepo from "./bank/BloodBankRepo";
import Loading from "./Loading";

const Index = () => {
  const slides = [
    { image: "/imageistockphoto-1307735237-1024x1024", caption: "Car Wraping" },
    { image: "image/hush-naidoo-jade-photography-Zp7ebyti3MU-unsplash.jpg", caption: "Bike Wraping" },
    { image: "image/helmetServ.jpg", caption: "Helmet Wraping" },
    { image: "/image/national-cancer-institute-XknuBmnjbKg-unsplash.jpg.jpg", caption: "Mobile Wraping" },
    { image: "image/mod.jpg", caption: "Alloy Painting" },
    { image: "image/car2.jpg", caption: "Tuning" },
    { image: "image/PPFS.jpg", caption: "PPF And Detailing" },
    { image: "image/mod.jpg", caption: "Modification" },
  ];
  return (
    <div>
      <div className="home1">
        <div className="int1">
          <img src="./image/.jpg" alt="" />
        </div>
        <div className="hinfo"></div>
      </div>
      <div className="home1">
        <div className="int1">
          <img src="./image/" alt="" />
        </div>
        <div className="hinfo"></div>
      </div>
      <div className="home1">
        <div className="int1">
          <img src="./image/" alt="" />
        </div>
        <div className="hinfo"></div>
      </div>
      <div className="home1">
        <div className="int1">
          <img src="./image/testalize-me-ZdToNCVLpOg-unsplash.jpg" alt="" />
        </div>
        <div className="hinfo"></div>
      </div>

      <Loading />
    </div>
  );
};

export default Index;
