import React,{useState,useEffect} from 'react';
import { FaTrashAlt } from "react-icons/fa";
import {getAllTools,postTool,deleteTool} from '../../../api/toolApi';

const ToolsComponent=({setError})=>{

    const [tool,setTool]=useState('');
    const [url,setUrl]=useState('');
    const [updateStatus,setUpdateStatus]=useState(false);

    const [tools,setTools] =useState([]);

    useEffect(()=>{
        getAllTools()
        .then(res=>{
            console.log(res.data);
            setTools(res.data);
        })
        .catch(err=>{
            console.log(err);
            setError(err);
        })
    },[updateStatus])

    const onFormSubmitHandler=async(e)=>{
        e.preventDefault();
        try{
            const result=await postTool({tool:tool,url:url})
            console.log(result.data);
            setTool('');
            setUrl('');
            setTools([...tools,result.data]) 
        }
        catch(err){
            setError(err);
        }
    }

    const onSkillDeleteHandler=(id)=>{
        deleteTool(id)
        .then(res=>{
            console.log(res);
            setUpdateStatus(!updateStatus)
        })
        .catch(err=>{
            console.log(err);
            setError(err)
        })
    }

    return(
        <>
           <form onSubmit={onFormSubmitHandler}>
            <div className="form-group">
                <label className='mb-2'>Tools</label>
                <input 
                type="text" 
                name='tool' 
                className="form-control" 
                placeholder="tools" 
                value={tool}
                onChange={e=>setTool(e.target.value)}
                />
            </div>
            <div className="form-group mt-3">
                <label className='mb-2'>Link</label>
                <input 
                type="text" 
                name='link' 
                className="form-control" 
                placeholder="link" 
                value={url}
                onChange={e=>setUrl(e.target.value)}
                />
            </div>
            <button className='btn btn-outline-primary mt-3 px-3' type='Submit'>Save</button>
        </form>
        <br /><br />
        {
            tools.map((el)=>(
              <div className="alert alert-secondary skill-lists" key={el._id}>
                <span className='text-primary'>{el.tool}</span>
                <span className='delete-skill'
                onClick={()=>onSkillDeleteHandler(el._id)}
                >
                 <FaTrashAlt />
                </span>
              </div>
            ))
        }
        </>
    )
}

export default ToolsComponent;