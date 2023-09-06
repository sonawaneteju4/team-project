import { collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const HandleReq = ({stausId}) => {
  const [userData, setuserData] = useState([])
  const colRef = collection(db, "donnarInfo")

  useEffect(()=>{
    
  })


  return <div>HandleReq{stausId}</div>;

};

export default HandleReq;
