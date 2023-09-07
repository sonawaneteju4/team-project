import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import  './hospital.css'

const HospitalReq = () => {
  const [ReqData, setReqData] = useState([]);
  const DataRef = collection(db, "HopitalReq");
  useEffect(() => {
    const q = query(
      DataRef,
      where("bankId", "==", localStorage.getItem("userId"))
    );
    const HospitalReq = async () => {
      try {
        const data = await getDocs(q);
        console.log(data);
        setReqData(data.docs);

        // data.forEach((items) => {
        //   setReqData(items.data());
        // });
        console.log(ReqData);
      } catch (error) {
        alert(error);
      }
    };
    HospitalReq();
  }, []);

  return (
    <div className="myData">
      <h1 style={{ textAlign: "center", color: "white" }}>Hospital Req</h1>
      <div className="">
        {ReqData.map((items) => (
          <div className="dataOfHospt">
            <div>Request Id: {items.id}</div>
            <div>Blood Group:{items.data().bloodGroup}</div>
            <div>Hospital Id :{items.data().hospitalId}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalReq;
