import './App.css';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom'
import Index from './components/Index';
// import User from './components/User';
import Navbar from './components/Navbar';
import Test from './components/Test';
import CreateUser from './components/CreateUser';
import LoginUser from './components/LoginUser';


function App() {
  return (
  <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  

    <Route  path='/' element={<Index/>}></Route>
    <Route  path='/bankLogin' element={<LoginUser/>}></Route>
    <Route  path='/donnarLogin' element={<LoginUser/>}></Route>
    <Route  path='/hosptialLogin' element={<Test/>}></Route>
    <Route  path='/donnar' element={<Test/>}></Route>
    <Route  path='/CreateUser' element={<CreateUser/>}></Route>

  
  </Routes>
  </BrowserRouter>  
  
  </div>
  );
}

export default App;
