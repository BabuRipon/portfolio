import Reat,{useState,useEffect} from 'react';
import Resizer from "react-image-file-resizer";
import { FaTrashAlt } from "react-icons/fa";
import {cloudinaryRemoveImage,cloudinaryUploadImage} from'../../../api/quoteApi';
import {getAllProjects,postProject,deleteProject} from '../../../api/projectApi'

const ProjectsComponent=({setError})=>{
    const [loading,setLoading] =useState(false);
    const [image,setImage]=useState({});
    const [description,setDescription]=useState('');
    const [technology,setTechnology]=useState('');
    const [projectUrl,setProjectUrl]=useState('');
    const [technologies,setTechnologies]=useState([]);
    const [projects,setProjects]=useState([]);
    const [updateStatus,setUpdateStatus]=useState(false);

    useEffect(()=>{

       getAllProjects()
      .then(res=>{
          console.log(res.data);
          setProjects(res.data);
      })
      .catch(err=>{
          console.log(err);
          setError(err);
      })

    },[updateStatus])

    const imageUploadHandler=(e)=>{
        setLoading(true);
        if (e.target.files[0]) {
            try {
                Resizer.imageFileResizer(
                e.target.files[0],
                300,
                300,
                "JPEG",
                100,
                0,
                (uri) => {
                    console.log(uri);
                    cloudinaryUploadImage({image:uri})
                    .then(res=>{
                        setLoading(false);
                        setImage(res.data);
                        console.log(res.data);
                    })
                    .catch(err=>{
                        console.log(err);
                        setError(err);
                    })
                },
                "base64",
                200,
                200
                );
            } catch (err) {
                console.log(err);
                setError(err);
            }
        }
    }


    const onFormSubmitHandler=(e)=>{
        e.preventDefault();
        console.log('submit handler');
        postProject({description,technologies,projectLink:projectUrl,imageUrl:image.url,public_id:image.public_id})
        .then(res=>{
            console.log(res.data);
            setTechnology('');
            setTechnologies([]);
            setDescription('');
            setImage({});
            setProjects([...projects,res.data]);
        })
        .catch(err=>{
            console.log(err);
            setError(err);
        })

    }

    const onProjecctDeleteHandler=(id,public_id)=>{
        //delete image from cloudinary
        cloudinaryRemoveImage({public_id:public_id})
        .then(res=>{
            console.log(res.data);
            //delete quotes from database
            deleteProject(id)
            .then(res=>{
                console.log(res);
                setUpdateStatus(!updateStatus);
            })
            .catch(err=>{
                console.log(err);
                setError(err);
            })

        })
        .catch(err=>{
            console.log(err);
            setError(err);
        })
        
    }

    const onImageDeleteHandler=()=>{
        cloudinaryRemoveImage({public_id:image.public_id})
        .then(res=>{
            setImage({});
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
            setError(err);
        })
    }

    const addTechnologiesHandler=()=>{
        setTechnologies(pre=>[...pre,technology]);
        setTechnology('');
    }


    return(
        <>
            {
                loading && <p>Loading...</p>
            }
            {
                image.url&&
                <div className='quotes-image-div'>
                    <img src={image.url} alt="image" />
                    <div className='delete' onClick={onImageDeleteHandler}>X</div>
                </div>
            }
            <form onSubmit={onFormSubmitHandler}>
                <div className="mb-1">
                    <label className='file-input'>
                      Choose Image
                      <input 
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={imageUploadHandler}
                      />
                    </label>
                    
                </div>
                <div className="form-group mt-3">
                    <label className='mb-2'>Technologies</label>
                    <input 
                    type="text" 
                    name='technology' 
                    className="form-control" 
                    placeholder="Technology" 
                    value={technology}
                    onChange={e=>setTechnology(e.target.value)}
                    />
                    <p>
                        {technologies.map((el,index)=>(
                            <span key={index} className="technoloogies">{el}</span>
                        ))}
                    </p>
                </div>
                <span className='btn btn-outline-primary mt-3 px-3' onClick={addTechnologiesHandler}>Add</span>
                <div className="form-group">
                    <label className='mb-2'>Description</label>
                    <input 
                    type="text" 
                    name='description' 
                    className="form-control" 
                    placeholder="Description" 
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className='mb-2'>Project Link</label>
                    <input 
                    type="text" 
                    name='projectUrl' 
                    className="form-control" 
                    placeholder="Project Url" 
                    value={projectUrl}
                    onChange={e=>setProjectUrl(e.target.value)}
                    />
                </div>
                <button className='btn btn-outline-primary mt-3 px-3' type='Submit'>Save</button>
           </form>
           <br />
           {
            projects.length>0 &&
            projects.map(el=>{
                return(
                    <div className="alert alert-success quotes-lists-container" key={el._id} >
                        <span className='item1'>{el.description}</span>
                        <span className='delete-skill'
                        onClick={e=>onProjecctDeleteHandler(el._id,el.public_id)}
                        >
                          <FaTrashAlt />
                        </span>
                    </div>
                )
            })
           }
        </>
    )
}

export default ProjectsComponent;