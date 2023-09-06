import { collection } from "firebase/firestore";
import React, { useState } from "react";

const HandleReq = ({stausId}) => {
  const [userData, setuserData] = useState([])
  const colRef = collection(db)
  return <div>HandleReq{stausId}</div>;

};

export default HandleReq;
