import React from 'react'
import "./Menus.css";
import ProfilePic from '../../assets/images/profile.jpg';
import {FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcVoicePresentation, FcBusinessContact} from 'react-icons/fc';
const Menus = ({toggle}) => {
  return (
    <>
      {toggle ? 
          (
            <>
              <div className="navbar-profile-pic">
                <img src={ProfilePic} alt="profile pic" />
              </div>
              <div className="nav-items">
                <div className="nav-item">
                  {/* NavLink - 1 */}
                  <div className="nav-link">
                    <FcHome /> 
                    Home
                  </div>
                  {/* NavLink - 2 */}
                  <div className="nav-link">
                    <FcAbout /> 
                    About
                  </div>
                  {/* NavLink - 3 */}
                  <div className="nav-link">
                    <FcPortraitMode /> 
                    Work Experience
                  </div>
                  {/* NavLink - 4 */}
                  <div className="nav-link">
                    <FcBiotech /> 
                    Tech Stack
                  </div>
                  {/* NavLink - 5 */}
                  <div className="nav-link">
                    <FcReadingEbook /> 
                    Education
                  </div>
                  {/* NavLink - 6 */}
                  <div className="nav-link">
                    <FcVideoProjector /> 
                    Projects
                  </div>
                  {/* NavLink - 7 */}
                  <div className="nav-link">
                    <FcVoicePresentation /> 
                    Testimonial
                  </div>
                  {/* NavLink - 8 */}
                  <div className="nav-link">
                    <FcBusinessContact /> 
                    Contact
                  </div>
                </div>
              </div>
            </>
          ) 
          :
          (
            <>
              <div className="nav-items">
                <div className="nav-item">
                  {/* NavLink - 1 */}
                  <div className="nav-link">
                    <FcHome title="Home" />
                  </div>
                  {/* NavLink - 2 */}
                  <div className="nav-link">
                    <FcAbout title="About" />
                  </div>
                  {/* NavLink - 3 */}
                  <div className="nav-link">
                    <FcPortraitMode title="Work Experience" />
                  </div>
                  {/* NavLink - 4 */}
                  <div className="nav-link">
                    <FcBiotech title="Tech Stack" />
                  </div>
                  {/* NavLink - 5 */}
                  <div className="nav-link">
                    <FcReadingEbook title="Education" />
                  </div>
                  {/* NavLink - 6 */}
                  <div className="nav-link">
                    <FcVideoProjector title="Projects" />
                  </div>
                  {/* NavLink - 7 */}
                  <div className="nav-link">
                    <FcVoicePresentation title="Testimonial" />
                  </div>
                  {/* NavLink - 8 */}
                  <div className="nav-link">
                    <FcBusinessContact title="Contact" />
                  </div>
                </div>
              </div>
            </>
          )
      }
    </>
  )
}

export default Menus;


