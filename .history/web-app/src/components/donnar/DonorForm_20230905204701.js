import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./dForm.css";
const DonorForm = () => {
  const [donorHistory, setdonorHistory] = useState({
    donatebloodbefore: "",
    lastdonatedate: "",
    bloodtestbefore: " ",
    currentlysuffereing: " ",
  });
  const usersCollectionRef = collection(db, "users");
  const usersDataRef = collection(db, "donorForm");
  const navigate = useNavigate();
  console.log(donorHistory.state);
  const { bbId } = useParams();
  console.log("bbId:", bbId);

  const handleChange = (e) => {
    setdonorHistory({ ...donorHistory, [e.target.name]: e.target.value });
  };

  const donor = async () => {
    await addDoc(usersDataRef, {
      donatebloodbefore: donorHistory.donatebloodbefore,
      lastdonatedate: donorHistory.lastdonatedate,
      bloodtestbefore: donorHistory.bloodtestbefore,
      currentlysuffereing: donorHistory.currentlysuffereing,
    });
    navigate("/");
  };
  return (
    <div className="dhForm">
      <div>Donor Form {bbId}</div>
      <div>
        <label className="dlabel" htmlFor="">
          Have you donate blood before?
        </label>
        <select
          className="dselect"
          name="donatebloodbefore"
          id=""
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      {donorHistory.donatebloodbefore === "Yes" && (
        <div>
          <label className="dlabel" htmlFor="">
            Last Donate Date{" "}
          </label>
          <input type="date" name="lastdonatedate" onChange={handleChange} />
        </div>
      )}
      <div>
        <label className="dlabel" htmlFor="">
          Have you done any blood test before ?
        </label>
        <select className="dselect" name="bloodtestbefore" id="" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

       {donorHistory.bloodtestbefore === 'Yes' && (<div>
          <lable>CBC</lable>
          <input type="checkbox" name="testname1" id="1" />
          <lable>HIV</lable>
          <input type="checkbox" name="testname2" id="2" />
          <lable>Hephities B</lable>
          <input type="checkbox" name="testname" id="3" />
          <lable>Hephities C</lable>
          <input type="checkbox" name="testname" id="4" />
        </div>)}
      </div>
      <div>
        <label className="dlabel" htmlFor="">
          Have you suffering from any disease ?
        </label>
        <select className="dselect" name="" id="">
          <option value="">Select</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
        <div>
          <lable>CBC</lable>
          <input type="checkbox" name="" id="" />
          <lable>Fever</lable>
          <input type="checkbox" name="" id="" />
          <lable>Cold</lable>
          <input type="checkbox" name="" id="" />
          <lable>Flue</lable>
          <input type="checkbox" name="" id="" />
          <lable>covid</lable>
          <input type="checkbox" name="" id="" />
          <lable>dibeties</lable>
          <input type="checkbox" name="" id="" />
        </div>
      </div>

      <button className="button">submit</button>
    </div>
  );
};
export default DonorForm;
