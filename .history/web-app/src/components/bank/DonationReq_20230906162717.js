import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const DonationReq = () => {
  const [ReqData, setReqData] = useState([]);
  const DataRef = collection(db, "DonationReq");

  const q = query(
    DataRef,
    where("bankId", "==", localStorage.getItem("userId'))
  );
  useEffect(() => {
    const donationReq = async () => {
      const data = await getDocs(q);
      setReqData(data);
      console.log("req data is here" + ReqData);
      data.forEach((items) => {});
      console.log(ReqData);
    };
    donationReq();
  }, []);

  return <div>
     {ReqData.map((item) => (<div>

     </div>))}
  </div>;
};

export default DonationReq;
