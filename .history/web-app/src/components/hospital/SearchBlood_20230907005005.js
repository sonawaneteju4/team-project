import React, { useEffect, useState } from "react";
import importedData from "./../json/states.json";
import { collection } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
const SearchBlood = () => {
  return <div>SearchBlood</div>;
};

export default SearchBlood;
