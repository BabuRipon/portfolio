import axios from 'axios'

export const getAllSkill=async(data)=>{
   return await axios.get('http://localhost:3001/api/skill') 
}

export const postSkill=async(data)=>{
    return await axios.post('http://localhost:3001/api/skill',data,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    })
}

export const deleteSkill=async(id)=>{
    return await axios.delete(`http://localhost:3001/api/skill/${id}`,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    })
}