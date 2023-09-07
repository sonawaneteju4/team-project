import React from "react";
import './precautions.css'

const Precautions = () => {
  return (
    <>
      <div>
        <div  className="phead">Precautions Before Blood Donation</div>
        <div className="a1">
          <p>Drink extra fluids</p>
        </div>
        <div className="">
          <img src="./image/commonResource_1517314124_68648.jpg" alt="" />
          <p>
            Avoid strenuous physical activity or heavy lifting for about five
            hours.
          </p>
        </div>
        <div>
          <p>
            If you feel lightheaded, lie down with your feet up until the
            feeling passes
          </p>
        </div>
        <div>
          <p>
            Keep your bandage on and dry for the next five hours. If you have
            bleeding after removing the bandage, put pressure on the site and
            raise your arm until the bleeding stops
          </p>
        </div>

        <div>
          <p>
            If bruising occurs, apply a cold pack to the area periodically
            during the first 24 hours
          </p>
        </div>
      </div>
    </>
  );
};

export default Precautions;
