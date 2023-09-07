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
    <div>
        <div>Precautions Before Blood Donation</div>
    <div>
        <p>Drink extra fluids</p>
    </div>
    <div>
        <p></p>
        </div>
        <div className="img1">
          <img src="./image/commonResource_1517314124_68648.jpg" alt="" />
          <img src="./image/blood-donation-infographic-infographics-components-test-tube-123215219.jpg" alt="" />
        </div>
        <hr />
        <div>
          <div className="headingP"><span className=".do">Do</span>{"      "}<span className=".dont">Dont</span></div>
          <img className="imgDoDont" src="./image/Preparing-to-donate.jpg" alt="" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Precautions;
