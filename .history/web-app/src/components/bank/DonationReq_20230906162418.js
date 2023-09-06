import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const DonationReq = () => {
  const [ReqData, setReqData] = useState([]);
  const DataRef = collection(db, "DonationReq");

  const q = query(
    DataRef,
    where("bankId", "==", "V8DWOfb6iyM8svTdIKSjoN8ZWYa2")
  );
  useEffect(() => {
    const donationReq = async () => {
      const data = await getDocs(q);
      setReqData(data);
      console.log(""ReqData);
      data.forEach((items) => {});
      console.log(ReqData);
    };
    donationReq();
  }, []);

  return <div></div>;
};

export default DonationReq;
