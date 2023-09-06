import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
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
    fever: "",
    cold: "",
    flue: "",
    dibeties: "",
  });
  const userId = localStorage.getItem("userDocId");
  const navigate = useNavigate();
  console.log(donorHistory.state);
  const { bbId } = useParams();
  console.log("bbId:", bbId);

  const handleChange = (e) => {
    setdonorHistory({ ...donorHistory, [e.target.name]: e.target.value });
  };

  const donor = async () => {
    console.log("Donor function called");
    const collectionRef = collection(db, "donnarInfo"); // Reference to the collection
    const reqColRef = collection(db, "DonationReq")
    const documentRef = doc(collectionRef, userId); // Reference to the specific document
    try {
      await updateDoc(documentRef, {
        donatebloodbefore: donorHistory.donatebloodbefore,
        lastdonatedate: donorHistory.lastdonatedate,
        bloodtestbefore: donorHistory.bloodtestbefore,
        currentlysuffereing: donorHistory.currentlysuffereing,
        cbc: donorHistory.cbc,
        hiv: donorHistory.hiv,
        hephitiesb: donorHistory.hephitiesb,
        hephitiesc: donorHistory.hephitiesc,
        fever: donorHistory.fever,
        cold: donorHistory.cold,
        flue: donorHistory.flue,
        dibeties: donorHistory.dibeties,
      });
      await addDoc(reqColRef,{
        bankId : "",
        bloodGroup : "" ,
        satusOfReq
      });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  return (
    <div className="dhForm">
      <div>Donor Form</div>
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
            <select
              className="dselect"
              name="covid"
              id=""
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>{" "}
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

      <button className="button" onClick={donor}>
        submit
      </button>
    </div>
  );
};
export default DonorForm;
