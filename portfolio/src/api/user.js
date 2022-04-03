import axios from 'axios'

export const LoginApi=async(data)=>{
    return await axios.post(`http://localhost:3001/api/user/login`,data);
}

export const LoginStatus=async()=>{
    return await axios.get(`http://localhost:3001/api/user/login/status`,{
        headers:{
            'Authorization':localStorage.getItem('token'),
        }
    })
}