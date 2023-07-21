import React from "react";

const IndividualMembers = ({ id, name, position }) => {
  return (
    <>
      <div className="text-center rounded transition cursor-pointer">
        <div className="">
          <div className="">
            <img
              src={require(`../../Images/team${id}.jpg`)}
              alt=""
              className="rounded h-[18rem] object-cover w-full opacity-90"
            />
          </div>
          <div className="text-center font-body">
            <h2 className="text-base pt-2">{name}</h2>
            <p className="font-semibold text-xs md:text-sm text-green-600 uppercase">
              {position}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualMembers;
