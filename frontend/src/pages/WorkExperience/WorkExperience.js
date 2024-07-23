import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExperience.css";
const WorkExperience = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="work-exp">
          <h2 className="text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="July 2023 - August 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
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
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="June 2021 - Sept 2021"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
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