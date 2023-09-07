import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Index from "./components/Index";
// import User from './components/User';
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import CreateUser from "./components/CreateUser";
import LoginUser from "./components/LoginUser";
import UserDash from "./components/UserDash";
import DonnarReg from "./components/donnar/DonnarReg";
import DonnarDashboard from "./components/donnar/DonnarDashboard";
import BankDashboard from "./components/bank/BankDashboard";
import HospitalDashboard from "./components/hospital/HospitalDashboard";
import HospitalRegister from "./components/hospital/HospitalRegister";
import BankRegister from "./components/bank/BankRegister";
import DonateBlood from "./components/donnar/DonateBlood";
import BloodReport from "./components/bank/BloodReport";
import LogoutBar from "./components/LogoutBar";
import DonorForm from "./components/donnar/DonorForm";
import Availablity from "./components/Availablity";
import StockMang from "./components/bank/StockMang";
import HospitalReq from "./components/bank/HospitalReq";
import DonationReq from "./components/bank/DonationReq";
import BankEndValidation from "./components/bank/BankEndValidation";
import BankReportForm from "./components/bank/BankReportForm";
import ReportsD from "./components/donnar/ReportsD";
import SearchBlood from "./components/hospital/SearchBlood";
import Precautions from "./components/Precautions";
import BloodAvb from "./components/BloodAvb";
import BloodBankRepo from "./components/bank/BloodBankRepo";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <LogoutBar/> */}
        <Routes>
          <div className="bgImg">
            <Route path="/" element={<Index />}></Route>
            <Route path="/bankLogin" element={<LoginUser />}></Route>
            <Route path="/searchBlood" element={<SearchBlood />}></Route>
            <Route path="/donarLogin" element={<LoginUser />}></Route>
            <Route path="/hosptialLogin" element={<LoginUser />}></Route>
            <Route path="/donnr" element={<Test />}></Route>
            <Route path="/CreateUsXer" element={<CreateUser />}></Route>
            <Route path="/dashboard" element={<UserDash />}></Route>
            <Route path="/donarReg" element={<DonnarReg />}></Route>
            <Route path="/hosptialReg" element={<HospitalRegister />}></Route>
            <Route path="/bankReg" element={<BankRegister />}></Route>
            <Route path="/donarDash" element={<DonnarDashboard />}></Route>
            <Route path="/bankDash" element={<BankDashboard />}></Route>
            <Route path="/hospitalDash" element={<HospitalDashboard />}></Route>
            <Route path="/donateBlood" element={<DonateBlood />}></Route>
            <Route path="/createNewReport" element={<BloodReport />}></Route>
            <Route path="/healthHistory/:bbId" element={<DonorForm />}></Route>
            {/* <Route path='/searchblood' element={<BloodAvb />}></Route> */}
            <Route
              path="/searchBloodByBloodGroup"
              element={<BloodAvb />}
            ></Route>
            <Route path="/stockOfBlood" element={<StockMang />}></Route>
            <Route path="/hospitalReq" element={<HospitalReq />}></Route>
            <Route path="/donationReq" element={<DonationReq />}></Route>
            <Route path="/donorHistroy" element={<BankEndValidation />}></Route>
            <Route
              path="/bloodReportsGenration"
              element={<BankReportForm />}
            ></Route>
            <Route path="/reports" element={<ReportsD />}></Route>
            <Route path="/precaution" element={<Precautions />}></Route>
            <Route path="/userReport" element={<BloodBankRepo />}></Route>
          </div>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
