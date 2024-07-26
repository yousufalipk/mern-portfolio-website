import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExperience.css";
import { useTheme } from '../../context/ThemeContext';

const WorkExperience = () => {
  const [theme, setTheme ] = useTheme();
  return (
    <>
      <div className="work" id="work">
        <div className="work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
          <hr />
          <VerticalTimeline lineColor="#3b8ff3">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={theme === 'light' ? ({ background: 'white' }) : ({ background: '#595959' })}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date={<span className="custom-date">July 2023 - August 2023</span>}
              iconStyle={{ background: "#019cf8", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Intern Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                NADRA, PK
              </h4>
              <p>
                Power Bi, Tableau & python project. 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={theme === 'light' ? ({ background: 'white' }) : ({ background: '#595959' })}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date={<span className="custom-date">June 2021 - Sept 2021</span>}
              iconStyle={{ background: "#019cf8", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Graphic Design Trainning
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                DigiSkills, PK
              </h4>
              <p>
                Adobe Photoshop, Adobe XD & Adobe Premier Pro.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;