import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

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
      setReqData(data);
      console.log("req data is here" + ReqData);
      console.log(ReqData.docs);
    };
    donationReq();
  }, []);

  return (
    <div>
      {ReqData.map((item) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
};

export default DonationReq;
