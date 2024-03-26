import React from "react";
import "./Process.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faLightbulb,
  faPiggyBank,
  faSolarPanel,
} from "@fortawesome/free-solid-svg-icons";
import solar from "../../Images/solar2.jpg";

const Process = () => {
  return (
    <>
      <div
        className="px-8 md:px-8 lg:px-10 py-16 process-main"
        style={{
          backgroundImage: `url(${solar})`,
        }}
        name="process"
      >
        <div className="text-center py-8 md:mb-8">
          <p
            className="font-body tracking-wider font-semibold text-green-400 pb-4 uppercase"
            style={{ textShadow: `0 3px 6px rgba(0, 0, 0, 0.19)` }}
          >
            we have got it all covered!
          </p>
          <h2
            className="text-3xl md:text-3xl lg:text-5xl font-head tracking-wider uppercase text-white"
            style={{ textShadow: `0 3px 6px rgba(0, 0, 0, 0.19)` }}
          >
            Our installation process
          </h2>
        </div>

        <VerticalTimeline lineColor="white" className="opacity-90">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderBottomColor: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#77BF58", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faLaptop} />}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-2xl font-head tracking-wider">
              Free Quote
            </h3>
            <p className="font-body">
              Contact US for your free quote from Swadhisthana Green
              Technologies.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderBottomColor: "black",
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#77BF58", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faLightbulb} />}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-xl font-head tracking-wider">
              Connect With An Expert
            </h3>
            <p className="font-body">
              Connect with a solar expert to go over your property and energy
              needs. Receive a custom solar energy solution.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderBottomColor: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#77BF58", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faSolarPanel} />}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-xl font-head tracking-wider">
              Choose Your System
            </h3>
            <p className="font-body">
              Decide on your system and let IGT do the rest. Your turnkey solar
              project begins!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderBottomColor: "black" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "#77BF58", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faPiggyBank} />}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-xl font-head tracking-wider">
              Savings Begin!
            </h3>
            <p className="font-body">
              Installation complete and your savings begin. Your home is now
              powered by the sun!
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Process;
