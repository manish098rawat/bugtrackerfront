import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Route, Routes,Navigate} from 'react-router-dom'
import AdminModule from './component/admin/admin'
import UserModule from './component/user/user'
import EmployeeModule from './component/employee/Employee'
import Header from './component/Header';
import AdminEmployee from './component/admin/employee/AdminEmployee';
import AdminUser from './component/admin/user/adminUser';
import AdminBug from './component/admin/bug/adminBug';
import AdminProject from './component/admin/Project/project';
import Home from './component/home/home';
import ErrorPage from './component/Error';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Header/>
    <Routes>
        <Route exect path="/home" element={<Home />} />
        <Route exect path="/admin" element={<AdminModule/>}></Route>
        <Route exect path="/employee" element={<EmployeeModule/>}></Route>
        <Route exect path="/User" element={<UserModule/>}></Route>
        <Route exect path="/aboutus" element={<UserModule/>}></Route>
        <Route exect path="/admin/employee" element={<AdminEmployee/>}></Route>
        <Route exect path="/admin/user" element={<AdminUser/>}></Route>
        <Route exect path="/admin/products" element={<AdminProject/>}></Route>
        <Route exect path="/admin/bugs" element={<AdminBug/>}></Route>
        <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
