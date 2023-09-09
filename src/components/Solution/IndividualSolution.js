import React from "react";

const IndividualSolution = ({ title, id }) => {
  return (
    <>
      <div className="text-center rounded scale-90 hover:scale-100 md:scale-75 md:hover:scale-90 transition cursor-pointer opacity-90 hover:opacity-100">
        <div className="">
          <div className="">
            <img
              src={require(`../../Images/sol${id}.jpg`)}
              alt=""
              className="rounded object-contain"
            />
          </div>
          <div className="">
            <h2 className="font-bold text-base lg:text-xl py-1 text-center font-body">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualSolution;
