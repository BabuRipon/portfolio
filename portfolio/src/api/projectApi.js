import axios from 'axios'

export const getAllProjects=async()=>{
    return await axios.get('/api/project')
}

export const postProject=async(data)=>{
    return await axios.post('/api/project',data,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    })
}

export const deleteProject=async(id)=>{
    return await axios.delete(`/api/project/${id}`,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    })
}