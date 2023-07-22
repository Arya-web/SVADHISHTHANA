import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const IndividualMembers = ({ id, name, position }) => {
  return (
    <>
      <div className="group text-center rounded">
        <div className="group-hover:-translate-y-4">
          <div className=" flex justify-center text-center relative overflow-hidden rounded-md ">
            <img
              src={require(`../../Images/team${id}.jpg`)}
              alt=""
              className="rounded h-[18rem] object-cover w-full ease-in-out duration-500 group-hover:scale-125"
            />
            <div className="absolute bg-white w-full h-full opacity-10 transition-opacity duration-500 group-hover:opacity-50" />
          </div>
          <div className="text-center font-body cursor-default">
            <h2 className="text-base pt-2">{name}</h2>
            <p className="font-semibold text-xs md:text-sm text-green-600 uppercase">
              {position}
            </p>
          </div>
          <div className="invisible group-hover:visible">
            <div className="flex justify-center gap-6 py-4">
              <FontAwesomeIcon
                icon={faFacebook}
                className="scale-150 text-blue-800 hover:opacity-50 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="scale-150 text-blue-600 hover:opacity-50 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="scale-150 insta hover:opacity-50 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualMembers;
