import React from 'react'

const BloodReport = () => {
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const states = importedData.states;
  
    const [regUser, setregUser] = useState({
      email: "",
      password: "",
      userType: "",
      userName: "",
      age: "",
      bloodGroup: "",
      weight: "",
      gender: "",
      mobile: "",
      aadhar: "",
      address: "",
      state: "",
      dist: "",
      pincode: "",
    });
    const usersCollectionRef = collection(db, "users");
    const usersDataRef = collection(db, "donnarInfo");
    const navigate = useNavigate();
    console.log(regUser.state);
  
    const handleStateChange = (event) => {
      const newState = event.target.value;
      setSelectedState(newState);
      setregUser({
        ...regUser,
        state: newState,
      });
      setSelectedDistrict(""); // Reset the district when the state changes
    };
  
    const handleDistrictChange = (event) => {
      const newDistrict = event.target.value;
      setSelectedDistrict(newDistrict);
      setregUser({
        ...regUser,
        dist: newDistrict,
      });
    };
    const handleChange = (e) => {
      setregUser({ ...regUser, [e.target.name]: e.target.value });
    };
  
    const register = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          regUser.email,
          regUser.password
        );
        const user = userCredential.user; // Get the user object from the userCredential
        localStorage.setItem("userId", user.uid);
        const update = updateProfile(auth.currentUser, {
          displayName: regUser.userName,
        });
        await addDoc(usersCollectionRef, {
          type: "donar",
          uId: user.uid,
          email: user.email,
        });
  
        await addDoc(usersDataRef, {
          uId: user.uid,
          email:regUser.email,
          userName: regUser.userName,
          age: regUser.age,
          weight: regUser.weight,
          gender: regUser.gender,
          mobile: regUser.mobile,
          bloodGroup: regUser.bloodGroup,
          aadhar: regUser.aadhar,
          address: regUser.address,
          state: regUser.state,
          dist: regUser.dist,
          pincode: regUser.pincode,
        });
        navigate("/dashboard");
      } catch (error) {
        alert(error.message);
      }
    };
  
    
    
  
    // https://firebase.google.com/docs/firestore/query-data/queries?hl=en&authuser=0&_gl=1*cebiw7*_ga*ODAxMjEzNzYuMTY5Mjg1NDU5NA..*_ga_CW55HF8NVT*MTY5MzU5MTQ5Ny4xNy4xLjE2OTM1OTMxOTYuMC4wLjA.  
  return (
    <div>BloodReport</div>
  )
}

export default BloodReport