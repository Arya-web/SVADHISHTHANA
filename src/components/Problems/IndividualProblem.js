import React from "react";

const IndividualProblem = ({ title, body, id }) => {
  return (
    <>
      <div className="item scale-90">
        <div className="">
          <div className="flex justify-center items-center">
            <img
              src={require(`../../Images/prob${id}.jpg`)}
              alt="serviceImg"
              className="h-[200px] object-contain"
            />
          </div>
          <div className="pt-4 px-2">
            <h2 className="font-bold text-xl md:text-2xl py-1 text-center font-head tracking-wider">
              {title}
            </h2>
            <p className="text-justify mb-4 font-body">{body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualProblem;
