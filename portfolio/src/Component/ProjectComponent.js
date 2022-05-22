import React,{useEffect,useState} from 'react';
import {getAllProjects}from '../api/projectApi';

const ProjectComponent=()=>{

    const [projects,setProjects] =useState([]);

    useEffect(()=>{
         getAllProjects()
         .then(res=>{
            console.log('projects: ',res.data);
            setProjects(res.data);
         })
         .catch(err=>{
             console.log(err);
         })
    },[])


    return (
        <div className='projects-container' id="projects">
            <h2>Project Section</h2>
            <div className='project-items'>
            {projects.map(el=>(
                
                    <div className='project-item' key={el._id}>
                        <div className='image-container'>
                            <img src={el.imageUrl} />
                        </div>
                        <p className='projecct-card-tech-head'>Technology Used</p>
                        <p className='project-card-tech'>
                            {el.technologies.map((item,index)=>(
                                <span key={index}>{item+', '}</span>
                            ))}
                        </p>
                        <p className='project-card-button'>
                            <a href={el.projectLink} target='_blank'>Go Project</a>
                        </p>
                    </div>
            ))}
            </div>
        </div>
    )
}

export default ProjectComponent;