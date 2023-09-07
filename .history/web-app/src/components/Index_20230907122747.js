import React from "react";
import "./font.css";
import BloodBankRepo from "./bank/BloodBankRepo";
import Loading from "./Loading";
import ServiceCarsoul from "./ServiceCarsoul";

const Index = () => {
  const slides = [

    // itha img tak ani caption khi tri quote tak  
    { image: "./image/istockphoto-1307735237-1024x1024.jpg", caption: "Car Wraping" },
    { image: "./image/hush-naidoo-jade-photography-Zp7ebyti3MU-unsplash.jpg", caption: "Bike Wraping" },
    { image: "./image/helmetServ.jpg", caption: "Helmet Wraping" },
    { image: ".//image/national-cancer-institute-XknuBmnjbKg-unsplash.jpg.jpg", caption: "Mobile Wraping" },
    { image: "./image/testalize-me-ZdToNCVLpOg-unsplash.jpg", caption: "Alloy Painting" },
    // { image: "image/car2.jpg", caption: "Tuning" },
    // { image: "image/PPFS.jpg", caption: "PPF And Detailing" },
    // { image: "image/mod.jpg", caption: "Modification" },
  ];
  return (
    <div>
                  <ServiceCarsoul slides={slides} />

    </div>
  );
};

export default Index;
