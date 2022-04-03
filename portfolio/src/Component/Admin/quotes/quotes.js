import Reat,{useState,useEffect} from 'react';
import Resizer from "react-image-file-resizer";
import { FaTrashAlt } from "react-icons/fa";
import {cloudinaryRemoveImage,cloudinaryUploadImage,getAllQuotes,postQuotes,deleteQuotes} from'../../../api/quoteApi';

const QuotesComponent=({setError})=>{
    const [loading,setLoading] =useState(false);
    const [image,setImage]=useState({});
    const [author,setAuthor]=useState('');
    const [quote,setQuote]=useState('');
    const [quotes,setQuotes]=useState([]);
    const [updateStatus,setUpdateStatus]=useState(false);

    useEffect(()=>{

      getAllQuotes()
      .then(res=>{
          console.log(res.data);
          setQuotes(res.data);
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

        postQuotes({author,quote,imageUrl:image.url,public_id:image.public_id})
        .then(res=>{
            console.log(res.data);
            setQuote('');
            setAuthor('');
            setImage({});
            setQuotes([...quotes,res.data]);
        })
        .catch(err=>{
            console.log(err);
            setError(err);
        })

    }

    const onQuoteDeleteHandler=(id,public_id)=>{
        //delete image from cloudinary
        cloudinaryRemoveImage({public_id:public_id})
        .then(res=>{
            console.log(res.data);
            //delete quotes from database
            deleteQuotes(id)
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
                <div className="form-group">
                    <label className='mb-2'>Author</label>
                    <input 
                    type="text" 
                    name='author' 
                    className="form-control" 
                    placeholder="author" 
                    value={author}
                    onChange={e=>setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group mt-3">
                    <label className='mb-2'>Quotes</label>
                    <input 
                    type="text" 
                    name='quote' 
                    className="form-control" 
                    placeholder="quotes" 
                    value={quote}
                    onChange={e=>setQuote(e.target.value)}
                    />
                </div>
                <button className='btn btn-outline-primary mt-3 px-3' type='Submit'>Save</button>
           </form>
           <br />
           {
            quotes.length>0 &&
            quotes.map(el=>{
                return(
                    <div className="alert alert-success quotes-lists-container" key={el._id} >
                        <span className='item1'>{el.quote}</span>
                        <span className='item2'> - {el.author}</span>
                        <span className='delete-skill'
                        onClick={e=>onQuoteDeleteHandler(el._id,el.public_id)}
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

export default QuotesComponent;