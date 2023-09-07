import React from "react";
import "./font.css";
import BloodBankRepo from "./bank/BloodBankRepo";
import Loading from "./Loading";
import ServiceCarsoul from "./ServiceCarsoul";

const Index = () => {
  const slides = [

     
    { image: "./image/image1.webp", caption: "Car Wraping" },
    { image: "./image/image2.jpg", caption: "Bike Wraping" },
    { image: ".//image/image3.jpg", caption: "Mobile Wraping" },
    { image: "./image/image4.jpg", caption: "Alloy Painting" },
    {image:"./image/image5.jpg",caption:"abcd"},
    {image:"./image/image6.jpg",caption:"abcd"},
    {image:"./image/image7.jpg",caption:"abcde"},
    {image:"./image/image8.jpg",caption:"xyz"}
  ];
  return (
    <div>
                  <ServiceCarsoul slides={slides} />

    </div>
  );
};

export default Index;
