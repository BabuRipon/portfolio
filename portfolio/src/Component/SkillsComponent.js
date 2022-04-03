import React,{useState,useEffect} from 'react';
import {getAllSkill} from '../api/skillApi';
import {getAllTools} from '../api/toolApi'

const SkillsComponent=()=>{
    
    const [skills,setSkills]=useState([]);
    const [tools,setTools]=useState([]);

    useEffect(()=>{
 
       //get all skills
       getAllSkill()
       .then(res=>{
          setSkills(res.data);
       })
       .catch(err=>{
           console.log(err);
       })

       //get all tools
       getAllTools()
       .then(res=>{
           setTools(res.data);
       })
       .catch(err=>{
           console.log(err);
       })

    },[])

    return (
        <div className='skills-container' id="skills">
            <div className='skills-section'
            >
                <h2>Development</h2>
                <div className='items'
                data-aos="fade-in"
                data-aos-delay="5"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    {
                        skills.map((el)=>(
                          <p key={el._id}><a target='_blank' href={el.url}>{el.skill}</a></p>
                        ))
                    }
                </div>
            </div>
            <div className='skills-section'
            >
                <h2>Tools</h2>
                <div className='items'
                data-aos="fade-in"
                data-aos-delay="5"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    {
                        tools.map(el=>(
                            <p key={el._id}><a href={el.url} target='_blank'>{el.tool}</a></p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillsComponent;