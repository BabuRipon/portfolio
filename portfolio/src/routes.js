import React from 'react';
import {BrowserRouter,Route,Routes} from'react-router-dom';
import App from './App';
import AdminDashboard from './Component/Admin/admin';
import LoginComponent from './Component/login';



const RouteComponent=()=>{

    return(
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/admin/dashboard/*' element={<AdminDashboard />} />
            <Route path='/login' element={<LoginComponent />} />
        </Routes>
      </BrowserRouter>
    )
}

export default RouteComponent;
