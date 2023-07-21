import React from 'react'
import './Mission.css';
import mission from "../../Images/mission.jpg";

const Mission = () => {
  return (
    <>
      <div
        className="flex flex-col pt-10 md:flex md:flex-row md:px-10 lg:px-20 bg-[#E8FBF5] py-16 mission-main"
        name="mission"
      >
        <div className="order-2 md:order-1 md:w-[60%]">
          <div className="flex justify-center items-center h-full">
            <div className="flex">
              <div className="">
                <div className="text-center">
                  <p className="font-body tracking-wider font-semibold text-green-800 py-2">
                    MISSION
                  </p>
                  <h2 className="text-3xl md:text-3xl lg:text-5xl font-head tracking-wider">
                    Our Mission
                  </h2>
                </div>
                <div className="pt-4 lg:pt-6">
                  <p className="text-md md:text-sm lg:text-lg text-justify font-body px-6 md:px-0">
                    As a renewable energy integrator & provider, we lead the
                    quest to change the world as the trusted sustainability
                    partner creating valued non-conventional energy efficient
                    solutions. We ought to create higher quality and energy
                    efficient products for domestic and commercial purpose. We
                    also provide green energy options, such as energy storage
                    devices, wind turbines, and solar panels, all of which can
                    be used with or without our appliances. We want to promote
                    sustainable living by offering eco-friendly alternatives,
                    and affordable with easy access to everyone, for the
                    traditional appliances and energy sources and contribute
                    towards a cleaner and greener future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 md:w-[40%]">
          <div className="landingDiv h-full w-full flex justify-center items-center">
            <img src={mission} alt="" className="object-contain scale-90" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission