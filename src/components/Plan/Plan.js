import React from "react";
import "./Plan.css";
import launching from "../../Images/launching.png"

const Plan = () => {
  return (
    <>
      <div className="bg-greenMain font-body plan-main py-8" name="plan">
        <div className="flex justify-center items-center">
          <div className="text-center lg:py-4">
            <p className="font-body tracking-wider font-semibold text-green-600 py-2">
              OUR PLANS
            </p>
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-head tracking-wider">
              Plan For Product Launch
            </h2>
          </div>
        </div>
        <div className="text-center">
          <img src={launching} alt="" className="object-contain m-auto scale-[60%]" />
        </div>
        
      </div>
    </>
  );
};

export default Plan;
