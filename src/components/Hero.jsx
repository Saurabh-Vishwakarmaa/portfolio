import React from 'react';
import './Hero.css';


function Hero (){

    return(
        <div className="hero">
        {/* Left Section */}
        <div class = "hellow"> I'M
        </div>
        <div className="hero-content">
         
         <div className="myname">SAURABH VISHWAKARMA</div>
       
          {/* <p className='mycontent'>
         A developer specializing in web and Android apps. I create intuitive, feature-rich applications with seamless user experiences. Let’s collaborate to turn ideas into impactful digital solutions!
          </p> */}
          {/* <a href="#contact" className="cta">
            BOOK A CALL ↗
          </a> */}
        </div>
  
        {/* Right Section */}
        <div className="hero-image">
          {/* <img
            src="../src/assets/saurabhv.jpeg" // Replace with your image URL
            alt="Huy Nguyen"
          /> */}
          {/* <p className="availability">
            AVAILABLE FOR FREELANCE WORK
            <br />
            <strong>FEB '25</strong>
          </p> */}
        </div>
      </div>
    );
}
export default Hero;