import React, { useEffect, useState } from "react";
import importedData from "./../json/states.json";
import { collection } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import  './Availablity.css';
const BloodAvb = () => {
  return (
    <div>BloodAvb</div>
  )
}

export default BloodAvb