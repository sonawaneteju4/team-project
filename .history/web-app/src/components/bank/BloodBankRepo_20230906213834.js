import React from "react";
import "./BloodBankRepo.css";

const BloodBankRepo = () => {
  return (
    <>
      <div>
        <div>
        <div className="main">
          <h1>BloodBankRepo</h1>
          <div className="t1">
            <p>Name</p>
            <p>Contact</p>
            <p>Address</p>
            <p>Category</p>
          </div>
          <div className="t2">
            <p>State</p>
            <p>District</p>
            <p>City</p>
            <p>Pincode</p>
          </div>
        </div>
        </div>
        <div>
        <div className="main">
          <h1 className="main">donorinfor</h1>
          <div className="t1">
            <p>Name </p>
            <p>Address </p>
            <p>Contact No</p>
            <p>State</p>
            <p>City</p>
            <p>Pincode</p>
          </div>
          <div className="t2">
            <p> Gender</p>
            <p>Age</p>
            <p>Weight</p>
            <p> Last Donate Date</p>
            <p>Blood Test Before</p>
            <p> Blood Group</p>
          </div>
        </div>
        </div>

            <h1>Title Here</h1>
        <div className="main">
          <div className="t1">
            <p>Blood Bank Id</p>
            <p>Blood Group</p>
            <p>HIV</p>
            <p>Haemoglobin</p>
            <p>Platelet Count</p>
          </div>
          <div className="t2">
            <p>RBC Count</p>
            <p>Type OF Donation</p>
            <p>Date Of Donation</p>
            <p>Hepatities B</p>
            <p>Hepatities C</p>
            <p>Plasma Count</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BloodBankRepo;
