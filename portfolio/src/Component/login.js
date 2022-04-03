import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import { LoginApi,LoginStatus } from '../api/user';
import ErrorComponent from './Hoc/error'


const LoginComponent=()=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        LoginStatus()
        .then(res=>{
          navigate('/admin/dashboard')
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    const onLoginSubmitHandler=()=>{
        LoginApi({email,password})
        .then(res=>{
            console.log(res.data)
            setEmail('');
            setPassword('');
            setError(false);
            localStorage.setItem('token',res.data.token);
            navigate('/admin/dashboard');
        })
        .catch(err=>{
            console.log(err);
            setError(err);
        })
    }


    return(
        <ErrorComponent error={error} setError={setError}>
            <div 
            className='login-form-container'
            >
                <form>
                    <div className='items'>
                        <label>Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        className='form-control'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='items'>
                        <label>Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        className='form-control'
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className='items'>
                        <button onClick={onLoginSubmitHandler} type="button" className="btn btn-outline-primary">Login</button>
                    </div>
                    {/* <div className='items switching'>
                         <p><span>Forgot Password</span></p>
                    </div> */}
                </form>
            </div>
        </ErrorComponent>
    )
}

export default LoginComponent;