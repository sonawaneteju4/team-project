import { collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebaseConfig";

const HandleReq = ({stausId}) => {
  const [userData, setuserData] = useState([])
  const colRef = collection(db, )
  return <div>HandleReq{stausId}</div>;

};

export default HandleReq;
