import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const DonorForm = () => {
  const [regUser, setregUser] = useState({
    donatebloodbefore: "",
    lastdonatedate: "",
    bloodtestbefore: " ",
    currentlysuffereing: " ",
  });
  const usersCollectionRef = collection(db, "users");
  const usersDataRef = collection(db, "donorForm");
  const navigate = useNavigate();
  console.log(regUser.state);

  const handleChange = (e) => {
    setregUser({ ...regUser, [e.target.name]: e.target.value });
  };

  const donor = async () => {
    await addDoc(usersDataRef, {
      donatebloodbefore: regUser.donatebloodbefore,
      lastdonatedate: regUser.lastdonatedate,
      bloodtestbefore: regUser.bloodtestbefore,
      currentlysuffereing: regUser.currentlysuffereing,
    });
    navigate("/");
  };
  return (
    <>
      <div>Donor Form</div>
      <div>
        <label htmlFor="">Have you donate blood before?</label>
        <select name="" id="">
          <option value="">Select</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Last Donate Date </label>
        <input type="date" name="lastdonatedate" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Have you done any blood test before ?</label>
        <select name="" id="">
          <option value="">Select</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>

        
      </div>
      <div>
        <label htmlFor="">Have you suffering from any disease ?</label>
        <select name="" id="">
          <option value="">Select</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
      </div>

      <button className="button">submit</button>
    </>
  );
};
export default DonorForm;
