import React from 'react';
import Typewriter from 'typewriter-effect';

const IntroComponent=()=>{
    return(
        <div className="intro-container">
            <img src='image/plane.gif'></img>
            <div className="content-div">
                <h1>Ripon Babu</h1>            
                <h3 className='sub-title'>
                <Typewriter
                    options={{
                        strings: ['I love Travelling', 'I am a Proud Indian','I am a Web developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </h3> 
                <h3 className='intro-btn'>
                <a className='btn-outline' href='#coffeeWithMe'>Coffee With me</a>
                </h3>
            </div>
        </div>
    )
}

export default IntroComponent;