import React from "react";
import "./Projects.css";
import ProjectImage1 from '../../assets/images/Projects/p1.png';
import ProjectImage2 from '../../assets/images/Projects/p2.png';
import ProjectImage3 from '../../assets/images/Projects/p3.jpeg';
import Flip from 'react-reveal/Flip';

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
            Explore our latest projects, crafted with precision and creativity, designed to solve real-world problems and enhance user experiences.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Flip>
            {/* Project 1 */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src={ProjectImage1}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      ClassConnect
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/yousufalipk/ClassConnect-II"
                  >
                    View
                  </a>
                </div>
              </div>
            </div> 
            {/* Project 2 */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={ProjectImage2}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">TypeScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Chat Bot GPT 3.5</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/yousufalipk/cyberspherexAi-Custom-chat-bot-like-Chat-GPT-">
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={ProjectImage3}
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML / CSS</span>

                  <span className="card-detail-badge">Python Flask</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Loan Prediction System</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/yousufalipk/loan_prediction_System"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Flip>
        </div>
      </div>
    </>
  );
};

export default Projects;