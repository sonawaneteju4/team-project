import './App.css';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom'
import Index from './components/Index';
// import User from './components/User';
import Navbar from './components/Navbar';
import Test from './components/Test';
import CreateUser from './components/CreateUser';
import LoginUser from './components/LoginUser';
import UserDash from './components/UserDash';
import DonnarReg from './components/donnar/DonnarReg';
import DonnarDashboard from './components/donnar/DonnarDashboard';
import BankDashboard from './components/bank/BankDashboard';
import HospitalDashboard from './components/hospital/HospitalDashboard';
import HospitalRegister from './components/hospital/HospitalRegister';
import BankRegister from './components/bank/BankRegister';
import DonateBlood from './components/donnar/DonateBlood';


function App() {
  return (
  <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  

    <Route  path='/' element={<Index/>}></Route>
    <Route  path='/bankLogin' element={<LoginUser/>}></Route>
    <Route  path='/donarLogin' element={<LoginUser/>}></Route>
    <Route  path='/hosptialLogin' element={<LoginUser/>}></Route>
    <Route  path='/donnr' element={<Test/>}></Route>
    <Route  path='/CreateUsXer' element={<CreateUser/>}></Route>
    <Route  path='/dashboard' element={<UserDash/>}></Route>
    <Route  path='/donarReg' element={<DonnarReg/>}></Route>
    <Route  path='/hosptialReg' element={<HospitalRegister/>}></Route>
    <Route  path='/bankReg' element={<BankRegister/>}></Route>
    <Route  path='/donarDash' element={<DonnarDashboard/>}></Route>
    <Route  path='/bankDash' element={<BankDashboard />}></Route>
    <Route  path='/hospitalDash' element={<HospitalDashboard />}></Route>
    <Route path='/donateBlood' element={<DonateBlood/>}></Route>
    <Route path='/donateBlood' element={<DonateBlood/>}></Route>
  
  </Routes>
  </BrowserRouter>  
  
  </div>
  );
}

export default App;
