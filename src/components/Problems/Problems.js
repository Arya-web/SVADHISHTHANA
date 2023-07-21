import React from "react";
import IndividualProblem from "./IndividualProblem";
import ProbValues from "./ProbValues";

const Problems = () => {
  return (
    <>
      <div className="py-10 shadow-lg" name="problems">
        <div className="flex justify-center">
          <div>
            <p className="font-body text-green-800 font-semibold tracking-wider text-center py-4">
              PROBLEMS
            </p>
            <h2 className="text-3xl md:text-5xl font-head text-center">
              Problems with existing Structure
            </h2>
          </div>
        </div>
        <div className="pt-12 md:pt-4 lg:pt-12 px-4 lg:px-16">
          <div className="md:grid md:grid-cols-3">
            {
              ProbValues.map((ProbValue) => 
                <IndividualProblem key={ProbValue.id} id={ProbValue.id} title={ProbValue.title} body={ProbValue.body} />
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Problems;
