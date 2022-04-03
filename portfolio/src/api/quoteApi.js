import axios from 'axios';

export const cloudinaryUploadImage=async(data)=>{
   return await axios.post('/api/cloudinary/upload',data,{
    headers:{
        Authorization:localStorage.getItem('token'),
    }
});
}

export const cloudinaryRemoveImage=async(data)=>{
    return await axios.post('/api/cloudinary/remove',data,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    });
}

export const getAllQuotes=async()=>{
    return await axios.get('/api/quote')
}

export const postQuotes=async(data)=>{
    return await axios.post('/api/quote',data,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    })
}

export const deleteQuotes=async(id)=>{
    return await axios.delete(`/api/quote/${id}`,{
        headers:{
            Authorization:localStorage.getItem('token'),
        }
    })
}