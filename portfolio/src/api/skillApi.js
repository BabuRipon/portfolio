import axios from 'axios'

export const getAllSkill=async(data)=>{
   return await axios.get('/api/skill') 
}

export const postSkill=async(data)=>{
    return await axios.post('/api/skill',data,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    })
}

export const deleteSkill=async(id)=>{
    return await axios.delete(`/api/skill/${id}`,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    })
}