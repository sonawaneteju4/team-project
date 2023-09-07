import React from "react";
import "./font.css";
import BloodBankRepo from "./bank/BloodBankRepo";
import Loading from "./Loading";

const Index = () => {
  return (
    <div>
      <div className="home1">
        <div className="int1">
          <img src="./image/istockphoto-1307735237-1024x1024.jpg" alt="" />
        </div>
        <div className="hinfo"></div>
      </div>
      <div className="home1">
        <div className="int1">
          <img src="./image/hush-naidoo-jade-photography-Zp7ebyti3MU-unsplash.jpg" alt="" />
        </div>
        <div className="hinfo"></div>
      </div>
      <div className="home1">
        <div className="int1">
          <img src="./image/web-app/public/image/national-cancer-institute-XknuBmnjbKg-unsplash.jpg.jpg" alt="" />
        </div>
        <div className="hinfo"></div>
      </div>
      <div className="home1">
        <div className="int1">
          <img src="./image/istockphoto-1307735237-1024x1024.jpg" alt="" />
        </div>
        <div className="hinfo"></div>
      </div>

      <Loading />
    </div>
  );
};

export default Index;
