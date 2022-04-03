import React from 'react';
import { FaGithub,FaLinkedin,FaWhatsapp,FaRegEnvelope } from "react-icons/fa";

const AboutComponent=()=>{
    return (
        <div className='container-about' id='about'>
            <div className='item1'
            >
                <div className='about-section-img-div'>
                  <img src='image/ripon.jpg'></img>
                </div>
                <h3>
                    <a target='_blank' href='https://www.linkedin.com/in/ripon-babu-675a75146/'>
                      <span className='about-section-social-icon'><FaLinkedin /></span>
                    </a>
                    <a target='_blank' href='mailto:riponbabu392@gmail.com'>
                      <span className='about-section-social-icon'><FaRegEnvelope /></span>
                    </a>
                    <a target='_blank' href='https://github.com/BabuRipon'>
                      <span className='about-section-social-icon'><FaGithub /></span>
                    </a> 
                    <a target='_blank' href="https://wa.me/+918427947147/?text=Hello Ripon, I'm ">
                      <span className='about-section-social-icon'><FaWhatsapp /></span>
                    </a>
                </h3>
            </div>
            <div className='item2'
            >
                <h1>About me.</h1>
                <p>
                   Hi I am Ripon Babu, a 24 year old Web developer, and a Traveller living in West Bengal, India. I am a Computer Science Engineer, currently working with awesome folks at <a target='_blank' href='https://www.cerner.com/'>Cerner</a>.
                </p>
                <p>
                  Have a look at my skills or just connect with me on <a target='_blank' href='https://www.linkedin.com/in/ripon-babu-675a75146/'>LinkedIn</a>. I am always excited to do business with like minded people, lets discuss over coffee.
                </p>
                {/* <p>Please have look on my <a download={'Ripon_Cv.pdf'} href='asset/ripon.pdf'>CV</a></p> */}
            </div>
        </div>
    )
}

export default AboutComponent;