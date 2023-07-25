import React from "react";
import "./Plan.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faPenNib,
  faRocket,
  faStore,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

const Plan = () => {
  return (
    <>
      <div className="bg-greenMain font-body plan-main" name="plan">
        <div className="flex justify-center items-center">
          <div className="text-center py-6 lg:py-10">
            <p className="font-body tracking-wider font-semibold text-green-600 py-2">
              OUR PLANS
            </p>
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-head tracking-wider">
              Plan For Product Launch
            </h2>
          </div>
        </div>
        <VerticalTimeline lineColor="white">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            contentStyle={{ borderBottomColor: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#5A6F7F", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faWrench} />}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-xl">
              PLANNING
            </h3>
            <p>
              Survey of possible technologies & innovations, Designing products
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            contentStyle={{ borderBottomColor: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#5A6F7F", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faStore} />}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-xl">
              MARKETING
            </h3>
            <p>Disseminate standardized metrics</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            contentStyle={{ borderBottomColor: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#5A6F7F", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faPenNib} />}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-xl">
              DESIGN
            </h3>
            <p>
              Coordinate with businesses for our requirement and set the model
              for manufacturing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            contentStyle={{ borderBottomColor: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#5A6F7F", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBullseye} />}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-xl">
              STRATEGY
            </h3>
            <p>Foster holistically superior methodologies</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            contentStyle={{ borderBottomColor: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#5A6F7F", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faRocket} />}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-xl">
              LAUNCH
            </h3>
            <p>Deploy strategic networks with compelling e-business needs</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Plan;
