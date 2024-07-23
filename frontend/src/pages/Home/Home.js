import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docx/resume.pdf';

const Home = () => {
  return (
    <>
      <div className="contianer-fluid home-container">
        <div className="container home-content">
          <h1>Hi I'm a</h1>
          <h2>
          <Typewriter
            options={{
              strings: [
                'Full Stack Developer!', 
                'Mern Stack Developer!',
                'React native developer!'
              ],
              autoStart: true,
              loop: true,
            }}
          />
          </h2>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download="Ameer Yousuf Resume.pdf">My Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
