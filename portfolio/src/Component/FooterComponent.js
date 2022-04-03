import React from 'react';
import { FaGithub,FaLinkedin,FaWhatsapp,FaMobileAlt,FaRegEnvelope } from "react-icons/fa";

const FooterComponent=()=>{
    return (
        <div className='footer-container' id="contact">
            <div className='footer-items'>
                <h3>No copyright issues.</h3>
                <p>Feel free to copy. If you need any help, ping me !</p>
            </div>
            <div className='footer-items'>
                <p>riponbabu392@gmail.com</p>
                <p><a href="tel:8427947147" className='footer-section-phone'><span><FaMobileAlt /></span>+91-8427947147</a></p>
            </div>
            <div className='footer-items' id="contact">
                <h4>
                    <a target='_blank' href='https://www.linkedin.com/in/ripon-babu-675a75146/'>
                      <span className='footer-section-social-icon'><FaLinkedin /></span>
                    </a>
                    <a target='_blank' href='mailto:riponbabu392@gmail.com'>
                      <span className='footer-section-social-icon'><FaRegEnvelope /></span>
                    </a>
                    <a target='_blank' href='https://github.com/BabuRipon'>
                      <span className='footer-section-social-icon'><FaGithub /></span>
                    </a> 
                    <a target='_blank' href="https://wa.me/+918427947147/?text=Hello Ripon, I'm ">
                      <span className='footer-section-social-icon'><FaWhatsapp /></span>
                    </a>
                </h4>
            </div>
        </div>
    )
}

export default FooterComponent;