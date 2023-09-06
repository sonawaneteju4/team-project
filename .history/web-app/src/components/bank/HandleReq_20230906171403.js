import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const HandleReq = ({stausId}) => {
  const [userData, setuserData] = useState([]);
  const usersDataRef = collection(db, "donnarInfo");
  const colRef = collection(db, "donnarInfo")

  const [userData, setuserData] = useState([]);



  return <div>
    {userData.uId}
    {/* {userData.userName} */}
      </div>;

};

export default HandleReq;
