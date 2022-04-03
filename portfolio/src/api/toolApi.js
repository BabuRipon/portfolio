import axios from 'axios'

export const getAllTools=async(data)=>{
   return await axios.get('/api/tool') 
}

export const postTool=async(data)=>{
    return await axios.post('/api/tool',data,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    })
}

export const deleteTool=async(id)=>{
    return await axios.delete(`/api/tool/${id}`,
        {
            headers:{
                Authorization:localStorage.getItem('token'),
            }
        }
    )
}