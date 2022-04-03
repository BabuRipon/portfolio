import React,{useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import LoadingComponent from '../loading/loadingComponent';


const CoffeWithMeComponent=()=>{
    const [loading,setLoading] =useState(false);
    const [success,setSuccess] =useState(false);
    const [checkInputField,setCheckInputField]=useState(false);
    const form=useRef();

    const sendEmail=(e)=>{
        e.preventDefault();
        // console.log(inputFieldValue['name'].value)
        console.log(form.current['name'].value)
        if(!form.current['name'].value || !form.current['email'].value || !form.current['message'].value){
            setCheckInputField(true);
            return;
        }
        setCheckInputField(false);
        // form.current.reset();
        setLoading(true);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current,process.env.REACT_APP_USER_ID)
            .then((response)=>{
               console.log('SUCCESS!', response.status, response.text);
               setSuccess(true);
               setLoading(false);
            },(error)=>{
                setSuccess(false);
                setLoading(false);
               console.log('FAILED...', error);
            });

    }
    return (
      <div className='container coffeeWithMe' id="coffeeWithMe" 
      data-aos="fade-in"
      data-aos-delay="15"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      >
        <h2>Coffee with me.</h2>
        {
            success&&<h3 className='coffeeWithMe-Success'>Thank you, I will happy to contact with you soon.</h3>
        }
        {
            loading&&!success?<LoadingComponent />:null
        }
        {
            !loading && !success?<form ref={form} onSubmit={sendEmail}>
            <div className="section1">
               <div className='item1 items'>
                <label>Name<span className='astrick'>*</span></label>
                <input type="text" name="name" className='form-control'/>
               </div>
               <div className='item2 items'>
                <label>Email<span className='astrick'>*</span></label>
                <input type="email" name="email" className='form-control'/>
               </div>
               <div className='item3 items'>
                <label>Mobile <span className='astrick'></span></label>
                <input type="text" name="mobile" className='form-control'/>
               </div>
            </div>
            <div className='section2'>
                <label>Message<span className='astrick'>*</span></label>
                <textarea name="message" rows="6" cols="50" className='form-control' />
            </div>
            {
                checkInputField&&<p className='coffeeWithMe-error'>Please fill all the manditory field ( * field is manditory ).</p>
            }
            <button className='btn btn-outline-primary mt-3 px-3' type='Submit'>Save</button>
        </form>:null
        }
        
      </div>
    );
}

export default CoffeWithMeComponent;