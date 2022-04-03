import axios from 'axios'

export const getAllTools=async(data)=>{
   return await axios.get('http://localhost:3001/api/tool') 
}

export const postTool=async(data)=>{
    return await axios.post('http://localhost:3001/api/tool',data,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    })
}

export const deleteTool=async(id)=>{
    return await axios.delete(`http://localhost:3001/api/tool/${id}`,
        {
            headers:{
                Authorization:localStorage.getItem('token'),
            }
        }
    )
}