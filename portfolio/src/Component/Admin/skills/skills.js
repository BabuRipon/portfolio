import React,{useState,useEffect} from 'react';
import { FaTrashAlt } from "react-icons/fa";
import {getAllSkill,postSkill,deleteSkill} from '../../../api/skillApi';

const SkillsComponent=({setError})=>{

    const [skill,setSkill]=useState('');
    const [url,setUrl]=useState('');
    const [updateStatus,setUpdateStatus]=useState(false);

    const [skills,setSkills] =useState([]);

    useEffect(()=>{
        getAllSkill()
        .then(res=>{
            console.log(res.data);
            setSkills(res.data);
        })
        .catch(err=>{
            console.log(err);
            setError(err)
        })
    },[updateStatus])

    const onFormSubmitHandler=async(e)=>{
        e.preventDefault();
        try{
            const result=await postSkill({skill:skill,url:url})
            console.log(result.data);
            setSkill('');
            setUrl('');
            setSkills([...skills,result.data])
        }catch(err){
            setError(err);
        }
    }

    const onSkillDeleteHandler=(id)=>{
        deleteSkill(id)
        .then(res=>{
            console.log(res);
            setUpdateStatus(!updateStatus);
        })
        .catch(err=>{
            console.log(err);
            setError(err);
        })
    }

    return(
        <>
           <form onSubmit={onFormSubmitHandler}>
            <div className="form-group">
                <label className='mb-2'>Skills</label>
                <input 
                type="text" 
                name='skills' 
                className="form-control" 
                placeholder="skills" 
                value={skill}
                onChange={e=>setSkill(e.target.value)}
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
            skills.map((el)=>(
              <div className="alert alert-secondary skill-lists" key={el._id}>
                <span className='text-primary'>{el.skill}</span>
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

export default SkillsComponent;