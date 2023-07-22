import React from "react";
import "./Team.css";
import MemberValues from "./MemberValues.js";
import IndividualMembers from "./IndividualMembers";

const Team = () => {
  return (
    <>
      <div className="pt-8">
        <div className="flex justify-center items-center">
          <div className="pt-4 text-center">
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-head tracking-wider">
              Our Team
            </h2>
            <p className="font-body tracking-wider font-semibold text-green-600 py-2 pt-2 lg:py-4 uppercase text-sm md:text-base">
              Driving Innovation, Preserving the Planet
            </p>
          </div>
        </div>
        <div className="px-6 md:px-16 lg:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12 py-4 lg:py-8 pb-4">
          {MemberValues.map((Member) => (
            <IndividualMembers
              key={Member.id}
              id={Member.id}
              name={Member.name}
              position={Member.position}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
