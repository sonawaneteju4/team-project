import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import HandleReq from "./HandleReq";
import { Link } from "react-router-dom";

const DonationReq = () => {
  const [ReqData, setReqData] = useState([]);
  const DataRef = collection(db, "DonationReq");

  useEffect(() => {
    const q = query(
      DataRef,
      where("bankId", "==", localStorage.getItem("userId"))
    );
    const donationReq = async () => {
      const data = await getDocs(q);
      setReqData(data.docs);
      data.forEach((items) => {
        console.log("helllo " + bankData);
        localStorage.setItem("CurrentUserId", items.data().uId);
      });

      console.log("req data is here" + ReqData);
      console.log(ReqData);
    };
    donationReq();
  }, []);

  return (
    <div>
      {ReqData.map((item) => (
        <div>
          {/* {item.bankId} */}
          <HandleReq stausId={item.data().userId}></HandleReq>
          <Link to="/bloodReportsGenration" className="button">Create Report</Link> 
        </div>
      ))}
    </div>
  );
};

export default DonationReq;
