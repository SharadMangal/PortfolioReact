import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Metric</h3>
          <h4 className="vertical-timeline-element-subtitle">
            CBSE
          </h4>

          <p> Maheshwari Public School, Chhipa Badod</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack JavaScript Development
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            HTML, CSS, NodeJS, ExpressJS, ReactJS...
          </h4>

          <p>Youtube, Udemy &amp; other online resources </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intermediate - ICS (Physics)
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Higher Secondary School Certificate
          </h4>

          <p>Maheshwari Public School </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            HTML, CSS &amp; JavaScript Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Freelancing</h4>
          <p>Created simple websites</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
