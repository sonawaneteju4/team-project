import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const HospitalReq = () => {
  const [ReqData, setReqData] = useState([]);
  const DataRef = collection(db, "HospitalReq");
  useEffect(() => {
    const q = query(
      DataRef,
      where("bankId", "==", "hjPKfVL4DfVqL1dE8XkiCvxnQCf1")
    );
    const HospitalReq = async () => {
      try {
        const data = await getDocs(q);
        console.log(data);
        data.forEach((items) => {
          setReqData(items.data());
        });
        console.log(ReqData);
      } catch (error) {
        alert(error);
      }
    };
    HospitalReq();
  }, []);

  return (
    <>
      {ReqData.map((items) => (
        <div>{items.data().bankId}</div>
      ))}
    </>
  );
};

export default HospitalReq;
