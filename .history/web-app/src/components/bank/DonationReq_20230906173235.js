import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import HandleReq from "./HandleReq";

const DonationReq = () => {
  const [ReqData, setReqData] = useState([]);
  const DataRef = collection(db, "DonationReq");

  useEffect(() => {
    const q = query(
      DataRef,
      );
      const donationReq = async () => {
      where("bankId", "==", localStorage.getItem('userId'))
      const data = await getDocs(q);
      setReqData(data.docs);
      console.log("req data is here" + ReqData);
      console.log(ReqData);
    };
    donationReq();
  }, []);

  return (
    <div>
      {ReqData.map((item) => (
        <div>

        {item.id}


          </div>
      ))}
    </div>
  );
};

export default DonationReq;
