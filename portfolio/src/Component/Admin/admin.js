import React,{useEffect,useState} from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './admin.css'
import QuotesComponent from './quotes/quotes';
import SkillsComponent from './skills/skills';
import ToolsComponent from './tools/tools';
import {LoginStatus} from '../../api/user'
import ErrorComponent from '../Hoc/error';


const AdminDashboard=()=>{
    const [error,setError]=useState('');
    const navigate = useNavigate(); 

    useEffect(()=>{
        LoginStatus()
        .then(res=>{
          console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
            navigate('/login')
        })
    },[])

    return(
        <ErrorComponent error={error} setError={setError}>
            <div className='admin-main-container'>
                <div className='admin-nav-section'>
                    <p><Link to='' className='items'>Skills</Link></p>
                    <p><Link to='tools' className='items'>Tools</Link></p>
                    <p><Link to='quotes' className='items'>Quotes</Link></p>
                </div>
                <div className='admin-main-section'>
                    <Routes>
                        <Route path='/'  element={<SkillsComponent setError={setError} />} />
                        <Route path='quotes'  element={<QuotesComponent setError={setError} />} />
                        <Route path='tools'   element={<ToolsComponent setError={setError} />}  />
                    </Routes>
                </div>
            </div>
        </ErrorComponent>
    )
}

export default AdminDashboard;