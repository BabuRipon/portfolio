import axios from 'axios';

export const cloudinaryUploadImage=async(data)=>{
   return await axios.post('http://localhost:3001/api/cloudinary/upload',data,{
    headers:{
        Authorization:localStorage.getItem('token'),
    }
});
}

export const cloudinaryRemoveImage=async(data)=>{
    return await axios.post('http://localhost:3001/api/cloudinary/remove',data,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    });
}

export const getAllQuotes=async()=>{
    return await axios.get('http://localhost:3001/api/quote')
}

export const postQuotes=async(data)=>{
    return await axios.post('http://localhost:3001/api/quote',data,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    })
}

export const deleteQuotes=async(id)=>{
    return await axios.delete(`http://localhost:3001/api/quote/${id}`,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    })
}