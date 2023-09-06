import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const HandleReq = ({stausId}) => {
  const [userData, setuserData] = useState([])
  const colRef = collection(db, "donnarInfo")

  useEffect(()=>{

    const getDonorInfo= async() =>{
      const q = query(colRef, where('uId', "==" , stausId));
      const data = getDocs(q)
      setuserData(data.docs)
      data.forEach((items) => {
        setuserData(items.data());
        console.log("helllo " + userData);
      });
      console.log("req data is here" + userData);

    }
    getDonorInfo();
  },[])


  return <div>
    {userData.userName}
    {userData.userName}
      </div>;

};

export default HandleReq;
