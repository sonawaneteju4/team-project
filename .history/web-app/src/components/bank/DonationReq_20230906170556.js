import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import HandleReq from "./HandleReq";

const DonationReq = () => {
  const [ReqData, setReqData] = useState([]);
  const DataRef = collection(db, "DonationReq");

  useEffect(() => {
    const donationReq = async () => {
      const q = query(
        DataRef,
        where("bankId", "==", localStorage.getItem('userId'))
      );
      const data = await getDocs(q);
      setReqData(data.docs);
      console.log("req data is here" + ReqData);
      console.log(ReqData);
    };
    donationReq();
  }, []);

  return (
    <div>
       data.forEach((items) => {
        setbankData(items.data());
        console.log("helllo " + bankData);
        sessionStorage.setItem("BankEmail", items.data().email);
        setBankId(items.data().uId);
      });
    </div>
  );
};

export default DonationReq;