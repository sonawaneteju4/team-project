import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import HandleReq from "./HandleReq";

const DonationReq = () => {
  const [, setReqData] = useState([]);
  const DataRef = collection(db, "DonationReq");

  useEffect(() => {
    const donationReq = async () => {
      const q = query(
        DataRef,
        where("bankId", "==", localStorage.getItem("userId"))
      );
      const data = await getDocs(q);
      // setReqData(data.docs);

      data.forEach((items) => {
        setReqData(items.data());
        console.log("helllo " + bankData);
      });
      console.log("req data is here" + ReqData);
      console.log(ReqData);
    };
    donationReq();
  }, []);

  return <div></div>;
};

export default DonationReq;