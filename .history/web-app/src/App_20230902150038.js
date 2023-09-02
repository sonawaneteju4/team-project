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


function App() {
  return (
  <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  

    <Route  path='/' element={<Index/>}></Route>
    <Route  path='/bankLogin' element={<LoginUser/>}></Route>
    <Route  path='/donnarLogin' element={<LoginUser/>}></Route>
    <Route  path='/hosptialLogin' element={<LoginUser/>}></Route>
    <Route  path='/donnar' element={<Test/>}></Route>
    <Route  path='/CreateUsXer' element={<CreateUser/>}></Route>
    <Route  path='/dashboard' element={<UserDash/>}></Route>
    <Route  path='/donarReg' element={<DonnarReg/>}></Route>
    <Route  path='/dashboard' element={<DonnarReg/>}></Route>

  
  </Routes>
  </BrowserRouter>  
  
  </div>
  );
}

export default App;
