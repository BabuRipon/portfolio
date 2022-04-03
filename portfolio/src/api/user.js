import axios from 'axios'

export const LoginApi=async(data)=>{
    return await axios.post(`/api/user/login`,data);
}

export const LoginStatus=async()=>{
    return await axios.get(`/api/user/login/status`,{
        headers:{
            'Authorization':localStorage.getItem('token'),
        }
    })
}