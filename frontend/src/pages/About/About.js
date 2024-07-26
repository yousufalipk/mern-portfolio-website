import React from "react";
import "./About.css";
import AboutUsPic from '../../assets/images/about.png';
import Jump from 'react-reveal/Jump';

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={AboutUsPic}
                alt="aboutus-pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I’m <strong> Ameer Yousuf Ali Bhatti </strong>, a dedicated Software Engineering graduate from SZABIST. With hands-on experience in MERN stack web development, I am committed to honing my skills and embracing new challenges. My passion for coding drives my eagerness to continually learn and grow, aiming to become a proficient and innovative MERN stack developer.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;