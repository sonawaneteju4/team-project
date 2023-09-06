import { collection, getDoc, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const HandleReq = ({stausId}) => {
  const [userData, setuserData] = useState([])
  const colRef = collection(db, "donnarInfo")

  useEffect(()=>{

    const getDonorInfo= async() =>{
      const q = query(colRef, where('uId', "==" , stausId));
      const data = getDocs(q)
      setuserData(data.doc)
    }
    getDonorInfo();
  })


  return <div>
    {userData.map((item)=>(<div>
      {item.id}
    </div>))}
  </div>;

};

export default HandleReq;
