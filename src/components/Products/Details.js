import React from "react";
import sg1 from "../../Images/sg1.png";
import sg2 from "../../Images/sg2.png";
import og2 from "../../Images/og2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCheck,
  faLayerGroup,
  faLightbulb,
  faMoneyBill,
  faSolarPanel,
} from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  return (
    <>
      <div className="px-4 md:px-8 lg:pt-16 py-8 bg-white">
        <div className=" text-center">
          <p className="font-body tracking-wider font-semibold text-green-600 pb-4 uppercase">
            The Future is Here!
          </p>
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-head tracking-wider uppercase">
            solar gustix
          </h2>
        </div>
        <div className="py-4 md:py-16">
          <div className="md:flex justify-around">
            <div className="md:w-[40%] py-4 px-4">
              <ul className="font-body text-md md:text-2xl flex flex-col gap-2 md:gap-4">
                <li data-aos="fade-right" data-aos-duration="600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="scale-100 text-green-600 me-6"
                  />
                  Patented Design with Perpetual Motion
                </li>
                <li data-aos="fade-right" data-aos-duration="600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="scale-100 text-green-600 me-6"
                  />
                  Enhanced Energy Capture
                </li>
                <li data-aos="fade-right" data-aos-duration="600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="scale-100 text-green-600 me-6"
                  />
                  Stable Energy Generation
                </li>
                <li data-aos="fade-right" data-aos-duration="600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="scale-100 text-green-600 me-6"
                  />
                  Grid Stabilization
                </li>
                <li data-aos="fade-right" data-aos-duration="600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="scale-100 text-green-600 me-6"
                  />
                  Energy Storage Flexibility
                </li>
                <li data-aos="fade-right" data-aos-duration="600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="scale-100 text-green-600 me-6"
                  />
                  HYBRID ENERGY
                </li>
              </ul>
            </div>
            <div className="md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src={sg1} alt="" />
              <img src={sg2} alt="" />
            </div>
          </div>
          <div className="text-body md:text-xl py-4">
            <div className="flex flex-col md:flex-row justify-around px-8 pt-8 gap-4 text-body text-base text-white">
              <div
                className="w-full text-center rounded-lg bg-[#ac92eb] py-4 px-2 flex flex-col justify-center"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="600"
              >
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  className="scale-100 h-20"
                />
                <h2 className="mt-4 text-xl uppercase tracking-wider">
                  <strong>Area Required</strong>
                </h2>
                <p>40 sq ft approximately</p>
              </div>
              <div
                className="w-full text-center rounded-lg bg-[#4fc1e8] py-4 px-2 flex flex-col justify-center"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
              >
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="scale-100 h-20"
                />
                <h2 className="mt-4 text-xl uppercase tracking-wider">
                  <strong>Energy Generation</strong>
                </h2>
                <p>24 hours per day i.e. 27 units per day</p>
              </div>
              <div
                className="w-full text-center rounded-lg bg-[#a0d568] py-4 px-2 flex flex-col justify-center"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
              >
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  className="scale-100 h-20"
                />
                <h2 className="mt-4 text-xl uppercase tracking-wider">
                  <strong>Setup Cost</strong>
                </h2>
                <p>₹ 2,00,000</p>
              </div>
              <div
                className="w-full text-center rounded-lg bg-[#ffce54] py-4 px-2 flex flex-col justify-center"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
              >
                <FontAwesomeIcon
                  icon={faSolarPanel}
                  className="scale-100 h-20"
                />
                <h2 className="mt-4 text-xl uppercase tracking-wider">
                  <strong>Efficiency</strong>
                </h2>
                <p>35% more than solar energy harvester system</p>
              </div>
              <div
                className="w-full text-center rounded-lg bg-[#ed5564] py-4 px-2 flex flex-col justify-center"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="scale-100 h-20"
                />
                <h2 className="mt-4 text-xl uppercase tracking-wider">
                  <strong>Payback Period</strong>
                </h2>
                <p>3 to 4 Years 1KW Wind, 400W Solar</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <p className="font-body tracking-wider font-semibold text-green-600 pb-4 uppercase">
            The Future is Here!
          </p>
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-head tracking-wider uppercase">
            omni gustix
          </h2>
        </div>
        <div className="py-4 md:pt-16">
          <div className="md:flex justify-around">
            <div className="md:w-[65%] pt-4 px-4">
              <ul className="font-body text-md md:text-2xl flex flex-col gap-2 md:gap-4">
                <li data-aos="fade-right" data-aos-duration="600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="scale-100 text-green-600 me-6"
                  />
                  Omnidirectional Wind Turbine
                </li>
                <li data-aos="fade-right" data-aos-duration="600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="scale-100 text-green-600 me-6"
                  />
                  Harnessing the principles of Bernoulli's, Laplacian, and
                  Reynolds Theorem
                </li>
                <li data-aos="fade-right" data-aos-duration="600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="scale-100 text-green-600 me-6"
                  />
                  With three blades carefully engineered for systematic
                  performance
                </li>
                <li data-aos="fade-right" data-aos-duration="600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="scale-100 text-green-600 me-6"
                  />
                  Outperforms traditional wind turbines threefold
                </li>
                <li data-aos="fade-right" data-aos-duration="600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="scale-100 text-green-600 me-6"
                  />
                  Unique ability to create a vacuum as air flows out
                </li>
                <li data-aos="fade-right" data-aos-duration="600">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="scale-100 text-green-600 me-6"
                  />
                  HYBRID ENERGY
                </li>
              </ul>
            </div>
            <div className="md:w-full grid grid-cols-1 md:grid-cols-1 gap-4 pt-8 md:py-0">
              <img src={og2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
