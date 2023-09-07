import React from "react";
import './precautions.css'

const Precautions = () => {
  return (
    <>
      <div>
        <div  className="phead">Precautions Before Blood Donation</div>
        <hr />
        <div className="a1">
          <p>Before Blood Donation</p>
        </div>
        <div className="img1">
          <img src="./image/commonResource_1517314124_68648.jpg" alt="" />
          <img src="./image/Preparing-to-donate.jpg" alt="" />
        </div>
        {/* <hr />
        <div>
          <div className="headingP"><span className=".do">Do</span>{"      "}<span className=".dont">Dont</span></div>
          <img className="imgDoDont" src="./" alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Precautions;
