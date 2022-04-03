import React,{useEffect} from 'react';

const ErrorComponent=({error,setError,children})=>{

    useEffect(()=>{
        const timeId=setTimeout(()=>{
           setError('')
        },3000)

        return ()=>{
            clearTimeout(timeId);
        }
    },[error])
    

    return(
        <div>
            {
            error && 
            <h3 className='error-container'>{
                typeof error.response.data==='object'?
                error.response.data.message:
                error.response.data
            }</h3>
            }
            {
                children
            }
        </div>
    )
}

export default ErrorComponent;