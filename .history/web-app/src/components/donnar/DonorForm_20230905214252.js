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
    cbc: "",
    hiv: "",
    hephitiesb: "",
    hephitiesc: "",
    currentlysuffereing: "",
    fever: "",
    cold: "",
    flue: "",
    dibeties: "",
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
      cbc: donorHistory.cbc,
      hiv: donorHistory.hiv,
      hephitiesb: donorHistory.hephitiesb,
      hephitiesc: donorHistory.hephitiesc,
      currentlysuffereing: donorHistory.currentlysuffereing,
      fever: donorHistory.fever,
      cold: donorHistory.,
      flue: donorHistory.,
      dibeties: donorHistory.,
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
        <select
          className="dselect"
          name="bloodtestbefore"
          id=""
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {donorHistory.bloodtestbefore === "Yes" && (
          <div>
            <label className="dlabel" htmlFor="">
              CBC
            </label>
            <select
              className="dselect"
              name="cbc"
              id=""
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <lable>HIV (if Yes Then Only Click Yes)</lable>
            <select
              className="dselect"
              name="hiv"
              id=""
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>{" "}
            <lable>Hephities B</lable>
            <select
              className="dselect"
              name="hephitiesb"
              id=""
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>{" "}
            <lable>Hephities C</lable>
            <select
              className="dselect"
              name="hephitiesc"
              id=""
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>{" "}
          </div>
        )}
      </div>
      <div>
        <label className="dlabel" htmlFor="">
          Have you suffering from any disease in last 3 months?
        </label>
        <select
          className="dselect"
          name="currentlysuffereing"
          id=""
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {donorHistory.currentlysuffereing === "Yes" && (
          <div>
            <lable>Fever</lable>
            <select
              className="dselect"
              name="fever"
              id=""
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>{" "}
            <lable>Cold</lable>
            <select
              className="dselect"
              name="cold"
              id=""
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <lable>Flue</lable>
            <select
              className="dselect"
              name="flue"
              id=""
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>{" "}
            <lable>covid</lable>
            <input type="text" name="" id="" />
            <lable>dibeties</lable>
            <select
              className="dselect"
              name="dibeties"
              id=""
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>{" "}
          </div>
        )}
      </div>

      <button className="button">submit</button>
    </div>
  );
};
export default DonorForm;
