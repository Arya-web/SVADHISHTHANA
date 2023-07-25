import React from "react";
import IndividualSolution from "./IndividualSolution";

const Solution = () => {
  return (
    <>
      <div className="py-8" name="solution">
        <div className="flex justify-center items-center">
          <div className="pt-4 text-center">
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-head tracking-wider">
              Solution
            </h2>
            <p className="font-body tracking-wider font-semibold text-green-600 py-2">
              OUR SOLUTIONS PROVIDE THE FOLLOWING PROVISIONS
            </p>
          </div>
        </div>
        <div className="px-4 md:px-10 lg:px-16 grid grid-cols-3 md:grid-cols-6">
          <IndividualSolution title={"Awareness"} id={1} />
          <IndividualSolution title={"Accessible"} id={2} />
          <IndividualSolution title={"Affordable"} id={3} />
          <IndividualSolution
            title={"Enhancements in existing technologies"}
            id={4}
          />
          <IndividualSolution title={"Improved Infrastructure"} id={5} />
          <IndividualSolution
            title={"Innovative sustainable technology"}
            id={6}
          />
        </div>
      </div>
    </>
  );
};

export default Solution;
