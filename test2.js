import React from "react";
import "./Home.css";
import landing from "../../Images/landing.jpg";

const Home = () => {
  return (
    <>
      <div
        className="h-screen flex flex-col pt-20 md:pt-0 md:flex md:flex-row justify-center shadow-lg"
        name="home"
      >
        <div className="order-2 md:order-1 md:w-[50%]">
          <div className="flex justify-center items-center h-full md:ps-10 lg:ps-20">
            <div className="flex">
              <div className="px-8 md:px-8 lg:px-20">
                <div className="">
                  <h2 className="text-3xl md:text-2xl lg:text-5xl font-head tracking-wide">
                    Svadhisthana Green Energies Pvt. Ltd.
                  </h2>
                  <h2 className="font-bold text-lg md:text-lg lg:text-2xl font-body tracking-[0.35em] text-green-500 uppercase py-4 drop-shadow-[0px_1.2px_2px_rgba(0,0,0,0.8)]">
                    Take a ride on the Green Side
                  </h2>
                </div>
                <div className="pt-16 flex justify-center">
              <Link
                type="button"
                className="bg-green-500 font-semibold text-white p-4 px-6 rounded-md font-body cursor-pointer"
                to="about"
                smooth={true}
                offset={-150}
              >
                KNOW MORE
              </Link>
            </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 md:w-[50%] md:pe-16">
          <div className="landingDiv">
            <img
              src={landing}
              alt=""
              className="md:h-screen object-contain scale-75"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
