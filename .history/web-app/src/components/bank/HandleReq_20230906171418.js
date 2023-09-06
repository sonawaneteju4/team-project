import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const HandleReq = ({stausId}) => {
  const [userData, setuserData] = useState([]);
  const usersDataRef = collection(db, "donnarInfo");
  const colRef = collection(db, "donnarInfo")

  useEffect(() => {
    const q2 = query(
      usersDataRef,
      where("uId", "==", s)
    );
    const getUserDetails = async () => {
      const data = await getDocs(q2);      
      // setuserData(data)
      data.forEach((item) => {
        console.log(item.data());
        setuserData(item.data());
        localStorage.setItem("userDocId" , item.id)
        sessionStorage.setItem("BloodGroup" , item.data().bloodGroup)
        console.log("userData  " + userData);
      });
    };
    getUserDetails();
  }, []);


  return <div>
    {userData.uId}
    {/* {userData.userName} */}
      </div>;

};

export default HandleReq;
