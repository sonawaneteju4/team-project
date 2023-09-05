import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";

const DonorForm = () => {
  // const bbId = useParams('bbId');
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
  const searchParams = new URLSearchParams(navigate.search);
  const bbId = searchParams.get('bbId');
  console.log(bbId);



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
    <div>
      <div>Donor Form {bbId}</div>
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

        <div>
          <lable>CBC</lable><input type="checkbox" name="" id="" />
          <lable>HIV</lable><input type="checkbox" name="" id="" />
          <lable>Hephities B</lable><input type="checkbox" name="" id="" />
          <lable>Hephities C</lable><input type="checkbox" name="" id="" />
        </div>
      </div>
      <div>
        <label htmlFor="">Have you suffering from any disease ?</label>
        <select name="" id="">
          <option value="">Select</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
        <div>
        <lable>CBC</lable><input type="checkbox" name="" id="" />
          <lable>Fever</lable><input type="checkbox" name="" id="" />
          <lable>Cold</lable><input type="checkbox" name="" id="" />
          <lable>Flue</lable><input type="checkbox" name="" id="" />
          <lable>covid</lable><input type="checkbox" name="" id="" />
          <lable>dibeties</lable><input type="checkbox" name="" id="" />
        </div>
      </div>

      <button className="button">submit</button>
    </div>
  );
};
export default DonorForm;
