import React, {useState,useEffect} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import { getAllQuotes } from '../../api/quoteApi'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)
    const [quotes,setQuotes]=useState([]);

    useEffect(()=>{
        getAllQuotes()
        .then(res=>{
            setQuotes(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
    let id;
    // if(slideIndex===dataSlider.length+1){
    //     setSlideIndex(0);
    // }else{
         
    // }

    id=setTimeout(()=>{
        if(slideIndex===quotes.length){
           setSlideIndex(0);
        }
        setSlideIndex(preState=>preState+1);
    },5000);
    
    return ()=>{
        if(id){
          clearTimeout(id);
        }
    }
    },[slideIndex])

    const nextSlide = () => {
        if(slideIndex !== quotes.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === quotes.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(quotes.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {quotes.map((el,index) => {
                return (
                    <div
                    key={el._id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <div style={{width:'150px',height:'150px'}}>
                            <img 
                            src={el.imageUrl} 
                            />
                        </div>
                        <br />
                        <h3 className='quotes-text'>{`" ${el.quote} "`}</h3>
                        <br />
                        <p className='quotes-text'>By - <b className="author">{el.author}</b></p>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {quotes.map((item, index) => (
                    <div 
                    key={item._id}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}