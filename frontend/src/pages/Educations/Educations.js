import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Educations.css";
import { useTheme } from '../../context/ThemeContext';

const Education = () => {
  const [theme, setTheme ] = useTheme();

  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={theme === 'light' ? ({ background: 'white' }) : ({ background: '#595959' })}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date={<span className="custom-date">2020 - 2024</span>}
            iconStyle={{ background: "#019cf8", color: "#fff" }}
            icon={<MdSchool />}
          > 
            <div className="content-body">
              <h3 className="vertical-timeline-element-title">BS Software Engineering</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Shaheed Zulfiqar Ali Bhutto Institute of Science & Technology, PK
              </h4>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={theme === 'light' ? ({ background: 'white' }) : ({ background: '#595959' })}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date={<span className="custom-date">2018 - 2020</span>}
            iconStyle={{ background: "#019cf8", color: "#fff" }}
            icon={<MdSchool />}
          > 
            <div className="content-body">
              <h3 className="vertical-timeline-element-title">Intermediate</h3>
              <h4 className="vertical-timeline-element-subtitle">
                KIPS College G-9 Islamabad, PK
              </h4>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={theme === 'light' ? ({ background: 'white' }) : ({ background: '#595959' })}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date={<span className="custom-date">2016 - 2018</span>}
            iconStyle={{ background: "#019cf8", color: "#fff" }}
            icon={<MdSchool />}
          > 
            <div className="content-body">
              <h3 className="vertical-timeline-element-title">Matric</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Fazaia Education System Schools E-9 Islamabad, PK
              </h4>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;