import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import AdminModule from './component/admin/admin'
import AdminEmployee from './component/admin/employee/AdminEmployee';
import AdminUser from './component/admin/user/adminUser';
import AdminBug from './component/admin/bug/adminBug';
import AdminProject from './component/admin/Project/project';
import ErrorPage from './component/Error';
import Adminheader from './component/admin/adminheader';
import Footer from './component/Footer';
import Signup from './component/Login_signup/SignUp';
import AdminList from './component/admin/adminList';
import UserModule from './component/user/user'
import EmployeeModule from './component/employee/Employee'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Adminheader/>
    <Routes>
        <Route exect path="/" element={<h1>Admin Component</h1>}/>
        <Route exect path="/admin" element={<AdminModule/>}/>
        <Route exect path="/employeemodule" element={<EmployeeModule/>}/>
        <Route exect path="/usermodule" element={<UserModule/>}/>
        <Route exect path="/employee" element={<AdminEmployee/>}/>
        <Route exect path="/user" element={<AdminUser/>}/>
        <Route exect path="/projects" element={<AdminProject/>}/>
        <Route exect path="/bugs" element={<AdminBug/>}/>
        <Route exect path="/signup" element={<Signup/>}/>
        <Route exect path="/adminlist" element={<AdminList/>}/>
        <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
